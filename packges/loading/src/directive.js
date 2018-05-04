import Vue from 'vue';
import Loading from './loading.vue';
const Mask = Vue.extend(Loading);

let instance = () =>{
  return new Mask({
    el: document.createElement('div'),
  });
}

let mask;
export default Vue.directive('loading', {
  bind: function(el, binding, vnode) {
    mask = instance();
    if(!binding.modifiers['full']){
      mask.$el.style.position = 'absolute'
    }else{
      mask.$el.style.position = 'fixed'
    }
    el.appendChild(mask.$el)
    mask.isShow = binding.value;
  },
  update:function(el, binding){
    mask.isShow = binding.value;
  },
  unbind:function(el, binding){
    el.removeChild(mask.$el);
  }
})



