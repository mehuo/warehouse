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
			console.log(that.userinfo)
			// if(!that.userinfo.uname){
			// 	alert('用户名必填');
			// 	return;
			// }
			// if(that.userinfo.uname != that.userinfo.confirm_password){
			// 	alert('两次输入了不同的密码');
			// 	return;
			// }
			// $.ajax({
			// 	type:'POST',
			// 	url:'http://127.0.0.1:8888/admin/addUser',
			// 	data: that.userinfo,
			// 	dataType: "json",
			// 	success:function(data){
			// 		console.log(data);
			// 	}
			// })
			$.post('http://127.0.0.1:8888/admin/addUser',that.userinfo,function(data){
				console.log(data);
			})
		}
	}
})