import 'reflect-metadata'
import { createApp } from 'vue'
import App from './App.vue'
import { containerBuild } from './main.containers'
import router from './router'
import store from './store'

const container = containerBuild();


const app = createApp(App)
            .use(store)
            .use(router)

app.config.globalProperties._container = container;

app.mount('#app')