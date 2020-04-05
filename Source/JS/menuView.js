
const menuView = new Vue({
    el:"#menuView", 
    data:{
        locale    : `zh-tw`,
        nowView   : `index`,
        isShowBtn : false  ,
        isOpenBtn : false  ,
    },
    mounted() {
        this.$i18n.locale = 'zh-tw';

        setInterval(() => {
            if(window.outerWidth > window.outerHeight){
                this.isShowBtn = true;
            }else{
                this.isShowBtn = false;
            }
        },500);
    },
    methods:{
        changeView:function(pageName){
            this.isOpenBtn = false;
            window.scrollTo(0,0);

            if(pageName === "indexView" ){
                document.getElementsByTagName("div").mainView.style.display     = "";
                document.getElementsByTagName("div").documentView.style.display = "none";
                document.getElementsByTagName("div").projectView.style.display  = "none";
                document.getElementsByTagName("div").aboutView.style.display    = "none";
            }else if(pageName == "documentView" ){
                document.getElementsByTagName("div").mainView.style.display     = "none";
                document.getElementsByTagName("div").documentView.style.display = "";
                document.getElementsByTagName("div").projectView.style.display  = "none";
                document.getElementsByTagName("div").aboutView.style.display    = "none";
            }else if(pageName == "projectView" ){
                document.getElementsByTagName("div").mainView.style.display     = "none";
                document.getElementsByTagName("div").documentView.style.display = "none";
                document.getElementsByTagName("div").projectView.style.display  = "";
                document.getElementsByTagName("div").aboutView.style.display    = "none";
            }else if(pageName == "aboutView" ){
                document.getElementsByTagName("div").mainView.style.display     = "none";
                document.getElementsByTagName("div").documentView.style.display = "none";
                document.getElementsByTagName("div").projectView.style.display  = "none";
                document.getElementsByTagName("div").aboutView.style.display    = "";
            }
        },
        changeState:function(nextState){
            this.isOpenBtn = nextState;
        }
    },
    watch:{
        locale:function(){
            this.$i18n.locale         = this.locale;
            mainView.$i18n.locale     = this.locale;
            documentView.$i18n.locale = this.locale;
            projectView.$i18n.locale  = this.locale;
            aboutView.$i18n.locale    = this.locale;
            talkView.$i18n.locale     = this.locale;
        }
    },
    i18n:new VueI18n({
        locale: 'zh-tw',
        fallbackLocale: 'zh-tw',
        messages:{
            "zh-tw": {
                    lang          : `語言`,
                    index         : `網頁首頁`,
                    documents     : `教學文件`,
                    program       : `程式作品`,
                    portfolio     : `個人作品`,
                    about         : `關於網頁`,
                    blog          : `隨筆日誌`,
                    bulletinBoard : `留言板`,
            },
            "zh-cn": {
                    lang          : `语言`,
                    index         : `网页首页`,
                    documents     : `教学文件`,
                    program       : `程式作品`,
                    portfolio     : `个人作品`,
                    about         : `关于网页`,
                    blog          : `隨筆日誌`,
                    bulletinBoard : `留言区`,
            },
            "en": {
                    lang          : `Language`,
                    index         : `Web Home`,
                    documents     : `Teaching documents`,
                    program       : `Program Project`,
                    portfolio     : `portfolio`,
                    about         : `About This Web`,
                    bulletinBoard : `Bulletin Board`,
            },
            "jp": {
                    lang          : `言語`,
                    index         : `メインページ`,
                    documents     : `著作一覧`,
                    program       : `Program作品`,
                    portfolio     : `作品集`,
                    about         : `ィアについてWeb`,
                    bulletinBoard : `掲示板`,
            },
        }
    }),
});