<template>
    <header class="page-header" title="lala">
        <h1 class="page-title"><img src="public/default-p.jpeg" style="height:65px"/></h1>
        <div class="page-header-content">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
            <el-menu-item index="1" :route="{path: '/home'}">哈哈</el-menu-item>
            <el-menu-item index="2" :route="{path: '/about'}">嘿嘿</el-menu-item>
            <!-- <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu> -->
            <!-- <el-menu-item index="3"><router-link to="/about">关于</router-link></el-menu-item> -->
            </el-menu>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'header',
        data(){
            let activeIndex = 1;
            if(location.href.indexOf('home') > -1){
                activeIndex = 1;
            } else if(location.href.indexOf('about')){
                activeIndex = 2;
            }
            return {
                 activeIndex: activeIndex.toString()
            }
        }
    }
</script>

<style>
.page-header{
    text-align: center;
    position: relative;
    background-color: #fff;
    height: 65px;
    padding: 0 5%;
}

.page-title{
    color: white;
    float: left;
    height: 65px;
}

.page-header-content{
    position: absolute;
    top: 0;
    right: 5%;
}

.page-header-nav{
    margin: 20px 0;
    color: white;
}

.page-header-nav a{
    margin-right: 50px;
    color: white;
}

.el-menu{
    background-color: #fff;
}

.el-menu-item, .el-submenu__title{
    font-size: 16px;
}

.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
    color: #ed7c5e;
    border-bottom: 5px solid #ed6c5e;
}

.el-menu--horizontal>.el-menu-item:hover, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title{
    border-bottom: none;
    border-bottom: 5px solid #ed6c5e;
}

.el-menu--horizontal .el-menu-item{
    height: 65px;
    line-height: 65px;
}

.el-menu-item a{
    display: inline-block;
}
</style>
