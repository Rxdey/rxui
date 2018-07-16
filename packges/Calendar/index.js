import RXCalendar from './src/caleander.vue'

RXCalendar.install = function(Vue) {
  Vue.component(RXCalendar.name, RXCalendar);
};

export default RXCalendar;