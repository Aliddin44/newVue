import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
createApp(App).use(store,VueAxios).use(router).mount('#app')
