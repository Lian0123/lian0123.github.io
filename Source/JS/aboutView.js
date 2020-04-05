
const aboutView = new Vue({
    el:"#aboutView", 
    data:{
    },
    mounted() {
        this.$i18n.locale = 'zh-tw';
    },
    methods:{

    },
    i18n:new VueI18n({
        locale: 'zh-tw',
        fallbackLocale: 'zh-tw',
        messages:{
            "zh-tw": {
                technology  :`使用技術`,
                version     :`版本演進`,
                versionList :[
                    {
                        date : `2019-07-07`,
                        data : `第一版網頁上線`,
                    },
                    {
                        date : `2019-09-19`,
                        data : `修正字體與修復Bug`,
                    },
                    {
                        date : `2019-12-15`,
                        data : `加入Telegram留言功能`,
                    },
                    {
                        date : `2020-03-13`,
                        data : `第二版網頁測試上線`,
                    },
                    {
                        date : `2020-04-05`,
                        data : `第2.1版調整`,
                    }
                ]
            },
            "zh-cn": {
                technology  :`使用技术`,
                version     :`版本演进`,
                versionList :[
                    {
                        date : `2019-07-07`,
                        data : `第一版网页上线`,
                    },
                    {
                        date : `2019-09-19`,
                        data : `修正字体与修复Bug`,
                    },
                    {
                        date : `2019-12-15`,
                        data : `加入Telegram留言功能`,
                    },
                    {
                        date : `2020-03-13`,
                        data : `第二版网页测试上线`,
                    },
                    {
                        date : `2020-04-05`,
                        data : `第2.1版调整`,
                    }
                ]
            },
            "en": {
                technology  :`Use of technology`,
                version     :`Version evolution`,
                versionList :[
                    {
                        date : `2019-07-07`,
                        data : `The first version`,
                    },
                    {
                        date : `2019-09-19`,
                        data : `Fixed fonts and bugs`,
                    },
                    {
                        date : `2019-12-15`,
                        data : `Add Telegram commit bot`,
                    },
                    {
                        date : `2020-03-13`,
                        data : `The second version test`,
                    },
                    {
                        date : `2020-04-05`,
                        data : `Update to version 2.1`,
                    }
                ]
            },
            "jp": {
                technology  :`技術の使用`,
                version     :`バージョン更新`,
                versionList :[
                    {
                        date : `令和元年7月7日`,
                        data : `最初のバージョン`,
                    },
                    {
                        date : `令和元年6月19日`,
                        data : `修正fontsとbugs`,
                    },
                    {
                        date : `令和元年12月15日`,
                        data : `加入Telegram commit bot`,
                    },
                    {
                        date : `令和2年3月13日`,
                        data : `第二版テスト`,
                    },
                    {
                        date : `令和2年4月5日`,
                        data : `第2.1版修正`,
                    }
                ]
            }
        }
    }),
});