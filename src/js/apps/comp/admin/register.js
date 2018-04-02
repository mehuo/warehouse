var app = new Vue({
	el:'#register',
	data:{
		userinfo:{
			uname:'',
			password:'',
			confirm_password:''
		},
		loginInfo:{
			uname:'',
			password:''
		}
	},
	methods:{
		saveToDb:function(){
			var that = this;
			$.post('/admin/addUser',that.userinfo,function(data){
				console.log(data);
				if(data.status == 0){
					window.location.href="/views/admin/login.html";
				}
			})
		},
		login:function(){
			var that = this;
			$.post('/admin/login',that.loginInfo,function(data){
				console.log(data);
				if(data.status == 0){
					console.log('登录成功')
					window.location.href = "/views/material/index.html"
				}else{
					alert(data.statusinfo);
				}
			})
		}
	}
})