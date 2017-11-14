<template>
  <div>
    <vuetable ref="vuetable"
      api-url="https://vuetable.ratiw.net/api/users"
      :fields="fields"
      pagination-path=""
      @vuetable:pagination-data="onPaginationData"
    ></vuetable>
    <vuetable-pagination ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination>
  </div>
</template>

<script>
import {Vuetable, VuetablePagination} from 'vuetable-2'

export default {
  name: 'vue-table',
  data: function() {
    return {
      fields: [
        'name', 'email'
      ]
    }
  },
  components: {
    Vuetable,
    VuetablePagination
  },
  methods: {
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    }
  }
}
</script>

<style>
  .pagination a.item {
    background-color: aqua;
    display: inline-block;
    text-align: center;
    margin: 3px;
    width: 30px;
  }
</style>