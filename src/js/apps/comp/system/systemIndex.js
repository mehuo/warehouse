var tools = new MyTools();

var material = new Vue({
	el:'#systemIndex',
	data:{
		datalist : [],
		keyword:'',
		page:1,
		page_size:1,
		pageData:{}
	},
	created:function(){
		this.getList();
	},
	methods:{
		getList:function(info){
			var that = this;
			that.datalist = [];
			$.post('/system/user/list',{
				keyword : that.keyword,
				page : that.page,
				page_size : that.page_size
			},function(res){
				console.log(res);
				if(res.status == 0){
					that.pageData = res.data;
					that.datalist = that.pageData.data;
					that.datalist.map(function(item,index){
						item['create_time'] = tools._dateFormat(new Date(item['create_time']));
						item['update_time'] = tools._dateFormat(new Date(item['update_time']));
						return item;
					})
				}else{
					alert(res.statusinfo);
				}
			})
		},
		//分页查询
		queryByPage:function(data){
			this.page = data.page;
			this.page_size = data.page_size;
			this.getList();
		}
		
	}
})