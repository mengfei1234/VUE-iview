<template>
    <div class="container">
        <div class="left" :style="navStyle">
            <Col :span="24">
                <div class="title">
                    <h4 v-show="navShow"> 12306 平台</h4>
                    <i class="el-icon-s-fold" @click="shrinkNNav(0)" v-show="navShow"></i>
                    <i class="el-icon-s-unfold" @click="shrinkNNav(1)" v-show="!navShow"></i>
                </div>
                <Col :span="8">
            <Menu :theme="theme2" :index="item.routeName" v-for="(item,index) in navList" :key="index" name="1">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                    </template>
                    <!-- <img :src="item.imgUrl" alt class="img-icon" /> -->
                        <span slot="title">{{ item.navItem }}</span>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>

            </Menu>
        </Col>
                <!-- <Menu active-name="2" class="el-menu-vertical-demo" router>
                    <MenuItem
                        :index="item.routeName"
                        v-for="(item,index) in navList"
                        :key="index" name="1"
                    >
                        <img :src="item.imgUrl" alt class="img-icon" />
                        <span slot="title">{{ item.navItem }}</span>
                    </MenuItem>
                </Menu> -->
            </Col>
            <!-- <Col :span="16" class="right">
            <index-header />
            </Col> -->
        </div>
        <div class="right" :style="viewStyle">
            <!-- <index-header /> -->
            <!-- <router-view></router-view> -->
        </div>
    </div>
</template>
<script>
/**
 * @description 系统主页
 */
import indexHeader from "../components/IndexHeader"; // 右侧header组件
export default {
    name: "IndexHeader",
    components: {
        indexHeader
    },
    data() {
        return {
            navList: [
                {
                    routeName: "/main/index",
                    navItem: "首页",
                    iconName: "el-icon-pie-chart",
                    imgUrl: "../../assets/img/1.jpg"
                },
                {
                    routeName: "/main/pool",
                    navItem: "CSS",
                    imgUrl: "../../assets/img/2.jpg"
                },
                {
                    routeName: "/main/order",
                    navItem: "JS",
                    imgUrl: "../../assets/img/3.jpg"
                },
                {
                    routeName: "/main/inout",
                    navItem: "VUE",
                    imgUrl: "../../assets/img/4.jpg"
                },
                {
                    routeName: "/main/numberPool",
                    navItem: "REACT",
                    imgUrl: "../../assets/img/5.jpg"
                },
                // {
                //     routeName: "/main/user",
                //     navItem: "用户管理",
                //     imgUrl: "../../static/img/yhgl.png"
                // },
                // {
                //     routeName: "/main/permission",
                //     navItem: "权限管理",
                //     imgUrl: "../../static/img/qxgl.png"
                // },
                // {
                //     routeName: "/main/monitor",
                //     navItem: "监控管理",
                //     imgUrl: "../../static/img/jkgl.png"
                // }
            ],
            navStyle: "", //导航样式
            viewStyle: "", //右侧样式
            navShow: true,//导航收缩后的标签显示隐藏
            theme2: 'light',
        };
    },
    methods: {
        // 收缩导航
        shrinkNNav(type) {
            // type为0是收缩，1是展开
            if (type === 0) {
                this.navShow = false;
                this.navStyle = "width:50px";
                this.viewStyle = "margin-left:50px";
            } else if (type === 1) {
                this.navShow = true;
                this.navStyle = "";
                this.viewStyle = "";
            }
        }
    }
};
</script>
<style scoped>
/* .container,.left{
    background-color: aquamarine;
    height:10px;
} */
.container,.right{
    /* background-color: aquamarine; */
    height:10px;
    /* float: right; */
}
i {
    color: #fff;
}
.title {
    overflow: hidden;
    width: 100%;
    height: 80px;
    padding: 20px;
    white-space: nowrap;
    background-color: aquamarine;
}
.title h4 {
    display: inline-block;
    font-size: 20px;
    text-align: center;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    line-height: 40px;
    color: #fff;
}
.el-icon-s-fold,
.el-icon-s-unfold {
    font-size: 20px;
    cursor: pointer;
}
.img-icon {
    width: 15px;
    height: 15px;
    margin-right: 15px;
}
.el-icon-s-fold {
    margin-left: 15px;
}
</style>