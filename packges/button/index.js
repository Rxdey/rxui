import RXButton from './src/button.vue'

RXButton.install = function(Vue) {
  Vue.component(RXButton.name, RXButton);
};

export default RXButton;