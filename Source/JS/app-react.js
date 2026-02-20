(function () {
  const e = React.createElement;
  const useEffect = React.useEffect;
  const useMemo = React.useMemo;
  const useState = React.useState;
  const LOADER_MIN_DURATION = 1000;
  const loaderStartTime = Date.now();

  const I18N = {
    zh: {
      pageTitle: { about: "關於我", portfolio: "作品頁", log: "日誌", contact: "相關連結" },
      nav: { about: "關於我", portfolio: "作品頁", log: "日誌", contact: "相關連結" },
      langLabel: "語言",
      themeDark: "深色",
      themeLight: "亮色",
      heroEyebrow: "Professional Backend Engineer · Professional Full-Stack Engineer",
      heroSummary: "聚焦後端與全端工程實作，強調高可用、可維護與穩定交付。",
      viewPortfolio: "查看作品",
      github: "GitHub",
      metricPage: "目前頁面",
      metricTabs: "作品分類",
      metricYear: "年度",
      tabProgram: "程式",
      tabArticle: "文章",
      tabOther: "其他",
      profileTitle: "背景與經歷",
      profileSubtitle: "長期投入後端與全端工程，持續優化系統效能、穩定性與專案管理流程。",
      profileFacts: [
        "後端架構與 API 設計：涵蓋資料庫建模、快取與高併發處理。",
        "全端整合與部署：從前端互動到後端服務與部署流程。",
        "專案管理：落實排程規劃、風險控管與跨團隊協作。"
      ],
      skillLabels: {
        backendArchitecture: "後端架構",
        databaseDesign: "資料庫設計",
        apiEngineering: "API 工程",
        fullStackDelivery: "全端交付",
        aiAssistedDevelopment: "AI輔助開發",
        projectManagement: "專案管理",
        devopsOps: "DevOps 與維運"
      },
      cardFrameTitle: "名片卡展示",
      skillTitle: "技術能力矩陣",
      skillSubtitle: "以能力條與能力矩陣呈現核心技術。",
      capabilityTitle: "核心能力",
      capabilityItems: [
        { name: "後端架構設計", level: "高" },
        { name: "全端系統整合", level: "高" },
        { name: "效能優化", level: "中高" },
        { name: "專案管理", level: "中高" }
      ],
      journeyTitle: "經歷時間軸",
      portfolioTitle: "作品與專案",
      portfolioSubtitle: "依分類檢視作品，含預覽與連結。",
      projectLink: "作品連結",
      openPreview: "開啟預覽",
      logTitle: "工程日誌",
      logSubtitle: "記錄近期技術決策、優化重點與交付成果。",
      contactTitle: "相關連結",
      contactSubtitle: "相關連結",
      linkGithub: "GitHub Link",
      linkSlideshare: "SideShare Link",
      linkFacebook: "FaceBook Link",
      linkPixiv: "Pixiv Link",
      oldSite: "舊版網頁",
      contactName: "姓名",
      contactEmail: "Email",
      contactTopic: "主旨",
      contactMessage: "訊息內容",
      contactSubmit: "送出（建立郵件）",
      mailDefaultTopic: "網站聯絡"
    },
    en: {
      pageTitle: { about: "About", portfolio: "Portfolio", log: "Log", contact: "Related Links" },
      nav: { about: "About", portfolio: "Portfolio", log: "Log", contact: "Related Links" },
      langLabel: "Language",
      themeDark: "Dark",
      themeLight: "Light",
      heroEyebrow: "Professional Backend Engineer · Professional Full-Stack Engineer",
      heroSummary: "Focused on backend and full-stack delivery with reliability, maintainability, and performance.",
      viewPortfolio: "View Projects",
      github: "GitHub",
      metricPage: "Current Page",
      metricTabs: "Categories",
      metricYear: "Year",
      tabProgram: "Program",
      tabArticle: "Article",
      tabOther: "Other",
      profileTitle: "Background & Experience",
      profileSubtitle: "Hands-on backend and full-stack engineering focused on performance, reliability, and project delivery.",
      profileFacts: [
        "Backend architecture and API engineering with database and caching strategy.",
        "Full-stack integration from UX interactions to backend service delivery.",
        "Project management with planning, risk control, and team collaboration."
      ],
      skillLabels: {
        backendArchitecture: "Backend Architecture",
        databaseDesign: "Database Design",
        apiEngineering: "API Engineering",
        fullStackDelivery: "Full-Stack Delivery",
        aiAssistedDevelopment: "AI-Assisted Development",
        projectManagement: "Project Management",
        devopsOps: "DevOps & Ops"
      },
      cardFrameTitle: "Business Card Showcase",
      skillTitle: "Technical Capability Matrix",
      skillSubtitle: "Core capabilities shown with progress bars and matrix view.",
      capabilityTitle: "Core Competencies",
      capabilityItems: [
        { name: "Backend Architecture", level: "High" },
        { name: "Full-Stack Integration", level: "High" },
        { name: "Performance Optimization", level: "Mid-High" },
        { name: "Project Management", level: "Mid-High" }
      ],
      journeyTitle: "Timeline",
      portfolioTitle: "Projects & Works",
      portfolioSubtitle: "Browse categorized works with preview and links.",
      projectLink: "Project Link",
      openPreview: "Open Preview",
      logTitle: "Engineering Log",
      logSubtitle: "Recent decisions, improvements, and delivery highlights.",
      contactTitle: "Related Links",
      contactSubtitle: "Related Links",
      linkGithub: "GitHub Link",
      linkSlideshare: "SideShare Link",
      linkFacebook: "FaceBook Link",
      linkPixiv: "Pixiv Link",
      oldSite: "Legacy Site",
      contactName: "Name",
      contactEmail: "Email",
      contactTopic: "Subject",
      contactMessage: "Message",
      contactSubmit: "Send (Create Email)",
      mailDefaultTopic: "Website Contact"
    },
    jp: {
      pageTitle: { about: "自己紹介", portfolio: "作品", log: "ログ", contact: "関連リンク" },
      nav: { about: "自己紹介", portfolio: "作品", log: "ログ", contact: "関連リンク" },
      langLabel: "言語",
      themeDark: "ダーク",
      themeLight: "ライト",
      heroEyebrow: "Professional Backend Engineer · Professional Full-Stack Engineer",
      heroSummary: "バックエンドとフルスタック実装を中心に、安定性と保守性を重視。",
      viewPortfolio: "作品を見る",
      github: "GitHub",
      metricPage: "現在のページ",
      metricTabs: "カテゴリ",
      metricYear: "年",
      tabProgram: "プログラム",
      tabArticle: "記事",
      tabOther: "その他",
      profileTitle: "背景と経歴",
      profileSubtitle: "性能・安定性・保守性に加え、プロジェクト管理を重視した実務を継続。",
      profileFacts: [
        "バックエンド設計とAPI実装、DB設計、キャッシュ最適化。",
        "フロントからバックエンドまで一貫した実装と運用。",
        "プロジェクト管理として計画策定・リスク管理・チーム連携を実施。"
      ],
      skillLabels: {
        backendArchitecture: "バックエンド設計",
        databaseDesign: "データベース設計",
        apiEngineering: "APIエンジニアリング",
        fullStackDelivery: "フルスタック実装",
        aiAssistedDevelopment: "AI支援開発",
        projectManagement: "プロジェクト管理",
        devopsOps: "DevOps・運用"
      },
      cardFrameTitle: "名刺カード表示",
      skillTitle: "技術マトリクス",
      skillSubtitle: "能力バーでコア技術を可視化。",
      capabilityTitle: "コア能力",
      capabilityItems: [
        { name: "バックエンド設計", level: "高" },
        { name: "フルスタック統合", level: "高" },
        { name: "性能最適化", level: "中高" },
        { name: "プロジェクト管理", level: "中高" }
      ],
      journeyTitle: "経歴タイムライン",
      portfolioTitle: "作品・プロジェクト",
      portfolioSubtitle: "カテゴリ別にプレビューとリンクを確認できます。",
      projectLink: "作品リンク",
      openPreview: "プレビュー",
      logTitle: "エンジニアリングログ",
      logSubtitle: "最近の技術判断と改善内容を記録。",
      contactTitle: "関連リンク",
      contactSubtitle: "関連リンク",
      linkGithub: "GitHub Link",
      linkSlideshare: "SideShare Link",
      linkFacebook: "FaceBook Link",
      linkPixiv: "Pixiv Link",
      oldSite: "旧版サイト",
      contactName: "名前",
      contactEmail: "メール",
      contactTopic: "件名",
      contactMessage: "メッセージ",
      contactSubmit: "送信（メール下書き）",
      mailDefaultTopic: "サイト連絡"
    }
  };

  const skillScores = [
    { key: "backendArchitecture", score: 95 },
    { key: "databaseDesign", score: 90 },
    { key: "apiEngineering", score: 92 },
    { key: "fullStackDelivery", score: 88 },
    { key: "aiAssistedDevelopment", score: 82 },
    { key: "projectManagement", score: 80 },
    { key: "devopsOps", score: 80}
  ];

  const logs = [
    {
      date: "2026-02-17",
      title: { zh: "v1 日誌內容完成同步", en: "v1 log content synced", jp: "v1ログ内容を同期" },
      text: {
        zh: ["新增 v1 文章標題與內容到新版日誌。", "完成作品分類與載入流程優化同步。"],
        en: ["Added v1 post title and content into the new log page.", "Completed portfolio classification and loading-flow sync updates."],
        jp: ["v1の記事タイトルと本文を新ログに反映。", "作品分類とローディング改善の同期を完了。"]
      }
    },
    {
      date: "2026-02-16",
      title: { zh: "React 架構優化與互動升級", en: "React architecture and interaction upgrade", jp: "React構成とインタラクション改善" },
      text: {
        zh: "完成主題系統重整、動畫互動優化與 PWA 安裝能力，改善整體使用體驗。",
        en: "Completed theme refresh, interaction upgrades, and PWA install capability for better UX.",
        jp: "テーマ刷新・操作アニメーション改善・PWA対応でUXを向上。"
      }
    },
    {
      date: "2020-04-24",
      title: { zh: "這是第一篇的文章", en: "This is the first post", jp: "これは最初の記事です" },
      text: {
        zh: ["值得紀念、值得紀念、值得紀念。", "\\( O ω O )/ 特此留文!!!"],
        en: ["Memorable day, memorable day, truly memorable.", "\\( O ω O )/ A special note is left here!"],
        jp: ["記念すべき日、記念すべき日、記念すべき日。", "\\( O ω O )/ ここに記録を残します!!!"]
      }
    }
  ];

  const portfolioItems = [
    {
      type: "program",
      year: "2026",
      date: "2026-02-20",
      title: { zh: "WAF 安全規則檢查器", en: "WAF Rule Checker", jp: "WAFルール検査器" },
      description: {
        zh: "專業級安全規則驗證工具，支援多種 WAF 規則格式檢查、語法驗證與安全審計。",
        en: "Professional security rule validation tool supporting multiple WAF formats with syntax checking and security audits.",
        jp: "複数のWAFル形式に対応したプロフェッショナルな検証ツール、構文チェックと安全性監査機能。"
      },
      link: "https://lian0123.github.io/waf-rule-checker/index.html",
      preview: "./Source/IMG/react-portfolio/waf-rule-checker.svg",
      tags: ["Program", "2026", "Tool"]
    },
    {
      type: "program",
      year: "2026",
      date: "2026-02-20",
      title: { zh: "迷你服務器資料庫生成器", en: "Mini Server DB Generator", jp: "ミニサーバーDB生成器" },
      description: {
        zh: "智能快速建立小型服務器資料庫的生成工、資料導入與一鍵導出功能。",
        en: "Intelligent quick-start tool for mini server database generation with schema configuration and one-click export.",
        jp: "小型サーバーデータベースを素早く構築・設定・エクスポートするスマートなジェネレーター。"
      },
      link: "https://lian0123.github.io/mini-server-db-generator/index.html",
      preview: "./Source/IMG/react-portfolio/mini-server-db-generator.svg",
      tags: ["Program", "2026", "Tool"]
    },
    {
      type: "program",
      year: "2026",
      date: "2026-02-20",
      title: { zh: "密碼加密編輯器", en: "Password Encrypt Editor", jp: "パスワード暗号化エディター" },
      description: {
        zh: "安全的密碼加密編輯工具，支援多種加密演算法、本地存儲與便捷密碼管理功能。",
        en: "Secure password encryption editor with multiple algorithms, local storage, and convenient password management features.",
        jp: "複数の暗号化アルゴリズムとローカルストレージに対応したセキュアなパスワード編集・管理ツール。"
      },
      link: "https://lian0123.github.io/password-encrypt-editor/index.html",
      preview: "./Source/IMG/react-portfolio/password-encrypt-editor.svg",
      tags: ["Program", "2026", "Tool"]
    },
    {
      type: "program",
      year: "2026",
      date: "2026-01-01",
      title: { zh: "專業名片製作工具", en: "Professional Business Card Tool", jp: "プロ名刺制作ツール" },
      description: {
        zh: "可快速建立與展示個人專業名片的線上工具，支援多種範本與客製化設計。",
        en: "A web tool to quickly build and present professional business cards with multiple templates and customization.",
        jp: "プロフェッショナル名刺を素早く作成・表示できるWebツール、複数のテンプレート対応。"
      },
      link: "https://lian0123.github.io/virtual-business-card-project/",
      preview: "./Source/IMG/react-portfolio/pro-business-card.svg",
      tags: ["Program", "2026", "Tool"]
    },
    {
      type: "program",
      year: "2023",
      date: "2023-01-01",
      title: { zh: "JP-Voice-Saver", en: "JP-Voice-Saver", jp: "JP-Voice-Saver" },
      description: {
        zh: "日旅常用語音與會話保存輔助工具，便於快速查詢與學習日文旅遊用語。",
        en: "A helper tool to save and quickly access Japanese travel phrases with pronunciation guidance.",
        jp: "旅行向け日本語フレーズを保存・即時利用する補助ツール、音声ガイド付き。"
      },
      link: "https://lian0123.github.io/jp-travel-talk-tool/",
      preview: "./Source/IMG/react-portfolio/jp-voice-saver.svg",
      tags: ["Program", "2023", "Tool"]
    },
    {
      type: "program",
      year: "2022",
      date: "2022-01-01",
      title: { zh: "expressJS 模板", en: "expressJS Template", jp: "expressJS テンプレート" },
      description: {
        zh: "TypeScript + Express 的後端快速啟動模板，包含最佳實踐與常用構件。",
        en: "A TypeScript + Express starter template for backend projects with best practices and common utilities.",
        jp: "TypeScript + Express のバックエンド開始用テンプレート、ベストプラクティス含む。"
      },
      link: "http://github.com/Lian0123/my-typescript-express-template",
      preview: "./Source/IMG/react-portfolio/express-template.svg",
      tags: ["Program", "2022", "Template"]
    },
    {
      type: "program",
      year: "2019",
      date: "2019-06-10",
      title: { zh: "107-02-IOT-Project", en: "107-02-IOT-Project", jp: "107-02-IOT-Project" },
      description: {
        zh: "物聯網課程期末專案，NB-IOT 裝置資料回傳與 Web 即時顯示系統。",
        en: "IOT course project with NB-IOT data flow to real-time web dashboard and visualization.",
        jp: "NB-IOTデータをWebにリアルタイム可視化するIoT授業プロジェクト。"
      },
      link: "https://github.com/Lian0123/107-02-IOT-Project",
      preview: "./Source/IMG/react-portfolio/iot-project.svg",
      tags: ["v1", "Program", "IOT"]
    },
    {
      type: "program",
      year: "2019",
      date: "2019-01-09",
      title: { zh: "教師Meeting預約系統", en: "Teacher Meeting System", jp: "教師Meeting予約システム" },
      description: {
        zh: "教師與學生小組預約管理系統，支援時間衝突檢查與自動通知。",
        en: "Reservation management system for teacher/student meeting slots with conflict detection and automatic notifications.",
        jp: "教員と学生グループの予約管理システム、スケジュール衝突検出機能付き。"
      },
      link: "https://github.com/Lian0123/lian0123.github.io",
      preview: "./Source/IMG/react-portfolio/meeting-system.svg",
      tags: ["v1", "Program", "Go"]
    },
    {
      type: "program",
      year: "2018",
      date: "2018-08-16",
      title: { zh: "twcall", en: "twcall", jp: "twcall" },
      description: {
        zh: "修正 Big5 編碼顯示問題的終端工具，便於台灣用戶使用 Linux 終端機。",
        en: "Terminal helper for Big5 encoding display issues, enabling Taiwan Linux users better experience.",
        jp: "Big5文字化け対策向けの端末ツール、台湾ユーザー向けのLinux支援。"
      },
      link: "https://github.com/Lian0123/twcall",
      preview: "./Source/IMG/react-portfolio/twcall-tool.svg",
      tags: ["v1", "Program", "Bash"]
    },
    {
      type: "program",
      year: "2018",
      date: "2018-07-28",
      title: { zh: "FMiCa-TW.sh", en: "FMiCa-TW.sh", jp: "FMiCa-TW.sh" },
      description: {
        zh: "Linux Mint Cinnamon Taiwan 使用者安裝腳本，一鍵快速環境配置。",
        en: "Installer script for Linux Mint Cinnamon Taiwan users with one-click environment setup.",
        jp: "Linux Mint Cinnamon Taiwan向けインストールスクリプト、ワンクリック環境構築。"
      },
      link: "https://github.com/Lian0123/FMiCa-TW.sh",
      preview: "./Source/IMG/react-portfolio/fmica-tw.svg",
      tags: ["v1", "Program", "Script"]
    },
    {
      type: "program",
      year: "2018",
      date: "2018-04-15",
      title: { zh: "Convolution Machine", en: "Convolution Machine", jp: "Convolution Machine" },
      description: {
        zh: "訊號與系統課程專案，支援捲積函數視覺化與互動式教學。",
        en: "Signals and systems project with convolution visualization and interactive learning.",
        jp: "畳み込み関数を可視化する信号処理プロジェクト、インタラクティブ学習対応。"
      },
      link: "https://github.com/Lian0123/CM",
      preview: "./Source/IMG/react-portfolio/convolution-machine.svg",
      tags: ["v1", "Program", "JavaScript"]
    },
    {
      type: "article",
      year: "2019",
      date: "2019-01-30",
      title: { zh: "Linux 安裝篇 ArchLabs Part3", en: "Linux Install ArchLabs Part3", jp: "Linuxインストール ArchLabs Part3" },
      description: {
        zh: "依 v1/documentView 分類為教學文章：安裝後設定建議。",
        en: "Teaching article in v1/documentView: post-install setup suggestions.",
        jp: "v1/documentView分類の教材：導入後の推奨設定。"
      },
      link: "https://www.slideshare.net/ssuser6090c0/linux-linux-archlabs-20190120-part3",
      preview: "./Source/IMG/react-portfolio/archlabs-part3.svg",
      tags: ["v1", "Article", "Linux"]
    },
    {
      type: "article",
      year: "2016",
      date: "2016-12-31",
      title: { zh: "C 語言從崩潰到崩潰 Ex(一)", en: "C Language Crash to Crash Ex(1)", jp: "C言語クラッシュからクラッシュ Ex(1)" },
      description: {
        zh: "依 v1/documentView 分類為教學文章：C 基礎語法說明。",
        en: "Teaching article in v1/documentView: C language fundamentals.",
        jp: "v1/documentView分類の教材：C言語の基礎解説。"
      },
      link: "https://www.slideshare.net/ssuser6090c0/cex-70564975",
      preview: "./Source/IMG/react-portfolio/c-crash-ex1.svg",
      tags: ["v1", "Article", "C"]
    },
    {
      type: "article",
      year: "2017",
      date: "2017-08-23",
      title: { zh: "C 語言從崩潰到崩潰 Ex(二)", en: "C Language Crash to Crash Ex(2)", jp: "C言語クラッシュからクラッシュ Ex(2)" },
      description: {
        zh: "依 v1/documentView 分類為教學文章：C 進階語法說明。",
        en: "Teaching article in v1/documentView: advanced C syntax notes.",
        jp: "v1/documentView分類の教材：C言語の応用構文。"
      },
      link: "https://www.slideshare.net/ssuser6090c0/cex-79080568",
      preview: "./Source/IMG/react-portfolio/c-crash-ex2.svg",
      tags: ["v1", "Article", "C"]
    },
    {
      type: "article",
      year: "2017",
      date: "2017-06-26",
      title: { zh: "看似比較簡單的Linux推坑教學 講解在手機上使用 linux", en: "Linux on Android Phone Tutorial", jp: "スマホでLinuxを使う解説" },
      description: {
        zh: "加入文章分類：Android 上使用 Linux（GNUroot Debian）說明。",
        en: "Added to article category: using Linux (GNUroot Debian) on Android.",
        jp: "記事カテゴリ追加：AndroidでLinux（GNUroot Debian）を使う解説。"
      },
      link: "https://www.slideshare.net/ssuser6090c0/linux-linux-77271842",
      preview: "./Source/IMG/react-portfolio/linux-phone.svg",
      tags: ["v1", "Article", "Linux"]
    },
    {
      type: "article",
      year: "2017",
      date: "2017-04-08",
      title: { zh: "看似比較簡單的Linux推坑教學 linux mint cinnamon 18.1 操作設定教學", en: "Linux Mint Cinnamon 18.1 Setup Tutorial", jp: "Linux Mint Cinnamon 18.1 設定チュートリアル" },
      description: {
        zh: "加入文章分類：Linux Mint Cinnamon 設定教學。",
        en: "Added to article category: Linux Mint Cinnamon operation setup tutorial.",
        jp: "記事カテゴリ追加：Linux Mint Cinnamon操作設定チュートリアル。"
      },
      link: "https://www.slideshare.net/ssuser6090c0/linux-linux-mint-cinnamon-181",
      preview: "./Source/IMG/react-portfolio/linux-mint-181.svg",
      tags: ["v1", "Article", "Linux"]
    },
    {
      type: "article",
      year: "2016",
      date: "2016-10-15",
      title: { zh: "看似比較簡單的Linux推坑教學 Linux安裝篇 manjaro linux 201606 kde", en: "Manjaro Linux 201606 KDE Tutorial", jp: "Manjaro Linux 201606 KDE 教材" },
      description: {
        zh: "加入文章分類：Manjaro Linux 安裝與設定。",
        en: "Added to article category: Manjaro Linux installation and setup.",
        jp: "記事カテゴリ追加：Manjaro Linuxの導入と設定。"
      },
      link: "https://www.slideshare.net/ssuser6090c0/linux-manjaro-linux-201606-kde",
      preview: "./Source/IMG/react-portfolio/manjaro-201606.svg",
      tags: ["v1", "Article", "Linux"]
    },
    {
      type: "article",
      year: "2016",
      date: "2016-11-26",
      title: { zh: "看似比較簡單的Linux推坑教學 Linux CLI 基本教學", en: "Linux CLI Basic Tutorial", jp: "Linux CLI 基本チュートリアル" },
      description: {
        zh: "加入文章分類：終端指令、w3m 與 vim 入門。",
        en: "Added to article category: command line, w3m, and vim basics.",
        jp: "記事カテゴリ追加：コマンド、w3m、vimの入門。"
      },
      link: "https://www.slideshare.net/ssuser6090c0/linux-linux-cli",
      preview: "./Source/IMG/react-portfolio/linux-cli.svg",
      tags: ["v1", "Article", "Linux"]
    },
    {
      type: "other",
      year: "2019",
      date: "2019-06-11",
      title: { zh: "基於古典加密法中的替換密碼在音訊轉置到 bmp影像之欺騙偽造設計", en: "Image-Audio-Player Encryption Design", jp: "画像音声変換暗号設計" },
      description: {
        zh: "音訊轉置到 BMP 影像的欺騙偽造與加解密設計。",
        en: "Audio-to-BMP deceptive encryption design.",
        jp: "音声をBMPへ転置する暗号設計。"
      },
      link: "https://github.com/Lian0123/Image-Audio-Player",
      preview: "./Source/IMG/react-portfolio/image-audio-player.svg",
      tags: ["v1", "Other", "Security"]
    }
  ];

  function startLoaderProgress() {
    const fill = document.getElementById("loader-progress-fill");
    const progressText = document.getElementById("loader-progress-text");
    if (!fill) {
      return { finish: function () {} };
    }

    let current = 0;
    let target = 0;

    function paint(next) {
      const value = Math.max(0, Math.min(100, Math.round(next)));
      fill.style.width = value + "%";
      if (progressText) {
        progressText.textContent = value + "%";
      }
    }

    function setTarget(value) {
      target = Math.max(target, Math.min(100, value));
    }

    const easingTimer = window.setInterval(function () {
      const delta = target - current;
      if (Math.abs(delta) < 0.2) {
        current = target;
      } else {
        current += delta * 0.22;
      }
      paint(current);
    }, 42);

    setTarget(8);

    if (document.readyState !== "loading") {
      setTarget(32);
    } else {
      document.addEventListener("DOMContentLoaded", function () {
        setTarget(32);
      }, { once: true });
    }

    const trackedNodes = Array.from(document.querySelectorAll("img[src], iframe[src], link[rel='stylesheet'][href], script[src]"));
    let total = 0;
    let loaded = 0;

    function syncResourceProgress() {
      if (!total) {
        setTarget(72);
        return;
      }
      const ratio = loaded / total;
      setTarget(32 + Math.round(ratio * 56));
    }

    trackedNodes.forEach(function (node) {
      if (node.tagName === "IMG" && node.complete) {
        return;
      }
      total += 1;
      const done = function () {
        loaded += 1;
        syncResourceProgress();
      };
      node.addEventListener("load", done, { once: true });
      node.addEventListener("error", done, { once: true });
    });
    syncResourceProgress();

    const libraryReadyTimer = window.setInterval(function () {
      if (window.React && window.ReactDOM) {
        setTarget(82);
        window.clearInterval(libraryReadyTimer);
      }
    }, 40);

    return {
      markAppReady: function () {
        setTarget(94);
      },
      markWindowLoaded: function () {
        setTarget(100);
      },
      finish: function () {
        setTarget(100);
        window.clearInterval(libraryReadyTimer);
        window.setTimeout(function () {
          current = 100;
          paint(100);
          window.clearInterval(easingTimer);
        }, 120);
      }
    };
  }

  function removeLoader() {
    const loader = document.getElementById("site-loader");
    document.body.classList.remove("is-loading");
    if (!loader) {
      return;
    }
    loader.classList.add("is-hidden");
    window.setTimeout(function () {
      if (loader && loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 320);
  }

  function initParticles(theme) {
    if (typeof window.particlesJS !== "function") {
      return;
    }
    try {
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom.forEach(function (instance) {
          if (instance && instance.pJS && instance.pJS.fn && instance.pJS.fn.vendors) {
            instance.pJS.fn.vendors.destroypJS();
          }
        });
        window.pJSDom = [];
      }
    } catch (error) {
      const container = document.getElementById("particles-js");
      if (container) {
        container.innerHTML = "";
      }
    }
    const particleColor = theme === "light" ? "#1f8f62" : "#44c98c";
    const lineColor = theme === "light" ? "#7bcfae" : "#2b9f72";
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 46, density: { enable: true, value_area: 900 } },
        color: { value: particleColor },
        shape: { type: "circle" },
        opacity: { value: 0.35, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 140, color: lineColor, opacity: 0.22, width: 1 },
        move: { enable: true, speed: 1.8, random: false, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 180, line_linked: { opacity: 0.32 } },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./service-worker.js").catch(function () {
        return null;
      });
    });
  }

  function App() {
    const initialPage = window.location.hash.replace("#", "") || "about";
    const [activePage, setActivePage] = useState(initialPage);
    const [activeTab, setActiveTab] = useState("program");
    const [language, setLanguage] = useState("zh");
    const [theme, setTheme] = useState("dark");
    const [formState, setFormState] = useState({ name: "", email: "", topic: "", message: "" });
    const year = new Date().getFullYear();

    const t = I18N[language] || I18N.zh;

    useEffect(function () {
      const savedLang = localStorage.getItem("site-lang");
      const savedTheme = localStorage.getItem("site-theme");
      if (savedLang && I18N[savedLang]) {
        setLanguage(savedLang);
      }
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
      }
      const onHashChange = function () {
        setActivePage(window.location.hash.replace("#", "") || "about");
      };
      window.addEventListener("hashchange", onHashChange);
      return function () {
        window.removeEventListener("hashchange", onHashChange);
      };
    }, []);

    useEffect(function () {
      localStorage.setItem("site-lang", language);
      document.documentElement.setAttribute("lang", language === "jp" ? "ja" : language === "en" ? "en" : "zh-Hant-TW");
    }, [language]);

    useEffect(function () {
      localStorage.setItem("site-theme", theme);
      document.body.setAttribute("data-theme", theme);
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute("content", theme === "light" ? "#dbfaed" : "#0f2a20");
      }
      initParticles(theme);
    }, [theme]);

    useEffect(function () {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        { threshold: 0.12 }
      );

      const nodes = document.querySelectorAll(".reveal");
      nodes.forEach(function (node) {
        observer.observe(node);
      });
      return function () {
        observer.disconnect();
      };
    }, [activePage, activeTab, language]);

    const filteredItems = useMemo(function () {
      return portfolioItems.filter(function (item) {
        return item.type === activeTab;
      });
    }, [activeTab]);

    function gotoPage(pageKey) {
      window.location.hash = pageKey;
      setActivePage(pageKey);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function openMailDraft(event) {
      event.preventDefault();
      const topic = formState.topic.trim() || t.mailDefaultTopic;
      const body =
        t.contactName + ": " + formState.name.trim() + "\n" +
        t.contactEmail + ": " + formState.email.trim() + "\n\n" +
        formState.message.trim();
      window.location.href = "mailto:hello@example.com?subject=" + encodeURIComponent(topic) + "&body=" + encodeURIComponent(body);
    }

    function renderAboutPage() {
      return e(
        "div",
        { className: "page-content", key: "about" },
        e(
          "section",
          { className: "section reveal" },
          e("h2", { className: "section-title" }, t.profileTitle),
          e("p", { className: "section-subtitle" }, t.profileSubtitle),
          e(
            "ul",
            { className: "fact-list" },
            t.profileFacts.map(function (fact) {
              return e("li", { key: fact }, fact);
            })
          )
        ),
        e(
          "section",
          { className: "section reveal" },
          e("h2", { className: "section-title" }, t.cardFrameTitle),
          e(
            "div",
            { className: "card-grid card-grid--cards" },
            e(
              "article",
              { className: "card card-float" },
              e(
                "div",
                { className: "iframe-card iframe-card--equal" },
                e("iframe", {
                  src: "./Lian0123_main_card.html",
                  title: "Lian0123 Main Card",
                  loading: "lazy",
                  referrerPolicy: "no-referrer",
                  sandbox: "allow-scripts allow-same-origin"
                })
              ),
              e(
                "div",
                { className: "card-actions" },
                e("a", { className: "btn btn-primary", href: "./Lian0123_main_card.html", target: "_blank", rel: "noopener noreferrer" }, t.openPreview)
              )
            ),
            e(
              "article",
              { className: "card card-float" },
              e(
                "div",
                { className: "iframe-card iframe-card--equal" },
                e("iframe", {
                  src: "./Lian0123_qr_card.html",
                  title: "Lian0123 QR Card",
                  loading: "lazy",
                  referrerPolicy: "no-referrer",
                  sandbox: "allow-scripts allow-same-origin"
                })
              ),
              e(
                "div",
                { className: "card-actions" },
                e("a", { className: "btn btn-primary", href: "./Lian0123_qr_card.html", target: "_blank", rel: "noopener noreferrer" }, t.openPreview)
              )
            )
          )
        ),
        e(
          "section",
          { className: "section reveal" },
          e("h2", { className: "section-title" }, t.skillTitle),
          e("p", { className: "section-subtitle" }, t.skillSubtitle),
          e(
            "div",
            { className: "skill-layout" },
            e(
              "div",
              { className: "skill-bars" },
              skillScores.map(function (skill, skillIndex) {
                return e(
                  "div",
                  { className: "skill-row", key: skill.key },
                  e("span", { className: "skill-name" }, (t.skillLabels && t.skillLabels[skill.key]) ? t.skillLabels[skill.key] : skill.key),
                  e("div", { className: "skill-track" }, e("div", { className: "skill-fill", style: { "--skill-target": skill.score + "%", animationDelay: (skillIndex * 90) + "ms" } })),
                  e("span", { className: "skill-score" }, skill.score)
                );
              })
            ),
            e(
              "div",
              { className: "capability-card" },
              e("h3", { className: "capability-title" }, t.capabilityTitle),
              e(
                "div",
                { className: "capability-grid" },
                t.capabilityItems.map(function (item, index) {
                  return e(
                    "div",
                    { className: "cap-item", key: item.name, style: { animationDelay: (index * 80) + "ms" } },
                    e("p", { className: "cap-name" }, item.name),
                    e("p", { className: "cap-level" }, item.level)
                  );
                })
              )
            )
          )
        )
      );
    }

    function renderPortfolioPage() {
      return e(
        "div",
        { className: "page-content", key: "portfolio" },
        e(
          "section",
          { className: "section reveal" },
          e("h2", { className: "section-title" }, t.portfolioTitle),
          e("p", { className: "section-subtitle" }, t.portfolioSubtitle),
          e(
            "div",
            { className: "tab-list", role: "tablist", "aria-label": "portfolio tabs" },
            e("button", { type: "button", className: "tab-btn" + (activeTab === "program" ? " is-active" : ""), onClick: function () { setActiveTab("program"); } }, t.tabProgram),
            e("button", { type: "button", className: "tab-btn" + (activeTab === "article" ? " is-active" : ""), onClick: function () { setActiveTab("article"); } }, t.tabArticle),
            e("button", { type: "button", className: "tab-btn" + (activeTab === "other" ? " is-active" : ""), onClick: function () { setActiveTab("other"); } }, t.tabOther)
          ),
          e(
            "div",
            { className: "portfolio-grid" },
            filteredItems.map(function (item) {
              return e(
                "article",
                { className: "card reveal card-float", key: item.type + item.title.en },
                e(
                  "div",
                  { className: "card-head" },
                  e("h3", { className: "card-title" }, item.title[language]),
                  e("span", { className: "card-year" }, item.year || "----")
                ),
                e("p", { className: "card-copy" }, item.description[language]),
                e(
                  "a",
                  { className: "portfolio-media", href: item.preview, target: "_blank", rel: "noopener noreferrer", "aria-label": item.title[language] + " preview" },
                  e("img", {
                    src: item.preview,
                    alt: item.title[language] + " preview",
                    loading: "lazy",
                    decoding: "async"
                  })
                ),
                e(
                  "div",
                  { className: "tags" },
                  item.tags.map(function (tag) {
                    return e("span", { className: "tag", key: item.title.en + tag }, tag);
                  })
                ),
                e(
                  "div",
                  { className: "card-actions" },
                  e("a", { className: "btn btn-primary", href: item.link, target: "_blank", rel: "noopener noreferrer" }, t.projectLink)
                )
              );
            })
          )
        )
      );
    }

    function renderLogPage() {
      return e(
        "div",
        { className: "page-content", key: "log" },
        e(
          "section",
          { className: "section reveal" },
          e("h2", { className: "section-title" }, t.logTitle),
          e("p", { className: "section-subtitle" }, t.logSubtitle),
          e(
            "ul",
            { className: "timeline" },
            logs.map(function (logItem) {
              const logContent = logItem.text[language];
              return e(
                "li",
                { key: logItem.date + logItem.title.en, className: "timeline-item-rich" },
                e("p", { className: "time-title" }, logItem.date + " · " + logItem.title[language]),
                Array.isArray(logContent)
                  ? e(
                      "div",
                      { className: "time-copy-list" },
                      logContent.map(function (paragraph, paragraphIndex) {
                        return e("p", { className: "time-copy", key: logItem.date + "-" + paragraphIndex }, paragraph);
                      })
                    )
                  : e("p", { className: "time-copy" }, logContent)
              );
            })
          )
        )
      );
    }

    function renderContactPage() {
      return e(
        "div",
        { className: "page-content", key: "contact" },
        e(
          "section",
          { className: "section reveal" },
          e("h2", { className: "section-title" }, t.contactTitle),
          e("p", { className: "section-subtitle" }, t.contactSubtitle),
          e(
            "ul",
            { className: "contact-list contact-list--grid" },
            e("li", null, e("a", { className: "btn btn-secondary contact-link-btn", href: "https://github.com/Lian0123", target: "_blank", rel: "noopener noreferrer" }, t.linkGithub)),
            e("li", null, e("a", { className: "btn btn-secondary contact-link-btn", href: "https://www.slideshare.net/ssuser6090c0", target: "_blank", rel: "noopener noreferrer" }, t.linkSlideshare)),
            e("li", null, e("a", { className: "btn btn-secondary contact-link-btn", href: "https://www.facebook.com/profile.php?id=100003135147006", target: "_blank", rel: "noopener noreferrer" }, t.linkFacebook)),
            e("li", null, e("a", { className: "btn btn-secondary contact-link-btn", href: "https://www.pixiv.net/users/14175602", target: "_blank", rel: "noopener noreferrer" }, t.linkPixiv))
          )
        )
      );
    }

    return e(
      "div",
      { className: "site" },
      e(
        "header",
        { className: "topbar" },
        e(
          "div",
          { className: "topbar-inner" },
          e("a", { href: "#about", className: "brand", onClick: function () { gotoPage("about"); } }, "lian0123 Website"),
          e(
            "ul",
            { className: "nav-list" },
            e("li", null, e("button", { type: "button", className: "nav-link nav-btn" + (activePage === "about" ? " is-active" : ""), onClick: function () { gotoPage("about"); } }, t.nav.about)),
            e("li", null, e("button", { type: "button", className: "nav-link nav-btn" + (activePage === "portfolio" ? " is-active" : ""), onClick: function () { gotoPage("portfolio"); } }, t.nav.portfolio)),
            e("li", null, e("button", { type: "button", className: "nav-link nav-btn" + (activePage === "log" ? " is-active" : ""), onClick: function () { gotoPage("log"); } }, t.nav.log)),
            e(
              "li",
              { className: "nav-contact-item" },
              e("button", { type: "button", className: "nav-link nav-btn" + (activePage === "contact" ? " is-active" : ""), onClick: function () { gotoPage("contact"); } }, t.nav.contact),
              e("a", { className: "nav-link nav-btn", target: "_blank", href: "./v1/index.html" }, t.oldSite)
            )
          ),
          e(
            "div",
            { className: "controls" },
            e("label", { className: "lang-switch" }, e("span", null, t.langLabel), e(
              "select",
              { value: language, onChange: function (event) { setLanguage(event.target.value); } },
              e("option", { value: "zh" }, "繁中"),
              e("option", { value: "en" }, "English"),
              e("option", { value: "jp" }, "日本語")
            )),
            e("button", { type: "button", className: "btn btn-secondary", onClick: function () { setTheme(theme === "dark" ? "light" : "dark"); } }, theme === "dark" ? t.themeLight : t.themeDark)
          )
        )
      ),
      e(
        "section",
        { className: "hero" },
        e(
          "article",
          { className: "hero-card reveal" },
          e("p", { className: "eyebrow" }, t.heroEyebrow),
          e("h1", { className: "hero-title" }, t.pageTitle[activePage] || t.pageTitle.about),
          e("p", { className: "hero-summary" }, t.heroSummary),
          e("div", { className: "hero-actions" },
            e("button", { type: "button", className: "btn btn-primary", onClick: function () { gotoPage("portfolio"); } }, t.viewPortfolio),
            e("a", { className: "btn btn-secondary", href: "https://github.com/Lian0123/lian0123.github.io", target: "_blank", rel: "noopener noreferrer" }, t.github)
          )
        ),
        e(
          "aside",
          { className: "hero-metrics panel reveal" },
          e("div", { className: "metric" }, e("p", { className: "metric-name" }, t.metricPage), e("p", { className: "metric-value" }, t.pageTitle[activePage])),
          e("div", { className: "metric" }, e("p", { className: "metric-name" }, t.metricTabs), e("p", { className: "metric-value" }, t.tabProgram + " / " + t.tabArticle + " / " + t.tabOther)),
          e("div", { className: "metric" }, e("p", { className: "metric-name" }, t.metricYear), e("p", { className: "metric-value" }, String(year)))
        )
      ),
      e(
        "main",
        { id: "content" },
        activePage === "about" ? renderAboutPage() : null,
        activePage === "portfolio" ? renderPortfolioPage() : null,
        activePage === "log" ? renderLogPage() : null,
        activePage === "contact" ? renderContactPage() : null
      ),
      e(
        "footer",
        { className: "footer" },
        "© " + year + " lian0123. Build with React.js · ",
        e("a", { href: "https://github.com/Lian0123", target: "_blank", rel: "noopener noreferrer" }, "GitHub")
      )
    );
  }

  const loaderProgress = startLoaderProgress();
  let appMounted = false;
  let pageLoaded = document.readyState === "complete";
  let loaderRemoved = false;
  registerServiceWorker();

  function completeLoaderIfReady() {
    if (loaderRemoved || !appMounted || !pageLoaded) {
      return;
    }
    loaderProgress.finish();
    const elapsed = Date.now() - loaderStartTime;
    const waitMs = Math.max(0, LOADER_MIN_DURATION - elapsed);
    window.setTimeout(function () {
      if (loaderRemoved) {
        return;
      }
      loaderRemoved = true;
      removeLoader();
    }, waitMs);
  }

  window.addEventListener("load", function () {
    pageLoaded = true;
    loaderProgress.markWindowLoaded();
    completeLoaderIfReady();
  });

  function mountApp() {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
      return;
    }
    ReactDOM.createRoot(rootElement).render(e(App));
    appMounted = true;
    loaderProgress.markAppReady();
    completeLoaderIfReady();

    window.setTimeout(function () {
      if (loaderRemoved) {
        return;
      }
      loaderRemoved = true;
      loaderProgress.finish();
      removeLoader();
    }, 3200);
  }

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(mountApp, { timeout: 1200 });
  } else {
    window.setTimeout(mountApp, 0);
  }
})();
