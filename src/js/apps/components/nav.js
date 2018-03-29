Vue.component('mynav', {
	template :  '<nav id="nav">'+
				'<div class="logo"></div>'+
				'<ul class="menus">'+
				'<li v-for="item in menus" :class="{active: item.value == curmenus }">{{item.name}}</li>'+
				'</ul>'+
				'</nav>',
	props:['curmenus'] , //	接收参数		
	data:function(){
		return {
			menus : [
				{value:'store',name:'仓库管理'},
				{value:'system',name:'系统管理'}
			]
		}
	},			
})
