import Button from './button/index.js'
import Toast from './toast/src/main.js'
import Msgbox from './messageBox/index.js'
import Rxloading from './loading/index.js'
import ActionSheet from './ActionSheet/index.js'

const components = [
  Button,
  Toast,
  Msgbox,
  Rxloading,
  ActionSheet
]

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$toast = Toast;
  Vue.prototype.$msgbox = Msgbox;

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
  Rxloading,
  ActionSheet
}