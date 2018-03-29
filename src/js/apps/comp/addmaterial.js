var material = new Vue({
	el : '#addmaterial',
	data:{
		show: true,
		meterialInfo : {
			name: '',
			type: '',
			num : 0,
			price:'',
			desc:''
		},
		types:[
			{id:1,name:'A'},
			{id:2,name:'B'},
			{id:3,name:'C'},
		]
	},
	computed:{
		
	},
	methods:{
		saveToDB:function(){
			var that = this;
			console.log(that.meterialInfo);
		},
		clear:function(){
			var that = this;
			that.meterialInfo = {
				name: '',
				type: '',
				num: 0 ,
				price:'',
				desc:''
			}
		},
		changeStatus:function(){
			var that = this;
			that.show = !that.show
		}
	}

})