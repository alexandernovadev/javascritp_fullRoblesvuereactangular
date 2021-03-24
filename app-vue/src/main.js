import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Blog from './components/Blog.vue'
import LastArticles from './components/LastArticles.vue'
import Formulario from './components/Formulario.vue'
import Search from './components/Search.vue'
import OneArticle from './components/OneArticle.vue'
import EditArticle from './components/EditArticle.vue'
import RutasParametros from './components/RutasParametros.vue'
import CreateArticle from './components/CreateArticle.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import Peliculas from './components/Peliculas.vue'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

// Crear Rutas

/* Decirle a vue que itilize VueRiuter,se
parece a exprees de node */
Vue.use(VueRouter)
Vue.use(Vuelidate)

// Esto se puede con imports
// import VueMoment from 'vue-moment'
// import moment from 'moment'
// import 'moment/locale/es'
const moment  = require('moment')
require('moment/locale/es')
Vue.use(require('vue-moment'),{
  moment
})

// ESTO SE PUEDE REFACTORIZAR RUTAS APARTE
// rutassssss
const routes = [
  { path: '/', component: LastArticles },
  { path: '/home', component: LastArticles },
  { path: '/blog', name:'blog',component: Blog },
  { path: '/formulario', name:'formulario',component: Formulario },
  { path: '/Peliculas', name:'Peliculas',component: Peliculas },
  { path: '/search/:search',component: Search },
  { path: '/article/:id',component: OneArticle },
  { path: '/crearartilce',component: CreateArticle },
  { path: '/edit/:id',component: EditArticle },
  
  // Se le pone el name  para llamarlo desde el touter link con para
  //mwtros
  { path: '/rutasexample/:id?',name:'rutasexample', component: RutasParametros },
  { path: '*', component: ErrorComponent },


]

// Inicializar el routerrrrrrrrrr
const router = new VueRouter({
  routes,
  mode: 'history'
})

// Add Ruterrr al vue main
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
