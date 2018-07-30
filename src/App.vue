<template>
  <div id="app">
    <el-container>
      <el-header style="height:80px">
        <div class="logo">logo</div>
        <div class="userInfo">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{userInfo.uname}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="240px">
          <el-menu default-active="2" :router="true" class="el-menu-vertical-demo">
            <el-menu-item index="/user">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="/role">
              <i class="el-icon-menu"></i>
              <span slot="title">角色管理</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>仓库管理</span>
              </template>
              <el-menu-item index="addProduct">添加产品</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-submenu>
            
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userInfo : this.$store.state.userInfo
    }
  },
  methods:{
    handleCommand(cmd){
      switch (cmd){
        case 'changePass':
          this.$refs.chPwdDlg.show();
          break;
        case 'logout':
          this.$store.commit('loginStatus',0);
          break;
      }
    }
  }
}
</script>



<style>
  
</style>
