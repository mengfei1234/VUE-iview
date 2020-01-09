<template>
    <div class="layout">
        <Layout>
            <Header>
                <!-- 左边菜单项 -->
                <index-heade></index-heade>
            </Header>
            <Layout>
                <!-- 上边标题栏 -->
                <!-- <div style="float:left;width:30%"> -->
                    <left-content></left-content>
                <!-- </div> -->
                <!-- <div style="float:right;width:70%"> -->
                    <!-- 1222width:30% -->
                <!-- </div> -->
            </Layout>
        </Layout>
    </div>
</template>
<script>
import leftContent from '../components/leftContent'
import indexHeade from '../components/indexHeade'
    export default {
        name: "loginFace",
        components:{
            leftContent,indexHeade
        },
        methods:{
        //   personEvent(){
        //       this.$router.push({path: "/loginFace/PersonProfile"})  // 只能用 name
        //     //   this.$router.push({name:'PersonProfile',query: {id:'1'}})
        //   },
        //   vueEvent(){
        //       this.$router.push({path: "/loginFace/VueProfile:id"})  // 只能用 name
        //   },
        //   reactEvent(){
        //       this.$router.push({path: "/loginFace/ReactProfile:id"})  // 只能用 name
        //   },
        //   cssEvent(){
        //       this.$router.push({path: "/loginFace/cssProfile:id"})  // 只能用 name
        //   },
        //   //跳回到登陆界面
        //   turnFirst(){
        //     //   console.log(111)
        //       this.$Modal.confirm({
        //           title:'提示',
        //           content:'确定退出系统吗？',
        //           onOk:()=>{
        //               this.$router.push({path: "/"})  // 只能用 name
        //           },
        //           onCancel:()=>{}
        //       })
        //   },
        }
        
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
</style>