<template>
    <div style="width: 100%;" @get="update">
    </div>
</template>

<script>
    import echarts from 'echarts';
    import axios from 'axios';

    let opts = {
        title : {
            text: '--',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: []
        },
        series : [
            {
                name: '',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ],
        backgroundColor: '#fff'
    };

    export default {
        name: 'pieChart',
        props: ['data'],
        methods:{
            update(url){
                let _this = this,
                    el = this.$el,
                chart = echarts.init(el);

                axios.get(url).then((res)=>{
                    let data = res.data;
                    opts.legend.data = [];
                    opts.series[0].data = [];
                    
                    data.forEach((item) => {
                        if(_this.data.legend) {
                            opts.legend.data.push(item.name);
                        }
                        opts.series[0].data.push({
                            value: item.value,
                            name: item.name
                        });
                    });
                    opts.title.text = _this.data.title;

                    chart.setOption(opts);
                });
            }
        },
        mounted() {
            if(this.data.title){
                opts.title.text = this.data.title;
                opts.series.name = this.data.title;
            }
            if(this.data.legend){
                opts.legend.data = [];
            }
            this.$el.style.height = this.data.height;
        }
    }
</script>

<style>
</style>
