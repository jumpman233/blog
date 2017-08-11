<template>
    <div>
        <user-form></user-form>
        <div class="el-form-item">
            <label>页面类型：</label>
             <el-select v-model="value" placeholder="请选择" @change="selectChange">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-table stripe border :data="tableData" style="width: 100%">
            <el-table-column align="center" prop="index" label="排列" width="100">
            </el-table-column>
            <el-table-column align="center" prop="value" label="占比" width="120">
            </el-table-column>
            <el-table-column align="center" prop="str" label="序列" min-width="100">
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
                tableData: [],
                options: [{
                    value: 'two',
                    label: '双页面'
                },{
                    value: 'three',
                    label: '三页面'
                },{
                    value: 'four',
                    label: '四页面'
                },{
                    value: 'five',
                    label: '五页面'
                },{
                    value: 'six',
                    label: '六页面'
                },{
                    value: 'seven',
                    label: '七页面'
                },{
                    value: 'eight',
                    label: '八页面'
                }],
                value: 'two'
            }
        },
        mounted(){
            this.updateTable('two');
            this.$root.eventHub.$on('formSubmit',(target) => {
                console.log(target);
            });
        },
        destroyed(){
            this.$root.eventHub.$off();
        },
        methods:{
            updateTable(str){
                axios.get('/public/data/'+str+'-page-cn.json').then((res)=>{
                    let arr = [],
                        data = res.data,
                        len = data.length >= 10 ? 10 : data.length;
                    for(let i = 0; i < len; i++){
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
            },
            selectChange(item){
                this.updateTable(item);
            }
        },
        components: {userForm}
    }
</script>

<style>
</style>
