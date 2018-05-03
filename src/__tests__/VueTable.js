import Vue from 'vue';
import VueTable from '../stories/VueTable/VueTable.vue';
import { createRenderer } from 'vue-server-renderer';
const renderer = createRenderer();

const render = (vm) => {
  return new Promise((resolve, reject) => {
    renderer.renderToString(vm, (err, str) => {
      if (err) {
        return reject(err);
      }
      resolve(str);
    });
  });
};

test('VueTableをrenderする', () => {
  const vm = new Vue({
  	el: document.createElement('div'),
  	components: {
  		'vue-table': VueTable,
  	},
  	render: (h) => {
  		return h('vue-table');
  	},
  });
  expect(vm.$el).toMatchSnapshot();
});
