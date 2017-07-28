<template>
    <div class="search-tool">
        <el-input type="text" placeholder="title/content" size="small"/>
        <el-button type="primary" size="mini">search</el-button>
    </div>
</template>

<script>
    export default {
        name: 'search-tool'
    }
</script>

<style>
.search-tool{
    display: inline-block;
}
.el-input {
    width: 140px;
}
</style>
