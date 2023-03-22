import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import NamesForm from './components/NamesForm.vue';
import CatFacts from './components/CatFacts.vue';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', component: HelloWorld },
        { path: '/form', component: NamesForm },
        { path: '/facts', component: CatFacts },
    ]
});

app.use(router);

app.mount('#app')
