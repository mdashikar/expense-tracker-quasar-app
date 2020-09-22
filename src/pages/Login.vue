<template>
<div class="root bg-gray-400">
    <!-- Container -->
    <div class="container mx-auto font-mono ">
        <div class="flex justify-center px-6 my-12">
            <!-- Row -->
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <!-- Col -->
                <div
                    class="w-full h-auto bg-gray-400 lg:block lg:w-1/2 bg-white rounded-l-lg pt-24 pl-8"
                >
                    <img src="~/assets/login_re_4vu2.svg" alt="">
                </div>
                <!-- Col -->
                <div v-if="isLogin" class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
                    <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                        <div class="mb-4">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                Email
                            </label>
                            <input
                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="email"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                Password
                            </label>
                            <input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                            />
                            <p class="text-xs italic text-red-500">Please choose a password.</p>
                        </div>
                        <div class="mb-4">
                            <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                            <label class="text-sm" for="checkbox_id">
                                Remember Me
                            </label>
                        </div>
                        <div class="mb-6 text-center">
                            <button
                                class="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Sign In
                            </button>
                        </div>
                        <hr class="mb-6 border-t" />
                        <div class="text-center">
                            <a
                                class="inline-block text-sm text-indigo-500 align-baseline hover:text-indigo-800 cursor-pointer"
                                @click="isLogin = false"
                                
                            >
                                Create an Account!
                            </a>
                        </div>
                        <div class="text-center">
                            <a
                                class="inline-block text-sm text-indigo-500 align-baseline hover:text-indigo-800 cursor-pointer"
                                
                            >
                                Forgot Password?
                            </a>
                            
                        </div>
                        <div class="text-center mt-4">
                            <q-btn
                                class="px-4 inline py-1 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-indigo bg-indigo-400 active:bg-indigo-600 hover:bg-indigo-700"
                   
                                unelevated
                                to="/"
                                label="back to homepage"
                                no-caps
                            />    
                        </div> 
                        
                    </form>
                </div>
                <div v-if="!isLogin" class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <h3 class="pt-4 text-2xl text-center">Hi there! Let's make this personal</h3>
                    <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                         <div class="mb-4">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="fullName">
                                Full Name
                            </label>
                            <input
                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="fullName"
                                type="text"
                                placeholder="Full name"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                Email
                            </label>
                            <input
                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                Password
                            </label>
                            <input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                            />
                            <p class="text-xs italic text-red-500">Please choose a password.</p>
                        </div>
                        <div class="mb-4">
                            <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                            <label class="text-sm" for="checkbox_id">
                                Remember Me
                            </label>
                        </div>
                        <div class="mb-6 text-center">
                            <button
                                class="w-full px-4 py-2 font-bold text-white bg-indigo-400 rounded-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Sign Up
                            </button>

                        </div>
                        <hr class="mb-6 border-t" />
                        <div class="text-center">
                            <a
                                class="inline-block text-sm text-indigo-500 align-baseline hover:text-indigo-800 cursor-pointer"
                                @click="isLogin = true"
                            >
                                Already have an Account! Login
                            </a>

                        </div>
                        <div class="text-center mt-4">
                            <q-btn
                                class="px-4 inline py-1 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-indigo bg-indigo-400 active:bg-indigo-600 hover:bg-indigo-700"
                                unelevated
                                to="/"
                                label="back to homepage"
                                no-caps
                            />    
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            isLogin: false
        }
    }
    
}
</script>
<style lang="scss" scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
.root{
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>