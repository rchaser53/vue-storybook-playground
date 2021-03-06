import Vue from 'vue';
import FilterBar from '../stories/VueTable/FilterBar.vue';
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

test('FilterBarをrenderする', () => {
  const vm = new Vue({
  	el: document.createElement('div'),
  	components: {
  		'filter-bar': FilterBar,
  	},
  	render: (h) => {
  		return h('filter-bar');
  	},
  });
  expect(vm.$el).toMatchSnapshot();
});
