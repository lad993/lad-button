import IfeButton from './src/components/button'
import _Vue from 'vue'

IfeButton.install = (Vue) => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  } else {
    Vue.component(IfeButton.name, IfeButton)
  }
}

export default IfeButton