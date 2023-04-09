<template lang="">
    <div>
        <form @submit.prevent="handleSubmit" class="flex flex-col">
        <h1 class="mb-[60px] font-[300] tracking-[9px] text-[40px] text-white">Glassy Register Form</h1>
        <div class="w-[532px] py-[50px] px-[30px] bg-[#202123]">
            <div class="w-[320px] flex flex-col gap-[40px] mx-auto my-auto">
                <div>
                    <input
                        name="password"
                        type="text"
                        v-model="userData.newPassword"
                        placeholder="Password new"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
         
                </div>
                <div>
                    <input
                        name="confirmpassword"
                        type="text"
                        v-model="userData.confirmPassword"
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            userData: {
                newPassword: '',
                confirmPassword: '',
            },
        };
    },
    methods: {
        handleSubmit() {
            console.log(this.userData);
        },
    },
};
</script>
<style lang="">
</style>