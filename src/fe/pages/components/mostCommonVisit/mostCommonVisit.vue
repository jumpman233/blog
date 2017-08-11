<template>
    <section class="mostCommonVisit">
        <user-form></user-form>
        <div class="chart-row chart-border">
            <force-chart :data="userMostUsePageData" ref="usePageChart"></force-chart>
        </div>
    </section>
</template>

<script>
    import forceChart from '../charts/force-chart.vue';
    import userForm from '../main/userForm.vue';

    export default {
        name: 'mostCommonVist',
        data(){
            return {
                userMostUsePageData: {
                    title: '用户最常访问页面'
                },
            }
        },
        components:{ forceChart, userForm },
        mounted(){
            this.$refs.usePageChart.update('/public/data/one-page.json');

            this.$root.eventHub.$on('formSubmit',(target) => {
                if(this.$refs.usePageChart){
                    this.$refs.usePageChart.reset();
                }
            });
        },
        destroyed(){
            this.$root.eventHub.$off();
        }
    }
</script>

<style>
</style>
