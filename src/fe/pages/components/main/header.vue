<template>
    <header class="page-header">
        <h1 class="page-title">{{ title }}</h1>
        <div class="page-header-content">
            <nav class="page-header-nav">
                <router-link to="/home">首页</router-link>
                <router-link to="/classify">分类</router-link>
                <router-link to="/about">关于</router-link>
            </nav>
            <search-tool></search-tool>
        </div>
    </header>
</template>

<script>
    import searchTool from './SearchTool';  

    export default {
        name: 'header',
        data: ()=>{
            return {
                title: "header"
            }
        },
        components: { searchTool }
    }
</script>

<style>
.page-header{
    text-align: center;
    background-color: #495880;
    height: 100px;
}

.page-title{
    color: white;
    float: left;
    margin: 20px 0 0 20px;
    height: 50px;
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

</style>
