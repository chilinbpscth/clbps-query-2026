/* 會議／額外行事。日後可由 Google Sheet 同步。
   欄位：date (YYYY-MM-DD，可空) | week (校曆週次，可空) | time | title | who
   有 date → 只掛嗰日；只有 week → 該週上課日都標示。 */
const MEETINGS = {
  source: "local",
  items: [
    // 例子（校曆已有校務會議，呢度示範點掛）：
    // { date: "2026-10-16", week: 7, time: "15:20", title: "校務會議(3)", who: "全體" }
  ]
};
