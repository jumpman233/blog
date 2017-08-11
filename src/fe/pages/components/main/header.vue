<template>
    <header class="page-header to-center" title="lala">
        <h1 class="page-title"><img src="public/default-p.jpeg" style="height:65px"/></h1>
        <div class="page-header-content">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
            <el-menu-item index="1" :route="{path: '/home'}">总览</el-menu-item>
             <el-submenu index="2">
                <template slot="title">数据详情</template>
                <el-menu-item index="2-1" :route="{path: '/about'}">用户路径分析</el-menu-item>
                <el-menu-item index="2-2" :route="{path: '/mostCommonVisit'}">用户最常访问</el-menu-item>
                <el-menu-item index="2-3">用户流失分析</el-menu-item>
            </el-submenu> 
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
                activeIndex = '2-1';
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

.el-menu--horizontal .el-menu-item,.el-menu--horizontal .el-submenu .el-submenu__title{
    height: 65px;
    line-height: 65px;
}

.el-menu-item a{
    display: inline-block;
}
</style>
