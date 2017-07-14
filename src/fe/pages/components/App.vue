<template>
    <div id="app">
        <blog-header></blog-header>
        <router-view></router-view>
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