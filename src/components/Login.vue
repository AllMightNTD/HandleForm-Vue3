<template>
    <div class="flex flex-col">
        <h1 class="mb-[60px] font-[300] tracking-[9px] text-[40px] text-white">Glassy Register Form</h1>
        <form @submit.prevent="handleSubmit" class="w-[532px] py-[45px] px-[20px] bg-[#202123]">
            <div class="w-[320px] flex flex-col gap-[30px] mx-auto my-auto">
                <div>
                    <input
                        type="text"
                        name="mail"
                        placeholder="mail@example.com"
                        v-model="dataForm.name"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
                </div>
                <div>
                    <input
                        name="password"
                        type="text"
                        v-model="dataForm.password"
                        placeholder="Password"
                        class="w-full outline-none text-[#dbeee3] px-[15px] text-[17px] bg-transparent border-b-[5px]"
                    />
                </div>

                <button
                    type="submit"
                    class="outline-none w-full bg-[#3970b0] justify-center flex items-center h-[50px] font-normal text-[16px] text-white"
                >
                    Login
                </button>
                <div class="flex items-center justify-center">
                    <span class="text-[16px] text-[#fff]"
                        >You are new user <a href="/" class="text-[#3970b0]">Register here</a>
                    </span>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dataForm: {
                name: '',
                password: '',
            },
        };
    },
    methods: {
        handleSubmit() {
            console.log(this.dataForm);
        },
    },
};
</script>
<style>
</style>