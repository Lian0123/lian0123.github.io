(function () {
  const e = React.createElement;
  const useEffect = React.useEffect;
  const useMemo = React.useMemo;
  const useState = React.useState;

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
      linkMedium: "Medium Link",
      linkZenn: "Zenn Link",
      linkDevIo: "DEV Community Link",
      linkSlideshare: "SideShare Link",
      linkFacebook: "FaceBook Link",
      linkX: "X Link",
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
      linkMedium: "Medium Link",
      linkZenn: "Zenn Link",
      linkDevIo: "DEV Community Link",
      linkSlideshare: "SideShare Link",
      linkFacebook: "FaceBook Link",
      linkX: "X Link",
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
      linkMedium: "Medium Link",
      linkZenn: "Zenn Link",
      linkDevIo: "DEV Community Link",
      linkSlideshare: "SideShare Link",
      linkFacebook: "FaceBook Link",
      linkX: "X Link",
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

  const editorial = {
    zh: {
      heroTitle: "把需求轉化為可靠、可維護的軟體。",
      heroSummary: "我是 lian0123，專注後端與全端開發。從 API、資料處理到互動工具，透過可檢視的程式碼與可操作的作品，呈現解決問題的方式。",
      profileTitle: "以工程實作，連結需求與應用",
      profileSubtitle: "我的作品涵蓋後端開發模板、資料工具、雲端權限文件與互動式網頁，關注重複工作的簡化，以及軟體長期維護的清晰度。",
      profileFacts: ["後端開發：以 TypeScript 與 Express 模板整理服務開發的起點。", "資料與流程工具：將 Parquet 處理、Azure 權限文件等需求轉化為可重用工具。", "知識分享：透過 Linux、命令列與 C 語言教材，整理技術實作經驗。"],
      featuredTitle: "代表作品", featuredSubtitle: "從開發基礎、資料處理到流程自動化，了解我的實作方向。",
      skillTitle: "專業能力與實作依據", skillSubtitle: "每項能力都連結到具體作品，方便進一步了解程式碼與應用。",
      evidence: "查看實作", metricPage: "公開程式作品", metricTabs: "技術教材", metricYear: "作品紀錄起點",
      contactSubtitle: "從原始碼、技術文章與教學分享，進一步了解我的工作與關注的議題。",
      portfolioSubtitle: "收錄開發工具、應用實作與技術教材。可開啟作品體驗，或前往原始碼了解細節。",
      skillDetails: ["TypeScript · Express / 後端專案模板", "TypeScript · Parquet / 資料格式處理", "Azure / 權限申請文件產生", "Linux · Bash / 環境設定與工具"],
      skillNames: ["後端開發基礎", "資料工具開發", "工作流程自動化", "系統環境與技術分享"]
    },
    en: {
      heroTitle: "Turning requirements into maintainable software.",
      heroSummary: "I'm lian0123, a backend and full-stack developer. Explore how I approach APIs, data processing, and interactive tools through source code and working projects.",
      profileTitle: "Engineering from needs to applications",
      profileSubtitle: "My projects span backend templates, data tools, cloud access documentation, and interactive websites, with a focus on repeatable workflows and maintainable code.",
      profileFacts: ["Backend foundations with TypeScript and Express starter templates.", "Reusable tools for Parquet processing and Azure access documentation.", "Technical knowledge shared through Linux, command-line, and C learning materials."],
      featuredTitle: "Selected projects", featuredSubtitle: "Explore backend foundations, data tooling, and workflow automation.",
      skillTitle: "Capabilities in practice", skillSubtitle: "Follow each capability to a concrete project and explore its implementation.",
      evidence: "Explore implementation", metricPage: "Code projects", metricTabs: "Learning resources", metricYear: "Projects since",
      contactSubtitle: "Explore my code, technical writing, and learning resources.",
      skillDetails: ["TypeScript · Express / Backend starter", "TypeScript · Parquet / Data processing", "Azure / Access request documentation", "Linux · Bash / Environment tooling"],
      skillNames: ["Backend foundations", "Data tooling", "Workflow automation", "Systems & knowledge sharing"]
    },
    jp: {
      heroTitle: "要件を、保守しやすいソフトウェアへ。",
      heroSummary: "バックエンド・フルスタック開発に取り組む lian0123 です。API、データ処理、対話型ツールの実装を、ソースコードと公開作品で紹介します。",
      profileTitle: "要件とアプリケーションをつなぐ実装",
      profileSubtitle: "バックエンドのテンプレート、データツール、クラウド権限ドキュメント、Webアプリを制作。繰り返す作業の簡素化と保守性を大切にしています。",
      profileFacts: ["TypeScript・Expressによるバックエンド開発テンプレート。", "Parquet処理やAzure権限申請を支えるツール。", "Linux・コマンドライン・C言語の学習資料を公開。"],
      featuredTitle: "主な作品", featuredSubtitle: "バックエンド基盤、データ処理、ワークフロー自動化の実装例。",
      skillTitle: "作品で見る技術領域", skillSubtitle: "各領域に対応する作品とソースコードをご覧いただけます。",
      evidence: "実装を見る", metricPage: "プログラム作品", metricTabs: "学習資料", metricYear: "作品公開の起点",
      contactSubtitle: "ソースコード、技術記事、学習資料をご覧ください。",
      skillDetails: ["TypeScript · Express / 開発テンプレート", "TypeScript · Parquet / データ処理", "Azure / 権限申請ドキュメント", "Linux · Bash / 環境構築ツール"],
      skillNames: ["バックエンド基盤", "データツール", "ワークフロー自動化", "システム環境・知識共有"]
    }
  };
  const professionalCopy = {
  "zh": {
    "identity": "連永立 · lian0123",
    "heroSummary": "專注 Node.js 後端與全端開發，將需求整理為可重用的服務基礎、資料工具與自動化流程。重視程式結構、維護成本與使用情境，讓技術實作回應實際問題。",
    "profileTitle": "從問題拆解，到可檢視的工程實作",
    "profileSubtitle": "我的開發方向涵蓋後端服務、資料處理與網頁工具。透過公開程式碼、可操作的應用與技術教材，呈現實作能力、問題意識與知識整理能力。",
    "profileFacts": [
      "服務開發：使用 TypeScript、Node.js 與 Express 建立後端開發模板，整理可重用的專案起點。",
      "流程改善：針對資料格式處理、權限申請文件等重複工作，製作專門工具。",
      "技術溝通：將 Linux、命令列與程式語言經驗整理為教材，讓知識可查閱、可分享。"
    ],
    "cardFrameTitle": "個人名片",
    "cardSubtitle": "認識我的專業背景，或開啟 QR 名片保存聯絡資訊。",
    "cardNames": [
      "專業名片",
      "QR 聯絡名片"
    ],
    "contextLabel": "應用情境",
    "focusLabel": "技術切入點",
    "sourceLabel": "檢視原始碼",
    "demoLabel": "開啟應用",
    "contactAction": "聯絡我",
    "contexts": [
      "後端專案反覆建立相似的初始結構，需要一致的開發起點。",
      "處理 Parquet 資料時，需要能在 TypeScript 開發流程中使用的工具。",
      "角色與權限說明需要整理成申請文件，適合以工具簡化重複製作。"
    ],
    "focuses": [
      "TypeScript · Express：可從原始碼檢視專案組織與服務開發方式。",
      "TypeScript · Parquet：可從原始碼檢視資料格式操作與工具介面。",
      "Azure · 文件產生：可透過線上操作了解資料輸入與文件產出流程。"
    ]
  },
  "en": {
    "identity": "Lian Yong-Li · lian0123",
    "heroSummary": "Focused on Node.js backend and full-stack development: reusable service foundations, data tools, and automated workflows. I care about code structure, maintenance, and the practical context behind each requirement.",
    "profileTitle": "From problem analysis to inspectable implementation",
    "cardFrameTitle": "Business cards",
    "cardSubtitle": "Explore my professional profile or open the QR card to keep my contact details.",
    "cardNames": [
      "Professional card",
      "QR contact card"
    ],
    "contextLabel": "Use case",
    "focusLabel": "Technical focus",
    "sourceLabel": "Review source",
    "demoLabel": "Open application",
    "contactAction": "Get in touch",
    "contexts": [
      "Backend projects repeatedly need a consistent starting structure.",
      "Parquet data needs tooling that fits a TypeScript development workflow.",
      "Role and access descriptions need to become request documents through a repeatable process."
    ],
    "focuses": [
      "TypeScript · Express: inspect project organization and the backend development approach in source.",
      "TypeScript · Parquet: inspect data operations and tool interfaces in source.",
      "Azure · Document generation: explore the input-to-document workflow in the application."
    ]
  },
  "jp": {
    "identity": "連永立 · lian0123",
    "heroSummary": "Node.jsによるバックエンドとフルスタック開発に取り組んでいます。サービスの基盤、データツール、業務フローの自動化を通じて、コードの構造と保守性を意識した実装を目指します。",
    "profileTitle": "課題の整理から、確認できる実装へ",
    "cardFrameTitle": "プロフィール名刺",
    "cardSubtitle": "専門分野の紹介と、連絡先を保存できるQR名刺です。",
    "cardNames": [
      "プロフィール名刺",
      "QR連絡先名刺"
    ],
    "contextLabel": "利用場面",
    "focusLabel": "技術的な着眼点",
    "sourceLabel": "ソースを見る",
    "demoLabel": "アプリを開く",
    "contactAction": "お問い合わせ",
    "contexts": [
      "バックエンド開発で繰り返し必要になる初期構成を整理。",
      "TypeScriptの開発フローでParquetデータを扱うためのツール。",
      "役割と権限の説明を申請ドキュメントにまとめる反復作業を支援。"
    ],
    "focuses": [
      "TypeScript · Express：ソースコードでプロジェクト構成と実装方針を確認。",
      "TypeScript · Parquet：データ操作とツールのインターフェースを確認。",
      "Azure · ドキュメント生成：入力から文書出力までの流れをアプリで確認。"
    ]
  }
};
  Object.keys(editorial).forEach(lang => Object.assign(editorial[lang], professionalCopy[lang]));
  Object.keys(I18N).forEach(function (lang) {
    Object.assign(I18N[lang], editorial[lang], { heroEyebrow: "BACKEND & FULL-STACK DEVELOPER", linkSlideshare: "SlideShare" });
  });

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
      date: "2026-03-29",
      title: { zh: "自動產生Azure權限申請文件", en: "Azure Role Document Generator", jp: "Azure権限申請ドキュメントジェネレーター" },
      description: {
        zh: "將 Azure 角色與權限說明整理為申請文件，讓重複的文件製作流程更容易執行。",
        en: "Online tool that automatically generates Azure permission request documents for role and access descriptions.",
        jp: "Azureの権限申請ドキュメントを自動生成するオンラインツール。"
      },
      link: "https://lian0123.github.io/az-role-document-generator",
      preview: "./Source/IMG/react-portfolio/azure-role-document-generator.svg",
      tags: ["Program", "2026", "Tool"]
    },
    {
      type: "program",
      year: "2026",
      date: "2026-03-16",
      title: { zh: "parquet-tool.js", en: "parquet-tool.js", jp: "parquet-tool.js" },
      description: {
        zh: "以 TypeScript 處理 Parquet 檔案，將資料格式操作整理為可重用的工具。",
        en: "A TypeScript tool for working with Parquet files.",
        jp: "Parquetファイルを扱うTypeScriptツール。"
      },
      link: "https://github.com/Lian0123/parquet-tool",
      preview: "./Source/IMG/react-portfolio/parquet-tool.svg",
      tags: ["Program", "2026", "Tool"]
    },
    {
      type: "program",
      year: "2026",
      date: "2026-03-05",
      title: { zh: "自定義年曆系統", en: "User Define Calendar", jp: "ユーザー定義カレンダーシステム" },
      description: {
        zh: "可客製化設定的年曆系統，支持各類活動標記。",
        en: "Customizable calendar system supporting various event markings.",
        jp: "さまざまなイベントマークに対応したカスタマイズ可能なカレンダーシステム。"
      },
      link: "https://lian0123.github.io/user-define-calendar/",
      preview: "./Source/IMG/react-portfolio/user-define-calendar.svg",
      tags: ["Program", "2026", "Tool"]
    },
    {
      type: "program",
      year: "2026",
      date: "2026-02-28",
      title: { zh: "地圖生成器", en: "Map Data Generator Editor", jp: "マップデータジェネレーターエディタ" },
      description: {
        zh: "提供互動地圖與資料編輯功能的生成工具。",
        en: "Tool for generating interactive maps and editing data.",
        jp: "インタラクティブマップとデータ編集機能を提供するジェネレーター。"
      },
      link: "https://lian0123.github.io/map-data-generator-editor/",
      preview: "./Source/IMG/react-portfolio/map-data-generator-editor.svg",
      tags: ["Program", "2026", "Tool"]
    },
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
        zh: "協助建立小型伺服器資料庫，提供資料匯入與匯出功能，簡化初始化流程。",
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
      year: "2025",
      date: "2025-11-15",
      title: { zh: "相機模擬器", en: "Camera Simulator", jp: "カメラシミュレーター" },
      description: {
        zh: "模擬相機介面的實用工具。",
        en: "Practical tool simulating a camera interface.",
        jp: "カメラインターフェースをシミュレートする実用ツール。"
      },
      link: "https://lian0123.github.io/camera-simulator/",
      preview: "./Source/IMG/react-portfolio/camera-simulator.svg",
      tags: ["Program", "2025", "Tool"]
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
        zh: "以 TypeScript 與 Express 建立後端專案起點，整理可重用的基礎結構，減少重複初始化工作。",
        en: "A TypeScript + Express starter template for backend projects with best practices and common utilities.",
        jp: "TypeScript + Express のバックエンド開始用テンプレート、ベストプラクティス含む。"
      },
      link: "https://github.com/Lian0123/my-typescript-express-template",
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
        zh: "安裝後設定建議。",
        en: "post-install setup suggestions.",
        jp: "導入後の推奨設定。"
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
        zh: "C 基礎語法說明。",
        en: "C language fundamentals.",
        jp: "C言語の基礎解説。"
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
        zh: "C 進階語法說明。",
        en: "advanced C syntax notes.",
        jp: "C言語の応用構文。"
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
        zh: "Android 上使用 Linux（GNUroot Debian）說明。",
        en: "using Linux (GNUroot Debian) on Android.",
        jp: "AndroidでLinux（GNUroot Debian）を使う解説。"
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
        zh: "Linux Mint Cinnamon 設定教學。",
        en: "Linux Mint Cinnamon operation setup tutorial.",
        jp: "Linux Mint Cinnamon操作設定チュートリアル。"
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
        zh: "Manjaro Linux 安裝與設定。",
        en: "Manjaro Linux installation and setup.",
        jp: "Manjaro Linuxの導入と設定。"
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
        zh: "終端指令、w3m 與 vim 入門。",
        en: "command line, w3m, and vim basics.",
        jp: "コマンド、w3m、vimの入門。"
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
        number: { value: window.innerWidth < 740 ? 24 : 46, density: { enable: true, value_area: 900 } },
        color: { value: particleColor },
        shape: { type: "circle" },
        opacity: { value: 0.35, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 140, color: lineColor, opacity: 0.22, width: 1 },
        move: { enable: !window.matchMedia("(prefers-reduced-motion: reduce)").matches, speed: 0.9, random: false, straight: false, out_mode: "out" }
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
    const readPage = () => ["about", "portfolio", "log", "contact"].includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : "about";
    const initialPage = readPage();
    const [activePage, setActivePage] = useState(initialPage);
    const [activeTab, setActiveTab] = useState("program");
    const [language, setLanguage] = useState("zh");
    const [theme, setTheme] = useState("dark");
    const year = new Date().getFullYear();

    const t = I18N[language] || I18N.zh;

    useEffect(function () {
      document.title = "lian0123 | " + t.pageTitle[activePage] + " · Backend & Full-Stack";
    }, [activePage, language]);

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
        setActivePage(readPage());
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
        metaTheme.setAttribute("content", theme === "light" ? "#f5f6f1" : "#101918");
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

    function renderAboutPage() {
      const selected = [portfolioItems.find(item => item.title.en === "expressJS Template"), portfolioItems.find(item => item.title.en === "parquet-tool.js"), portfolioItems[0]];
      const evidence = selected.concat(portfolioItems.find(item => item.title.en === "FMiCa-TW.sh"));
      return e("div", { className: "page-content", key: "about" },
        e("section", { className: "section intro-section" },
          e("p", { className: "eyebrow" }, "01 / PROFILE"),
          e("h2", { className: "section-title" }, t.profileTitle),
          e("p", { className: "section-subtitle" }, t.profileSubtitle),
          e("ul", { className: "fact-list" }, t.profileFacts.map(fact => e("li", { key: fact }, fact)))),
        e("section", { className: "section" },
          e("p", { className: "eyebrow" }, "02 / SELECTED WORK"),
          e("h2", { className: "section-title" }, t.featuredTitle),
          e("p", { className: "section-subtitle" }, t.featuredSubtitle),
          e("div", { className: "featured-grid" }, selected.map((item, i) =>
            e("article", { className: "card featured-card", key: item.link },
              e("a", { className: "portfolio-media", href: item.link, target: "_blank", rel: "noopener noreferrer" },
                e("img", { src: item.preview, alt: item.title[language], loading: "lazy", decoding: "async" })),
              e("p", { className: "eyebrow" }, "0" + (i + 1) + " / " + item.year),
              e("h3", { className: "card-title" }, item.title[language]),
              e("p", { className: "card-copy" }, item.description[language]),
              e("dl", { className: "project-detail" },
                e("dt", null, t.contextLabel), e("dd", null, t.contexts[i]),
                e("dt", null, t.focusLabel), e("dd", null, t.focuses[i])),
              e("a", { className: "text-link", href: item.link, target: "_blank", rel: "noopener noreferrer" }, (i < 2 ? t.sourceLabel : t.demoLabel) + " ↗"))))),
        e("section", { className: "section" },
          e("p", { className: "eyebrow" }, "03 / EXPERTISE"),
          e("h2", { className: "section-title" }, t.skillTitle),
          e("p", { className: "section-subtitle" }, t.skillSubtitle),
          e("div", { className: "expertise-grid" }, evidence.map((item, i) =>
            e("a", { className: "expertise-item", key: item.link, href: item.link, target: "_blank", rel: "noopener noreferrer" },
              e("span", { className: "expertise-number", "aria-hidden": true }, "0" + (i + 1)),
              e("div", null, e("h3", { className: "card-title" }, t.skillNames[i]), e("p", { className: "card-copy" }, t.skillDetails[i])),
              e("span", { "aria-hidden": true }, "↗"))))),
        e("section", { className: "section business-card-section" },
          e("p", { className: "eyebrow" }, "04 / CONNECT"),
          e("h2", { className: "section-title" }, t.cardFrameTitle),
          e("p", { className: "section-subtitle" }, t.cardSubtitle),
          e("div", { className: "business-card-grid" }, ["./Lian0123_main_card.html", "./Lian0123_qr_card.html"].map((src, i) =>
            e("article", { className: "card", key: src },
              e("h3", { className: "card-title" }, t.cardNames[i]),
              e("div", { className: "business-card-preview" }, e("iframe", {
                src: src, title: t.cardNames[i], loading: "lazy", referrerPolicy: "no-referrer",
                sandbox: "allow-scripts allow-same-origin"
              })),
              e("a", { className: "text-link", href: src, target: "_blank", rel: "noopener noreferrer" }, t.openPreview + " ↗")))))
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
            { className: "tab-list", role: "group", "aria-label": t.portfolioTitle },
            e("button", { type: "button", "aria-pressed": activeTab === "program", className: "tab-btn" + (activeTab === "program" ? " is-active" : ""), onClick: function () { setActiveTab("program"); } }, t.tabProgram),
            e("button", { type: "button", "aria-pressed": activeTab === "article", className: "tab-btn" + (activeTab === "article" ? " is-active" : ""), onClick: function () { setActiveTab("article"); } }, t.tabArticle),
            e("button", { type: "button", "aria-pressed": activeTab === "other", className: "tab-btn" + (activeTab === "other" ? " is-active" : ""), onClick: function () { setActiveTab("other"); } }, t.tabOther)
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
            e("li", null, e("a", { className: "btn btn-secondary contact-link-btn", href: "https://medium.com/@lian000123", target: "_blank", rel: "noopener noreferrer" }, t.linkMedium)),
            e("li", null, e("a", { className: "btn btn-secondary contact-link-btn", href: "https://zenn.dev/lian0123", target: "_blank", rel: "noopener noreferrer" }, t.linkZenn)),
            e("li", null, e("a", { className: "btn btn-secondary contact-link-btn", href: "https://dev.to/lian0123", target: "_blank", rel: "noopener noreferrer" }, t.linkDevIo)),
            e("li", null, e("a", { className: "btn btn-secondary contact-link-btn", href: "https://www.slideshare.net/ssuser6090c0", target: "_blank", rel: "noopener noreferrer" }, t.linkSlideshare)),
            e("li", null, e("a", { className: "btn btn-secondary contact-link-btn", href: "https://www.facebook.com/profile.php?id=100003135147006", target: "_blank", rel: "noopener noreferrer" }, t.linkFacebook)),
            e("li", null, e("a", { className: "btn btn-secondary contact-link-btn", href: "https://x.com/lian000123", target: "_blank", rel: "noopener noreferrer" }, t.linkX)),
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
          e("a", { href: "#about", className: "brand", onClick: function () { gotoPage("about"); } }, "lian0123 / engineering"),
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
          e("p", { className: "hero-identity" }, t.identity),
          e("h1", { className: "hero-title" }, activePage === "about" ? t.heroTitle : t.pageTitle[activePage]),
          e("p", { className: "hero-summary" }, t.heroSummary),
          e("div", { className: "hero-actions" },
            e("button", { type: "button", className: "btn btn-primary", onClick: function () { gotoPage("portfolio"); } }, t.viewPortfolio),
            e("a", { className: "btn btn-secondary", href: "mailto:lian0123@hi2.in" }, t.contactAction),
            e("a", { className: "btn btn-secondary", href: "https://github.com/Lian0123", target: "_blank", rel: "noopener noreferrer" }, t.github)
          )
        ),
        e(
          "aside",
          { className: "hero-metrics panel reveal" },
          e("div", { className: "metric" }, e("p", { className: "metric-name" }, t.metricPage), e("p", { className: "metric-value" }, String(portfolioItems.filter(item => item.type === "program").length))),
          e("div", { className: "metric" }, e("p", { className: "metric-name" }, t.metricTabs), e("p", { className: "metric-value" }, String(portfolioItems.filter(item => item.type === "article").length))),
          e("div", { className: "metric" }, e("p", { className: "metric-name" }, t.metricYear), e("p", { className: "metric-value" }, String(Math.min(...portfolioItems.map(item => Number(item.year))))))
        )
      ),
      e(
        "main",
        { id: "content", tabIndex: -1 },
        activePage === "about" ? renderAboutPage() : null,
        activePage === "portfolio" ? renderPortfolioPage() : null,
        activePage === "log" ? renderLogPage() : null,
        activePage === "contact" ? renderContactPage() : null
      ),
      e(
        "footer",
        { className: "footer" },
        "© " + year + " lian0123. Built with React · ",
        e("a", { href: "https://github.com/Lian0123", target: "_blank", rel: "noopener noreferrer" }, "GitHub")
      )
    );
  }

  registerServiceWorker();
  ReactDOM.createRoot(document.getElementById("root")).render(e(App));
})();
