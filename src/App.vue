
<template>
    <div class="w-full min-h-screen flex items-center justify-center">
        <router-view></router-view>
    </div>
</template>
<script>
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ForgotPass from './components/ForgotPass.vue';
import NewPassword from './components/NewPassword.vue';
export default {
    components: {
        Login,
        Register,
        ForgotPass,
        NewPassword,
    },
};
</script>
<style scoped>
</style>
