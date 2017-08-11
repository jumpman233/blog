<template>
    <div>
        <user-form ></user-form>
        <el-table stripe :data="tableData" style="width: 100%">
            <el-table-column prop="index" label="排列">
            </el-table-column>
            <el-table-column prop="value" label="占比">
            </el-table-column>
            <el-table-column prop="str" label="序列">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import userForm from '../main/userForm.vue';
    import axios from 'axios';

    export default {
        name: 'userPathAnalyse',
        data() {
            return {
                tableData: []
            }
        },
        mounted(){
            axios.get('/public/data/two-page-cn.json').then((res)=>{
                let arr = [],
                    data = res.data;
                for(let i = 0; i < 10; i++){
                    let max_index = i,
                        max = data[i][1];
                    for(let j = i; j < data.length; j++){
                        if(max < data[j][1]) {
                            max = data[j][1];
                            max_index = j;
                        }
                    }
                    let temp = data[i];
                    data[i] = data[max_index];
                    data[max_index] = temp;
                    
                    arr.push(data[i]);
                }
                arr.forEach((item, index)=>{
                    let array = item[0],
                        str = '';
                    for(let i = 0; i < array.length; i++){
                        let it = array[i];
                        if(i < array.length - 1){
                            str += it + '\ ->\ ';
                        } else {
                            str += it;
                        }
                    }
                    item.str = str;
                    item.value = (item[1] * 100).toFixed(2);
                    item.index = index + 1;
                });

                this.tableData = arr;
            });
            this.$root.eventHub.$on('formSubmit',(target) => {
                console.log(target);
            });
        },
        destroyed(){
            this.$root.eventHub.$off();
        },
        methods:{
        },
        components: {userForm}
    }
</script>

<style>
</style>
