<template>
	<div class="login-form">
		<div class="login">
			<div class="tt">测试系统测试系统测试系统</div>
			<el-form ref="form" :model="loginInfo" label-width="80px">
				<el-input v-model="loginInfo.uname"></el-input>
				<el-input type="password" v-model="loginInfo.password" auto-complete="off"></el-input>
			</el-form>
			<div class="oper">
				<div class="btn" @click="login">登录</div>
				<!-- <router-link to="/User">没有账号，前去注册</router-link> -->
			</div>
		</div>
	</div>
</template>

<script>
	import config from '@/config'
	export default{
		name: 'Login',
		data(){
			return {
				loginInfo:{
					uname:'fuyanan',
					password:'1'
				}
			}
		},
		methods:{
			login:function(){
				let that = this;
				$.post(config.baseUri + '/admin/login',this.loginInfo,function(data){
					console.log(data);
					if(data.status == 0){
						that.$store.commit('loginStatus',1);
						that.$store.commit('setUserInfo',data.data);
					}else{
						alert(data.statusinfo);
					}
				})
			}
		}
	}
	
</script>

<style>
	.login-form{
		background: url(http://ot27gkyb8.bkt.clouddn.com/qz-admin-login-bg.jpg);
	    background-size: cover;
	    width: 100%;
	    height: 100%;
	    position: fixed;
	}
	.login{
		width: 300px;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    position: absolute;
	    right: 150px;
	    top: 100px;
	}
	.login .tt{
		text-align: center;
		font-size: 32px;
	}
	.login .el-form .el-input{
		margin-top:20px;
	}
	.login .btn{
		height: 32px;
		line-height: 32px;
		border-radius: 4px;
		background: #409eff;
		text-align: center;
		color: #fff;
		margin-top: 24px;
	}
	.login a{
		text-align:center;
		font-size: 12px;
		color: #30aaf2;
		margin-top:8px;
		display: block;
	}
</style>