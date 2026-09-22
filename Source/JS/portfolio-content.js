/* Personal introduction and project notes in Traditional Chinese, English, and Japanese. */
window.portfolioContent = {
  "zh": {
    "role": "後端與全端工程師",
    "intro": "LIAN0123 / PERSONAL WEBSITE",
    "heroLines": [
      "我是連永立，",
      "後端與全端",
      "工程師。"
    ],
    "explore": "看看我的實作",
    "map": "我的技術與興趣",
    "mapHint": "點選分類，看看我接觸的技術與主題。",
    "mapLabel": "我的技術與興趣關聯圖",
    "domains": [
      "後端與資料",
      "前端與編輯器",
      "寫作與創作"
    ],
    "mapNotes": [
      "我用 TypeScript、Node.js 與 C++ 做過資料工具和後端模板。",
      "我在 JavaScript 與 React 專案中研究文字編輯與介面操作。",
      "我分享 Linux 與 C 語言的學習經驗，也嘗試動畫和視覺創作。"
    ],
    "approach": "我的學習與實作經歷",
    "steps": [
      [
        "Linux 與 C 語言",
        "從作業系統、終端工具與程式基礎開始。"
      ],
      [
        "大學專題與研究",
        "接觸訊號處理、模糊控制與硬體實作。"
      ],
      [
        "工作後的個人專案",
        "持續做資料工具、編輯器與生活應用。"
      ],
      [
        "寫作與其他創作",
        "把學習過程整理成文章、教材與動畫製作記錄。"
      ]
    ],
    "caseTitle": "我做過的幾個專案",
    "caseText": "這三個專案分別涉及資料處理、React 整合與編輯器核心。我把各自的實作內容整理在這裡，也附上程式碼，方便進一步了解。",
    "caseNav": "選擇代表作品",
    "caseLabels": [
      "我在做什麼",
      "實作內容",
      "程式碼從哪裡看起"
    ],
    "caseSource": "看程式碼與文件",
    "diagram": "概念流程",
    "caseScope": "圖中整理的是主要概念；完整實作與使用方式可參考專案文件。",
    "search": "搜尋名稱、技術或介紹",
    "searchLabel": "搜尋工程專案",
    "allTech": "所有技術",
    "techLabel": "技術領域",
    "results": "個專案",
    "clear": "清除篩選",
    "empty": "沒有符合條件的專案",
    "emptyHelp": "試試其他關鍵字，或清除篩選查看完整作品。",
    "featured": "代表作品",
    "thesis": "大學專題",
    "menu": "開啟選單",
    "close": "關閉選單",
    "theme": "切換明暗主題",
    "navigation": "主要導覽",
    "top": "回到頂端",
    "contactLead": "歡迎找我聊聊技術。",
    "contactBody": "如果你對我的專案或文章有想法，或想交流開發經驗，歡迎寫信給我。",
    "mail": "寫信給我",
    "source": "我的 GitHub",
    "motion": "暫停動態效果",
    "resume": "啟用動態效果",
    "copy": "複製信箱",
    "copied": "已複製信箱",
    "copyFailed": "請使用 Email 連結",
    "history": "我的學習與實作經歷",
    "profileEvidence": [
      "parquet-tool / Express template",
      "scribeva-editor / React",
      "Linux / C / Inkscape / Blender"
    ],
    "cases": [
      {
        "id": "parquet-tool",
        "label": "TYPESCRIPT / C++",
        "title": "Parquet 資料處理工具",
        "summary": "我用 TypeScript 與 C++ Native Addon 實作 Parquet 處理工具，提供 CLI 和程式介面，涵蓋讀寫、驗證與格式轉換。",
        "blocks": [
          "這個專案處理 Parquet 檔案的常見操作，包括查看資料、追加紀錄、合併檔案，以及和其他格式互相轉換。",
          "我在專案中實作核心 Parquet 讀寫，沒有依賴現成的 npm Parquet 套件；另外加入合併時的 Schema 檢查、結構驗證，以及 CSV、JSON、XML、Arrow IPC 轉換。",
          "可以先看 examples/ 的基本讀寫，再看 Schema 定義、合併相容性檢查和 validate 回報。這些部分能看出資料格式與錯誤處理的實作方式。"
        ],
        "flow": [
          "CSV / JSON / XML",
          "TypeScript API",
          "C++ Native Addon",
          "Parquet"
        ],
        "tags": [
          "TypeScript",
          "C++",
          "Node.js",
          "Data format"
        ]
      },
      {
        "id": "scribeva-editor-react",
        "label": "REACT / EDITOR",
        "title": "React 文字編輯器整合",
        "summary": "在這個專案裡，我把文字編輯功能整合到 React，處理元件組合、狀態管理與介面操作。",
        "blocks": [
          "這是我的 React 編輯器整合專案。內容變更如何反映在畫面上、介面操作如何影響編輯狀態，是我在這裡關注的問題。",
          "實作內容圍繞 React 介面、元件組合與編輯互動，和編輯器核心專案一起記錄我在不同層次上的嘗試。",
          "可以從 React 介面開始，觀察元件如何承接編輯操作，再對照 scribeva-editor，了解介面與核心邏輯各自處理的部分。"
        ],
        "flow": [
          "User interaction",
          "React components",
          "Editor state",
          "Document"
        ],
        "tags": [
          "React",
          "Editor",
          "State",
          "Interaction"
        ]
      },
      {
        "id": "scribeva-editor",
        "label": "JAVASCRIPT / EDITOR",
        "title": "JavaScript 文字編輯器核心",
        "summary": "這是我用 JavaScript 實作的文字編輯器核心，重點放在內容操作、編輯行為，以及後續擴充的基礎。",
        "blocks": [
          "我在這個專案中處理文字內容的編輯與操作行為，研究一個編輯器需要哪些基礎功能，以及這些功能如何組合。",
          "這裡著重編輯核心本身；另一個 React 專案則關注介面整合。兩個專案可以放在一起看，了解我對編輯邏輯與畫面操作的處理。",
          "可以先閱讀核心提供的操作，再對照 React 版本，追蹤一次介面操作如何對應到內容變更。"
        ],
        "flow": [
          "Editing intent",
          "Core operations",
          "Content model",
          "Editor output"
        ],
        "tags": [
          "JavaScript",
          "Editor core",
          "Content",
          "Extensibility"
        ]
      }
    ]
  },
  "en": {
    "role": "Backend & full-stack engineer",
    "intro": "LIAN0123 / PERSONAL WEBSITE",
    "heroLines": [
      "I'm Lian.",
      "Backend &",
      "full-stack engineer."
    ],
    "explore": "Read my project notes",
    "map": "My technologies and interests",
    "mapHint": "Pick a category to see the technologies and topics I work with.",
    "mapLabel": "My technologies and interests",
    "domains": [
      "Backend & data",
      "Frontend & editors",
      "Writing & interests"
    ],
    "mapNotes": [
      "I use TypeScript, Node.js, and C++ in data tools and backend templates.",
      "I explore text editing and interfaces through JavaScript and React projects.",
      "I share what I learn about Linux and C, and experiment with animation and visual work."
    ],
    "approach": "What I have explored along the way",
    "steps": [
      [
        "Linux and C",
        "Starting with operating systems, terminal tools, and programming fundamentals."
      ],
      [
        "University projects",
        "Exploring signal processing, fuzzy control, and hardware."
      ],
      [
        "Personal projects",
        "Building data tools, editors, and everyday apps alongside my career."
      ],
      [
        "Writing and other interests",
        "Recording what I learn in articles, tutorials, and animation notes."
      ]
    ],
    "caseTitle": "A closer look at a few of my projects",
    "caseText": "These projects cover data processing, React integration, and editor internals. Here is what I worked on in each, with links to the code if you would like to explore further.",
    "caseNav": "Select a case study",
    "caseLabels": [
      "What I worked on",
      "Implementation",
      "Where to start reading"
    ],
    "caseSource": "Read the code and docs",
    "diagram": "Conceptual flow",
    "caseScope": "The diagrams outline the main concepts. Project documentation has the full implementation and usage details.",
    "search": "Search projects, technologies, or descriptions",
    "searchLabel": "Search engineering projects",
    "allTech": "All technologies",
    "techLabel": "Technology area",
    "results": "projects",
    "clear": "Clear filters",
    "empty": "No matching projects",
    "emptyHelp": "Try another keyword or clear the filters to explore all projects.",
    "featured": "Selected work",
    "thesis": "Capstone",
    "menu": "Open menu",
    "close": "Close menu",
    "theme": "Toggle color theme",
    "navigation": "Main navigation",
    "top": "Back to top",
    "contactLead": "Happy to talk about code.",
    "contactBody": "If you have thoughts on a project or article, or would like to compare development experiences, feel free to email me.",
    "mail": "Email me",
    "source": "My GitHub",
    "motion": "Pause animation",
    "resume": "Enable animation",
    "copy": "Copy email",
    "copied": "Email copied",
    "copyFailed": "Please use the email link",
    "history": "My learning and project history",
    "profileEvidence": [
      "parquet-tool / Express template",
      "scribeva-editor / React",
      "Linux / C / Inkscape / Blender"
    ],
    "cases": [
      {
        "id": "parquet-tool",
        "label": "TYPESCRIPT / C++",
        "title": "A Parquet data-processing tool",
        "summary": "I built this tool with TypeScript and a C++ native addon. It provides CLI commands and library APIs for Parquet I/O, validation, and format conversion.",
        "blocks": [
          "This project handles common Parquet operations: inspecting data, appending records, merging files, and converting between formats.",
          "I implemented the core Parquet I/O without an existing npm Parquet package, along with schema checks for merging, structural validation, and CSV, JSON, XML, and Arrow IPC conversion.",
          "Start with the basic I/O in examples/, then look at Schema definitions, merge compatibility checks, and validate reports to see how format boundaries and errors are handled."
        ],
        "flow": [
          "CSV / JSON / XML",
          "TypeScript API",
          "C++ Native Addon",
          "Parquet"
        ],
        "tags": [
          "TypeScript",
          "C++",
          "Node.js",
          "Data format"
        ]
      },
      {
        "id": "scribeva-editor-react",
        "label": "REACT / EDITOR",
        "title": "Text editing in React",
        "summary": "In this project, I integrate text editing into React and work on component composition, state management, and interface interactions.",
        "blocks": [
          "This is my React editor integration project. I focus on how content changes appear in the interface and how user interactions affect editing state.",
          "The implementation explores React interfaces, component composition, and editing interactions. Together with the core project, it records my work on different parts of an editor.",
          "Start with the React interface and follow how components handle editing actions, then compare scribeva-editor to see the responsibilities of the interface and core."
        ],
        "flow": [
          "User interaction",
          "React components",
          "Editor state",
          "Document"
        ],
        "tags": [
          "React",
          "Editor",
          "State",
          "Interaction"
        ]
      },
      {
        "id": "scribeva-editor",
        "label": "JAVASCRIPT / EDITOR",
        "title": "A JavaScript text-editor core",
        "summary": "This is my JavaScript editor-core project, focused on content operations, editing behavior, and foundations for further extensions.",
        "blocks": [
          "I work on content editing and operation behavior here, exploring the basic functions an editor needs and how they fit together.",
          "This project focuses on the editing core; the React project focuses on interface integration. Together, they show how I approach editing logic and user interactions.",
          "Begin with the operations exposed by the core, then compare the React version to follow an interface action through to a content change."
        ],
        "flow": [
          "Editing intent",
          "Core operations",
          "Content model",
          "Editor output"
        ],
        "tags": [
          "JavaScript",
          "Editor core",
          "Content",
          "Extensibility"
        ]
      }
    ]
  },
  "jp": {
    "role": "バックエンド・フルスタックエンジニア",
    "intro": "LIAN0123 / PERSONAL WEBSITE",
    "heroLines": [
      "連永立です。",
      "バックエンド・",
      "フルスタック開発。"
    ],
    "explore": "実装の記録を見る",
    "map": "私が使う技術と関心",
    "mapHint": "分類を選ぶと、取り組んできた技術やテーマを確認できます。",
    "mapLabel": "私の技術と関心の関連図",
    "domains": [
      "基盤・データ",
      "UI・エディター",
      "記事・創作"
    ],
    "mapNotes": [
      "TypeScript、Node.js、C++でデータツールやバックエンドの雛形を作っています。",
      "JavaScriptとReactで文字編集やUI操作を研究しています。",
      "LinuxやC言語で学んだことを共有し、アニメーションや視覚表現も試しています。"
    ],
    "approach": "これまでの学習と制作",
    "steps": [
      [
        "LinuxとC言語",
        "OS、端末ツール、プログラミングの基礎から。"
      ],
      [
        "大学での研究",
        "信号処理、ファジィ制御、ハードウェアに取り組む。"
      ],
      [
        "社会人からの個人開発",
        "データツール、エディター、日常のアプリを制作。"
      ],
      [
        "記事と創作",
        "学習の過程を記事、教材、アニメーション制作の記録に。"
      ]
    ],
    "caseTitle": "いくつかの制作物を詳しく紹介します",
    "caseText": "データ処理、Reactへの統合、編集コアの三つのプロジェクトです。それぞれで取り組んだ内容をまとめ、コードへのリンクも掲載しています。",
    "caseNav": "代表作品を選択",
    "caseLabels": [
      "取り組んだこと",
      "実装内容",
      "コードを読むなら"
    ],
    "caseSource": "コードと資料を読む",
    "diagram": "概念フロー",
    "caseScope": "図は主な概念を整理したものです。詳しい実装や使い方はプロジェクトの資料をご覧ください。",
    "search": "名前・技術・説明を検索",
    "searchLabel": "開発作品を検索",
    "allTech": "すべての技術",
    "techLabel": "技術分野",
    "results": "件",
    "clear": "条件をリセット",
    "empty": "該当する作品はありません",
    "emptyHelp": "別のキーワードを試すか、条件を解除してください。",
    "featured": "代表作品",
    "thesis": "卒業制作",
    "menu": "メニューを開く",
    "close": "メニューを閉じる",
    "theme": "テーマ切り替え",
    "navigation": "メインナビゲーション",
    "top": "ページ上部へ",
    "contactLead": "技術の話も、気軽にどうぞ。",
    "contactBody": "制作物や記事への感想、開発経験についての話など、気軽にメールをいただければうれしいです。",
    "mail": "メールする",
    "source": "私のGitHub",
    "motion": "動きを止める",
    "resume": "動きを有効にする",
    "copy": "メールをコピー",
    "copied": "コピーしました",
    "copyFailed": "メールリンクをご利用ください",
    "history": "これまでの学習と制作",
    "profileEvidence": [
      "parquet-tool / Express template",
      "scribeva-editor / React",
      "Linux / C / Inkscape / Blender"
    ],
    "cases": [
      {
        "id": "parquet-tool",
        "label": "TYPESCRIPT / C++",
        "title": "Parquetのデータ処理ツール",
        "summary": "TypeScriptとC++ネイティブ拡張で制作したツールです。Parquetの読み書き、検証、形式変換をCLIとAPIで扱えます。",
        "blocks": [
          "データの確認、レコードの追記、ファイルの結合、他の形式との変換など、Parquetの操作を扱うプロジェクトです。",
          "既存のnpm Parquetパッケージに依存せず、基本の読み書きを実装しました。結合時のSchema確認、構造検証、CSV・JSON・XML・Arrow IPC変換も扱っています。",
          "examples/の基本的な読み書きから始め、Schema定義、結合時の互換性チェック、validateの結果を見ると、形式とエラーの扱いが分かります。"
        ],
        "flow": [
          "CSV / JSON / XML",
          "TypeScript API",
          "C++ Native Addon",
          "Parquet"
        ],
        "tags": [
          "TypeScript",
          "C++",
          "Node.js",
          "Data format"
        ]
      },
      {
        "id": "scribeva-editor-react",
        "label": "REACT / EDITOR",
        "title": "Reactへのテキスト編集機能の統合",
        "summary": "文字編集をReactへ組み込み、コンポーネント構成、状態管理、UI操作に取り組んでいるプロジェクトです。",
        "blocks": [
          "内容の変更が画面にどう反映され、UI操作が編集状態にどう影響するかに関心を持って取り組んでいます。",
          "ReactのUI、コンポーネントの組み合わせ、編集操作が主な内容です。編集コアのプロジェクトと合わせて、異なる層での実装を記録しています。",
          "ReactのUIから操作をたどり、scribeva-editorと比較すると、UIとコアで何を扱っているかを確認できます。"
        ],
        "flow": [
          "User interaction",
          "React components",
          "Editor state",
          "Document"
        ],
        "tags": [
          "React",
          "Editor",
          "State",
          "Interaction"
        ]
      },
      {
        "id": "scribeva-editor",
        "label": "JAVASCRIPT / EDITOR",
        "title": "JavaScriptのテキスト編集コア",
        "summary": "JavaScriptで実装した編集コアです。内容操作、編集時の振る舞い、拡張のための基礎に取り組んでいます。",
        "blocks": [
          "文字内容の編集や操作を扱い、エディターに必要な基本機能と、その組み合わせ方を研究しています。",
          "こちらは編集コア、React版はUIへの統合に重点を置いています。両方を見ることで、編集ロジックと画面操作への取り組みを確認できます。",
          "コアが提供する操作から読み始め、React版と比較すると、UI操作から内容変更までの流れをたどれます。"
        ],
        "flow": [
          "Editing intent",
          "Core operations",
          "Content model",
          "Editor output"
        ],
        "tags": [
          "JavaScript",
          "Editor core",
          "Content",
          "Extensibility"
        ]
      }
    ]
  }
};
