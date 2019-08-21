import Vue from "vue"
// import VueRouter from "vue-router"
// import router from "./router"
import Index from "./pages/index.vue"
// Vue.use(VueRouter);



window._vue = new Vue({
    el:"#app",
    components: {
        Index
    },
    template:"<div><Index/></div>",    //模板渲染到 el下 其他组件
    data:{
        
    }
    // router
})
