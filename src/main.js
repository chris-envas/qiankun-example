import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start } from 'qiankun'

Vue.use(ElementUI)

const apps = [
  {
    name: 'vueApp',
    entry: process.env.NODE_ENV === 'production' ? 'http://49.234.62.202:10000' : 'http://localhost:10000',
    fetch: '',
    container: '#vue',
    activeRule: '/vue',
    props: {
      data: [1, 2, 3, 4, 5]
    }
  },
  {
    name: 'reactApp',
    entry: process.env.NODE_ENV === 'production' ? 'http://49.234.62.202:20000' : 'http://localhost:20000',
    fetch: '',
    container: '#react',
    activeRule: '/react',
    props: {
      data: [1, 2, 3, 4, 5]
    }
  }
]

registerMicroApps(apps)
start()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
