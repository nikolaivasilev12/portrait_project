import Vue from 'vue'
import './plugins/vuetify'
import app from './App.vue'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(app)
}).$mount('#app')

Vue.use(Vuetify, {
  iconfont: 'md'
})