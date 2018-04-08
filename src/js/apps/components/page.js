Vue.component('page', {
    template:   '<div class="page clearfix">'+
		            '<div class="pager">'+
			            '<div style="display:inline-block">'+
					        '<a class="page-prev" style="border-radius: 4px;" @click="rend(page-1)" v-if="page>1"><img id="prevpage" class="p-prev-img"  src="/ad/img/page-left.png"></a>'+
					        '<a class="p" v-on:click="rend(1)" v-if="page!=1 && pages.length>1" >首页</a>'+
					        '<a class="p" v-if="pages.length>1" v-for="page in pages" v-bind:class="{active:page==page}" v-on:click="rend(page)">{{page}}</a>'+
					        '<a class="page-next" style="border-radius: 4px;" @click="rend(page+1)" v-if="page<last_page"><img id="nextpage" class="p-next-img"   src="/ad/img/page-right.png"></a>'+
					    '</div>'+
					    '<div v-if="last_page>1" style="display:inline-block">'+
					        '<span class="ad-page-goto">前往</span>'+
					        '<a class="ad-page-goto-num" href="" >页</a>'+
					        '<input id="sel-page" class="form-control-min btn-32 ad-page-input" style="width:70px;" type="text" v-model="pageN" @keyup.enter="enter()" />'+
			            '</div>'+
			            '<span class="totalpage" v-show="last_page==0">未查询到数据</span>'+
		            '</div>'+
	            '</div>',
    props: ['pagedata'],
    data: function() {
        return { 
        	pageN:''
        };
    },
    computed:{
        pages:function(){
        	console.log(this.pagedata)
            var page = this.pagedata.page;
            var total = parseInt(Math.ceil(this.pagedata.total/this.pagedata.page_size));
            var min=1,max=1;
            if(page<=3){
                min=1;
                max = total > 5 ? 5:total;
            }else{
                min = page-2;
                max = (parseInt(page)+2)>total?total:(parseInt(page)+2);
            }
            var pages = [];
            for (var j = min; j <= max; j++) {
                pages.push(j);
            }
            console.log(pages)
            return pages;
        },
        page:function(){
            return this.pagedata.page;
        },
        last_page:function(){
        	console.log(this.pagedata.last_page)
            return this.pagedata.last_page;
        },
        max:function(){
            var page = this.pagedata.page;
            var total = parseInt(Math.ceil(this.pagedata.total/this.pagedata.page_size));
            var min=1,max=1;
            if(page<=3){
                min=1;
                max=total>5?5:total;
            }
            else{
                min=page-2;
                max=(parseInt(page)+2)>total?total:(parseInt(page)+2);
            }
            return max
        },
    },
    methods: {
        rend: function (p) {
            // console.log(p)
            // if (p>this.total) {
            //     alert('对不起，没有这么多页');
            //     return false;
            // }
            // if (p<1 || p==undefined || isNaN(p)) {
            //     alert('对不起，您输入的页数无效');
            //     return false;
            // }
            // this.$emit('increment',p);
        },
        enter:function(){
            // this.rend(this.pageN)
        }
    }
})