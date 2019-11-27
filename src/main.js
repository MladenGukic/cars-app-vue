import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppCars from './components/AppCars'
import AddCar from './components/AddCar'

Vue.use (VueRouter)

Vue.config.productionTip = false

const routes = [
  {name: 'index', path: '/', redirect: '/cars'},
  {name: 'cars', path: '/cars', component: AppCars },
  {name: 'addCar', path: '/add', component: AddCar}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
