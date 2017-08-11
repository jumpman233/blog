<template>
    <section class="home">
        <force-chart :data="userMostUsePageData"></force-chart>
        <div id="{id}"></div>
    </section>
</template>

<script>
    import echarts from 'echarts';
    import forceChart from '../charts/force-chart.vue';

    export default {
        name: 'Home',
        data(){
            return {
                userMostUsePageData: {
                    width: '500px',
                    height: '300px',
                    title: '用户最常访问页面',
                    nodes: [
                        {
                            symbolSize: 70,
                            value: 1000,
                            category: 0,
                            name: "用户",
                            draggable: true
                        }, {
                            symbolSize: 60,
                            value: 1,
                            category: 1,
                            name: "页面a",
                            draggable: true
                        }, {
                            symbolSize: 20,
                            value: 1,
                            category: 1,
                            name: "页面b",
                            draggable: true
                        }, {
                            symbolSize: 40,
                            value: 1,
                            category: 1,
                            name: "页面c",
                            draggable: true
                        },{
                            symbolSize: 40,
                            value: 1,
                            category: 1,
                            name: "页面d",
                            draggable: true
                        }
                    ],
                    links: [
                        {
                            source: '用户',
                            target: '页面a'
                        },{
                            source: '用户',
                            target: '页面b'
                        },{
                            source: '用户',
                            target: '页面c'
                        },{
                            source: '用户',
                            target: '页面d'
                        }
                    ]
                }
            }
        },
        components:{forceChart}
    }
</script>

<style>
    .home{
        min-height: 500px;
        border: 1px solid #666;
        border-radius: 5px;
        padding: 20px;
    }

    #chart-1{
        width: 80%;
        height: 700px;
        margin: 0 auto;
    }
</style>
