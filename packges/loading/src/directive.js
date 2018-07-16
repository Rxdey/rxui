import Vue from 'vue';
import Loading from './loading.vue';
const Mask = Vue.extend(Loading);

const toggleLoading = (el, binding) => {
  if (!binding.modifiers['full']) {
    if (el.style.position === '') el.style.position = 'relative';
    el.mask.$el.style.position = 'absolute'
    el.appendChild(el.mask.$el)
  } else {
    
    el.mask.$el.style.position = 'fixed'
    // debugger
    el.appendChild(el.mask.$el)
  }
  el.mask.isShow = binding.value;
}
export default Vue.directive('loading', {
  bind: function (el, binding, vnode) {
    el.mask = new Mask({
      el: document.createElement('div'),
    });
    toggleLoading(el, binding);
  },
  update: function (el, binding, vnode) {
    el.mask.isShow = binding.value;
  },
  unbind: function (el, binding) {
    el.removeChild(el.mask.$el);
  }
})
