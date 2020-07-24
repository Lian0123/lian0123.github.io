Chart.platform.disableCSSInjection = true;
Chart.defaults.global.defaultFontColor = "#fff";
var SkillList0,SkillList1;
const mainView = new Vue({
    el:"#mainView", 
    data:{
        isShowBtn:true,
    },
    mounted() {
        this.$i18n.locale = `zh-tw`;
        SkillList0 = new Chart(document.getElementById(`SkillList0`).getContext(`2d`), {
            type: `horizontalBar`,
            data: {
                labels: [`全端網頁設計`, `人工智慧(Fuzzy領域)`, `計算機組織架構`, `資安管理`, `Electorn視窗程式開發`],
                datasets: [{
                    label: `熟練等級`,
                    data: [5, 4, 4, 3, 3],
                    backgroundColor: [
                        `rgba(255, 255, 255, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(195, 195, 195, 1)`,
                    ],
                    borderWidth: 1
                }],                
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize:1,
                        },
						scaleLabel: {
							display: true,
						},
                        gridLines: {
                            color:`rgba(255, 255, 255, 0.4)`
                        },
                    }],
                    yAxes: [{
						scaleLabel: {
							display: true,
						},
                        gridLines: {
                            color:`rgba(255, 255, 255, 0.4)`
                        },
                    }],
                },
                elements: {
                    rectangle: {
                        borderWidth: 1,
                    }
                },
            }
        });
        SkillList1 = new Chart(document.getElementById(`SkillList1`).getContext(`2d`), {
            type: `horizontalBar`,
            data: {
                labels: [`Linux系統`, `Microsoft Word`, `Microsoft Presentation`, `Microsoft Excel`, `Git工具`,
                `VS Code`,`PhpMyAdmin`,`Vim`,`SSH`,`GCC`,`G++`,`Visual Studio`,`Draw.io`,`Krita`,`XeLatex`,`LibreOffice`,`Sketchup`,`Unity遊戲引擎(2D)`,`Android Studio`,`Blender`],
                datasets: [{
                    label: `熟練等級`,
                    data: [5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1],
                    backgroundColor: [
                        `rgba(255, 255, 255, 1)`,
                        `rgba(255, 255, 255, 1)`,
                        `rgba(255, 255, 255, 1)`,
                        `rgba(255, 255, 255, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(165, 165, 165, 1)`,
                        `rgba(165, 165, 165, 1)`,
                        `rgba(165, 165, 165, 1)`,
                        `rgba(165, 165, 165, 1)`,
                        `rgba(165, 165, 165, 1)`,
                        `rgba(165, 165, 165, 1)`,
                        `rgba(135, 135, 135, 1)`,
                    ],
                    borderWidth: 1
                }],
                

                
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize:1,
                        },
						scaleLabel: {
							display: true,
						},
                        gridLines: {
                            color:`rgba(255, 255, 255, 0.4)`
                        },
                    }],
                    yAxes: [{
						scaleLabel: {
							display: true,
						},
                        gridLines: {
                            color:`rgba(255, 255, 255, 0.4)`
                        },
                    }],
                },
                elements: {
                    rectangle: {
                        borderWidth: 1,
                    }
                },
            }
        });
        SkillList2 = new Chart(document.getElementById(`SkillList2`).getContext(`2d`), {
            type: `horizontalBar`,
            data: {
                labels: [`C`, `C++`, `C#(WPF、Unity腳本)`, `Bash`, `PHP`, `JavaScript(含node.js)`, `GO`,`Python`,`Kotlin`,`System Verilog`,`VHDL`,`JAVA`],
                datasets: [{
                    label: `熟練等級`,
                    data: [4, 4, 4, 4, 4, 4, 3, 2, 2, 2, 2, 1],
                    backgroundColor: [
                        `rgba(225, 225, 225, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(165, 165, 165, 1)`,
                        `rgba(165, 165, 165, 1)`,
                        `rgba(165, 165, 165, 1)`,
                        `rgba(165, 165, 165, 1)`,
                        `rgba(135, 135, 135, 1)`,
                    ],
                    borderWidth: 1
                }],
                

                
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize:1,
                        },
						scaleLabel: {
							display: true,
						},
                        gridLines: {
                            color:`rgba(255, 255, 255, 0.4)`
                        },
                    }],
                    yAxes: [{
						scaleLabel: {
							display: true,
						},
                        gridLines: {
                            color:`rgba(255, 255, 255, 0.4)`
                        },
                    }],
                },
                elements: {
                    rectangle: {
                        borderWidth: 1,
                    }
                },
            }
        });
        SkillList3 = new Chart(document.getElementById(`SkillList3`).getContext(`2d`), {
            type: `horizontalBar`,
            data: {
                labels: [`Vue`, `Vue-i18n`, `Vue-Router`, `Electorn.js`, `bootstarp`, `TocasUI`, `gin(Go)`, `Laravel`, `Webpack`],
                datasets: [{
                    label: `熟練等級`,
                    data: [4, 4, 4, 4, 4, 4, 4, 3, 2],
                    backgroundColor: [
                        `rgba(225, 225, 225, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(225, 225, 225, 1)`,
                        `rgba(195, 195, 195, 1)`,
                        `rgba(165, 165, 165, 1)`,
                    ],
                    borderWidth: 1
                }],                
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize:1,
                        },
						scaleLabel: {
							display: true,
						},
                        gridLines: {
                            color:`rgba(255, 255, 255, 0.4)`
                        },
                    }],
                    yAxes: [{
						scaleLabel: {
							display: true,
						},
                        gridLines: {
                            color:`rgba(255, 255, 255, 0.4)`
                        },
                    }],
                },
                elements: {
                    rectangle: {
                        borderWidth: 1,
                    }
                },
            }
        });
    },
    methods:{

    },
    i18n:new VueI18n({
        locale: `zh-tw`,
        fallbackLocale: `zh-tw`,
        messages:{
            "zh-tw": {
                hello         : `Hi, 歡迎來到這個網頁`,
                helloMeta     : `在這裡專門存放著我的作品集，包含我個人撰寫的文件與程式專案。`,
                about         : `個人資訊` ,
                name          : `Lian0123（連永立）`,
                Introduction  : `簡介`,
                Introductions : `一個還在找工作的準工程師、業餘教學文撰寫者、業餘風景攝影愛好者、業餘繪圖愛好者。`,
                skills        : `技能列表`,
                skillsList    : [
                                    {Type:"理論與技術",List:[
                                        {SkillName:"全端網頁設計", Level:"專精"},
                                        {SkillName:"人工智慧(Fuzzy領域)", Level:"擅長"},
                                        {SkillName:"計算機組織架構", Level:"擅長"},
                                        {SkillName:"資安管理", Level:"熟懂"},
                                        {SkillName:"Electorn視窗程式開發",Level:"熟懂"},
                                    ]},
                                    {Type:"技術工具",List:[
                                        {SkillName:"Linux系統", Level:"專精"},
                                        {SkillName:"Microsoft Word", Level:"專精"},
                                        {SkillName:"Microsoft Presentation", Level:"專精"},
                                        {SkillName:"Microsoft Excel", Level:"專精"},
                                        {SkillName:"Git工具",Level:"擅長"},
                                        {SkillName:"VS Code",Level:"擅長"},
                                        {SkillName:"PhpMyAdmin",Level:"擅長"},
                                        {SkillName:"Vim",Level:"擅長"},
                                        {SkillName:"SSH",Level:"基礎"},
                                        {SkillName:"GCC",Level:"熟懂"},
                                        {SkillName:"G++",Level:"熟懂"},
                                        {SkillName:"Visual Studio",Level:"熟懂"},
                                        {SkillName:"Draw.io",Level:"熟懂"},
                                        {SkillName:"Krita",Level:"基礎"},
                                        {SkillName:"XeLatex",Level:"基礎"},
                                        {SkillName:"LibreOffice",Level:"基礎"},
                                        {SkillName:"Sketchup",Level:"基礎"},
                                        {SkillName:"Unity遊戲引擎(2D)",Level:"基礎"},
                                        {SkillName:"Android Studio",Level:"基礎"},
                                        {SkillName:"Blender",Level:"用過"},
                                    ]},
                                    {Type:"程式語言",List:[
                                        {SkillName:"C",Level:"熟懂"},
                                        {SkillName:"C++",Level:"熟懂"},
                                        {SkillName:"C#(WPF、Unity腳本)",Level:"熟懂"},
                                        {SkillName:"Bash",Level:"熟懂"},
                                        {SkillName:"PHP",Level:"熟懂"},
                                        {SkillName:"JavaScript(含node.js)",Level:"熟懂"},
                                        {SkillName:"GO",Level:"熟懂"},
                                        {SkillName:"Python",Level:"基礎"},
                                        {SkillName:"Kotlin",Level:"基礎"},
                                        {SkillName:"System Verilog",Level:"基礎"},
                                        {SkillName:"VHDL",Level:"基礎"},
                                        {SkillName:"JAVA",Level:"用過"},
                                    ]},
                                    {Type:"使用過的框架",List:[
                                        {SkillName:"Vue",Level:"熟懂"},
                                        {SkillName:"Vue-i18n",Level:"熟懂"},
                                        {SkillName:"Vue-Router",Level:"熟懂"},
                                        {SkillName:"Electorn.js",Level:"熟懂"},
                                        {SkillName:"bootstarp",Level:"熟懂"},
                                        {SkillName:"TocasUI",Level:"熟懂"},
                                        {SkillName:"gin(Go)",Level:"熟懂"},
                                        {SkillName:"Laravel",Level:"熟懂"},

                                    ]}
                                ],
                seniority     : `資歷`,
                seniorityMeta : [`2016 國立臺南大學第九屆學生會新聞部部長`,`2017 國立臺南大學資訊工程學系第十屆宿營攝影長`,`2017 國立臺南大學資訊科學服務社 南化國小Scratch程式設計課講師`,`2018 國立臺南大學資訊科學服務社 南化國小Scratch程式設計課攝影`,`2019 參與下世代物聯網通訊技術虛擬實作工作坊`,`2020 參與第16屆台灣軟體工程演討會並進行報告`],
                sideProject   : `個人業餘專案`,
                projectMeta   : [`一個輔助Linux Mint Cinnamon系統安裝完後安裝其他常用程式的腳本。`,`純文字藝術。`,`使zhcorn能轉成UTF8繁體中文的小工具。`,`開發中，使用Javascript實現galgame文字冒險遊戲引擎。`,`開發中，使用Javascript與系統檔案儲存實現的Json儲存資料庫。`],
                information   : `相關資訊`,
                writings      : `著作`,
                EasyLinux     : `看似比較簡單的Linux推坑教學`,
                EasyBase      : `看似比較簡單的推坑教學`,
                writingsMeta  : [`Linux安裝篇linux mint 18 cinnamon`,`Linux安裝篇 manjaro linux 201606 kde`,`C語言從崩潰到崩潰Ex(一)`,`C語言從崩潰到崩潰Ex(二)`,`linux mint cinnamon 18.1 操作設定教學`,`講解在手機上使用 linux`,`Linux安裝篇 ArchLabs 2019.01.20安裝`],
                links         : `相關連結`,
            },
            "zh-cn": {
                hello         : `Hi, 欢迎来到这个网页`,
                helloMeta     : `在这里专门存放着我的作品集，包含我个人撰写的文件与程式专案。`,
                about         : `个人资讯` ,
                name          : `Lian0123（连永立）`,
                Introduction  : `简介`,
                Introductions : `一个还在找工作的工程师、业余教学文撰写者、业余风景摄影爱好者、业余绘图爱好者。`,
                skills        : `技能列表`,
                skillsList    : [
                                        {Type:"理论与技术",List:[
                                        {SkillName:"全端网页设计", Level:"专精"},
                                        {SkillName:"人工智慧(Fuzzy领域)", Level:"擅长"},
                                        {SkillName:"计算机组织架构", Level:"擅长"},
                                        {SkillName:"资安管理", Level:"熟懂"},
                                        {SkillName:"Electorn视窗程式开发",Level:"熟懂"},
                                    ]},
                                    {Type:"技术工具",List:[
                                        {SkillName:"Linux系统", Level:"专精"},
                                        {SkillName:"Microsoft Word", Level:"专精"},
                                        {SkillName:"Microsoft Presentation", Level:"专精"},
                                        {SkillName:"Microsoft Excel", Level:"专精"},
                                        {SkillName:"Git工具",Level:"擅长"},
                                        {SkillName:"VS Code",Level:"擅长"},
                                        {SkillName:"PhpMyAdmin",Level:"擅长"},
                                        {SkillName:"Vim",Level:"擅长"},
                                        {SkillName:"SSH",Level:"基础"},
                                        {SkillName:"GCC",Level:"熟懂"},
                                        {SkillName:"G++",Level:"熟懂"},
                                        {SkillName:"Visual Studio",Level:"熟懂"},
                                        {SkillName:"Draw.io",Level:"熟懂"},
                                        {SkillName:"Krita",Level:"基础"},
                                        {SkillName:"XeLatex",Level:"基础"},
                                        {SkillName:"LibreOffice",Level:"基础"},
                                        {SkillName:"Sketchup",Level:"基础"},
                                        {SkillName:"Unity游戏引擎(2D)",Level:"基础"},
                                        {SkillName:"Android Studio",Level:"基础"},
                                        {SkillName:"Blender",Level:"用过"},
                                    ]},
                                    {Type:"程式语言",List:[
                                        {SkillName:"C",Level:"熟懂"},
                                        {SkillName:"C++",Level:"熟懂"},
                                        {SkillName:"C#(WPF、Unity脚本)",Level:"熟懂"},
                                        {SkillName:"Bash",Level:"熟懂"},
                                        {SkillName:"PHP",Level:"熟懂"},
                                        {SkillName:"JavaScript(含node.js)",Level:"熟懂"},
                                        {SkillName:"GO",Level:"熟懂"},
                                        {SkillName:"Python",Level:"基础"},
                                        {SkillName:"Kotlin",Level:"基础"},
                                        {SkillName:"System Verilog",Level:"基础"},
                                        {SkillName:"VHDL",Level:"基础"},
                                        {SkillName:"JAVA",Level:"用过"},
                                    ]},
                                    {Type:"使用过的框架",List:[
                                        {SkillName:"Vue",Level:"熟懂"},
                                        {SkillName:"Vue-i18n",Level:"熟懂"},
                                        {SkillName:"Vue-Router",Level:"熟懂"},
                                        {SkillName:"Electorn.js",Level:"熟懂"},
                                        {SkillName:"bootstarp",Level:"熟懂"},
                                        {SkillName:"TocasUI",Level:"熟懂"},
                                        {SkillName:"gin(Go)",Level:"熟懂"},
                                        {SkillName:"Laravel",Level:"基础"},
                                    ]}
                                ],
                seniority     : `资历`,
                seniorityMeta : [`2016 国立台南大学第九届学生会新闻部部长`,`2017 国立台南大学资讯工程学系第十届宿营摄影长`,`2017 国立台南大学资讯科​​学服务社南化国小Scratch程式设计课讲师` ,`2018 国立台南大学资讯科​​学服务社南化国小Scratch程式设计课摄影`,`2019 参与下世代物联网通讯技术虚拟实作工作坊`,`2020 参与第16届台湾软体工程演讨会并进行报告`],
                sideProject   : `个人业余专案`,
                projectMeta   : [`一个辅助Linux Mint Cinnamon系统安装完后安装其他常用程式的脚本。`,`纯文字艺术。`,`使zhcorn能转成UTF8繁体中文的小工具。`,`开发中，使用Javascript实现galgame文字冒险游戏引擎。`,`开发中，使用Javascript与系统档案储存实现的Json储存资料库。`],
                information   : `相关信息`,
                writings      : `著作`,
                EasyLinux     : `看似比较简单的Linux推坑教学`,
                EasyBase      : `看似比较简单的推坑教学`,
                writingsMeta  : [`Linux安装篇 linux mint 18 cinnamon`,`Linux安装篇 manjaro linux 201606 kde`,`C语言从崩溃到崩溃Ex(一)`,`C语言从崩溃到崩溃Ex(二)`,`linux mint cinnamon 18.1 操作设定教学`,`讲解在手机上使用linux`,`Linux安装篇ArchLabs 2019.01.20安装`],
                links         : `相关连结`,
            },
            "en": {
                hello         : `Hi, Welcome To This Website`,
                helloMeta     : `I store my portfolio in this page, including my personally written documents and program projects.`,
                about         : `About` ,
                name          : `Lian0123(Warren Lian)`,
                Introduction  : `Introduction`,
                Introductions : `An engineer still looking for a job, amateur technical article writer, amateur landscape photographer, amateur drawing enthusiast.`,
                skills        : `Skill List`,
                skillsList    : [
                                    {Type:"Theory and technology",List:[
                                        {SkillName:"Full-end web design", Level:"Specialization"},
                                        {SkillName:"AI(Fuzzy)", Level:"expert"},
                                        {SkillName:"The computer architecture", Level:"expert"},
                                        {SkillName:"Computer security", Level:"familiar"},
                                        {SkillName:"Electorn GUI program development",Level:"familiar"},
                                    ]},
                                    {Type:"Used tools",List:[
                                        {SkillName:"Linux System", Level:"specialization"},
                                        {SkillName:"Microsoft Word", Level:"specialization"},
                                        {SkillName:"Microsoft Presentation", Level:"specialization"},
                                        {SkillName:"Microsoft Excel", Level:"specialization"},
                                        {SkillName:"Git Tool",Level:"expert"},
                                        {SkillName:"VS Code",Level:"expert"},
                                        {SkillName:"PhpMyAdmin",Level:"expert"},
                                        {SkillName:"Vim",Level:"expert"},
                                        {SkillName:"GCC",Level:"familiar"},
                                        {SkillName:"G++",Level:"familiar"},
                                        {SkillName:"Visual Studio",Level:"familiar"},
                                        {SkillName:"Draw.io",Level:"familiar"},
                                        {SkillName:"SSH",Level:"basis"},
                                        {SkillName:"Krita",Level:"basis"},
                                        {SkillName:"XeLatex",Level:"basis"},
                                        {SkillName:"LibreOffice",Level:"basis"},
                                        {SkillName:"Sketchup",Level:"basis"},
                                        {SkillName:"Unity Engine(2D)",Level:"basis"},
                                        {SkillName:"Android Studio",Level:"basis"},
                                        {SkillName:"Blender",Level:"used"},
                                    ]},
                                    {Type:"Program language",List:[
                                        {SkillName:"C",Level:"expert"},
                                        {SkillName:"C++",Level:"expert"},
                                        {SkillName:"C#(WPF、Unity Engine)",Level:"expert"},
                                        {SkillName:"Bash",Level:"expert"},
                                        {SkillName:"PHP",Level:"expert"},
                                        {SkillName:"JavaScript+node.js",Level:"expert"},
                                        {SkillName:"GO",Level:"expert"},
                                        {SkillName:"Python",Level:"basis"},
                                        {SkillName:"Kotlin",Level:"basis"},
                                        {SkillName:"System Verilog",Level:"basis"},
                                        {SkillName:"VHDL",Level:"basis"},
                                        {SkillName:"JAVA",Level:"used"},
                                    ]},
                                    {Type:"Used framework",List:[
                                        {SkillName:"Vue",Level:"expert"},
                                        {SkillName:"Vue-i18n",Level:"expert"},
                                        {SkillName:"Vue-Router",Level:"expert"},
                                        {SkillName:"Electorn.js",Level:"expert"},
                                        {SkillName:"bootstarp",Level:"expert"},
                                        {SkillName:"TocasUI",Level:"expert"},
                                        {SkillName:"gin(Go)",Level:"expert"},
                                        {SkillName:"Laravel",Level:"basis"},

                                    ]}
                ],
                seniority     : `Seniority`,
                seniorityMeta : [`2016 Ninth Student Union of National Tainan University minister of information`,`2017 Tenth Camping Photography, Department of Information Engineering, National Tainan University`,`2017 National Tainan University Information Science Service Club, Nanhua Elementary School Scratch Program Design Class lecturer`,`2018 National Tainan University Information Science Service Club, Nanhua Elementary School Scratch Scratch Program Design Class photography`,`2019 Participate In The Virtual Reality Workshop Of Next Generation IoT Communication Technology`,`2020 Participate In The 16TH Software Engineering Association Taiwan Conference`],
                sideProject   : `Side-Project`,
                projectMeta   : [`A script to assist the installation of other common programs after the Linux Mint Cinnamon system is installed.`,`Only text art.`,`Turn Zhcorn into a UTF-8 Traditional Chinese tool.`,`In development, use Javascript to realize the galgame text adventure game engine.`,`In development, use Javascript and system file storage to realize the JSON storage database.`],
                information   : `relevant information`,
                writings      : `Writings`,
                EasyLinux     : `See maybe simple Linux teaching`,
                EasyBase      : `See maybe simple teaching`,
                writingsMeta  : [`Linux installation chapter, linux mint 18 cinnamon`,`Linux installation chapter,manjaro linux 201606 kde`,`C language from crazy to crazy EX (1)`,`C language from crazy to crazy EX (2)`,`linux mint cinnamon 18.1 Setting`,`How to using linux(debian) in android phone`,`Linux installation chapter, ArchLabs 2019.01.20 install`],
                links         : `Related links`,
            },
            "jp": {
                hello         : `このページへようこそ`,
                helloMeta     : `個人的に作成した著作とProgram Projectsを含むポートフォリオをこのページに保存します。`,
                about         : `情報` ,
                name          : `Lian0123（立花 永蓮）`,
                skills        : `技術列表`,
                skillsList    : [
                                    {Type:"Theory and technology",List:[
                                        {SkillName:"Full-end web design", Level:"Specialization"},
                                        {SkillName:"AI(Fuzzy)", Level:"expert"},
                                        {SkillName:"The computer architecture", Level:"expert"},
                                        {SkillName:"Computer security", Level:"familiar"},
                                        {SkillName:"Electorn GUI program development",Level:"familiar"},
                                    ]},
                                    {Type:"Used tools",List:[
                                        {SkillName:"Linux System", Level:"specialization"},
                                        {SkillName:"Microsoft Word", Level:"specialization"},
                                        {SkillName:"Microsoft Presentation", Level:"specialization"},
                                        {SkillName:"Microsoft Excel", Level:"specialization"},
                                        {SkillName:"Git Tool",Level:"expert"},
                                        {SkillName:"VS Code",Level:"expert"},
                                        {SkillName:"PhpMyAdmin",Level:"expert"},
                                        {SkillName:"Vim",Level:"expert"},
                                        {SkillName:"GCC",Level:"familiar"},
                                        {SkillName:"G++",Level:"familiar"},
                                        {SkillName:"Visual Studio",Level:"familiar"},
                                        {SkillName:"Draw.io",Level:"familiar"},
                                        {SkillName:"SSH",Level:"basis"},
                                        {SkillName:"Krita",Level:"basis"},
                                        {SkillName:"XeLatex",Level:"basis"},
                                        {SkillName:"LibreOffice",Level:"basis"},
                                        {SkillName:"Sketchup",Level:"basis"},
                                        {SkillName:"Unity Engine(2D)",Level:"basis"},
                                        {SkillName:"Android Studio",Level:"basis"},
                                        {SkillName:"Blender",Level:"used"},
                                    ]},
                                    {Type:"Program language",List:[
                                        {SkillName:"C",Level:"expert"},
                                        {SkillName:"C++",Level:"expert"},
                                        {SkillName:"C#(WPF、Unity Engine)",Level:"expert"},
                                        {SkillName:"Bash",Level:"expert"},
                                        {SkillName:"PHP",Level:"expert"},
                                        {SkillName:"JavaScript+node.js",Level:"expert"},
                                        {SkillName:"GO",Level:"expert"},
                                        {SkillName:"Python",Level:"basis"},
                                        {SkillName:"Kotlin",Level:"basis"},
                                        {SkillName:"System Verilog",Level:"basis"},
                                        {SkillName:"VHDL",Level:"basis"},
                                        {SkillName:"JAVA",Level:"used"},
                                    ]},
                                    {Type:"Used framework",List:[
                                        {SkillName:"Vue",Level:"expert"},
                                        {SkillName:"Vue-i18n",Level:"expert"},
                                        {SkillName:"Vue-Router",Level:"expert"},
                                        {SkillName:"Electorn.js",Level:"expert"},
                                        {SkillName:"bootstarp",Level:"expert"},
                                        {SkillName:"TocasUI",Level:"expert"},
                                        {SkillName:"gin(Go)",Level:"expert"},
                                        {SkillName:"Laravel",Level:"basis"},

                                    ]}
                ],
                Introduction  : `情報`,
                Introductions : `まだ仕事を探しているエンジニア、アマチュア技術記事ライター、アマチュア風景写真家、素人お絵かきマニア。`,
                seniority     : `経歴`,
                seniorityMeta : [`平成28年 国立台南大学第九屆学生会新聞部部長`,`平成29年 国立台南大学情報工学系第十屆キャンプ攝影`,`平成29年 国立台南大学情報科学服務部 南化国民小学Scratchプログラミングコース講師`,`平成30年 国立台南大学情報科学服務部 南化国民小学Scratchプログラミングコース攝影`,`令和元年 次世代のIoT通信技術の仮想ワークショップに参加する`,`令和2年 第16回台湾ソフトウェアエンジニアリングアソシエーション会議報告に参加する`],
                sideProject   : `Side-Project`,
                projectMeta   : [`Linux Mint Cinnamonシステムのインストール後、他の一般的なプログラムのインストールを支援するスクリプト。`,`テキストアート。`,`ZhcornをUTF-8繁体字ツールに変えることができます。`,`開発中は、Javascriptを使用してギャルゲームテキストアドベンチャーゲームエンジンを実現します。`,`開発中は、JavaScriptおよびシステムファイルストレージを使用して、JSONストレージデータベースを実現します。`],
                information   : `関連情報`,
                writings      : `著作`,
                EasyLinux     : `一見シンプルなLinux教学`,
                EasyBase      : `一見シンプルな教学`,
                writingsMeta  : [`Linuxインストール linux mint 18 cinnamon`,`Linuxインストール manjaro linux 201606 kde`,`クレイジーからクレイジーまでのC言語Ex(一)`,`クレイジーからクレイジーまでのC言語Ex(二)`,`linux mint cinnamon 18.1 操作設定`,`AndroidフォンでLinux(debian)を使用する方法`,`Linuxインストール ArchLabs 2019.01.20インストール`],
                links         : `関連サイト`,
            },
        }
    }),
});
