<template>
    <div>
        <el-form>
            <el-form-item :model="form" label="性别：">
                <el-radio v-model="form.sex" label="1">男</el-radio>
                <el-radio v-model="form.sex" label="2">女</el-radio>
                <el-radio v-model="form.sex" label="3">所有</el-radio>
            </el-form-item>
            <el-form-item label="年龄：">
                <el-input v-model="form.age1" class="age" placeholder="请输入年龄"></el-input>
                &nbsp - &nbsp
                <el-input v-model="form.age2" class="age" placeholder="请输入年龄"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table stripe :data="tableData" style="width: 100%">
            <el-table-column prop="index" label="排列">
            </el-table-column>
            <el-table-column prop="cent" label="占比">
            </el-table-column>
            <el-table-column prop="query" label="序列">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                form: {
                    sex: '3',
                    age1: 0,
                    age2: 99
                },
                tableData: [{
                    index: '0',
                    cent: '70%',
                    query: 'a->b->c',
                }, {
                    index: '1',
                    cent: '20%',
                    query: 'a->d->e',
                }, {
                    index: '2',
                    cent: '6%',
                    query: 'b->d->e',
                }, {
                    index: '3',
                    cent: '4%',
                    query: 'a->b->c',
                }]
            }
        },
        methods: {
            onSubmit(){
            }
        }
    }
</script>

<style>
.el-input, .el-input__inner{
    width: auto;
}

.el-form-item {
    display: inline-block;
    width: 30%;
}

.age{
    width: 50px;
}

.age input{
    width: 50px;
}
</style>
