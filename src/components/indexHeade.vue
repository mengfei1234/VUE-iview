<template>
  <div>
      <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <!-- <Icon type="ios-navigate"></Icon> -->
                            <Button @click="personEvent">个人简介</Button>
                        </MenuItem>
                        <MenuItem name="2">
                            <!-- <Icon type="ios-keypad"></Icon> -->
                            <Button @click="vueEvent">VUE</Button>
                        </MenuItem>
                        <MenuItem name="3">
                            <!-- <Icon type="ios-analytics"></Icon> -->
                            <Button @click="reactEvent">React</Button>
                        </MenuItem>
                        <MenuItem name="4">
                            <!-- <Icon type="ios-paper"></Icon> -->
                            <Button @click="cssEvent">CSS</Button>
                        </MenuItem>
                    </div>
                    <div>
                        <Dropdown trigger="click" style="margin-left: 20px">
                            <a href="javascript:void(0)">
                                <Icon type="ios-power-outline" size="30"/>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>
                                    <Button @click="turnFirst">退出</Button>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </Menu>
  </div>
</template>

<script>
export default {
    name:'indexHeader',
    methods:{
          personEvent(){
              this.$router.push({path: "/loginFace/PersonProfile"})  // 只能用 name
            //   this.$router.push({name:'PersonProfile',query: {id:'1'}})
          },
          vueEvent(){
              this.$router.push({path: "/loginFace/VueProfile:id"})  // 只能用 name
          },
          reactEvent(){
              this.$router.push({path: "/loginFace/ReactProfile:id"})  // 只能用 name
          },
          cssEvent(){
              this.$router.push({path: "/loginFace/cssProfile:id"})  // 只能用 name
          },
          //跳回到登陆界面
          turnFirst(){
            //   console.log(111)
              this.$Modal.confirm({
                  title:'提示',
                  content:'确定退出系统吗？',
                  onOk:()=>{
                      this.$router.push({path: "/"})  // 只能用 name
                  },
                  onCancel:()=>{}
              })
          },
        }
}
</script>

<style scoped>
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 520px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>