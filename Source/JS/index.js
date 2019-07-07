var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson));

particlesJS.load('particles-js', jsonUri, function() {
    console.log('callback - particles.js config loaded');
});

var Panel = new Vue({
    el:"#particles-js",
    data:{
        IsBaseView: true,
        HasSubListChick: false,
        IsChangeGetID: false,
        NowChick: -1,
        NowSubChick: -1,
        TextList: [
            { Text: "ArchLabs相關", IsClick:false},
            { Text: "Manjaro相關", IsClick:false},
            { Text: "LinuxMint相關", IsClick:false},
            { Text: "基礎Linux相關", IsClick:false},
            { Text: "C語言相關", IsClick:false},
            { Text: "FML相關", IsClick:false},
            { Text: "其他技術相關", IsClick:false}, 
        ],
        ProgramList: [
            { Text: "Image-Audio-Player", IsClick:false},
            { Text: "GLSL_Example", IsClick:false},
            { Text: "UnknownClang", IsClick:false},
            { Text: "TextArt", IsClick:false},
            { Text: "107-02-IOT-Project", IsClick:false},
            { Text: "FMiCa-TW.sh", IsClick:false},
            { Text: "twcall", IsClick:false},
          
        ],
    },
    methods:{
        ClickPanelEvent: function (GetID) {
            if(GetID==this.NowChick){
                this.NowChick = -1;
                this.HasSubListChick = false;
            }else{
                if(this.NowChick != -1)
                    this.IsChangeGetID = !this.IsChangeGetID;
                    
                this.NowChick = GetID;
                this.HasSubListChick = true;
            }
        },
        //控制子面板顯示
        ClickEvent: function (GetSubID) {
            this.IsBaseView = false;

            if(this.NowChick == 0){
                if(this.IsChangeGetID == true && this.NowSubChick != -1){
                    this.ProgramList[this.NowSubChick].IsClick = false;
                    this.IsChangeGetID = false;
                }else if(this.NowSubChick != -1){
                    this.TextList[this.NowSubChick].IsClick = false;
                }

                this.NowSubChick = GetSubID;
                this.TextList[GetSubID].IsClick = true;
            }else if(this.NowChick == 1){
                if(this.IsChangeGetID == true && this.NowSubChick != -1){
                    this.TextList[this.NowSubChick].IsClick = false;
                    this.IsChangeGetID = false;
                }else if(this.NowSubChick != -1){
                    this.ProgramList[this.NowSubChick].IsClick = false;
                }

                this.NowSubChick = GetSubID;
                this.ProgramList[GetSubID].IsClick = true;
            }
        }
    }
});