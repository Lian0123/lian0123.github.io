(function () {
  const e = React.createElement;
  const useEffect = React.useEffect;
  const useMemo = React.useMemo;
  const useState = React.useState;
  const LOADER_MIN_DURATION = 2000;
  const loaderStartTime = Date.now();

  const I18N = {
    zh: {
      pageTitle: { about: "關於我", portfolio: "作品頁", log: "日誌", contact: "聯絡我" },
      nav: { about: "關於我", portfolio: "作品頁", log: "日誌", contact: "聯絡我" },
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
      profileSubtitle: "長期投入後端與全端工程，持續優化系統效能、穩定性與安全性。",
      profileFacts: [
        "後端架構與 API 設計：涵蓋資料庫建模、快取與高併發處理。",
        "全端整合與部署：從前端互動到後端服務與部署流程。",
        "資安實務：落實風險控管、權限設計與服務防護。"
      ],
      cardFrameTitle: "名片卡展示",
      cardFrameSubtitle: "主名片與 QR 名片在此以 iframe 顯示，版面已調整為等高與跨裝置一致。",
      skillTitle: "技術能力矩陣",
      skillSubtitle: "以能力條與能力矩陣呈現核心技術。",
      capabilityTitle: "核心能力",
      capabilityItems: [
        { name: "後端架構設計", level: "高" },
        { name: "全端系統整合", level: "高" },
        { name: "效能優化", level: "中高" },
        { name: "安全治理", level: "中高" }
      ],
      journeyTitle: "經歷時間軸",
      portfolioTitle: "作品與專案",
      portfolioSubtitle: "依分類檢視作品，含預覽與連結。",
      projectLink: "作品連結",
      openPreview: "開啟預覽",
      logTitle: "工程日誌",
      logSubtitle: "記錄近期技術決策、優化重點與交付成果。",
      contactTitle: "聯絡我",
      contactSubtitle: "可透過以下方式聯絡，或用表單建立郵件草稿。",
      contactName: "姓名",
      contactEmail: "Email",
      contactTopic: "主旨",
      contactMessage: "訊息內容",
      contactSubmit: "送出（建立郵件）",
      mailDefaultTopic: "網站聯絡"
    },
    en: {
      pageTitle: { about: "About", portfolio: "Portfolio", log: "Log", contact: "Contact" },
      nav: { about: "About", portfolio: "Portfolio", log: "Log", contact: "Contact" },
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
      profileSubtitle: "Hands-on backend and full-stack engineering with strong focus on performance and reliability.",
      profileFacts: [
        "Backend architecture and API engineering with database and caching strategy.",
        "Full-stack integration from UX interactions to backend service delivery.",
        "Security practice with access control and risk mitigation."
      ],
      cardFrameTitle: "Business Card Showcase",
      cardFrameSubtitle: "Main card and QR card are embedded with equal-height layout across devices.",
      skillTitle: "Technical Capability Matrix",
      skillSubtitle: "Core capabilities shown with progress bars and matrix view.",
      capabilityTitle: "Core Competencies",
      capabilityItems: [
        { name: "Backend Architecture", level: "High" },
        { name: "Full-Stack Integration", level: "High" },
        { name: "Performance Optimization", level: "Mid-High" },
        { name: "Security Governance", level: "Mid-High" }
      ],
      journeyTitle: "Timeline",
      portfolioTitle: "Projects & Works",
      portfolioSubtitle: "Browse categorized works with preview and links.",
      projectLink: "Project Link",
      openPreview: "Open Preview",
      logTitle: "Engineering Log",
      logSubtitle: "Recent decisions, improvements, and delivery highlights.",
      contactTitle: "Contact Me",
      contactSubtitle: "Reach out directly or use the form to generate an email draft.",
      contactName: "Name",
      contactEmail: "Email",
      contactTopic: "Subject",
      contactMessage: "Message",
      contactSubmit: "Send (Create Email)",
      mailDefaultTopic: "Website Contact"
    },
    jp: {
      pageTitle: { about: "自己紹介", portfolio: "作品", log: "ログ", contact: "連絡" },
      nav: { about: "自己紹介", portfolio: "作品", log: "ログ", contact: "連絡" },
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
      profileSubtitle: "性能・安定性・保守性を重視したバックエンド/フルスタック実務を継続。",
      profileFacts: [
        "バックエンド設計とAPI実装、DB設計、キャッシュ最適化。",
        "フロントからバックエンドまで一貫した実装と運用。",
        "アクセス制御とリスク対策を含むセキュリティ実践。"
      ],
      cardFrameTitle: "名刺カード表示",
      cardFrameSubtitle: "メインカードとQRカードを等高レイアウトで表示。",
      skillTitle: "技術マトリクス",
      skillSubtitle: "能力バーでコア技術を可視化。",
      capabilityTitle: "コア能力",
      capabilityItems: [
        { name: "バックエンド設計", level: "高" },
        { name: "フルスタック統合", level: "高" },
        { name: "性能最適化", level: "中高" },
        { name: "セキュリティ運用", level: "中高" }
      ],
      journeyTitle: "経歴タイムライン",
      portfolioTitle: "作品・プロジェクト",
      portfolioSubtitle: "カテゴリ別にプレビューとリンクを確認できます。",
      projectLink: "作品リンク",
      openPreview: "プレビュー",
      logTitle: "エンジニアリングログ",
      logSubtitle: "最近の技術判断と改善内容を記録。",
      contactTitle: "お問い合わせ",
      contactSubtitle: "下記の連絡先、またはフォームでメール下書きを作成できます。",
      contactName: "名前",
      contactEmail: "メール",
      contactTopic: "件名",
      contactMessage: "メッセージ",
      contactSubmit: "送信（メール下書き）",
      mailDefaultTopic: "サイト連絡"
    }
  };

  const skillScores = [
    { name: "Backend Architecture", score: 92 },
    { name: "Database Design", score: 88 },
    { name: "API Engineering", score: 91 },
    { name: "Full-Stack Delivery", score: 87 },
    { name: "Security Practice", score: 86 },
    { name: "DevOps & Ops", score: 83 }
  ];

  const logs = [
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
      date: "2026-02-10",
      title: { zh: "效能與載入流程調整", en: "Performance and loading flow refinement", jp: "性能とローディングフロー改善" },
      text: {
        zh: "縮減初始渲染成本，強化首屏體驗與跨裝置流暢度。",
        en: "Reduced initial render cost and improved first-screen responsiveness across devices.",
        jp: "初期描画コストを削減し、各端末での体感速度を改善。"
      }
    }
  ];

  const portfolioItems = [
    {
      type: "program",
      title: { zh: "Server Front-End Demo", en: "Server Front-End Demo", jp: "Server Front-End Demo" },
      description: {
        zh: "展示前後端整合流程與資料呈現方式。",
        en: "Demonstrates full-stack flow and data presentation.",
        jp: "フロント/バック連携とデータ表示のデモ。"
      },
      link: "https://github.com/Lian0123/lian0123.github.io",
      preview: "./Source/SVG/server_fe.html",
      tags: ["React", "Node.js", "API"]
    },
    {
      type: "article",
      title: { zh: "Technical Archive", en: "Technical Archive", jp: "Technical Archive" },
      description: {
        zh: "技術文件與筆記整理頁。",
        en: "Collection of technical notes and archives.",
        jp: "技術ドキュメントとメモのアーカイブ。"
      },
      link: "./Source/SVG/archive.html",
      preview: "./Source/SVG/archive.html",
      tags: ["Article", "Knowledge", "Docs"]
    },
    {
      type: "other",
      title: { zh: "Engineering Notes", en: "Engineering Notes", jp: "Engineering Notes" },
      description: {
        zh: "其他實驗型專案與工程筆記。",
        en: "Experiments and engineering note collection.",
        jp: "実験プロジェクトとエンジニアリングノート。"
      },
      link: "https://github.com/Lian0123/lian0123.github.io",
      preview: "./Source/SVG/electron_app.html",
      tags: ["Experiment", "Prototype", "Other"]
    }
  ];

  function startLoaderProgress() {
    const fill = document.getElementById("loader-progress-fill");
    const progressText = document.getElementById("loader-progress-text");
    if (!fill) {
      return { finish: function () {} };
    }

    let progress = 10;
    fill.style.width = progress + "%";
    if (progressText) {
      progressText.textContent = progress + "%";
    }

    const timer = window.setInterval(function () {
      const step = Math.max(1, Math.round((100 - progress) * 0.09));
      progress = Math.min(93, progress + step);
      fill.style.width = progress + "%";
      if (progressText) {
        progressText.textContent = progress + "%";
      }
      if (progress >= 93) {
        window.clearInterval(timer);
      }
    }, 85);

    return {
      finish: function () {
        window.clearInterval(timer);
        fill.style.width = "100%";
        if (progressText) {
          progressText.textContent = "100%";
        }
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
          e("p", { className: "section-subtitle" }, t.cardFrameSubtitle),
          e(
            "div",
            { className: "card-grid card-grid--cards" },
            e(
              "article",
              { className: "card card-float" },
              e("h3", { className: "card-title" }, "Main Card"),
              e(
                "div",
                { className: "iframe-card iframe-card--equal" },
                e("iframe", {
                  src: "./Lain0123_main_card.html",
                  title: "Lain0123 Main Card",
                  loading: "lazy",
                  referrerPolicy: "no-referrer",
                  sandbox: "allow-scripts allow-same-origin"
                })
              )
            ),
            e(
              "article",
              { className: "card card-float" },
              e("h3", { className: "card-title" }, "QR Card"),
              e(
                "div",
                { className: "iframe-card iframe-card--equal" },
                e("iframe", {
                  src: "./Lain0123_qr_card.html",
                  title: "Lain0123 QR Card",
                  loading: "lazy",
                  referrerPolicy: "no-referrer",
                  sandbox: "allow-scripts allow-same-origin"
                })
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
              skillScores.map(function (skill) {
                return e(
                  "div",
                  { className: "skill-row", key: skill.name },
                  e("span", { className: "skill-name" }, skill.name),
                  e("div", { className: "skill-track" }, e("div", { className: "skill-fill", style: { width: skill.score + "%" } })),
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
                t.capabilityItems.map(function (item) {
                  return e(
                    "div",
                    { className: "cap-item", key: item.name },
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
                e("h3", { className: "card-title" }, item.title[language]),
                e("p", { className: "card-copy" }, item.description[language]),
                e(
                  "div",
                  { className: "iframe-card" },
                  e("iframe", {
                    src: item.preview,
                    title: item.title[language],
                    loading: "lazy",
                    referrerPolicy: "no-referrer",
                    sandbox: "allow-scripts allow-same-origin"
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
                  e("a", { className: "btn btn-secondary", href: item.link, target: "_blank", rel: "noopener noreferrer" }, t.projectLink),
                  e("a", { className: "btn btn-primary", href: item.preview, target: "_blank", rel: "noopener noreferrer" }, t.openPreview)
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
              return e(
                "li",
                { key: logItem.date + logItem.title.en, className: "timeline-item-rich" },
                e("p", { className: "time-title" }, logItem.date + " · " + logItem.title[language]),
                e("p", { className: "time-copy" }, logItem.text[language])
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
            { className: "contact-list" },
            e("li", null, e("a", { className: "contact-link", href: "mailto:hello@example.com" }, "Email：hello@example.com")),
            e("li", null, e("a", { className: "contact-link", href: "https://github.com/Lian0123/lian0123.github.io", target: "_blank", rel: "noopener noreferrer" }, "GitHub：Lian0123"))
          ),
          e(
            "form",
            { className: "contact-form", onSubmit: openMailDraft },
            e("label", { className: "form-row" }, e("span", null, t.contactName), e("input", { type: "text", required: true, value: formState.name, onChange: function (ev) { setFormState(Object.assign({}, formState, { name: ev.target.value })); } })),
            e("label", { className: "form-row" }, e("span", null, t.contactEmail), e("input", { type: "email", required: true, value: formState.email, onChange: function (ev) { setFormState(Object.assign({}, formState, { email: ev.target.value })); } })),
            e("label", { className: "form-row" }, e("span", null, t.contactTopic), e("input", { type: "text", value: formState.topic, onChange: function (ev) { setFormState(Object.assign({}, formState, { topic: ev.target.value })); } })),
            e("label", { className: "form-row" }, e("span", null, t.contactMessage), e("textarea", { rows: 6, required: true, value: formState.message, onChange: function (ev) { setFormState(Object.assign({}, formState, { message: ev.target.value })); } })),
            e("button", { className: "btn btn-primary", type: "submit" }, t.contactSubmit)
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
          e("a", { href: "#about", className: "brand", onClick: function () { gotoPage("about"); } }, "lian0123 Portfolio"),
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
              e("a", { className: "nav-v1-link", href: "./index.html?v=1" }, "v1")
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
      e("footer", { className: "footer" }, "© " + year + " lian0123. Build with React.js")
    );
  }

  const loaderProgress = startLoaderProgress();
  registerServiceWorker();

  function mountApp() {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
      return;
    }
    ReactDOM.createRoot(rootElement).render(e(App));
    loaderProgress.finish();
    const elapsed = Date.now() - loaderStartTime;
    const waitMs = Math.max(0, LOADER_MIN_DURATION - elapsed);
    window.setTimeout(removeLoader, waitMs);
  }

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(mountApp, { timeout: 1200 });
  } else {
    window.setTimeout(mountApp, 0);
  }
})();
