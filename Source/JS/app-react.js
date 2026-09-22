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
    ["FMiCa-TW.sh", "university", "Linux · Bash", "為台灣使用者整理 Linux Mint Cinnamon 安裝與環境設定的自動化腳本。", "https://github.com/Lian0123/FMiCa-TW.sh"]
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
    ["Linux 推坑教學：FMiCa-tw.sh 說明文件", "university", "Linux · Bash", "FMiCa-TW.sh 的使用方式與設計說明。", "https://www.slideshare.net/slideshow/linux-fmicatwsh/107815091"],
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

  const i18n = {
    "zh": {
      "labels": {
        "after": "工作後 Side Project",
        "university": "大學作品",
        "service": "服役時作品"
      },
      "nav": [
        "關於我",
        "我的專案",
        "技術筆記",
        "其他創作",
        "找到我"
      ],
      "kicker": "LIAN0123 / PERSONAL WEBSITE",
      "name": "連永立 · lian0123",
      "heroTitle": "我是連永立，後端與全端工程師。",
      "heroText": "我主要使用 TypeScript、Node.js 與 React，做過資料處理工具、文字編輯器和生活應用，也接觸 C++ 原生擴充。這裡整理了我的個人專案、技術筆記，以及從大學到現在的學習與創作。",
      "view": "看看我的專案",
      "contact": "寫信給我",
      "aboutTitle": "我的技術背景與關注方向",
      "aboutText": "我從 Linux 與 C 語言開始累積實作經驗，大學時接觸訊號處理與模糊控制。工作後，我的個人專案逐漸延伸到 TypeScript、React、資料格式與文字編輯器。我關心程式內部如何運作，也在意介面是否好用、程式碼是否容易維護。",
      "selected": "代表專案",
      "selectedText": "這幾個專案可以看出我最近在研究和實作的方向。",
      "cardTitle": "我的電子名片",
      "cardText": "這裡放了我的個人名片與 QR 聯絡名片，方便認識我或保存聯絡資訊。",
      "engineering": "我的專案",
      "engineeringText": "從大學作品到工作後的 Side Project，這些是我在不同階段做過的實作。可以依時期、技術或關鍵字查找，也能直接到 GitHub 閱讀程式碼。",
      "writing": "技術筆記與分享",
      "writingText": "我把開發時遇到的問題、研究過的主題，以及想分享的觀念寫成文章和教材。這裡有近期的 iOS 測試與 AI 協作筆記，也保留早期的 Linux、C 語言教學和大學研究簡報。",
      "other": "程式之外的創作",
      "otherText": "除了寫程式，我也用 Inkscape 與 Blender 做過動畫、參與政策說明動畫製作，並整理可分享的簡報範本。這些作品記錄了我在視覺表達上的嘗試。",
      "links": "也可以在這些地方找到我",
      "linksText": "我的程式碼、文章、教材與創作分別放在以下平台。歡迎看看，也歡迎交流。",
      "viewProject": "查看專案",
      "viewWork": "查看作品",
      "openCard": "開啟名片",
      "filter": [
        "全部",
        "工作後",
        "大學"
      ],
      "stats": [
        "公開工程專案",
        "文章與教材",
        "學習與創作年數"
      ],
      "footer": "連永立 · 個人網站"
    },
    "en": {
      "labels": {
        "after": "Personal project",
        "university": "University",
        "service": "Military service"
      },
      "nav": [
        "About me",
        "Projects",
        "Writing",
        "Other interests",
        "Find me"
      ],
      "kicker": "LIAN0123 / PERSONAL WEBSITE",
      "name": "Lian · lian0123",
      "heroTitle": "I'm Lian, a backend and full-stack engineer.",
      "heroText": "I work mainly with TypeScript, Node.js, and React. My personal projects include data tools, text editors, and everyday apps, with some work in C++ native addons. This site collects my projects, technical notes, and creative work from university onward.",
      "view": "See my projects",
      "contact": "Email me",
      "aboutTitle": "My background and technical interests",
      "aboutText": "I started with Linux and C, then explored signal processing and fuzzy control at university. Since then, my personal projects have expanded into TypeScript, React, data formats, and text editors. I care about how code works internally, how an interface feels to use, and how easy the code is to maintain.",
      "selected": "Selected projects",
      "selectedText": "A few projects that show what I have been working on recently.",
      "cardTitle": "My contact cards",
      "cardText": "My profile and QR cards offer a quick introduction and a way to save my contact details.",
      "engineering": "My projects",
      "engineeringText": "These are projects from university and personal work alongside my career. Browse by period, technology, or keyword, and follow the GitHub links to read the code.",
      "writing": "Technical notes and writing",
      "writingText": "I write about problems I encounter, topics I study, and ideas I want to share. Recent notes cover iOS testing and AI-assisted development; earlier material includes Linux and C tutorials and university research.",
      "other": "Outside programming",
      "otherText": "I have also worked with Inkscape and Blender on animation, contributed to a policy explainer animation, and shared presentation templates. These projects record my experiments with visual communication.",
      "links": "Find me elsewhere",
      "linksText": "My code, articles, learning materials, and creative work live on these platforms. Feel free to take a look or get in touch.",
      "viewProject": "View project",
      "viewWork": "View work",
      "openCard": "Open card",
      "filter": [
        "All",
        "Since university",
        "University"
      ],
      "stats": [
        "Public projects",
        "Articles & tutorials",
        "Years learning & creating"
      ],
      "footer": "Lian · Personal website"
    },
    "jp": {
      "labels": {
        "after": "社会人 Side Project",
        "university": "大学作品",
        "service": "兵役中の作品"
      },
      "nav": [
        "自己紹介",
        "制作物",
        "技術ノート",
        "その他の創作",
        "リンク"
      ],
      "kicker": "LIAN0123 / PERSONAL WEBSITE",
      "name": "立花永蓮(連永立) · lian0123",
      "heroTitle": "連永立です。バックエンドとフルスタックのエンジニアです。",
      "heroText": "主にTypeScript、Node.js、Reactを使い、データ処理ツールやテキストエディター、日常で使うアプリを制作しています。C++のネイティブ拡張にも取り組んでいます。このサイトには、大学時代からの個人開発、技術ノート、創作をまとめています。",
      "view": "制作物を見る",
      "contact": "メールする",
      "aboutTitle": "私の技術的な背景と関心",
      "aboutText": "LinuxとC言語から実装経験を積み、大学では信号処理やファジィ制御に取り組みました。社会人になってからは、個人開発でTypeScript、React、データ形式、テキストエディターへと関心を広げています。内部の仕組みに加え、操作のしやすさやコードの保守性も大切にしています。",
      "selected": "主な制作物",
      "selectedText": "最近取り組んでいるテーマが伝わるプロジェクトを紹介します。",
      "cardTitle": "私のデジタル名刺",
      "cardText": "自己紹介の名刺とQR連絡先です。プロフィールの確認や連絡先の保存にご利用ください。",
      "engineering": "これまでの制作物",
      "engineeringText": "大学での制作から、社会人になってからの個人開発までをまとめました。時期・技術・キーワードで探し、GitHubでコードを読むこともできます。",
      "writing": "技術ノートと共有資料",
      "writingText": "開発中に出会った問題、調べたテーマ、共有したい知識を記事や教材にしています。最近のiOSテストやAIとの開発の記録に加え、Linux・C言語の教材や大学時代の研究資料も掲載しています。",
      "other": "プログラミング以外の創作",
      "otherText": "InkscapeやBlenderによるアニメーション、制度を説明する動画の制作、プレゼンテーション用テンプレートの公開にも取り組んできました。視覚表現を試してきた記録です。",
      "links": "ほかの場所でも発信しています",
      "linksText": "コード、記事、教材、創作を以下のサービスで公開しています。ご覧いただき、気軽に交流できればうれしいです。",
      "viewProject": "プロジェクトを見る",
      "viewWork": "作品を見る",
      "openCard": "名刺を開く",
      "filter": [
        "すべて",
        "社会人",
        "大学"
      ],
      "stats": [
        "公開プロジェクト",
        "記事・教材",
        "学習・制作の年数"
      ],
      "footer": "連永立 · 個人サイト"
    }
  };
  const labels = i18n.zh.labels;
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

  const workCopy = {
    en: {
      "parquet-tool":["Parquet processing toolkit","A TypeScript and C++ native-addon toolkit for reading, writing, validating, merging, and converting Parquet data."], "scribeva-editor-react":["scribeva-editor-react","A React integration for text editing, component composition, state management, and editing experience."], "scribeva-editor":["scribeva-editor","An editor core focused on content operations, interaction behavior, and an extensible editing foundation."], "expense-tracker-app":["expense-tracker-app","A practical expense application that connects data entry, organization, and browsing into one product flow."], "virtual-business-card-project":["virtual-business-card-project","A web tool for creating and presenting digital business cards with customization and mobile support."], "camera-simulator":["camera-simulator","A browser-based camera simulation that turns photographic controls into an interactive experience."], "auto-generator-package-diagram-uml":["auto-generator-package-diagram-uml","An automation tool that maps package relationships and generates UML diagrams for easier maintenance."], "jp-travel-talk-tool":["jp-travel-talk-tool","A travel conversation helper that makes common Japanese phrases easier to find and use."], "my-typescript-express-template":["my-typescript-express-template","A reusable TypeScript and Express backend template that shortens Node.js API setup."], "lian0123.github.io":["lian0123.github.io","An evolving portfolio that brings together themes, PWA support, and a public project index."], "HardwaveFuzzyProjectWebVersion":["HardwaveFuzzyProjectWebVersion","The web version of a fuzzy-control capstone, making the research accessible through a browser."], "HardwaveFuzzyProject":["HardwaveFuzzyProject","A university capstone combining hardware and fuzzy-control methods."], "twcall":["twcall","A terminal tool for Big5 display issues and a better Linux experience for Taiwan users."], "TextArt":["TextArt","A programming experiment exploring character output and visual expression through text."], "UnknownClang":["UnknownClang","An experimental project exploring C language internals and compiler concepts."], "FMiCa-TW.sh":["FMiCa-TW.sh","An automated Linux Mint Cinnamon installation and environment setup script for Taiwan users."],
      "iOS SandBox Account 與 Apple Pay 的踩坑筆記":["iOS Sandbox Accounts and Apple Pay: Lessons Learned","Practical notes on Sandbox accounts, Apple Pay testing, and troubleshooting iCloud error 34608."], "Vibe Coding 開發導入 AI 問題筆記（一）— 為什麼 AI 會偷懶":["Vibe Coding with AI (1): Why AI Takes Shortcuts","An engineering view of why AI-assisted development may skip steps or avoid complex work."], "Vibe Coding 開發導入 AI 問題筆記（零）— 為什麼要寫這篇文章":["Vibe Coding with AI (0): Why Write This Series","The context and problem framing behind documenting AI-assisted development."], "基於替換密碼的音訊轉置 BMP 影像欺騙偽造設計與實作":["Audio-to-BMP Deceptive Encryption Design","A research design combining substitution ciphers, audio, and BMP image transposition."], "FML Tool 理論說明":["FML Tool: Theory","The theoretical background and implementation concepts behind a fuzzy-logic tool."], "Linux 推坑教學：FMiCa-tw.sh 說明文件":["FMiCa-tw.sh Linux Guide","Usage and design notes for the FMiCa-TW.sh environment script."], "using-inkscape-and-blender-make-2d-animation-book":["Making 2D Animation with Inkscape and Blender","A practical record of creating 2D animation with Inkscape and Blender."], "新式外來人口統一證號換發介紹｜政策動畫":["New Foreign Resident ID: Policy Animation","An animation that explains the new foreign resident ID replacement policy."], "Lian-Free-PPT-Template":["Lian-Free-PPT-Template","A freely reusable presentation template organized around visual hierarchy and content layouts."]
    },
    jp: {
      "parquet-tool":["Parquet処理ツール","TypeScriptとC++ネイティブアドオンで、Parquetの読み書き・検証・結合・変換を扱うツール。"], "scribeva-editor-react":["scribeva-editor-react","テキスト編集をReactへ統合し、コンポーネント構成と状態管理を試すプロジェクト。"], "scribeva-editor":["scribeva-editor","コンテンツ操作と拡張可能な編集基盤に焦点を当てたエディターコア。"], "expense-tracker-app":["expense-tracker-app","日々の支出入力・整理・閲覧を一つの流れにまとめた実用アプリ。"], "virtual-business-card-project":["virtual-business-card-project","カスタマイズとモバイル利用に対応したデジタル名刺作成Webツール。"], "camera-simulator":["camera-simulator","カメラ操作の概念をブラウザ上で体験できるシミュレーター。"], "auto-generator-package-diagram-uml":["auto-generator-package-diagram-uml","パッケージ関係を整理し、保守に役立つUML図を自動生成するツール。"], "jp-travel-talk-tool":["jp-travel-talk-tool","旅行で使う日本語フレーズを検索・利用しやすくする会話補助ツール。"], "my-typescript-express-template":["my-typescript-express-template","Node.js API開発の初期構成を短縮するTypeScript・Expressテンプレート。"], "lian0123.github.io":["lian0123.github.io","テーマ、PWA、公開作品一覧を統合した更新型ポートフォリオ。"], "HardwaveFuzzyProjectWebVersion":["HardwaveFuzzyProjectWebVersion","ファジィ制御研究をブラウザで確認できるようにした卒業制作のWeb版。"], "HardwaveFuzzyProject":["HardwaveFuzzyProject","ハードウェアとファジィ制御を組み合わせた大学卒業制作。"], "twcall":["twcall","台湾のLinux利用者向けにBig5表示問題を扱う端末ツール。"], "TextArt":["TextArt","文字出力と視覚表現を試すプログラミング実験。"], "UnknownClang":["UnknownClang","C言語とコンパイラー概念を探る実験的プロジェクト。"], "FMiCa-TW.sh":["FMiCa-TW.sh","台湾向けLinux Mint Cinnamon環境を自動構築するスクリプト。"],
      "iOS SandBox Account 與 Apple Pay 的踩坑筆記":["iOS Sandbox AccountとApple Payの記録","Sandbox、Apple Payテスト、iCloud error 34608の実務メモ。"], "Vibe Coding 開發導入 AI 問題筆記（一）— 為什麼 AI 會偷懶":["Vibe CodingとAI (1)：AIが手を抜く理由","AI支援開発で手順を省略したり複雑な作業を避ける理由を考察。"], "Vibe Coding 開發導入 AI 問題筆記（零）— 為什麼要寫這篇文章":["Vibe CodingとAI (0)：なぜ書くのか","AI支援開発を記録する背景と問題意識。"], "基於替換密碼的音訊轉置 BMP 影像欺騙偽造設計與實作":["音声のBMP転置暗号設計","置換暗号、音声、BMP画像転置を組み合わせた研究。"], "FML Tool 理論說明":["FML Tool理論","ファジィ論理ツールの理論背景と実装概念。"], "Linux 推坑教學：FMiCa-tw.sh 說明文件":["FMiCa-tw.sh Linux解説","FMiCa-TW.shの使い方と設計説明。"], "using-inkscape-and-blender-make-2d-animation-book":["InkscapeとBlenderで2Dアニメーション","InkscapeとBlenderによる2Dアニメーション制作記録。"], "新式外來人口統一證號換發介紹｜政策動畫":["新しい外国人統一番号：政策アニメ","新しい外国人番号の交換政策を説明するアニメーション。"], "Lian-Free-PPT-Template":["Lian-Free-PPT-Template","視覚階層とレイアウトを整理した自由利用可能なプレゼンテンプレート。"]
    }
  };
  function workText(item, language) { const translated = workCopy[language] && workCopy[language][item.title]; return translated ? { title:translated[0], description:translated[1] } : { title:item.title, description:item.description }; }
  Object.assign(workCopy.en, {
    "Linux 安裝篇 ArchLabs 2019.01.20 — Part 3":["Linux Install: ArchLabs Part 3","Post-install configuration and setup recommendations for ArchLabs."], "Linux 安裝篇 ArchLabs 2019.01.20 — Part 2":["Linux Install: ArchLabs Part 2","The second part of the ArchLabs installation series."], "Linux 安裝篇 ArchLabs 2019.01.20 — Part 1":["Linux Install: ArchLabs Part 1","The first part of the ArchLabs installation series."], "C 語言從崩潰到崩潰 Ex（二）":["C Language Crash to Crash Ex (2)","Practical C language material continuing the fundamentals series."], "在手機上使用 Linux":["Using Linux on a Phone","An introduction to running a Linux environment on a mobile device."], "Linux Mint Cinnamon 18.1 操作設定教學":["Linux Mint Cinnamon 18.1 Setup","An introduction to desktop operation and system configuration."], "C 語言從崩潰到崩潰 Ex（一）":["C Language Crash to Crash Ex (1)","C language fundamentals explained through practical examples."], "Linux CLI 基本教學":["Linux CLI Basics","Fundamentals of terminal commands and command-line tools."], "Linux 安裝篇：Manjaro Linux 201606 KDE":["Manjaro Linux 201606 KDE","Installation and environment setup for Manjaro KDE."], "Linux 安裝篇：Linux Mint 18 Cinnamon":["Linux Mint 18 Cinnamon","The installation process for Linux Mint 18 Cinnamon."], "何謂 Linux？":["What is Linux?","An introduction to Linux and open-source systems."], "C 語言從崩潰到崩潰":["C Language Crash to Crash","The starting point of the C language learning series."]
  });
  Object.assign(workCopy.jp, {
    "Linux 安裝篇 ArchLabs 2019.01.20 — Part 3":["Linux導入：ArchLabs Part 3","ArchLabs導入後の設定と推奨事項。"], "Linux 安裝篇 ArchLabs 2019.01.20 — Part 2":["Linux導入：ArchLabs Part 2","ArchLabs導入シリーズの第2部。"], "Linux 安裝篇 ArchLabs 2019.01.20 — Part 1":["Linux導入：ArchLabs Part 1","ArchLabs導入シリーズの第1部。"], "C 語言從崩潰到崩潰 Ex（二）":["C言語クラッシュからクラッシュ Ex (2)","C言語実践教材シリーズの続編。"], "在手機上使用 Linux":["スマートフォンでLinuxを使う","モバイル端末でLinux環境を使う方法。"], "Linux Mint Cinnamon 18.1 操作設定教學":["Linux Mint Cinnamon 18.1設定","デスクトップ操作とシステム設定の入門。"], "C 語言從崩潰到崩潰 Ex（一）":["C言語クラッシュからクラッシュ Ex (1)","実例で学ぶC言語の基礎。"], "Linux CLI 基本教學":["Linux CLI基本","端末コマンドとコマンドラインツールの基礎。"], "Linux 安裝篇：Manjaro Linux 201606 KDE":["Manjaro Linux 201606 KDE","Manjaro KDEの導入と環境設定。"], "Linux 安裝篇：Linux Mint 18 Cinnamon":["Linux Mint 18 Cinnamon","Linux Mint 18 Cinnamonの導入手順。"], "何謂 Linux？":["Linuxとは？","Linuxとオープンソースシステムの基本。"], "C 語言從崩潰到崩潰":["C言語クラッシュからクラッシュ","C言語入門シリーズの出発点。"]
  });
  const pillarCopy = {
    "zh": [
      [
        "後端與資料處理",
        "我用 TypeScript 與 Node.js 寫後端工具，也在 parquet-tool 中結合 C++ Native Addon，處理資料格式的讀寫與轉換。"
      ],
      [
        "前端與文字編輯器",
        "我做過 JavaScript 編輯器核心與 React 整合，關注內容操作、狀態管理，以及介面和核心邏輯之間的分工。"
      ],
      [
        "技術寫作與創作",
        "我把 Linux、C 語言與開發經驗整理成教材和文章，也記錄使用 Inkscape、Blender 製作動畫的過程。"
      ]
    ],
    "en": [
      [
        "Backend and data processing",
        "I build backend tools with TypeScript and Node.js. In parquet-tool, I also use a C++ native addon to handle data formats and conversions."
      ],
      [
        "Frontend and text editors",
        "My editor projects cover a JavaScript core and React integration. I focus on content operations, state, and the responsibilities of the interface and core logic."
      ],
      [
        "Writing and creative work",
        "I share Linux, C, and development experience through tutorials and articles, and document my animation work with Inkscape and Blender."
      ]
    ],
    "jp": [
      [
        "バックエンドとデータ処理",
        "TypeScriptとNode.jsでバックエンドのツールを作っています。parquet-toolではC++ネイティブ拡張も使い、データの読み書きや形式変換を扱っています。"
      ],
      [
        "フロントエンドとエディター",
        "JavaScriptの編集コアとReactへの統合に取り組んできました。内容操作や状態管理、UIとコアの役割分担に関心があります。"
      ],
      [
        "技術記事と創作",
        "Linux、C言語、開発経験を記事や教材にまとめています。InkscapeとBlenderでのアニメーション制作も記録しています。"
      ]
    ]
  };
  const linkCopy = {
    zh:[["程式碼與開源專案"],["近期工程文章"],["技術教材與研究簡報"],["日文技術內容"],["開發者社群文章"],["社群動態"],["社群頁面"],["視覺創作"]],
    en:[["Source code and open projects"],["Recent engineering writing"],["Technical slides and research"],["Japanese technical content"],["Developer community posts"],["Social updates"],["Social profile"],["Visual work"]],
    jp:[["ソースコードと公開プロジェクト"],["最近の技術記事"],["技術教材と研究スライド"],["日本語の技術コンテンツ"],["開発者コミュニティの記事"],["ソーシャル更新"],["ソーシャルプロフィール"],["ビジュアル作品"]]
  };

  const content = window.portfolioContent;
  const techGroups = ["TypeScript", "React", "Editor", "Linux", "C / C++", "Web", "Fuzzy Control"];
  function preference(key, allowed, fallback) {
    try { const value = localStorage.getItem(key); return allowed.includes(value) ? value : fallback; }
    catch (_) { return fallback; }
  }
  function savePreference(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
  function external(href, className) { return { href, className, target: "_blank", rel: "noopener noreferrer" }; }
  function Heading(kicker, title, text) {
    return e("header", { className: "section-heading" }, e("p", { className: "eyebrow" }, kicker), e("h2", null, title), e("p", null, text));
  }
  function Arrow() { return e("span", { "aria-hidden": true }, "↗"); }
  function TagList({ tags }) { return e("div", { className: "tag-list" }, tags.map(tag => e("span", { key: tag }, tag))); }
  function Card({ item, action, t, language }) {
    const localized = workText(item, language), c = content[language];
    return e("article", { className: "work-card" },
      e("div", { className: "work-card-top" }, e("span", { className: "stage-badge" }, t.labels[item.stage]), e("time", { className: "work-date", dateTime: item.date }, item.date)),
      e("h3", null, localized.title), e("p", null, localized.description),
      e(TagList, { tags: item.tech.split(" · ") }),
      item.thesis ? e("span", { className: "thesis-label" }, c.thesis) : null,
      e("a", { ...external(item.link, "work-link"), "aria-label": action + ": " + localized.title }, action, e(Arrow))
    );
  }
  function SystemMap({ language, paused, setPaused, reduced }) {
    const [domain, setDomain] = useState(0), c = content[language];
    const nodes = [
      ["TypeScript", "Node.js", "C++ Addon", "Parquet", "CLI tools", "API design"],
      ["React", "Components", "Editor core", "Document", "State", "Interaction"],
      ["Linux", "C language", "Research", "Writing", "Blender", "Animation"]
    ][domain];
    const coords = [[92,70], [380,70], [408,184], [376,300], [100,300], [72,184]];
    function tilt(event) {
      if (paused || reduced || event.pointerType !== "mouse") return;
      const box = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty("--tilt-x", ((event.clientY - box.top) / box.height - .5) * -7 + "deg");
      event.currentTarget.style.setProperty("--tilt-y", ((event.clientX - box.left) / box.width - .5) * 7 + "deg");
    }
    return e("div", { className: "system-map", onPointerMove: tilt, onPointerLeave: event => { event.currentTarget.style.setProperty("--tilt-x", "0deg"); event.currentTarget.style.setProperty("--tilt-y", "0deg"); } },
      e("div", { className: "map-toolbar" }, e("span", null, e("i", { className: "status-dot", "aria-hidden": true }), "MY TECH / INTEREST MAP"), e("span", null, "v.0123")),
      e("div", { className: "map-switcher", role: "group", "aria-label": c.map }, c.domains.map((name, index) => e("button", { key: name, type: "button", "aria-pressed": domain === index, onClick: () => setDomain(index), className: domain === index ? "is-active" : "" }, e("span", null, "0" + (index + 1)), name))),
      e("div", { className: "map-stage" },
        e("svg", { viewBox: "0 0 480 370", className: "network-map", role: "img", "aria-label": c.mapLabel + ": " + nodes.join(", ") },
          e("defs", null, e("pattern", { id: "map-grid", width: 24, height: 24, patternUnits: "userSpaceOnUse" }, e("path", { d: "M 24 0 L 0 0 0 24", fill: "none", className: "map-gridline" }))),
          e("rect", { width: 480, height: 370, fill: "url(#map-grid)" }),
          e("ellipse", { className: "map-orbit", cx: 240, cy: 184, rx: 158, ry: 130 }),
          e("ellipse", { className: "map-orbit inner-orbit", cx: 240, cy: 184, rx: 106, ry: 90 }),
          coords.map(([x,y], i) => e("g", { key: i },
            e("path", { className: "map-connection", d: `M ${x} ${y} L 240 184`, style: { animationDelay: (-i * .7) + "s" } }),
            e("circle", { cx: x, cy: y, r: 5, className: "node-dot" }),
            e("rect", { x: x - 61, y: y - 17, width: 122, height: 34, rx: 5, className: "node-box" }),
            e("text", { x, y: y + 4, textAnchor: "middle", className: "node-label" }, nodes[i])
          )),
          e("g", { className: "map-core" }, e("rect", { x: 178, y: 138, width: 124, height: 92, rx: 12 }), e("text", { x: 240, y: 176, textAnchor: "middle", className: "core-name" }, "LIAN"), e("text", { x: 240, y: 201, textAnchor: "middle", className: "core-subtitle" }, ["DATA / SYSTEMS", "BUILD / INTERACT", "LEARN / CREATE"][domain])),
          e("text", { x: 18, y: 350, className: "map-coordinate" }, "X 0123 / Y 2026"), e("text", { x: 462, y: 350, textAnchor: "end", className: "map-coordinate" }, "CONCEPT MAP")
        )
      ),
      e("div", { className: "map-console", "aria-live": "polite", "aria-atomic": true }, e("p", null, e("span", { "aria-hidden": true }, "> "), ["focus(data.engineering)", "focus(editor.experience)", "focus(knowledge.sharing)"][domain]), e("span", null, c.mapNotes[domain])),
      e("div", { className: "map-foot" }, e("span", null, c.mapHint), e("button", { type: "button", className: "motion-toggle", onClick: () => setPaused(!paused), "aria-label": paused ? c.resume : c.motion, "aria-pressed": paused, disabled: reduced, title: paused ? c.resume : c.motion }, paused || reduced ? "▶" : "Ⅱ"))
    );
  }
  function CaseStudies({ language }) {
    const [selected, setSelected] = useState(0), c = content[language], study = c.cases[selected];
    function switchTab(event, index) {
      const keys = { ArrowRight: (index + 1) % 3, ArrowLeft: (index + 2) % 3, Home: 0, End: 2 };
      if (!(event.key in keys)) return;
      event.preventDefault(); setSelected(keys[event.key]);
      event.currentTarget.parentElement.children[keys[event.key]].focus();
    }
    return e("section", { id: "selected", className: "content-section case-section" },
      Heading("02 / PROJECT NOTES", c.caseTitle, c.caseText),
      e("div", { className: "case-tabs", role: "tablist", "aria-label": c.caseNav }, c.cases.map((item, index) => e("button", { key: item.id, id: "case-tab-" + index, role: "tab", type: "button", "aria-selected": selected === index, "aria-controls": "case-panel", tabIndex: selected === index ? 0 : -1, onClick: () => setSelected(index), onKeyDown: event => switchTab(event, index) }, e("span", { className: "case-tab-number" }, "0" + (index + 1)), e("span", null, e("small", null, item.label), e("strong", null, item.id)), e(Arrow)))),
      e("div", { className: "case-panel", id: "case-panel", role: "tabpanel", "aria-labelledby": "case-tab-" + selected, tabIndex: 0 },
        e("div", { className: "case-overview" }, e("p", { className: "eyebrow" }, study.label), e("h3", null, study.title), e("p", { className: "case-summary" }, study.summary), e(TagList, { tags: study.tags }),
          e("div", { className: "case-flow" }, e("span", { className: "micro-label" }, c.diagram), e("ol", null, study.flow.map((step, index) => e("li", { key: step }, e("span", null, "0" + (index + 1)), step)))),
          e("a", external("https://github.com/Lian0123/" + study.id, "btn btn-primary"), c.caseSource, e(Arrow))
        ),
        e("div", { className: "case-details" }, study.blocks.map((text, index) => e("section", { key: index }, e("span", { className: "detail-number" }, "0" + (index + 1)), e("div", null, e("h4", null, c.caseLabels[index]), e("p", null, text)))), e("p", { className: "case-note" }, c.caseScope))
      )
    );
  }
  function App() {
    const [theme, setTheme] = useState(() => preference("site-theme", ["dark", "light"], "dark"));
    const [language, setLanguage] = useState(() => preference("site-lang", ["zh", "en", "jp"], "zh"));
    const [filter, setFilter] = useState("all"), [query, setQuery] = useState(""), [tech, setTech] = useState("");
    const [menuOpen, setMenuOpen] = useState(false), [activeSection, setActiveSection] = useState("top");
    const [paused, setPaused] = useState(() => preference("site-motion", ["paused", "playing"], "playing") === "paused");
    const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const [copyStatus, setCopyStatus] = useState("");
    const searchRef = React.useRef(null), menuButtonRef = React.useRef(null), progressRef = React.useRef(null), copyTimer = React.useRef(null);
    const t = i18n[language], c = content[language];
    const filtered = useMemo(() => projects.filter(item => {
      const translated = workText(item, language);
      const haystack = [item.title, item.description, item.tech, translated.title, translated.description].join(" ").toLowerCase();
      const matchTech = !tech || (tech === "C / C++" ? /\bC\b/.test(item.tech) : item.tech.includes(tech));
      return (filter === "all" || item.stage === filter) && matchTech && haystack.includes(query.trim().toLowerCase());
    }), [filter, query, tech, language]);
    useEffect(() => {
      document.body.dataset.theme = theme; savePreference("site-theme", theme);
      const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.content = theme === "dark" ? "#0b1210" : "#f4f6f0";
    }, [theme]);
    useEffect(() => { document.documentElement.lang = language === "jp" ? "ja" : language === "en" ? "en" : "zh-Hant-TW"; savePreference("site-lang", language); }, [language]);
    useEffect(() => { document.body.dataset.motion = paused || reduced ? "paused" : "playing"; savePreference("site-motion", paused ? "paused" : "playing"); }, [paused, reduced]);
    useEffect(() => {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      const update = event => setReduced(event.matches); media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }, []);
    useEffect(() => {
      const handleKeys = event => {
        if (event.key === "Escape") { setMenuOpen(false); if (document.activeElement.closest("#site-navigation")) menuButtonRef.current.focus(); }
        if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey && !/INPUT|TEXTAREA|SELECT/.test(event.target.tagName) && !event.target.isContentEditable) { event.preventDefault(); searchRef.current.focus(); }
      };
      document.addEventListener("keydown", handleKeys);
      let frame = 0;
      const updateProgress = () => { frame = 0; const total = document.documentElement.scrollHeight - window.innerHeight; if (progressRef.current) progressRef.current.style.transform = "scaleX(" + (total > 0 ? window.scrollY / total : 0) + ")"; };
      const handleScroll = () => { if (!frame) frame = window.requestAnimationFrame(updateProgress); };
      window.addEventListener("scroll", handleScroll, { passive: true }); window.addEventListener("resize", handleScroll); updateProgress();
      const observer = typeof IntersectionObserver === "function" ? new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 }) : null;
      if (observer) document.querySelectorAll("main > section[id]").forEach(section => observer.observe(section));
      return () => { document.removeEventListener("keydown", handleKeys); window.removeEventListener("scroll", handleScroll); window.removeEventListener("resize", handleScroll); window.cancelAnimationFrame(frame); if (observer) observer.disconnect(); window.clearTimeout(copyTimer.current); };
    }, []);
    useEffect(() => {
      if (!menuOpen) return;
      const closeOutside = event => { if (!event.target.closest(".topbar")) setMenuOpen(false); };
      document.addEventListener("pointerdown", closeOutside);
      return () => document.removeEventListener("pointerdown", closeOutside);
    }, [menuOpen]);
    async function copyEmail() {
      try { await navigator.clipboard.writeText("lian0123@hi2.in"); setCopyStatus("copied"); }
      catch (_) { setCopyStatus("copyFailed"); }
      window.clearTimeout(copyTimer.current); copyTimer.current = window.setTimeout(() => setCopyStatus(""), 3000);
    }
    const resetFilters = () => { setFilter("all"); setQuery(""); setTech(""); };
    const navigation = [["about", t.nav[0]], ["projects", t.nav[1]], ["writing", t.nav[2]], ["other", t.nav[3]], ["links", t.nav[4]]];
    const navActive = activeSection === "selected" ? "projects" : activeSection === "contact" ? "links" : activeSection;
    return e("div", { className: "site engineering-site" },
      e("div", { className: "reading-progress", ref: progressRef, "aria-hidden": true }),
      e("header", { className: "topbar" }, e("div", { className: "topbar-inner" },
        e("a", { className: "brand", href: "#top", "aria-label": "lian0123" }, e("span", { className: "brand-mark", "aria-hidden": true }, "L."), "LIAN", e("span", { className: "brand-code" }, "/ 0123")),
        e("nav", { id: "site-navigation", className: "mobile-nav" + (menuOpen ? " is-open" : ""), "aria-label": c.navigation }, e("ul", { className: "nav-list" }, navigation.map(([id, label]) => e("li", { key: id }, e("a", { className: "nav-link", href: "#" + id, "aria-current": navActive === id ? "location" : undefined, onClick: () => setMenuOpen(false) }, label))))),
        e("div", { className: "nav-controls" }, e("select", { className: "language-select", value: language, onChange: event => setLanguage(event.target.value), "aria-label": "Language" }, e("option", { value: "zh" }, "繁中"), e("option", { value: "en" }, "EN"), e("option", { value: "jp" }, "日本語")), e("button", { className: "theme-toggle", type: "button", onClick: () => setTheme(theme === "dark" ? "light" : "dark"), "aria-label": c.theme, "aria-pressed": theme === "light" }, theme === "dark" ? "☀" : "◐"), e("button", { className: "mobile-menu-toggle", type: "button", ref: menuButtonRef, onClick: () => setMenuOpen(!menuOpen), "aria-expanded": menuOpen, "aria-controls": "site-navigation", "aria-label": menuOpen ? c.close : c.menu }, menuOpen ? "✕" : "☰"))
      )),
      e("main", { id: "content", tabIndex: -1 },
        e("section", { id: "top", className: "portfolio-hero" },
          e("div", { className: "hero-copy" }, e("p", { className: "eyebrow hero-eyebrow" }, e("span", { className: "status-dot", "aria-hidden": true }), c.intro), e("p", { className: "hero-name" }, t.name, e("span", null, c.role)), e("h1", null, c.heroLines.map((line, index) => e("span", { key: line, className: index === 2 ? "accent-text" : "" }, line))), e("p", { className: "hero-summary" }, t.heroText), e("div", { className: "hero-actions" }, e("a", { className: "btn btn-primary", href: "#projects" }, t.view, e(Arrow)), e("a", { className: "btn btn-secondary", href: "#selected" }, c.explore, e("span", { "aria-hidden": true }, "↓"))), e("div", { className: "hero-signature" }, e("span", null, "TYPESCRIPT / NODE.JS / REACT / C++"), e("a", { href: "mailto:lian0123@hi2.in" }, t.contact, " ↗"))),
          e(SystemMap, { language, paused, setPaused, reduced }),
          e("div", { className: "hero-ledger" }, [[projects.length, t.stats[0]], [writings.length, t.stats[1]], [new Date().getFullYear() - 2015 + "+", t.stats[2]]].map(([value, label], index) => e("div", { className: "ledger-row", key: label }, e("span", { className: "ledger-index" }, "0" + (index + 1)), e("strong", null, value), e("span", null, label))), e("a", { className: "scroll-note", href: "#about" }, "MORE ABOUT ME", e("span", { "aria-hidden": true }, "↓")))
        ),
        e("section", { id: "about", className: "content-section about-section" }, Heading("01 / ABOUT ME", t.aboutTitle, t.aboutText),
          e("div", { className: "pillar-grid" }, pillarCopy[language].map(([title, text], index) => e("article", { key: title }, e("div", { className: "pillar-top" }, e("span", null, "0" + (index + 1)), e("span", { className: "pillar-symbol", "aria-hidden": true }, ["{ }", "⌘", "↗"][index])), e("h3", null, title), e("p", null, text), e("div", { className: "pillar-evidence" }, c.profileEvidence[index])))),
          e("div", { className: "approach" }, e("h3", null, c.approach), e("ol", { className: "approach-steps" }, c.steps.map(([title, text], index) => e("li", { key: title }, e("span", { className: "step-number" }, "0" + (index + 1)), e("h4", null, title), e("p", null, text)))))
        ),
        e(CaseStudies, { language }),
        e("section", { id: "projects", className: "content-section" }, Heading("03 / MY PROJECTS", t.engineering, t.engineeringText),
          e("div", { className: "project-toolbar" }, e("div", { className: "filter-row", role: "group", "aria-label": t.engineering }, [["all", t.filter[0]], ["after", t.filter[1]], ["university", t.filter[2]]].map(([value, label]) => e("button", { key: value, type: "button", className: "filter-button" + (filter === value ? " active" : ""), "aria-pressed": filter === value, onClick: () => setFilter(value) }, label, e("span", null, value === "all" ? projects.length : projects.filter(item => item.stage === value).length)))),
            e("div", { className: "search-controls" }, e("label", { className: "search-box" }, e("span", { className: "sr-only" }, c.searchLabel), e("span", { className: "search-symbol", "aria-hidden": true }, "⌕"), e("input", { type: "search", ref: searchRef, value: query, onChange: event => setQuery(event.target.value), placeholder: c.search, "aria-controls": "project-results" }), e("kbd", { "aria-hidden": true }, "/")), e("select", { className: "tech-select", value: tech, onChange: event => setTech(event.target.value), "aria-label": c.techLabel }, e("option", { value: "" }, c.allTech), techGroups.map(group => e("option", { key: group, value: group }, group))))),
          e("div", { className: "results-bar" }, e("span", { role: "status", "aria-live": "polite", "aria-atomic": true }, String(filtered.length).padStart(2, "0"), " / ", projects.length, " ", c.results), filter !== "all" || query || tech ? e("button", { type: "button", onClick: resetFilters }, c.clear, " ×") : e("span", null, "PERSONAL PROJECTS / 2017—2026")),
          e("div", { id: "project-results", className: "work-grid" }, filtered.map(item => e(Card, { key: item.title, item, action: t.viewProject, t, language }))),
          !filtered.length ? e("div", { className: "empty-state" }, e("span", { "aria-hidden": true }, "[ ∅ ]"), e("h3", null, c.empty), e("p", null, c.emptyHelp), e("button", { className: "btn btn-secondary", type: "button", onClick: resetFilters }, c.clear)) : null
        ),
        e("section", { id: "writing", className: "content-section" }, Heading("04 / WHAT I WRITE", t.writing, t.writingText), e("div", { className: "writing-list" }, writings.map((item, index) => { const localized = workText(item, language); return e("a", { ...external(item.link, "writing-item"), key: item.link }, e("span", { className: "writing-index" }, String(index + 1).padStart(2, "0")), e("div", null, e("p", { className: "writing-meta" }, e("time", { dateTime: item.date }, item.date), " · ", t.labels[item.stage], " · ", item.tech.replace(item.date + " · ", "")), e("h3", null, localized.title), e("p", null, localized.description)), e("span", { className: "writing-arrow", "aria-hidden": true }, "↗")); }))),
        e("section", { id: "other", className: "content-section" }, Heading("05 / OTHER INTERESTS", t.other, t.otherText), e("div", { className: "work-grid other-grid" }, otherWorks.map(item => e(Card, { key: item.title, item, action: t.viewWork, t, language })))),
        e("section", { id: "contact", className: "content-section business-card-section" }, Heading("06 / CONTACT CARDS", t.cardTitle, t.cardText), e("div", { className: "business-card-grid" }, [["Lian0123_main_card.html", language === "en" ? "Profile card" : language === "jp" ? "プロフィール名刺" : "個人名片"], ["Lian0123_qr_card.html", language === "en" ? "QR contact card" : language === "jp" ? "QR連絡先" : "QR 聯絡名片"]].map(([file, title], index) => e("article", { className: "business-card-item", key: file }, e("div", { className: "business-card-header" }, e("span", null, "0" + (index + 1)), e("h3", null, title)), e("div", { className: "business-card-preview" }, e("iframe", { src: "./" + file, title, loading: "lazy", referrerPolicy: "no-referrer" })), e("a", external("./" + file, "work-link"), t.openCard, e(Arrow)))))),
        e("section", { id: "links", className: "content-section links-section" }, Heading("07 / FIND ME", t.links, t.linksText), e("div", { className: "link-grid" }, links.map(([name, description, href], index) => e("a", { ...external(href), key: name }, e("strong", null, name), e("span", null, linkCopy[language][index][0] || description), e("b", { "aria-hidden": true }, "↗")))),
          e("div", { className: "contact-banner" }, e("div", null, e("p", { className: "eyebrow" }, "SAY HELLO"), e("h2", null, c.contactLead), e("p", null, c.contactBody)), e("div", { className: "contact-actions" }, e("a", { className: "btn btn-primary", href: "mailto:lian0123@hi2.in" }, c.mail, e(Arrow)), e("button", { type: "button", className: "copy-email", onClick: copyEmail }, copyStatus ? c[copyStatus] : c.copy), e("span", { className: "sr-only", role: "status" }, copyStatus ? c[copyStatus] : "")))
        )
      ),
      e("footer", null, e("span", null, "© ", new Date().getFullYear(), " LIAN / 0123"), e("span", null, t.footer), e("a", { href: "#top", className: "back-to-top" }, c.top, " ↑"))
    );
  }
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => null));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(e(App));
})();
