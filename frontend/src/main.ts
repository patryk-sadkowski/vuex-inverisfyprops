import 'reflect-metadata'
import { createApp } from 'vue'
import App from './App.vue'
import { containerBuild } from './main.containers'
import router from './router'
import store from './store'


containerBuild();

const app = createApp(App)
    .use(store)
    .use(router)

app.mount('#app')