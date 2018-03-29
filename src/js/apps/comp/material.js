var message = 'hello world';
Object.freeze(message);


var material = new Vue({
	el:'#material',
	data:{
		message: message,
		datalist : [],
	},
	created:function(){
		this.getList();
	},
	methods:{
		getList:function(info){
			var that = this;
			that.datalist = [];
			console.log(that.datalist)
			for( i = 0 ; i < 20 ; i++ ){
				that.item = {};
				that.item.id = i;
				that.item.name = "物料" + i ;
				that.item.type = 'type' + i;
				that.item.num = i+1;
				that.datalist.push(this.item);
			}
			console.log(that.datalist)

		},
		changeIt:function(){
			var that = this;
			that.message = 'nihao';
		}
		
	}
})