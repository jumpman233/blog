<template>
     <el-form :model="formData">
        <el-form-item label="用户类型：">
            <el-radio v-model="formData.type" label="1">已投资</el-radio>
            <el-radio v-model="formData.type" label="2">未投资</el-radio>
            <el-radio v-model="formData.type" label="3">所有</el-radio>
        </el-form-item>
        <el-form-item class="one-third" label="性别：">
            <el-radio v-model="formData.sex" label="1">男</el-radio>
            <el-radio v-model="formData.sex" label="2">女</el-radio>
            <el-radio v-model="formData.sex" label="3">所有</el-radio>
        </el-form-item>
        <el-form-item class="one-third" label="年龄：">
            <el-input v-model="formData.age1" class="age" placeholder="请输入年龄"></el-input>
            &nbsp - &nbsp
            <el-input v-model="formData.age2" class="age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item class="one-third">
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
            用户类型：<el-tag type="primary">{{showData.type === '3' ? '所有' : showData.type === '2' ? '未投资' : '已投资'}}</el-tag>
            性别：<el-tag type="primary">{{showData.sex === '3' ? '所有' : showData.sex === '2' ? '女' : '男'}}</el-tag>
            年龄：<el-tag type="primary">{{showData.age1}} &nbsp - &nbsp {{showData.age2}}</el-tag>
        </el-form-item>
    </el-form>
</template>

<script>
    import forceChart from '../charts/force-chart.vue';
    export default {
        name: 'userForm',
        data(){
            let obj = {
                age1: 0,
                age2: 99,
                sex: '3',
                type: '3'
            }
            return {
                formData: {
                    age1: 0,
                    age2: 99,
                    sex: '3',
                    type: '3'
                },
                showData: {
                    age1: 0,
                    age2: 99,
                    sex: '3',
                    type: '3'
                }
            }
        },
        methods: {
            onSubmit() {
                this.$root.eventHub.$emit('formSubmit', this.formData);
                this.showData.age1 = this.formData.age1;
                this.showData.age2 = this.formData.age2;
                this.showData.sex = this.formData.sex;
                this.showData.type = this.formData.type;
            }
        },
        components:{ forceChart },
        mounted(){
        }
    }
</script>

<style>
.el-tag{
    font-size: 14px;
    margin-right: 20px;
}
.el-input, .el-input__inner{
    width: auto;
    display: inline-block;
}

.one-third{
    width: 30%;
    display: inline-block;
}

.age{
    width: 50px;
}

.age input{
    width: 50px;
}

.el-form{
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
}
</style>