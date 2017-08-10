<template>
    <div>
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
        }
    }
</script>