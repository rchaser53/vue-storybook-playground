<template>
  <div class="filter-bar ui basic segment grid">
    <div class="ui form">
      <div class="inline field">
        <label>Search for:</label>
        <input type="text" v-model="filterText" class="three wide column" @keyup.enter="doFilter" placeholder="name, nickname, or email">
        <button class="ui primary button" @click="doFilter">Go</button>
        <button class="ui button" @click="resetFilter">Reset</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class FilterBar extends Vue {
  filterText = ''

  doFilter () {
    (this as any).$events.fire('filter-set', this.filterText)
  }
  resetFilter () {
    this.filterText = '';
    (this as any).$events.fire('filter-reset')
  }
}
</script>