import Vue from 'vue'
import toastTemple from './toast.vue'
let vm
let MessageBox = Vue.extend(toastTemple)
let toast = function (opt) {
  if (typeof opt === 'string') {
    opt = {
      message: opt
    }
  }
  vm = new MessageBox({
    data: opt
  })
  vm.vm = vm.$mount()
  document.body.appendChild(vm.vm.$el)
  vm.vm.isShow = true
}

let arr = ['success','error','info','warning'].forEach(item=>{
  toast[item]=(msg)=>{
    return toast({
      message:msg,
      type:item
    })
  }
})
export default toast
