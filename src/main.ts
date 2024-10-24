import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "./style/style.css";
import "./style/breakpoint.css";
import 'leaflet/dist/leaflet.css';
import { createI18n } from 'vue-i18n';
import en from './locales/en.js';
import vi from './locales/vi.js';

const savedLanguage = localStorage.getItem('language') || 'vi';

const i18n = createI18n({
  locale: savedLanguage,
  messages: {
    en,
    vi,
  },
});

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app');
