import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import nav from './components/nav/nav.vue';
const app = createApp(nav);

// app.use(createPinia())

app.mount('#app')
