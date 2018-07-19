import Vue from 'vue'
import toastTemple from './toast.vue'

function merge(target) {
  for (let i = 0; i < arguments.length; i++) {
    let parme = arguments[i] || {};
    for (let item in parme) {
      if (parme.hasOwnProperty(item)) {
        let val = parme[item];
        if (val !== undefined) {
          target[item] = val
        }
      }
    }
  }
  return target
}
let instance;
let toastBox = Vue.extend(toastTemple)

let initInstance = () => {
  instance = new toastBox({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el)
}
let toast = (opt) => {
  if (typeof opt === 'string') {
    opt = {
      message: opt
    }
  }
  initInstance();
  merge(instance, initInstance.$data, opt);
  instance.isShow = true
}

['success', 'error', 'info', 'warning'].forEach(item => {
  toast[item] = (msg,position = 'middle') => {
    return toast({
      message: msg,
      type: item,
      position:position
    })
  }
})
export default toast
