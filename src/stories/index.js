import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import MyButton from './Button.vue';
import VueTable from './VueTable.vue';

storiesOf('MyButton', module)
  .add('story as a component', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add('vue-table2', () => ({
    components: { VueTable },
    template: '<vue-table :rounded="true">rounded</vue-table>'
  }));