<template>
    <div style="width: 100%; height: 900px;" @get="update">
    </div>
</template>

<script>
    import echarts from 'echarts';
    import axios from 'axios';
    let colors = ['#ed7c5e', '#ffffcc', '#ccffff', '#ffcccc', '#ff9966', '#ff6666', '#ccff99', '#cccccc',
    '#ccffcc', '#99cc99', '#99cccc', '#99ccff', '#666699', '#993366'];

    let opts = {
                title: {
                    text: '--',
                    x: 'center'
                },
                tooltip: {},
                backgroundColor: '#fff',
                series : [
                    {
                        type: 'graph',
                        layout: 'force',
                        symbolSize: 50,
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    fontSize: 6
                                }
                            }
                        },
                        force: {
                            repulsion: 3000
                        },
                        edgeLength: [500, 800],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 5
                                }
                            }
                        },
                        categories: [],
                        data: [],
                        // links: [],
                        links: [],
                        lineStyle: {
                             normal: {
                                color: 'source',
                                curveness: 0.1
                            }
                        }
                    }
                ]
            }
    colors.forEach((item)=>{
        opts.series[0].categories.push({
            itemStyle: {
                normal: {
                    color: item                                
                }
            },
            label:{
                normal:{
                    position: 'bottom',
                    textStyle: {
                        color: '#000',
                        fontSize: '6px'
                    }
                },
                emphasis: {
                    position: 'bottom',
                    textStyle: {
                        color: '#ddd',
                        fontSize: '6px'
                    }
                }
            }
        })
    });
    let chart = null;
    export default {
        name: 'forceChart',
        props: ['data', 'chart'],
        methods:{
            update(url){
                let data = this.data,
                el = this.$el;
                chart = echarts.init(el);
                axios.get(url).then((res)=>{
                    let nodes = [];
                    let links = [];

                    nodes.push({
                        symbolSize: 40,
                        symbol:'circle',
                        value: '--',
                        category: 0,
                        label: {
                            normal: {
                                position: 'inside',
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        name: "用户",
                        draggable: true
                    });
                    res.data.forEach((item, index) => {
                        nodes.push({
                            symbolSize: 20 + 100 * item[1],
                            symbol: 'pin',
                            value: item[1].toFixed(2),
                            category: index + 1,
                            name: item[0][0],
                            draggable: true
                        });
                    });
                    nodes.forEach((item) => {
                        links.push({
                            source: '用户',
                            target: item.name
                        });
                    });
                    opts.series[0].data = nodes;
                    opts.series[0].links = links;
                    chart.setOption(opts);
                })
            },
            reset(){
                chart.resize(opts);
                chart.showLoading({
                        zlevel: 5,
                        text : 'LOADING',
                        textStyle : {fontSize : 20}
                }); 
                setTimeout(()=>{
                    chart.hideLoading();
                },600);
            }
        },
        mounted() {
            if(this.data.title){
                opts.title.text = this.data.title;
            }
        }
    }
</script>

<style>
</style>
