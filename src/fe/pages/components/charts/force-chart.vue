<template>
    <div style="width: 100%; height: 700px;">
    </div>
</template>

<script>
    import echarts from 'echarts';

    export default {
        name: 'forceChart',
        props: ['data'],
        beforeMount(){
        },
        mounted() {
            let data = this.data,
                el = this.$el,
                chart = echarts.init(el);
            
            chart.setOption({
                title: {
                    text: data.title || '没'
                },
                tooltip: {},
                width: 500,
                height: 300,
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
                        data: data.nodes,
                        // links: [],
                        links: data.links,
                        lineStyle: {
                             normal: {
                                color: 'source',
                                curveness: 0.3
                            }
                        }
                    }
                ]
            })
        }
    }
</script>

<style>
</style>
