import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import ForgotPass from '../components/ForgotPass.vue';
import NewPassword from '../components/NewPassword.vue';
const routes = [
    { path: '/', component: Register },
    { path: '/login', component: Login },
    { path: '/forgot', component: ForgotPass },
    { path: '/newPass', component: NewPassword },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
