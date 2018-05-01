import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import MyButton from './Button.vue';
import VueTable from './VueTable/VueTable.vue';
import ElementTable from './element/Table.vue';
import ElementPagination from './element/Pagination.vue';

storiesOf('MyButton', module)
  .add('story as a component', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add('vue-table2', () => ({
    components: { VueTable },
    template: '<vue-table></vue-table>'
  }))
  .add('element vue table', () => ({
    components: { ElementTable },
    template: '<element-table></element-table>'
  }))
  .add('element pagination', () => ({
    components: { ElementPagination },
    template: '<element-pagination></element-pagination>'
  }));