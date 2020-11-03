import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Global components importing
import MasterLayout from './components/layout/MasterLayout';
import AuthLayout from './components/layout/AuthLayout';

const app = createApp(App);

app.use(store);
app.use(router);
app.component('master-layout', MasterLayout);
app.component('auth-layout', AuthLayout);
app.mount('#app');
