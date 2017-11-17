<template>
  <div>
    <div class="block">
      <span class="demonstration">When you have few pages</span>
      <el-pagination
        layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">When you have more than 7 pages</span>
      <el-pagination @current-change="changePage"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ElPagination from 'element-pagination'
  import 'element-theme-chalk/lib/pagination.css'

  export default {
    components: {
      'el-pagination': ElPagination
    },
    name: 'element-pagination',
    methods: {
      changePage: function(e) {
        console.log(e, 22)
      }
    }
  }
</script>

<style>
</style>