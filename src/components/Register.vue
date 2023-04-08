<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col">
        <h1 class="mb-[60px] font-[300] tracking-[9px] text-[40px] text-white">Glassy Register Form</h1>
        <div class="w-[532px] py-[50px] px-[30px] bg-[#202123]">
            <div class="w-[320px] flex flex-col gap-[40px] mx-auto my-auto">
                <div class="">
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        v-model="dataSubmit.firstname"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="mail"
                        placeholder="mail@example.com"
                        v-model="dataSubmit.mail"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
                </div>
                <div>
                    <input
                        name="password"
                        type="text"
                        v-model="dataSubmit.password"
                        placeholder="Password"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
                </div>
                <div>
                    <input
                        name="confirmpassword"
                        type="text"
                        v-model="dataSubmit.confirmpassword"
                        placeholder="Confirm Password"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
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
export default {
    data() {
        return {
            dataSubmit: {
                firstname: '',
                mail: '',
                password: '',
                confirmpassword: '',
            },
        };
    },
    methods: {
        handleSubmit() {
            console.log(this.dataSubmit);
        },
    },
};
</script>
<style>
</style>