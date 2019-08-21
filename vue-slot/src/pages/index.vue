<template lang="html">
    <div class="container" v-cloak>
        <p style="margin:20px 0 20px 20px">tips:用点击按钮模拟模态框</p>
        <p class="btnGroup">
            <button v-for="(item,index) in headerGroup" @click="changeHeader(index)" :class="{active:headerCurr==index}">{{item}}</button>
        </p>
        <p class="btnGroup">
            <button v-for="(item,index) in footerGroup" @click="changeFooter(index)" :class="{active:footerCurr==index}">{{item}}</button>
        </p>
        <dialogue ref="cmp1" :ifshow="ifshow" @hideDialog="hideDialog">
            <template v-slot:header>
              <p>
                  <span :class="header.iconClass"></span>
                  <span class="title">{{header.title}}</span>
                  <span class="subTitle" v-show="header.subTitle">{{"("+header.subTitle+")"}}</span>
              </p>
            </template>
            <template v-slot:default>
              <p>我是内容</p>
            </template>
            <template v-slot:footer>
              <p>
                  <button v-for="item in footer" class="footerBtn" :class="item.type">{{item.value}}</button>
              </p>
            </template>
        </dialogue>
    </div>
</template>

<script>
import dialogue from "../components/dialogue.vue";
// import "vue-animate/dist/vue-animate.min.css"
import "../iconfont/css/index.css";
const header = [
    {title:"标题一", subTitle:"", iconClass:""},
    {title:"标题二", subTitle:"副标题二", iconClass:""},
    {title:"标题三", subTitle:"副标题三", iconClass:"icon_com icon-guize_gaoji"},
    {title:"标题四", subTitle:"", iconClass:"icon_com icon-fanhuishangyiji"}
]
const footer = [
    [{type:"primary",value:"确认"},{type:"secondary",value:"取消"}],
    [{type:"primary",value:"ok"},{type:"secondary",value:"cancel"}],
    [{type:"primary",value:"确认"},{type:"secondary",value:"取消"},{type:"secondary",value:"自定义"}]
]
export default{
    name: "useDia",
    components: {
        dialogue
    },
    data(){
        return{
            headerGroup:["标题一","标题二","标题三","标题四"],
            footerGroup:["底部一","底部二","底部三"],
            header: header[0],
            footer: footer[0],
            ifshow: true,
            headerCurr: 0,
            footerCurr: 0
        }
    },
    methods:{
        changeHeader(index){
            this.ifshow = true;
            this.header = header[index]
            this.headerCurr = index;
        },
        changeFooter(index){
            this.ifshow = true;
            this.footer = footer[index],
            this.footerCurr = index;
        },
        hideDialog(){
            this.ifshow = false;
        }
    }
}
</script>

<style lang="css">
    *{
        margin:0;
        padding:0;
    }
    button{
        margin-left:20px;
        min-width: 60px;
        height: 30px;
        padding: 0 10px;
        outline:0 none;
        border-radius: 4px;
        color: #111;
        background-color: #fff;
        border: 1px solid #d0d0d0;
    }
    .btnGroup{
        margin:20px;
    }
    .primary,.active{
        color: #fff;
        background-color: #e14c46;
        border: 1px solid #e14c46;

    }
    .secondary{
        color: #111;
        background-color: #fff;
        border: 1px solid #d0d0d0;

    }
</style>
