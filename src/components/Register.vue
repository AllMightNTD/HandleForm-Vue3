<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col">
        <h1 class="text-center mb-[60px] font-[300] tracking-[9px] text-[40px] text-white">Glassy Register Form</h1>
        <div class="w-[532px] py-[50px] px-[30px] bg-[#202123]">
            <div class="w-[320px] flex flex-col gap-[40px] mx-auto my-auto">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        @blur="validate()"
                        v-model="userData.name"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
                    <span v-if="errors.name" class="text-red-300">{{ errors.name }}</span>
                </div>
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
                        v-model="userData.password.password"
                        placeholder="Password"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
                    <span v-if="errors.password.password" class="text-red-300">{{ errors.password.password }}</span>
                </div>
                <div>
                    <input
                        name="confirmpassword"
                        type="text"
                        v-model="userData.password.confirm"
                        placeholder="Confirm Password"
                        @blur="validate()"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
                    <span v-if="errors.password.confirm" class="text-red-300">{{ errors.password.confirm }}</span>
                </div>
                <button
                    type="submit"
                    class="outline-none w-full bg-[#3970b0] justify-center flex items-center h-[50px] font-normal text-[16px] text-white"
                >
                    Register
                </button>
                <div class="flex items-center justify-center">
                    <span class="text-center text-[16px] text-[#fff]"
                        >You are a user , <a href="/login" class="text-[#3970b0]">Login Here</a></span
                    >
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { validation } from '../actions/Validation'; // import the validation object
export default {
    data() {
        return {
            userData: {
                name: '',
                mail: '',
                password: {
                    password: '',
                    confirm: '',
                },
            },
            errors: {
                name: '',
                mail: '',
                password: {
                    password: '',
                    confirm: '',
                },
            },
        };
    },
    methods: {
        validate() {
            const { isValid, errors } = validation.validate(this.userData, this.errors);
            this.errors = errors;
            return isValid;
        },
        handleSubmit() {
            console.log(this.userData);
            if (this.validate()) {
                // Gọi API
                toast.success('Account successfully created', {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/login';
                    },
                });
            }
        },
    },
};
</script>
<style>
</style>