import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Register the service
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
            console.log(`Service worker registered for scope ${registration.scope}`)
        })
        .catch((error) => {
            console.error('Service worker registration failer', error)
        })
}

createApp(App).mount('#app')
