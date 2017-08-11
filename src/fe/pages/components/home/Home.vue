<template>
    <section class="home">
        <div class="chart-row">
            <div class="chart-half chart-border">
                <pie-chart :data="sexChart" ref="sexChart"></pie-chart>
            </div>
            <div class="chart-half chart-border">
                <pie-chart :data="ageChart" ref="ageChart"></pie-chart>
            </div>
        </div>
        <div class="chart-row chart-border">
            <pie-chart :data="investChart" ref="investChart"></pie-chart>
        </div>
        <div class="chart-row chart-border">
            <force-chart :data="userMostUsePageData" ref="usePageChart"></force-chart>
        </div>
        <div id="age-chart"></div>
        <div id="investor-chart"></div>
    </section>
</template>

<script>
    import echarts from 'echarts';
    import forceChart from '../charts/force-chart.vue';
    import pieChart from '../charts/pie-chart.vue';
    import '../../css/chart.css';

    export default {
        name: 'Home',
        data(){
            return {
                userMostUsePageData: {
                    title: '用户最常访问页面'
                },
                sexChart: {
                    title: '用户性别比例',
                    height: '400px',
                    legend: false
                },
                ageChart: {
                    title: '用户年龄比例',
                    height: '400px',
                    legend: false
                },
                investChart: {
                    title: '投资与未投资比例',
                    height: '500px',
                    legend: false
                }
            }
        },
        mounted(){
            this.$refs.usePageChart.update('/public/data/one-page.json');
            this.$refs.sexChart.update('/public/data/website/sex.json');
            this.$refs.ageChart.update('/public/data/website/age.json');
            this.$refs.investChart.update('/public/data/website/investor.json');
        },
        components:{forceChart, pieChart}
    }
</script>

<style>
    .home{
        min-height: 500px;
        border: 1px solid #666;
        border-radius: 5px;
        padding: 20px;
    }
</style>
