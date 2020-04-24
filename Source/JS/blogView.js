
const blogView = new Vue({
    el:"#blogView", 
    data:{
    },
    mounted() {
        this.$i18n.locale = 'zh-tw';
        //this.$i18n.messages.blogList.reverse();
    },
    i18n:new VueI18n({
        locale: 'zh-tw',
        fallbackLocale: 'zh-tw',
        messages:{
            "zh-tw": {
                blogList :[
                    {
                        title    : `這是第一篇的文章`,
                        date     : `2020-04-24`,
                        mainText : [
                            `值得紀念、值得紀念、值得紀念。`,
                            `\\( O ω O )/ 特此留文!!!`
                        ],
                    },
                ]
            },
            "zh-cn": {
                blogList :[
                    
                ]
            },
            "en": {
                blogList :[
                    
                ]
            },
            "jp": {
                blogList :[
                    
                ]
            }
        }
    }),
});