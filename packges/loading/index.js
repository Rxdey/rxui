import loading from './src/loading.vue'
import directive from './src/directive.js'

loading.install = function(Vue) {
  Vue.component('loading', loading);
};

export default {
  loading,
  directive
};