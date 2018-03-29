var app = new Vue({
	el:'#register',
	data:{
		userinfo:{
			uname:'',
			password:'',
			confirm_password:''
		}
	},
	methods:{
		saveToDb:function(){
			var that = this;
			if(!that.userinfo.uname){
				alert('用户名必填');
				return;
			}
			if(that.userinfo.uname != that.userinfo.confirm_password){
				alert('两次输入了不同的密码');
				return;
			}
		}
	}
})