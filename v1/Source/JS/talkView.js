
const talkView = new Vue({
    el:"#talkView", 
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
                    bulletinBoard : `留言板`,
            },
            "zh-cn": {
                    bulletinBoard : `留言区`,
            },
            "en": {
                    bulletinBoard : `Bulletin Board`,
            },
            "jp": {
                    bulletinBoard : `掲示板`,
            },
        }
    }),
});