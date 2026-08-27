#!/usr/bin/env python3
"""Pull the public monthly-meetings Google Sheet into meetings.js."""
from __future__ import annotations

import csv
import io
import json
import re
import sys
import urllib.request
from pathlib import Path

SHEET_ID = "1D9wZE6Ij55Y1QLb6PEHZkXFNjb336eBNddhzcIu2Ly0"
ROOT = Path(__file__).resolve().parent
MEETINGS_JS = ROOT / "meetings.js"
UA = "Mozilla/5.0 (compatible; clbps-meetings-sync/1.0)"


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read()


def month_sort_key(name: str) -> int:
    m = re.search(r"(\d{1,2})月", name)
    if not m:
        return 99
    n = int(m.group(1))
    return n if n >= 8 else n + 12


def discover_sheets() -> list[dict[str, str]]:
    html = fetch(f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit?usp=sharing").decode(
        "utf-8", "replace"
    )
    found: dict[str, str] = {}
    for gid, name in re.findall(
        r'\\"(\d+)\\",\[\{\\"1\\":\[\[0,0,\\"([^"]+)\\"',
        html,
    ):
        found[name] = gid
    for name in re.findall(r'docs-sheet-tab-caption">([^<]+)', html):
        found.setdefault(name, None)  # type: ignore[arg-type]
    sheets = [{"name": name, "gid": gid} for name, gid in found.items() if gid is not None]
    sheets.sort(key=lambda s: month_sort_key(s["name"]))
    if not sheets:
        raise SystemExit("no worksheet gids found — is the sheet still public?")
    return sheets


def parse_date(s: str) -> str:
    m = re.search(r"(\d{1,2})月(\d{1,2})日", s or "")
    if not m:
        return ""
    month, day = int(m.group(1)), int(m.group(2))
    year = 2026 if month >= 8 else 2027
    return f"{year:04d}-{month:02d}-{day:02d}"


def norm_space(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "").replace("\n", " ").replace("\r", " ")).strip()


def norm_time(s: str) -> str:
    return re.sub(r"\s*[-–—]\s*", "–", norm_space(s))


def rows_to_items(rows: list[list[str]]) -> list[dict[str, str]]:
    items = []
    for row in rows:
        row = (row + [""] * 5)[:5]
        a, b, c, d, e = [norm_space(x) for x in row]
        if a == "日期" and "會議" in c:
            continue
        date = parse_date(a)
        if not date or not c:
            continue
        items.append(
            {
                "date": date,
                "time": norm_time(b),
                "title": c,
                "who": d.replace("恆", "恒"),
                "place": e,
            }
        )
    return items


def fetch_csv_items(gid: str) -> list[dict[str, str]]:
    raw = fetch(
        f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid={gid}"
    )
    text = raw.decode("utf-8-sig")
    rows = list(csv.reader(io.StringIO(text)))
    return rows_to_items(rows)


def dedupe(items: list[dict[str, str]]) -> list[dict[str, str]]:
    merged: dict[tuple[str, str], dict[str, str]] = {}
    for it in items:
        merged[(it["date"], it["time"], it["title"])] = it
    out = list(merged.values())
    out.sort(key=lambda x: (x["date"], x["time"], x["title"]))
    return out


def replace_js_array(text: str, key: str, literal: str) -> str:
    m = re.search(rf"{re.escape(key)}:\s*\[", text)
    if not m:
        raise SystemExit(f"meetings.js missing {key} array")
    start = m.end() - 1
    depth = 0
    in_str = False
    escape = False
    i = start
    while i < len(text):
        ch = text[i]
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == '"':
                in_str = False
        else:
            if ch == '"':
                in_str = True
            elif ch == "[":
                depth += 1
            elif ch == "]":
                depth -= 1
                if depth == 0:
                    return text[:start] + literal + text[i + 1 :]
        i += 1
    raise SystemExit(f"unclosed {key} array in meetings.js")


def format_sheets(sheets: list[dict[str, str]]) -> str:
    inner = ",\n".join(
        f'    {{ name: {json.dumps(s["name"], ensure_ascii=False)}, gid: {json.dumps(s["gid"])} }}'
        for s in sheets
    )
    return "[\n" + inner + "\n  ]"


def format_items(items: list[dict[str, str]]) -> str:
    inner = ",\n".join(
        "  " + json.dumps(it, ensure_ascii=False, separators=(", ", ": ")) for it in items
    )
    return "[\n" + inner + "\n  ]"


def main() -> int:
    sheets = discover_sheets()
    collected: list[dict[str, str]] = []
    for sh in sheets:
        part = fetch_csv_items(sh["gid"])
        print(f"{sh['name']} gid={sh['gid']} rows={len(part)}", file=sys.stderr)
        collected.extend(part)
    items = dedupe(collected)
    print(f"merged {len(items)} meetings from {len(sheets)} tabs", file=sys.stderr)
    if not items:
        raise SystemExit("parsed 0 meetings")

    text = MEETINGS_JS.read_text(encoding="utf-8")
    text = replace_js_array(text, "sheets", format_sheets(sheets))
    text = replace_js_array(text, "items", format_items(items))
    old = MEETINGS_JS.read_text(encoding="utf-8")
    if text == old:
        print("meetings.js already up to date", file=sys.stderr)
        return 0
    MEETINGS_JS.write_text(text, encoding="utf-8")
    print("updated meetings.js", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
