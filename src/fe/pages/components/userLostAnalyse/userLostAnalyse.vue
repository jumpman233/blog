<template>
    <section class="userLostAnalyse">
        <!-- <force-chart :data="userMostUsePageData"></force-chart> -->
    </section>
</template>

<script>
    import echarts from 'echarts';
    import forceChart from '../charts/force-chart.vue';

    export default {
        name: 'userLostAnalyse',
        data(){
            return {
            }
        },
        components:{ forceChart }
    }
</script>

<style>
</style>
