import Rxloading from './src/loading.vue'

Rxloading.install = function(Vue) {
  Vue.component(Rxloading.name, Rxloading);
};

export default Rxloading;