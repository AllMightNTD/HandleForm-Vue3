
<template>
    <div class="w-full min-h-screen flex items-center justify-center">
        <Register />
    </div>
</template>
<script>
import Login from './components/Login.vue';
import Register from './components/Register.vue';
export default {
    components: {
        Login,
        Register,
    },
};
</script>
<style scoped>
</style>
