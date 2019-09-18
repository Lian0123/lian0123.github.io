var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson));

particlesJS.load('particles-js', jsonUri, function() {
    console.log('callback - particles.js config loaded');
});

var Panel = new Vue({
    el:"#MainView",
    data:{
        IsBaseView: true,
        HasSubListChick: false,
        NowChick: -1,
        TextList: [
            { Text: "ArchLabs相關", IsClick:false},
            { Text: "Manjaro相關", IsClick:false},
            { Text: "LinuxMint相關", IsClick:false},
            { Text: "基礎Linux相關", IsClick:false},
            { Text: "C語言相關", IsClick:false},
            { Text: "FML相關", IsClick:false},
            { Text: "其他技術相關", IsClick:false}, 
            { Text: "國小Scratch教學相關", IsClick:false}, 
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
                    
                this.NowChick = GetID;
                this.HasSubListChick = true;
            }
        },
        //控制子面板顯示
        ClickEvent: function (GetSubID) {
            this.IsBaseView = false;

            for (let i = 0; i < this.TextList.length; i++)
                this.TextList[i].IsClick = false;                  

            for (let i = 0; i < this.ProgramList.length; i++)
                this.ProgramList[i].IsClick = false;                   

            if(this.NowChick == 0)
                this.TextList[GetSubID].IsClick = true;
            else if(this.NowChick == 1)
                this.ProgramList[GetSubID].IsClick = true;
            
        }
    }
});