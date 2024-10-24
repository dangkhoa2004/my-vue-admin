import { createApp, type Directive } from 'vue';
import App from './App.vue';
import router from './router';

import './style/main.css';

import 'leaflet/dist/leaflet.css';

import { i18nPlugin } from './plugins/i18nPlugin';
import * as directives from '@/directives';

const app = createApp(App);

Object.keys(directives).forEach(key => {
  const directive = (directives as { [key: string]: Directive })[key];
  const directiveName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
  app.directive(directiveName, directive);
});

app.use(router).use(i18nPlugin).mount('#app');
