import { createApp } from 'vue'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './routers'

createApp(App).use(router).mount('#app')
