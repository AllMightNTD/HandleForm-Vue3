<template lang="">
    <div class="w-full flex items-center justify-center flex-col">
        <h1 class="text-center mb-[60px] font-[300] tracking-[9px] text-[40px] text-white">Glassy Forgot Pass Form</h1>
        <form @submit.prevent="handleSubmit" class="w-[532px] py-[45px] px-[20px] bg-[#202123]">
            <div class="w-[320px] flex flex-col gap-[30px] mx-auto my-auto">
                <div>
                    <input
                        type="text"
                        name="mail"
                        placeholder="mail@example.com"
                        v-model="userData.mail"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
                
                </div>
                <button
                    type="submit"
                    class="outline-none w-full bg-[#3970b0] justify-center flex items-center h-[50px] font-normal text-[16px] text-white"
                >
                 Send Code To Email
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    data() {
        return {
            userData: {
                mail: '',
            },
        };
    },
    methods: {
        handleSubmit() {
            console.log(this.userData);
            if (this.userData.mail) {
                toast.success('Send code to email successfully', {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/newPass';
                    },
                });
            } else {
                toast.error('Send code to email error', {
                    autoClose: 1000,
                    onClose: () => {
                        window.location.href = '/forgot';
                    },
                });
            }
        },
    },
};
</script>
<style lang="">
</style>