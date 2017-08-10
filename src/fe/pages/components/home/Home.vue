<template>
    <section class="home">
        <div id="chart-1"></div>
        Hay! I'm Home.
    </section>
</template>

<script>
    import echarts from 'echarts';

    export default {
        name: 'Home',
        beforeMount(){
        },
        mounted(){
            let chart1 = this.$el.querySelector('#chart-1');

            let b = echarts.init(chart1);
            let nodes = [
                {
                    itemStyle: null,
                    symbolSize: 70,
                    value: 1000,
                    x: null,
                    y: null,
                    category: 0,
                    name: "用户",
                    draggable: true
                }, {
                    itemStyle: null,
                    symbolSize: 40,
                    value: 1,
                    x: null,
                    y: null,
                    category: 1,
                    name: "页面a",
                    draggable: true
                }, {
                    itemStyle: null,
                    symbolSize: 40,
                    value: 1,
                    x: null,
                    y: null,
                    category: 1,
                    name: "页面b",
                    draggable: true
                }, {
                    itemStyle: null,
                    symbolSize: 40,
                    value: 1,
                    x: null,
                    y: null,
                    category: 1,
                    name: "页面c",
                    draggable: true
                },{
                    itemStyle: null,
                    symbolSize: 40,
                    value: 1,
                    x: null,
                    y: null,
                    category: 1,
                    name: "页面d",
                    draggable: true
                }
            ];
            let links = [
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
            b.setOption({
                title: {
                    text: 'Graph 简单示例'
                },
                tooltip: {},
                series : [
                    {
                        type: 'graph',
                        layout: 'force',
                        symbolSize: 50,
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        force: {
                            repulsion: 7000
                        },
                        edgeLength: [1000, 2000],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 8
                                }
                            }
                        },
                        categories: [{
                            name: 'a',
                            itemStyle: {
                                normal: {
                                    color: '#ed7c5e'                                
                                }
                            }
                        },{
                            name:'b'
                        }],
                        data: nodes,
                        // links: [],
                        links: links,
                        lineStyle: {
                             normal: {
                                color: 'source',
                                curveness: 0.3
                            }
                        }
                    }
                ]
            });
        }
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
