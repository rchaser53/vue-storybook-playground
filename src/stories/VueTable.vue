<template>
  <div>
    <vuetable ref="vuetable"
      api-url="https://vuetable.ratiw.net/api/users"
      :fields="fields" pagination-path=""
      @vuetable:pagination-data="onPaginationData"
    >
    <!-- :muti-sort="true"  multi-sort-key="ctrl"  ##doen't work## -->
    </vuetable>
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
        {
          name: 'name',
          sortField: 'name',
        }, {
          name: 'email',
          sortField: 'email',
          // direction: 'asc',      // doesn't work
          callback: 'nyan'
        }
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
    },
    nyan(e) {
      // return value is the value in table
      return e;
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