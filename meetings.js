/* 會議／額外行事。來源：每月會議日期 Google 試算表；開啟頁面時會再讀一次。 */
const MEETINGS = {
  source: "local",
  sheetId: "1D9wZE6Ij55Y1QLb6PEHZkXFNjb336eBNddhzcIu2Ly0",
  sheets: [
    { name: "8月份", gid: "0" },
    { name: "9月份", gid: "1748430438" }
  ],
  items: [
  {"date": "2026-08-20", "time": "09:00–12:30", "title": "第一次校務會議", "who": "全體老師", "place": "G02"},
  {"date": "2026-08-20", "time": "14:45–15:00", "title": "小一適應活動會議", "who": "*蔚、敏、佩、梅、趙、瑤、軒、華、倩、琪、 慧、碧、幗、儀、茵、紅、邵、Seaman", "place": "G02"},
  {"date": "2026-08-20", "time": "15:00–16:00", "title": "MI課程會議", "who": "*偉、星期二下午所有任教老師", "place": "113B"},
  {"date": "2026-08-20", "time": "16:00–17:00", "title": "野孩子課程會議", "who": "*偉、星期三下午所有任教老師", "place": "113B"},
  {"date": "2026-08-21", "time": "09:00–11:00", "title": "課程發展組", "who": "*談、所有科主席", "place": "113B"},
  {"date": "2026-08-21", "time": "11:00–12:00", "title": "生命教育課會議", "who": "*仁、 生命教育課老師", "place": "113A"},
  {"date": "2026-08-21", "time": "11:00–12:00", "title": "體育科會議", "who": "*佩、談、 體育科老師", "place": "113B"},
  {"date": "2026-08-21", "time": "13:30–14:30", "title": "資訊科技科會議", "who": "*符、談、 資訊科技科老師", "place": "113B"},
  {"date": "2026-08-21", "time": "14:30–15:30", "title": "音樂科會議", "who": "*邵、談、音樂科老師", "place": "113B"},
  {"date": "2026-08-21", "time": "15:30–16:30", "title": "視覺藝術科會議", "who": "*羅、談、視覺藝術科老師", "place": "113B"},
  {"date": "2026-08-21", "time": "16:30–17:30", "title": "普通話科會議", "who": "*何、談、 普通話科老師", "place": "113B"},
  {"date": "2026-08-22", "time": "上午", "title": "小一家長會", "who": "另見備忘", "place": ""},
  {"date": "2026-08-24", "time": "09:00–10:00", "title": "評估組", "who": "*雯、談、軒", "place": "113A"},
  {"date": "2026-08-24", "time": "11:45–12:45", "title": "數字教育組", "who": "*恒、茵、智", "place": "113A"},
  {"date": "2026-08-24", "time": "14:00–15:30", "title": "英文科會議", "who": "*琪、談、 全體英文科老師", "place": "113B"},
  {"date": "2026-08-24", "time": "15:45–16:45", "title": "CREATE Learning課程會議", "who": "*談、星期一下午所有任教老師", "place": "113B"},
  {"date": "2026-08-24", "time": "上午", "title": "小一適應課程", "who": "另見備忘", "place": ""},
  {"date": "2026-08-25", "time": "09:30–11:00", "title": "康樂幼稚園升小一適應課", "who": "*儀、茵、梅", "place": ""},
  {"date": "2026-08-25", "time": "11:45–12:45", "title": "學生訓育及輔導組", "who": "*蔚、呂、王、 尹、貝", "place": "113A"},
  {"date": "2026-08-25", "time": "14:00–15:30", "title": "中文科會議", "who": "*紅、談、 全體中文科老師", "place": "113B"},
  {"date": "2026-08-25", "time": "15:45–16:45", "title": "閱讀組", "who": "*瑩、談、可", "place": "113A"},
  {"date": "2026-08-25", "time": "上午", "title": "小一適應課程", "who": "另見備忘", "place": ""},
  {"date": "2026-08-26", "time": "11:45–12:45", "title": "價值觀教育組", "who": "*仁、呂、杰、李、奕", "place": "113A"},
  {"date": "2026-08-26", "time": "14:00–15:30", "title": "數學科會議", "who": "*穎、談、 全體數學科老師", "place": "113B"},
  {"date": "2026-08-26", "time": "15:45–16:45", "title": "全方位活動組", "who": "*偉、佩、趙、邵", "place": "113A"},
  {"date": "2026-08-26", "time": "上午", "title": "小一適應課程", "who": "另見備忘", "place": ""},
  {"date": "2026-08-27", "time": "11:45–12:45", "title": "學生支援組", "who": "*穩、呂、華、瑤、 倩、貝", "place": "113A"},
  {"date": "2026-08-27", "time": "14:00–15:15", "title": "常識科會議", "who": "*燕、談、 全體常識科老師", "place": "113B"},
  {"date": "2026-08-27", "time": "15:15–16:15", "title": "科學科會議", "who": "*燕、談、 全體科學科老師", "place": "113B"},
  {"date": "2026-08-27", "time": "16:15–17:15", "title": "人文科會議", "who": "*杰、談、 全體人文科老師", "place": "113B"},
  {"date": "2026-08-27", "time": "上午", "title": "小一適應課程", "who": "另見備忘", "place": ""},
  {"date": "2026-08-28", "time": "10:00–11:00", "title": "「新家園」會議", "who": "*呂、校長、恒", "place": "503"},
  {"date": "2026-08-28", "time": "11:30–13:00", "title": "第二次校務會議", "who": "全體老師", "place": "G02"},
  {"date": "2026-08-28", "time": "14:30–15:30", "title": "學校形象組", "who": "*穎、清、儀、 俊、羅、瑤、 王、茵、梅", "place": "113B"},
  {"date": "2026-08-28", "time": "15:30", "title": "校隊及拔尖班會議", "who": "*偉、校隊及拔尖班負責老師", "place": "G02"},
  {"date": "2026-08-28", "time": "上午", "title": "小一適應課程", "who": "另見備忘", "place": ""},
  {"date": "2026-08-29", "time": "上午", "title": "幼稚園活動", "who": "待定", "place": ""},
  {"date": "2026-09-01", "time": "14:30–16:30", "title": "小會", "who": "全體老師", "place": "113B"},
  {"date": "2026-09-01", "time": "16:30–17:00", "title": "周五下午安排", "who": "*佩、全體老師", "place": "113B"},
  {"date": "2026-09-01", "time": "17:00–17:30", "title": "周會/戶外學習會議", "who": "*蔚、星期四下午任教老師", "place": "113B"},
  {"date": "2026-09-01", "time": "17:30–18:00", "title": "小學教育博覽會議", "who": "*穎、儀及相關當值老師", "place": "113B"},
  {"date": "2026-09-01", "time": "周五下午安排後", "title": "周會/戶外學習 老師會議", "who": "*蔚、星期四下午任教老師", "place": "113B"},
  {"date": "2026-09-01", "time": "周會/戶外學習 老師會議後", "title": "教育博覽會議", "who": "*穎", "place": "113B"},
  {"date": "2026-09-02", "time": "14:30–16:00", "title": "Vibe Coding在教學上的應用工作坊", "who": "全體老師", "place": "G02"},
  {"date": "2026-09-03", "time": "14:30–16:00", "title": "Vibe Coding在教學上的應用工作坊", "who": "全體老師", "place": "G02"},
  {"date": "2026-09-03", "time": "15:00–15:30", "title": "全校園健康計劃會議", "who": "*呂、校長、幗、蔚", "place": "102"},
  {"date": "2026-09-04", "time": "11:30–12:15", "title": "第一次家教會會議", "who": "*慧、校長、清、呂、茵、偉、可、貝、潔、 家教會委員", "place": "G02"},
  {"date": "2026-09-04", "time": "14:30–16:00", "title": "小會", "who": "全體老師", "place": "G02"},
  {"date": "2026-09-04", "time": "16:00–17:00", "title": "開放日會議", "who": "全體老師", "place": "G02"},
  {"date": "2026-09-04", "time": "19:00–19:45", "title": "三、四年級下午游泳課及家長會", "who": "佩、偉、智、穎", "place": "Zoom"},
  {"date": "2026-09-05", "time": "0830–17:00", "title": "小學教育博覽", "who": "另見備忘", "place": "新都城"},
  {"date": "2026-09-05", "time": "10:00–11:00", "title": "未來小學幼小課程 2", "who": "另見備忘", "place": "G02"},
  {"date": "2026-09-06", "time": "0830–17:00", "title": "小學教育博覽", "who": "另見備忘", "place": "新都城"},
  {"date": "2026-09-07", "time": "16:00–17:00", "title": "小六升中會議", "who": "*敏、俊、琪、儀、穎", "place": "113A"},
  {"date": "2026-09-08", "time": "16:00–18:00", "title": "行政會", "who": "行政組老師", "place": "113A"},
  {"date": "2026-09-09", "time": "16:00–17:00", "title": "學校維修/工程會議", "who": "*俊、幗、Stephanie、Sunny", "place": "113A"},
  {"date": "2026-09-09", "time": "16:00–17:00", "title": "資優組會議", "who": "*敏、談、碧、瑩及正、副科主席", "place": "113B"},
  {"date": "2026-09-10", "time": "16:00–17:00", "title": "正能量會議", "who": "*尹、蔚、琪、正能量班老師", "place": "113B"},
  {"date": "2026-09-11", "time": "15:15–16:30", "title": "外評會議", "who": "全體老師", "place": "G02"},
  {"date": "2026-09-11", "time": "16:30–17:30", "title": "小會", "who": "全體老師", "place": "G02"},
  {"date": "2026-09-11", "time": "18:00–19:30", "title": "小五家長會", "who": "*敏、清、談、穎、佩、紅、邵、茵、筠", "place": "G02"},
  {"date": "2026-09-12", "time": "10:00–11:00", "title": "未來小學幼小課程 3", "who": "另見備忘", "place": "G02"},
  {"date": "2026-09-13", "time": "12:30–18:00", "title": "開放日", "who": "另見備忘", "place": ""},
  {"date": "2026-09-15", "time": "16:00–18:00", "title": "行政會", "who": "行政組老師", "place": "113A"},
  {"date": "2026-09-18", "time": "17:30–20:00", "title": "中秋迎月晚會", "who": "另見備忘", "place": ""},
  {"date": "2026-09-19", "time": "10:00–11:00", "title": "未來小學幼小課程 4", "who": "另見備忘", "place": "G02"},
  {"date": "2026-09-22", "time": "16:00–18:00", "title": "行政會", "who": "行政組老師", "place": "113A"},
  {"date": "2026-09-25", "time": "13:30–14:30", "title": "小一茶聚", "who": "另見備忘", "place": ""},
  {"date": "2026-09-25", "time": "15:15–16:30", "title": "小會", "who": "全體老師", "place": "G02"},
  {"date": "2026-09-29", "time": "16:00–18:00", "title": "行政會", "who": "行政組老師", "place": "113A"}
  ]
};

const SUBJ_MAP = {
  "中文": "中", "英文": "英", "數學": "數", "常識": "常", "科學": "科",
  "人文": "人", "體育": "體", "音樂": "音", "視覺藝術": "視", "視藝": "視",
  "資訊科技": "資", "普通話": "普"
};
const WD_MAP = { "一": "1", "二": "2", "三": "3", "四": "4", "五": "5" };

function parseMeetingDate(s) {
  const m = String(s || "").match(/(\d{1,2})月(\d{1,2})日/);
  if (!m) return "";
  const month = Number(m[1]), day = Number(m[2]);
  const year = month >= 8 ? 2026 : 2027;
  const z = n => String(n).padStart(2, "0");
  return year + "-" + z(month) + "-" + z(day);
}
function normMeetingText(s) {
  return String(s || "").replace(/\s+/g, " ").trim();
}
function normMeetingTime(s) {
  return normMeetingText(s).replace(/\s*[-–—]\s*/g, "–");
}
function gvizCell(c) {
  if (!c) return "";
  const v = c.f != null ? c.f : c.v;
  if (v == null) return "";
  return normMeetingText(v);
}
function parseGvizTable(table) {
  const out = [];
  for (const row of table.rows || []) {
    const cells = (row.c || []).map(gvizCell);
    const date = parseMeetingDate(cells[0]);
    const title = cells[2] || "";
    if (!date || !title || cells[0] === "日期") continue;
    out.push({
      date,
      time: normMeetingTime(cells[1]),
      title,
      who: (cells[3] || "").replace(/恆/g, "恒"),
      place: cells[4] || ""
    });
  }
  return out;
}
function dedupeMeetings(list) {
  const map = new Map();
  for (const m of list) map.set(m.date + "\t" + m.title, m);
  return Array.from(map.values()).sort((a, b) =>
    a.date.localeCompare(b.date) || (a.time || "").localeCompare(b.time || "") || a.title.localeCompare(b.title)
  );
}
function teacherAfter(t) {
  return Object.values(t.pm || {}).map(p => p.after || "").join(" ");
}
function lessonStrings(t) {
  const vals = [];
  function walk(obj) {
    if (!obj) return;
    if (typeof obj === "string") vals.push(obj);
    else if (Array.isArray(obj)) obj.forEach(walk);
    else if (typeof obj === "object") Object.values(obj).forEach(walk);
  }
  walk(t.am);
  walk(t.pm);
  return vals;
}
function teachesSubject(t, ch) {
  return lessonStrings(t).some(s => {
    if (/中式|當值/.test(s)) return false;
    if (/\/\dF|操[一二]|持\/|籃\/|足\/|詢/.test(s) && !/[1-6][A-D]/.test(s)) return false;
    return s.includes(ch);
  });
}
function hasAfternoonClass(t, wd) {
  const pm = (t.pm || {})[String(wd)] || {};
  return (pm.eighth || []).some(s => s && s !== "另見備忘" && !/會議/.test(s));
}
function meetingAppliesTo(m, t) {
  if (!t) return true;
  const who = normMeetingText(m.who).replace(/恆/g, "恒").replace(/\s+/g, "");
  if (!who || who === "另見備忘" || who === "待定") return true;
  if (who.includes("全體老師") && !who.includes("科老師")) return true;
  const codes = new Set((typeof TEACHERS !== "undefined" ? TEACHERS.teachers : []).map(x => x.code));
  const tokens = who.split(/[、，,\/及()（）*]+/).filter(Boolean);
  let named = false;
  for (const tok of tokens) {
    if (codes.has(tok)) {
      named = true;
      if (tok === t.code) return true;
    }
  }
  if (who.includes("行政組老師") && /行政/.test(teacherAfter(t))) return true;
  if (who.includes("正能量") && /正能量/.test(teacherAfter(t))) return true;
  if (who.includes("校隊") && /校隊/.test(teacherAfter(t))) return true;
  const wd = who.match(/星期([一二三四五])下午/);
  if (wd && hasAfternoonClass(t, WD_MAP[wd[1]])) return true;
  for (const [name, ch] of Object.entries(SUBJ_MAP)) {
    if (who.includes(name + "科老師") && teachesSubject(t, ch)) return true;
  }
  if (named) return false;
  if (/行政組老師|正能量|科老師|下午任教|科主席/.test(who)) return false;
  return true;
}

function loadMeetingsLive(done) {
  const sheets = MEETINGS.sheets || [];
  if (!MEETINGS.sheetId || !sheets.length) {
    if (done) done();
    return;
  }
  let left = sheets.length;
  const collected = [];
  const finish = () => {
    if (collected.length) {
      MEETINGS.items = dedupeMeetings(collected);
      MEETINGS.source = "sheet";
    }
    if (done) done();
  };
  sheets.forEach((sh, i) => {
    const fn = "_onMeetings" + i;
    window[fn] = function (resp) {
      try {
        if (resp && resp.status === "ok" && resp.table) {
          collected.push.apply(collected, parseGvizTable(resp.table));
        }
      } catch (e) {}
      left--;
      if (left === 0) finish();
    };
    const s = document.createElement("script");
    s.src = "https://docs.google.com/spreadsheets/d/" + MEETINGS.sheetId +
      "/gviz/tq?tqx=out:json;responseHandler:" + fn +
      "&gid=" + encodeURIComponent(sh.gid) + "&headers=1";
    s.onerror = function () { left--; if (left === 0) finish(); };
    document.head.appendChild(s);
  });
}
