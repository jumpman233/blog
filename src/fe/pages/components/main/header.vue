<template>
    <header id="bpp">
        <h1 style="display: inline-block;">{{ title }}</h1>
        <div style="display: inline-block;">
            <router-link to="/home">首页</router-link>
            <router-link to="/classify">分类</router-link>
            <router-link to="/about">关于</router-link>
        </div>
        <search-tool></search-tool>
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
header{
    text-align: center;
    background-color: red;
}
</style>
