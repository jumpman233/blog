<template>
    <header class="page-header" title="lala">
        <h1 class="page-title"><img src="public/default-p.jpeg" style="height:65px"/></h1>
        <div class="page-header-content">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><router-link to="/home">哈哈</router-link></el-menu-item>
            <el-menu-item index="2">标题2</el-menu-item>
            <!-- <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu> -->
            <el-menu-item index="3"><router-link to="/about">关于</router-link></el-menu-item>
            </el-menu>
        </div>
    </header>
</template>

<script>
    import {Menu} from 'element-ui';
    import Vue from 'vue';
    console.log(Vue.component);

    // Vue.use(ElCollapseTransition);

    export default {
        name: 'header',
        data: ()=>{
            return {
                 activeIndex: '1',
                 activeIndex2: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
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
    padding-left: 50px;
}

.page-title{
    color: white;
    float: left;
    height: 65px;
}

.page-header-content{
    position: absolute;
    top: 0;
    right: 0;
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
</style>
