Vue.component('page', {
    template:   '<div class="page clearfix" v-if="pages.length>1">'+
		            '<div class="pager">'+
			            '<div style="display:inline-block">'+
                            '<a class="p" v-on:click="rend(1)">首页</a>'+
					        '<a class="prev" @click="rend(page-1)"></a>'+
					        '<a v-for="ipage in pages" v-bind:class="{active:ipage==page}" v-on:click="rend(ipage)">{{ipage}}</a>'+
					        '<a class="next" @click="rend(page+1)"></a>'+
					        '<a class="p" v-on:click="rend(last_page)">尾页</a>'+
                        '</div>'+
                        '<div class="switch">'+
                            '<select v-model="pagedata.page_size" v-on:change="switchPageNum">'+
                                '<option v-for="num in nums" v-bind:value="num">{{num}}</option>'+
                            '</select>'+
                            '<span>/条</span>'+
                        '</div>'+
					    '<div class="topage" v-if="last_page>1">'+
                            '<span>共{{last_page}}页</span>'+
					        '<span>前往</span>'+
                            '<input id="sel-page" type="text" v-model="pageN" @keyup.enter="enter()" />'+
					        '<span>页</span>'+
			            '</div>'+
		            '</div>'+
	            '</div>',
    props: ['pagedata'],
    data: function() {
        return { 
        	pageN:'',
            nums:[1,2,5,10,15,20,25,50],
        };
    },
    computed:{
        pages:function(){
            console.log(this.pagedata)
            var show_num = 5  //显示的分页条数  
            var mid= Math.ceil(show_num/2) //中间数
            var page = parseInt(this.pagedata.page); //当前页
            var last_page = parseInt(this.pagedata.last_page);
            var min=1,max=1;
            if(last_page > show_num){
                if(page < mid){
                    min = 1;
                    max = show_num;
                }else if(page > last_page - 2){
                    min = last_page - 4;
                    max = last_page;
                }else{
                    min = page - 2;
                    max = page + 2;
                }
            }else{
                min = 1;
                max = last_page;
            }
            var pages = [];
            for (var j = min; j <= max; j++) {
                pages.push(j);
            }
            return pages;
        },
        page:function(){
            return this.pagedata.page || 1;
        },
        last_page:function(){
            return this.pagedata.last_page || 1;
        },
        page_size:{
            get: function() {
                return this.pagedata.page_size || 10;
            },
            set: function(newValue) {
                console.log(newValue)
                this.page_size = newValue;
            }
        }
    },
    methods: {
        rend: function (p) {
            if (p > this.last_page) {
                alert('对不起，没有这么多页');
                return false;
            }
            if (p < 1 || p==undefined || isNaN(p)) {
                alert('对不起，您输入的页数无效');
                return false;
            }
            this.$emit('increment',{page:p,page_size:this.page_size});
        },
        enter:function(){
            this.rend(this.pageN)
        },
        switchPageNum:function(){
            this.rend(1)
        }
    }
})