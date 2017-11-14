<template>
  <div>
    <vuetable ref="vuetable"
      :data="hogeData" :apiMode="false"
      :fields="fields" pagination-path=""
      @vuetable:pagination-data="onPaginationData">
    <!-- api-url="https://vuetable.ratiw.net/api/users"   -->
    <!-- :muti-sort="true"  multi-sort-key="ctrl"  ##doen't work## -->
    </vuetable>
    <vuetable-pagination ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination>
  </div>
</template>

<script>
// import {Vuetable, VuetablePagination} from 'vuetable-2'
import {VuetablePagination} from 'vuetable-2'
import Vuetable from 'vuetable-2/src/components/Vuetable.vue'

export default {
  name: 'vue-table',
  data: function() {
    return {
      hogeData: [
        {
          name: 111,
          email: 222
        }
      ],
      fields: [
        {
          name: '__handle',   // only show the icon?
          dataClass: 'center aligned'
        },
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
  .vuetable-handle {
    width: 30px;
  }

  .handle-icon {
    display: block;
    width: 30px;
    height: 30px;
    background-color: green;
  }

  .pagination a.item {
    background-color: aqua;
    display: inline-block;
    text-align: center;
    margin: 3px;
    width: 30px;
  }
</style>