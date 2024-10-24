import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style/style.css';
import './style/breakpoint.css';
import 'leaflet/dist/leaflet.css';
import { i18nPlugin } from './plugins/i18nPlugin';

createApp(App)
  .use(router)
  .use(i18nPlugin)
  .mount('#app');
