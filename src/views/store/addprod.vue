<template>
    <div class="addprod">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">仓库管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加产品</el-breadcrumb-item>
        </el-breadcrumb>
        <form class="addform">
            <div class="cont">
                <label for="name">名称:</label>
                <el-input v-model="info.name" placeholder="请输入货物名称"></el-input>
            </div>
            <div class="cont">
                <label for="cate">类型:</label>
                <el-select v-model="info.cate" placeholder="请选择">
                    <el-option
                            v-for="item in category"
                            :key="item.cate"
                            :label="item.name"
                            :value="item.cate">
                    </el-option>
                </el-select>
            </div>
            <div class="cont">
                <label for="enterNum">入库数量:</label>
                <el-input-number v-model="info.enterNum" :min="0" label="请输入入库数量"></el-input-number>
            </div>
            <div class="cont">
                <label for="">上传图片</label>
                <el-upload class="upload-demo" drag action="http://localhost:8888/common/uploading" multiple :on-success="test">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                info:{
                    name:'',
                    cate:'',
                    enterNum:''
                },
                category:[
                    {name:'螺丝',cate:1,id:1},
                    {name:'轴承',cate:2,id:2},
                    {name:'千斤顶',cate:3,id:3},
                    {name:'皮圈',cate:4,id:4}
                ]
            }
        },
        methods:{
            test:function (file) {
                console.log(file)
            }
        }
    }

</script>

<style>
    .el-breadcrumb{
        margin-bottom: 40px;
    }
    .addform{
        width: 500px;
        margin: 0 auto;
    }
    .addform .cont{
        margin-bottom: 24px;
    }
    .addform label{
        display: inline-block;
        width: 100px;
        text-align: right;
        padding-right: 24px;
        box-sizing: border-box;
        vertical-align: top;
    }
    .addform .el-input, .addform .el-select,.addform .el-input-number, .addform .upload-demo {
        display: inline-block;
        width: 345px;
    }
</style>