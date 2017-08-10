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
        background: #E1E8E9;
		background-image: linear-gradient(90deg, rgba(235, 238, 243, .5) 2px, transparent 0), linear-gradient( rgba(235, 238, 243, .5) 2px, transparent 0);
        background-size: 15px 15px;
        padding: 50px 0;
    }
    .content{
        background-color: white;
        min-height: 600px;
        border: 1px solid #666;
        border-radius: 5px;
        padding: 40px 20px;
    }
    .to-center{
        max-width: 1000px;
        width: 90%;
        margin: 0 auto;
    }
</style>
