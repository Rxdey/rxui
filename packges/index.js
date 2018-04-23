import Button from './button/index.js'
import Toast from './toast/src/main.js'

const components = [
  Button,
  Toast
]

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$toast = Toast;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  Button,
  Toast
}