<template lang="html">
    <div >
        <transition name="fade">
            <div class="modal" v-if="ifshow">
              <header>
                <slot name="header"></slot>
                <span class="close icon_com icon-guize_shanchu" @click="fn"></span>
              </header>
              <main>
                 <slot name="default"></slot>
              </main>
              <footer>
                 <slot name="footer"></slot>
              </footer>
             </div>
         </transition>
    </div>
</template>

<script>
export default {
    props:["ifshow"],
    name: "dialogue",
    data(){
        return {
            isShow: this.ifshow
        }
    },
    methods:{
        fn(){
            this.$emit("hideDialog")
        }
    }
}
</script>

<style lang="css" scoped>
.modal{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 50%;
    border:1px solid black;
    max-height: 500px;
    margin: 100px auto;
    border-radius:10px;
    background-color:#fff;
}
header{
    height:40px;
    line-height:40px;
    border-bottom:1px solid #999;
    position:relative;
}
.close{
    position:absolute;
    right:0;
    top:0;
}
main{
    min-height:100px
}

footer{
    border-top:1px solid #999;
    height:50px;
    line-height:50px;
}

.fade-enter-active {     /** 过渡生效时的状态 */
  transition: all .4s ease;
}
.fade-leave-active {    /**离开过渡生效时的状态 */
  transition: all .4s ease;
}
.fade-enter, .fade-leave-to{ /**进入过渡的开始状态 定义离开过渡的结束状态*/
    opacity: 0;
}

</style>
