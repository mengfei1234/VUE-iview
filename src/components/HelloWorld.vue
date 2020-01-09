<template>
  <div class="hello">
        <!-- <Button type="info" @click="ok_Cancel">请点击我吧~</Button> -->
        <div style="display: flex;flex-flow: row;margin: 10px">
      <!-- <img src="../assets/img/hello.jpg"/> -->
      <!-- <span class="loginlog">浙江移动</span> -->
    </div>
    <div class="loginform">
      <form class="loginplace">
        <div class="logindata">
          <div class="username">
            <div class="user">账号：</div>
            <input id="username" name="password" autofocus="autofocus" v-model="userName"  type="text" placeholder="请输入您的用户名"/>
          </div>
          <div class="username">
            <div class="user">密码：</div>
            <input ref="password" id="password" name="password" v-model="passWord" type="password" placeholder="请输入您的密码"/>
          </div>
          <Checkbox v-model="singlePush"  style="float:left">记住密码</Checkbox>
          <div class="login" @click="ok_login()" @keyup.enter="ok_login()">登录</div>
        </div>
      </form>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      userName:'',
      passWord:'',
      singlePush:false,
    }
  },
  methods: {
    ok_login(){
      if (!this.userName) {
        this.$Message.info('请输入账号');
        return;
      }
      else if (!this.passWord) {
        this.$Message.info('请输入密码');
        return;
      }
      else{
        this.$router.push("/loginFace")//就可以跳转到home界面
      }
    },
  }
}
</script>
<style scoped>
.hello {
  width:100%;
    height:100%;
    background:url("../assets/img/hello.jpg") no-repeat fixed center;
    overflow:hidden;
}
  .loginform{
    position: absolute;
    width:400px;
    height:450px;
    top: 10%;
    right: 10%;
  }
  /* //左上角的图标 */
  .loginlog{
    font-size:24px;
    color: #FFF;
    letter-spacing:4px;
    margin:10px
  }

  .loginplace{
    width:280px;
    height:358px;
    background: url("../assets/img/hello.jpg") no-repeat;
    margin:30px auto;
    overflow: hidden;
  }
  .rember{
    width: 70px;
    height: 17px;
    margin-top: 10px;
    font-size: 12px;
    color: #494A4C;
  }

  .logindata{
    width:210px;
    height:250px;
    margin:80px auto;
  }

  .username{
    width:210px;
    height:70px;
  }

  .username input{
    width: 194px;
    height:35px;
    line-height:35px;
    margin-top:8px;
    padding-left:10px;
    background-color:#C8D4E5;
    border:none ;
  }

  .user{
    width:50px;
    height:22px;
    line-height:22px;
    text-align: center;
    color: #494A4C;
    font-size:16px;
  }
  .login{
    width: 100%;
    height: 45px;
    line-height: 45px;
    color: #FFF;
    background: #1890FF;
    margin-top: 20px;
    text-align: left;
  }
  .login:hover{
    background:#151265;
  }
</style>