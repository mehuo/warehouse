<template>
	<div>
		<div class="fr bmgap">
			<el-button type="primary">添加角色</el-button>
		</div>
		<el-table :data="datalist" style="width: 100%">
	      <el-table-column prop="id" label="序号" width="180"></el-table-column>
	      <el-table-column prop="name" label="名称" width="180"></el-table-column>
	      <el-table-column prop="create_time" label="创建时间"></el-table-column>
	      <el-table-column prop="update_time" label="更新时间"></el-table-column>
	    </el-table>
	</div>
</template>
<script>
	import tools from '@/utils/tools'
	import config from '@/config'

	export default{
		data(){
			return {
				page:1,
	        	page_size:10,
	        	keyword:'',
		        datalist: []
			}
		},
		created(){
			this.getList();
		},
		methods:{
			getList:function(info){
				var that = this;
				that.datalist = [];
				$.post(config.baseUri+'/system/role/list',{
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
	}
	
</script>

<style>
	.bmgap{
		margin-bottom:40px;
	}
	
</style>