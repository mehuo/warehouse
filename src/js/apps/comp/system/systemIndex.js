var message = 'hello world';
Object.freeze(message);


var material = new Vue({
	el:'#systemIndex',
	data:{
		message: message,
		datalist : [],
		keyword:'',
		page:1,
		page_size:2,
		pageData:{}
	},
	created:function(){
		this.getList();
	},
	methods:{
		getList:function(info){
			var that = this;
			that.datalist = [];
			console.log(that.datalist);
			$.post('/system/user/list',{
				keyword : that.keyword,
				page : that.page,
				page_size : that.page_size
			},function(res){
				console.log(res);
				if(res.status == 0){
					that.pageData = res.data;
					console.log(that.pageData);
				}else{
					alert(res.statusinfo);
				}
			})
		},
		changeIt:function(){
			var that = this;
			that.message = 'nihao';
		}
		
	}
})