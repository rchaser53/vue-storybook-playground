<template>
  <div>
    <filter-bar />
    <vuetable ref="vuetable"
      api-url="https://vuetable.ratiw.net/api/users"  
      :fields="fields" pagination-path="" track-by="name"
      detail-row-component="my-detail-row"
      @vuetable:cell-clicked="onCellClicked"
      @vuetable:pagination-data="onPaginationData" />

    <!-- :muti-sort="true"  multi-sort-key="ctrl"  ##doen't work## -->
    <vuetable-pagination ref="pagination"
      @vuetable-pagination:change-page="onChangePage" />
  </div>
</template>

<script>
// import {Vuetable, VuetablePagination} from 'vuetable-2'
import Vue from 'vue'
import {VuetablePagination} from 'vuetable-2'
import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
import DetailRow from './VueTableDetailRow.vue'
import FilterBar from './FilterBar.vue'

Vue.component('filter-bar', FilterBar)
Vue.component('my-detail-row', DetailRow)

export default {
  // name: 'vue-table',
  mounted () {
    this.$on('filter-set', eventData => this.onFilterSet(eventData))
    this.$on('filter-reset', e => this.onFilterReset())
  },
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
    onFilterSet (filterText) {
      this.moreParams.filter = filterText
      Vue.nextTick( () => this.$refs.vuetable.refresh() )
    },
    onFilterReset () {
      delete this.moreParams.filter
      Vue.nextTick( () => this.$refs.vuetable.refresh() )
    },
    nyan(e) {
      // return value is the value in table
      return e;
    },
    onCellClicked (data, field, event) {
      console.log('cellClicked: ', field.name, data.id)
      this.$refs.vuetable.toggleDetailRow(data.id)
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