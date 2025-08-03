import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { isWebComponentMode } from './config/config';


const isWebComponent = isWebComponentMode();

if (!isWebComponent) {
  createApp(App).mount('#app')
} else {
  createApp(App).mount('#app')
}
