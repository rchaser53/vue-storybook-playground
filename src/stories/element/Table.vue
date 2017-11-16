<template>
  <div>
    <el-table :data="tableData" :default-sort="{prop: 'date', order: 'descending'}" style="width: 100%">
      <el-table-column prop="date" label="Date" sortable width="180">
      </el-table-column>
      <el-table-column prop="name" label="Name" width="180">
      </el-table-column>
      <el-table-column prop="address" label="Address" :formatter="formatter">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { ElTable } from 'element-table'
  import { ElTableColumn } from 'element-table'

  export default {
    data: function() {
      return {
        tableData: [
          {
            date: '2017/4/2',
            name: 'hoge2',
            address: 'mi2yajo'
          },
          {
            date: '2017/5/2',
            name: 'hoge',
            address: 'mi3yajo'
          },
          {
            date: '2017/3/2',
            name: 'hoge',
            address: 'mi1yajo'
          }
        ]
      }
    },
    components: {
      'el-table': ElTable,
      'el-table-column': ElTableColumn
    },
    name: 'element-table'
  }
</script>