import Vue from 'vue'
import ModalTemple from './toast.vue'
let vm
let ModalBox = Vue.extend(ModalTemple)
let Modal = function (opt) {
  if (typeof opt !== 'object') {return new Error('参数错误')}
  vm = new ModalBox({
    data: opt
  })
  // vm.vm = vm.$mount()
  // document.body.appendChild(vm.vm.$el)
  // vm.vm.isShow = true
}

export default Modal
