<template>
    <div id="app">
        <blog-header></blog-header>
        <div class="page">
            <router-view class="content to-center"></router-view>
        </div>
        <blog-footer></blog-footer>
    </div>
</template>

<script>
    import blogHeader from './main/header.vue';
    import blogFooter from './main/footer.vue';

    export default {
        name: 'App',
        components: { blogHeader, blogFooter }
    }
</script>

<style>
    .page{
        background-color: #eee;
    }
    .content{
        background-color: white;
        min-height: 600px;
        border-left: 1px solid #666;
        border-right: 1px solid #666;
        border-radius: 5px;
        padding: 40px 20px;
    }
    .to-center{
        max-width: 1000px;
        width: 70%;
        margin: 0 auto;
    }
</style>
