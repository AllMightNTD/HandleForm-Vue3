<template>
    <div class="flex flex-col">
        <h1 class="text-center mb-[60px] font-[300] tracking-[9px] text-[40px] text-white">Glassy Login Form</h1>
        <form @submit.prevent="handleSubmit" class="w-[532px] py-[45px] px-[20px] bg-[#202123]">
            <div class="w-[320px] flex flex-col gap-[30px] mx-auto my-auto">
                <div>
                    <input
                        type="text"
                        name="mail"
                        placeholder="mail@example.com"
                        @blur="validate()"
                        v-model="userData.mail"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
                    <span v-if="errors.mail" class="text-red-300">{{ errors.mail }}</span>
                </div>
                <div>
                    <input
                        name="password"
                        type="text"
                        @blur="validate()"
                        v-model="userData.password"
                        placeholder="Password"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
                    <span v-if="errors.password" class="text-red-300">{{ errors.password }}</span>
                </div>

                <button
                    type="submit"
                    class="outline-none w-full bg-[#3970b0] justify-center flex items-center h-[50px] font-normal text-[16px] text-white"
                >
                    Login
                </button>
                <div class="flex items-center justify-between">
                    <a href="/forgot" class="text-red-400">Quên mật khẩu</a>
                    <span class="text-[16px] text-[#fff]"><a href="/" class="text-[#3970b0]">Register here</a> </span>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { validation } from '../actions/Validation'; // import the validation object
export default {
    data() {
        return {
            userData: {
                mail: '',
                password: '',
            },
            errors: {
                mail: '',
                password: '',
            },
        };
    },
    methods: {
        validate() {
            const { isValid, errors } = validation.validateLogin(this.userData, this.errors);
            this.errors = errors;
            return isValid;
        },
        handleSubmit() {
            console.log(this.userData);
            if (this.validate()) {
                // Gọi API
                toast.success('Login successfully', {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/';
                    },
                });
            }
        },
    },
};
</script>
<style>
</style>