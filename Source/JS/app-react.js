(function () {
  "use strict";
  const e = React.createElement;
  const { useEffect, useMemo, useState } = React;

  const projects = [
    ["parquet-tool", "after", "TypeScript · C++ · Node.js", "不依賴既有 npm Parquet 套件，實作讀寫、追加、合併、驗證與多種格式轉換的資料工具。", "https://github.com/Lian0123/parquet-tool", true],
    ["scribeva-editor-react", "after", "React · Editor", "將文字編輯能力整合進 React 應用，探索元件化介面、狀態管理與編輯體驗。", "https://github.com/Lian0123/scribeva-editor-react", true],
    ["scribeva-editor", "after", "Editor Core · JavaScript", "文字編輯器核心專案，聚焦內容編輯、操作行為與可延伸的編輯基礎。", "https://github.com/Lian0123/scribeva-editor", true],
    ["expense-tracker-app", "after", "Application · Data", "以日常收支為情境的完整應用，整合資料輸入、整理與瀏覽流程。", "https://github.com/Lian0123/expense-tracker-app"],
    ["virtual-business-card-project", "after", "Web App · PWA", "建立與展示數位名片的網頁工具，兼顧多語內容、客製化與行動裝置使用。", "https://github.com/Lian0123/virtual-business-card-project"],
    ["camera-simulator", "after", "Simulation · Web", "以網頁重現相機操作概念，將攝影參數轉化為可操作的模擬體驗。", "https://github.com/Lian0123/camera-simulator"],
    ["auto-generator-package-diagram-uml", "after", "Automation · UML", "自動整理套件關係並產生 UML 圖，降低理解專案結構與維護文件的成本。", "https://github.com/Lian0123/auto-generator-package-diagram-uml"],
    ["jp-travel-talk-tool", "after", "Language · Utility", "面向日本旅遊情境的會話輔助工具，讓常用語句更容易查找與使用。", "https://github.com/Lian0123/jp-travel-talk-tool"],
    ["my-typescript-express-template", "after", "TypeScript · Express", "將常用後端結構整理成可重用模板，縮短 Node.js API 專案初始化流程。", "https://github.com/Lian0123/my-typescript-express-template"],
    ["HardwaveFuzzyProjectWebVersion", "university", "Web · Fuzzy Control", "專題的網頁版本，將模糊控制成果轉化為可由瀏覽器接觸的展示介面。", "https://github.com/Lian0123/HardwaveFuzzyProjectWebVersion", false, true],
    ["HardwaveFuzzyProject", "university", "Hardware · Fuzzy Control", "大學專題核心實作，結合硬體與模糊控制方法完成研究型作品。", "https://github.com/Lian0123/HardwaveFuzzyProject", false, true],
    ["twcall", "university", "Linux · Shell", "處理終端機 Big5 顯示情境的工具，回應台灣 Linux 使用者的在地需求。", "https://github.com/Lian0123/twcall"],
    ["TextArt", "university", "Text Processing", "以文字與視覺呈現為主題，探索字元輸出與圖像表現。", "https://github.com/Lian0123/TextArt"],
    ["UnknownClang", "university", "C · Compiler", "從 C 語言與編譯概念出發的實驗型專案，呈現對語言底層的探索。", "https://github.com/Lian0123/UnknownClang"],
    ["FMiCa-TW.sh", "university", "Linux · Bash", "為台灣使用者整理 Linux Mint Cinnamon 安裝與環境設定的自動化腳本。", "http://fmica-tw.sh"]
  ].map(x => ({ title:x[0], stage:x[1], tech:x[2], description:x[3], link:x[4], featured:!!x[5], thesis:!!x[6] }));

  const writings = [
    ["iOS SandBox Account 與 Apple Pay 的踩坑筆記", "after", "iOS · Apple Pay", "整理 Sandbox 帳號、Apple Pay 測試流程與 iCloud error 34608 的實務排查經驗。", "https://medium.com/@lian000123/ios-sandbox-account-%E8%88%87-apple-pay%E7%9A%84%E8%B8%A9%E5%9D%91%E7%AD%86%E8%A8%98-%E5%90%AB-icloud-error-34608%E5%95%8F%E9%A1%8C-f7de82aa3a40?postPublishedType=initial"],
    ["Vibe Coding 開發導入 AI 問題筆記（一）— 為什麼 AI 會偷懶", "after", "AI · Engineering", "從開發協作角度分析 AI 產出縮水、跳步或逃避複雜工作的原因。", "https://medium.com/@lian000123/vibe-coding-%E9%96%8B%E7%99%BC%E5%B0%8E%E5%85%A5ai%E5%95%8F%E9%A1%8C%E7%AD%86%E8%A8%98-%E4%B8%80-%E7%82%BA%E4%BB%80%E9%BA%BCai%E6%9C%83%E5%81%B7%E6%87%B6-934a70def12f"],
    ["Vibe Coding 開發導入 AI 問題筆記（零）— 為什麼要寫這篇文章", "after", "AI · Engineering", "說明導入 AI 開發後值得記錄的落差、問題意識與系列文章脈絡。", "https://medium.com/@lian000123/vibe-coding-%E9%96%8B%E7%99%BC%E5%B0%8E%E5%85%A5ai%E5%95%8F%E9%A1%8C%E7%AD%86%E8%A8%98-%E9%9B%B6-%E7%82%BA%E4%BB%80%E9%BA%BC%E8%A6%81%E5%AF%AB%E9%80%99%E7%AF%87%E6%96%87%E7%AB%A0-1b48d516f61d"],
    ["基於替換密碼的音訊轉置 BMP 影像欺騙偽造設計與實作", "university", "DSP · Security", "結合古典替換密碼、音訊與 BMP 影像轉置的設計研究。", "https://www.slideshare.net/slideshow/imageaudioplayer-1072-dsp-148791863/148791863"],
    ["FML Tool 理論說明", "university", "Fuzzy Logic", "整理模糊邏輯工具的理論背景與實作概念。", "https://www.slideshare.net/slideshow/fml-tool/141286121"],
    ["Linux 安裝篇 ArchLabs 2019.01.20 — Part 3", "university", "Linux · ArchLabs", "ArchLabs 安裝系列第三部分。", "https://www.slideshare.net/slideshow/linux-linux-archlabs-20190120-part3/129864461"],
    ["Linux 安裝篇 ArchLabs 2019.01.20 — Part 2", "university", "Linux · ArchLabs", "ArchLabs 安裝系列第二部分。", "https://www.slideshare.net/slideshow/linux-linux-archlabs-20190120-part2/129864001"],
    ["Linux 安裝篇 ArchLabs 2019.01.20 — Part 1", "university", "Linux · ArchLabs", "ArchLabs 安裝系列第一部分。", "https://www.slideshare.net/slideshow/linux-linux-archlabs-20190120-part1/129863580"],
    ["Linux 推坑教學：FMiCa-tw.sh 說明文件", "university", "Linux · Bash", "FMiCa-TW.sh 的使用方式與設計說明。", "http://fmica-tw.sh"],
    ["C 語言從崩潰到崩潰 Ex（二）", "university", "C Language", "延續基礎內容的 C 語言實作教材。", "https://www.slideshare.net/slideshow/cex-79080568/79080568"],
    ["在手機上使用 Linux", "university", "Linux · Mobile", "介紹在行動裝置上使用 Linux 環境的方法。", "https://www.slideshare.net/slideshow/linux-linux-77271842/77271842"],
    ["Linux Mint Cinnamon 18.1 操作設定教學", "university", "Linux Mint", "桌面環境操作與系統設定入門。", "https://www.slideshare.net/slideshow/linux-linux-mint-cinnamon-181/74049170"],
    ["C 語言從崩潰到崩潰 Ex（一）", "university", "C Language", "以實例整理 C 語言基礎觀念。", "https://www.slideshare.net/slideshow/cex-70564975/70564975"],
    ["Linux CLI 基本教學", "university", "Linux · CLI", "終端指令與命令列工具的基礎教材。", "https://www.slideshare.net/slideshow/linux-linux-cli/69541869"],
    ["Linux 安裝篇：Manjaro Linux 201606 KDE", "university", "Linux · Manjaro", "Manjaro KDE 的安裝與環境設定流程。", "https://www.slideshare.net/slideshow/linux-manjaro-linux-201606-kde/67209576"],
    ["Linux 安裝篇：Linux Mint 18 Cinnamon", "university", "Linux Mint", "Linux Mint 18 Cinnamon 安裝流程。", "https://www.slideshare.net/slideshow/linux-linux-mint-18-cinnamon-66499815/66499815"],
    ["何謂 Linux？", "university", "Linux", "從基本概念介紹 Linux 與開源系統。", "https://www.slideshare.net/slideshow/linux-linux-66243857/66243857"],
    ["C 語言從崩潰到崩潰", "university", "C Language", "C 語言入門系列的起點。", "https://www.slideshare.net/slideshow/c-66240731/66240731"]
  ].map(x => ({ title:x[0], stage:x[1], tech:x[2], description:x[3], link:x[4] }));

  const otherWorks = [
    ["using-inkscape-and-blender-make-2d-animation-book", "service", "Inkscape · Blender", "記錄以 Inkscape 與 Blender 製作 2D 動畫的完整實作與踩坑經驗。", "https://github.com/Lian0123/using-inkscape-and-blender-make-2d-animation-book"],
    ["新式外來人口統一證號換發介紹｜政策動畫", "service", "Animation · Communication", "以動畫協助傳達新式統一證號換發政策，將複雜資訊轉化為易理解內容。", "https://youtube.com/watch?v=Q0_8md_3VdA"],
    ["Lian-Free-PPT-Template", "university", "Presentation Design", "可自由使用的簡報範本，整理視覺層級與內容版型。", "https://github.com/Lian0123/Lian-Free-PPT-Template"]
  ].map(x => ({ title:x[0], stage:x[1], tech:x[2], description:x[3], link:x[4] }));

  const labels = { after:"工作後 Side Project", university:"大學作品", service:"服役時作品" };
  const projectDates = { "parquet-tool":"2026-03-10", "scribeva-editor-react":"2026-07-19", "scribeva-editor":"2026-07-18", "expense-tracker-app":"2026-08-31", "virtual-business-card-project":"2026-02-15", "camera-simulator":"2026-02-28", "auto-generator-package-diagram-uml":"2026-03-09", "jp-travel-talk-tool":"2022-11-21", "my-typescript-express-template":"2022-01-05", "lian0123.github.io":"2020-04-24", "HardwaveFuzzyProjectWebVersion":"2019-11-22", "HardwaveFuzzyProject":"2019-07-12", "twcall":"2018-08-16", "TextArt":"2018-07-28", "UnknownClang":"2018-09-12", "FMiCa-TW.sh":"2017-07-27" };
  const writingDates = { "iOS SandBox Account 與 Apple Pay 的踩坑筆記":"2026-02-18", "Vibe Coding 開發導入 AI 問題筆記（一）— 為什麼 AI 會偷懶":"2026-02-17", "Vibe Coding 開發導入 AI 問題筆記（零）— 為什麼要寫這篇文章":"2026-02-16", "基於替換密碼的音訊轉置 BMP 影像欺騙偽造設計與實作":"2019-06-11", "FML Tool 理論說明":"2019-05-01", "Linux 安裝篇 ArchLabs 2019.01.20 — Part 3":"2019-01-30", "Linux 安裝篇 ArchLabs 2019.01.20 — Part 2":"2019-01-20", "Linux 安裝篇 ArchLabs 2019.01.20 — Part 1":"2019-01-10", "Linux 推坑教學：FMiCa-tw.sh 說明文件":"2018-07-01", "C 語言從崩潰到崩潰 Ex（二）":"2017-08-23", "在手機上使用 Linux":"2017-06-26", "Linux Mint Cinnamon 18.1 操作設定教學":"2017-04-08", "C 語言從崩潰到崩潰 Ex（一）":"2016-12-31", "Linux CLI 基本教學":"2016-11-26", "Linux 安裝篇：Manjaro Linux 201606 KDE":"2016-10-15", "Linux 安裝篇：Linux Mint 18 Cinnamon":"2016-09-01", "何謂 Linux？":"2016-08-15", "C 語言從崩潰到崩潰":"2016-07-15" };
  projects.forEach(item => { item.date = projectDates[item.title] || "2019-01-01"; });
  writings.forEach(item => { item.date = writingDates[item.title] || "2019-01-01"; });
  const otherDates = { "using-inkscape-and-blender-make-2d-animation-book":"2020-11-18", "新式外來人口統一證號換發介紹｜政策動畫":"2020-01-15", "Lian-Free-PPT-Template":"2019-07-27" };
  otherWorks.forEach(item => { item.date = otherDates[item.title] || "2019-01-01"; });
  projects.sort((a, b) => b.date.localeCompare(a.date));
  writings.sort((a, b) => b.date.localeCompare(a.date));
  writings.forEach(item => { item.tech = item.date + " · " + item.tech; });
  const links = [["GitHub", "程式碼與開源專案", "https://github.com/Lian0123"], ["Medium", "近期工程文章", "https://medium.com/@lian000123"], ["SlideShare", "技術教材與研究簡報", "https://www.slideshare.net/ssuser6090c0"], ["Zenn", "日文技術內容", "https://zenn.dev/lian0123"], ["DEV Community", "開發者社群文章", "https://dev.to/lian0123"], ["X", "社群動態", "https://x.com/lian000123"], ["Facebook", "社群頁面", "https://www.facebook.com/profile.php?id=100003135147006"], ["Pixiv", "視覺創作", "https://www.pixiv.net/users/14175602"]];

  function Card({ item, action }) {
    return e("article", { className:"work-card" },
      e("div", { className:"work-card-top" }, e("span", { className:"stage-badge" }, labels[item.stage]), e("span", { className:"tech-label" }, item.tech)),
      e("div", { className:"work-date" }, item.date), e("h3", null, item.title), e("p", null, item.description),
      item.thesis ? e("span", { className:"thesis-label" }, "專題") : null,
      e("a", { href:item.link, target:"_blank", rel:"noopener noreferrer", className:"work-link" }, action+" ↗")
    );
  }

  function Heading(kicker, title, text) {
    return e("header", { className:"section-heading" }, e("p", { className:"eyebrow" }, kicker), e("h2", null, title), e("p", null, text));
  }

  function initParticles() {
    if (typeof window.particlesJS !== "function") return;
    window.particlesJS("particles-js", { particles: { number: { value: window.innerWidth < 740 ? 20 : 42, density: { enable: true, value_area: 900 } }, color: { value: "#44c98c" }, shape: { type: "circle" }, opacity: { value: .3, random: true }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 140, color: "#2b9f72", opacity: .2, width: 1 }, move: { enable: !window.matchMedia("(prefers-reduced-motion: reduce)").matches, speed: .8 } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 160, line_linked: { opacity: .3 } }, push: { particles_nb: 3 } } }, retina_detect: true });
  }

  function App() {
    const [theme, setTheme] = useState(localStorage.getItem("site-theme") || "dark");
    const [filter, setFilter] = useState("all");
    const [menuOpen, setMenuOpen] = useState(false);
    const filtered = useMemo(() => filter === "all" ? projects : projects.filter(x => x.stage === filter), [filter]);
    useEffect(() => { document.body.dataset.theme = theme; localStorage.setItem("site-theme", theme); }, [theme]);
    useEffect(() => { const timer = window.setTimeout(initParticles, 0); return () => window.clearTimeout(timer); }, []);
    const scroll = id => document.getElementById(id).scrollIntoView({ behavior:"smooth" });
    return e("div", { className:"site" },
      e("header", { className:"topbar" }, e("div", { className:"topbar-inner" }, e("a", { className:"brand", href:"#top" }, "LIAN / 0123"), e("nav", { className:menuOpen ? "mobile-nav is-open" : "mobile-nav", "aria-label":"主要導覽" }, e("ul", { className:"nav-list" }, [["about","關於"],["projects","作品"],["writing","工程著作"],["other","其他創作"],["links","連結"]].map(x=>e("li", {key:x[0]}, e("a", {className:"nav-link",href:"#"+x[0],onClick:()=>setMenuOpen(false)},x[1]))))), e("button", { className:"mobile-menu-toggle", onClick:()=>setMenuOpen(!menuOpen), "aria-expanded":menuOpen, "aria-controls":"site-navigation", "aria-label":menuOpen ? "關閉選單" : "開啟選單" }, menuOpen ? "✕" : "☰"), e("button", { className:"theme-toggle", onClick:()=>setTheme(theme === "dark" ? "light" : "dark"), "aria-label":"切換明暗主題" }, theme === "dark" ? "☀" : "◐"))),
      e("main", { id:"content" },
        e("section", { id:"top", className:"portfolio-hero" }, e("div", { className:"hero-copy" }, e("p", { className:"eyebrow" }, "BACKEND · FULL-STACK · TOOL MAKING"), e("p", { className:"hero-name" }, "連永立 · lian0123"), e("h1", null, "把複雜問題，整理成能長期使用的工具。"), e("p", { className:"hero-summary" }, "作品從 Node.js 與原生擴充、文字編輯器，到生活工具與技術教材。關注的不只是完成，也包含可維護性、使用情境與知識傳遞。"), e("div", { className:"hero-actions" }, e("button", { className:"btn btn-primary", onClick:()=>scroll("projects") }, "瀏覽作品"), e("a", { className:"btn btn-secondary", href:"mailto:lian0123@hi2.in" }, "聯絡我"))), e("div", { className:"hero-ledger" }, [[projects.length,"工程專案"],[writings.length,"工程著作"],[new Date().getFullYear()-2015+"+","持續創作年數"]].map((x,i)=>e("div", {className:"ledger-row",key:i},e("strong",null,x[0]),e("span",null,x[1]))))),
        e("section", { id:"about", className:"content-section about-section" }, Heading("01 / PROFILE", "一條從系統底層走向產品體驗的實作路徑", "早期作品聚焦 Linux、C 語言、訊號處理與模糊控制；工作後延伸到 TypeScript、React、資料格式、編輯器與實用型產品。這些作品共同呈現：能理解底層、能完成產品，也能把經驗整理成別人看得懂的內容。"), e("div", { className:"pillar-grid" }, [["資料與後端工程","以 TypeScript、Node.js 與 C++ Native Addon 實作資料工具與可重用的服務基礎。"],["編輯器與產品實作","從核心編輯器到 React 介面，持續處理狀態、互動與產品化問題。"],["跨領域技術溝通","將 Linux、C 語言、AI 導入與多媒體經驗整理成文章與教材。"]].map((x,i)=>e("article", {key:x[0]},e("span",null,"0"+(i+1)),e("h3",null,x[0]),e("p",null,x[1]))))),
        e("section", { className:"content-section featured-section" }, Heading("02 / SELECTED", "代表作品", "優先呈現最能代表目前工程方向的專案。"), e("div", { className:"featured-work-grid" }, projects.filter(x=>x.featured).map(x=>e(Card,{key:x.title,item:x,action:"查看專案"})))),
        e("section", { className:"content-section business-card-section" }, Heading("03 / CONTACT CARD", "個人名片", "直接在頁面中預覽個人名片與 QR 聯絡名片。"), e("div", { className:"business-card-grid" }, [["Lian0123_main_card.html","專業名片"],["Lian0123_qr_card.html","QR 聯絡名片"]].map(x=>e("article", { className:"business-card-item", key:x[0] }, e("h3", null, x[1]), e("div", { className:"business-card-preview" }, e("iframe", { src:"./"+x[0], title:x[1], loading:"lazy", referrerPolicy:"no-referrer" })), e("a", { className:"work-link", href:"./"+x[0], target:"_blank", rel:"noopener noreferrer" }, "開啟名片 ↗"))))),
        e("section", { id:"projects", className:"content-section" }, Heading("04 / ENGINEERING", "工程開發", "依創作階段整理的公開專案與可操作作品。"), e("div", { className:"filter-row" }, [["all","全部"],["after","工作後"],["university","大學"]].map(x=>e("button",{key:x[0],className:"filter-button"+(filter===x[0]?" active":""),onClick:()=>setFilter(x[0])},x[1]))), e("div", { className:"work-grid" }, filtered.map(x=>e(Card,{key:x.title,item:x,action:"查看專案"})))),
        e("section", { id:"writing", className:"content-section" }, Heading("04 / WRITING", "工程著作", "從近期實務踩坑與 AI 協作反思，到大學時期的 Linux、C 語言與研究成果。"), e("div", { className:"writing-list" }, writings.map((x,i)=>e("a",{className:"writing-item",key:x.title,href:x.link,target:"_blank",rel:"noopener noreferrer"},e("span",{className:"writing-index"},String(i+1).padStart(2,"0")),e("div",null,e("p",{className:"writing-meta"},labels[x.stage]+" · "+x.tech),e("h3",null,x.title),e("p",null,x.description)),e("span",{className:"writing-arrow"},"↗"))))) ,
        e("section", { id:"other", className:"content-section" }, Heading("05 / OTHER WORK", "非工程創作", "技術之外，也把工具運用在動畫製作、政策溝通與簡報設計。"), e("div", { className:"work-grid other-grid" }, otherWorks.map(x=>e(Card,{key:x.title,item:x,action:"查看作品"})))),
        e("section", { id:"links", className:"content-section links-section" }, Heading("06 / LINKS", "繼續了解", "查看原始碼、長文與完整簡報。"), e("div", { className:"link-grid" }, links.map(x=>e("a",{key:x[0],href:x[2],target:"_blank",rel:"noopener noreferrer"},e("strong",null,x[0]),e("span",null,x[1]),e("b",null,"↗")))))
      ),
      e("footer",null,e("span",null,"© "+new Date().getFullYear()+" lian0123"),e("span",null,"依公開專案與著作重新整理"))
    );
  }
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => null));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(e(App));
})();
