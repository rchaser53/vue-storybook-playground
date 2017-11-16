<template>
  <div>
    <!-- <input @change="changeFilter" > -->

    <el-table :data="tableData" :default-sort="{prop: 'date', order: 'descending'}" style="width: 100%">
      <el-table-column class-name="filter-column" prop="date" label="Date" sortable>
      </el-table-column>
      <el-table-column prop="name" label="Name" :filters="[{ text: 'Home', value: 'hoge2' }, { text: 'Office', value: 'Office' }]"
        :filter-method="filterTag" filter-placement="bottom-end">
      </el-table-column>
      <el-table-column prop="address" label="Address" >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { ElTable, ElTableColumn } from 'element-table'

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
    name: 'element-table',
    methods: {

      filterTag(value, row) {
        console.log(value, row, 288)
        return row.name === value;
      }
    }
  }
</script>

<style>
  th.filter-column {
    background-color: aqua;
  }
</style>