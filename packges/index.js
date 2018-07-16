import Button from './button/index.js'
import Toast from './toast/src/main.js'
import Msgbox from './messageBox/index.js'
import loading from './loading/index.js'
import ActionSheet from './ActionSheet/index.js'
import RXCalendar from './Calendar/index.js'
import Scroll from './Scroller/index.js'

const components = [
  Button,
  Toast,
  Msgbox,
  loading.loading,
  ActionSheet,
  RXCalendar,
  Scroll
]

const install = function(Vue, opts = {}) {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$toast = Toast;
  Vue.prototype.$msgbox = Msgbox;
  Vue.use(loading.directive);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  Button,
  Toast,
  Msgbox,
  loading,
  ActionSheet,
  RXCalendar,
  Scroll
}