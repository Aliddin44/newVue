import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
var http = reuire('http')
http.createServer(function (request, response){
  response.writeHead(200, {"content-type":"text/plain"})
  response.end("Hello World\n")
}).listen(process.env.PORT) 
export default router
