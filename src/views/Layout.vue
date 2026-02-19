<template>
    <div id="app" class="min-h-screen flex flex-col">
        <header class="accent-border relative">
            <div class="mx-auto w-full max-w-screen-xl py-6 px-4 flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="avatar">
                        <img src="/pablofullhd.jpg" alt="avatar" class="avatar-img w-10 h-10 rounded-full">
                    </div>
                    <a href="/">
                        <h1 class="text-2xl font-bold">Lemiil</h1>
                    </a>
                </div>

                <nav class="hidden sm:flex gap-6 items-center">
                    <router-link class="accent-hover transition" :to="{ name: 'Home' }">Home</router-link>
                    <router-link class="accent-hover transition" :to="{ name: 'Dev' }">Dev</router-link>
                    <router-link class="accent-hover transition" :to="{ name: 'About' }">About me</router-link>

                    <a href="https://github.com/lemiil" target="_blank" rel="noopener noreferrer"
                        class="hover:opacity-80 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                            viewBox="0,0,256,256" style="fill:#FFFFFF;">
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <g transform="scale(8.53333,8.53333)">
                                    <path
                                        d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </a>
                </nav>

                <button @click="isMenuOpen = !isMenuOpen" class="that-button sm:hidden z-50 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 transition-opacity transform duration-300 ease-in-out" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>


            <transition name="slide">
                <div v-if="isMenuOpen" @click.self="isMenuOpen = false" class="fixed inset-0 z-40 sm:hidden">
                    <div class="bg-coolblack absolute top-0 left-0 w-3/4 h-full p-6 flex flex-col gap-4 z-50 shadow-lg">
                        <router-link class="accent-hover transition" @click="isMenuOpen = false"
                            :to="{ name: 'Home' }">Home</router-link>
                        <router-link class="accent-hover transition" @click="isMenuOpen = false"
                            :to="{ name: 'Dev' }">Dev</router-link>
                        <router-link class="accent-hover transition" @click="isMenuOpen = false"
                            :to="{ name: 'About' }">About me</router-link>
                        <a href="https://github.com/lemiil" target="_blank" rel="noopener noreferrer"
                            class="hover:opacity-80 transition mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0,0,256,256"
                                style="fill:#FFFFFF;">
                                <g fill="#ffffff">
                                    <g transform="scale(8.53333,8.53333)">
                                        <path
                                            d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </transition>

        </header>

        <main class=" flex-grow flex items-center justify-center px-4">
            <div class="text-center max-w-screen-md ">
                <slot />
            </div>
        </main>

        <footer class="flex text-center justify-center py-6 text-gray-500 space-y-4">
            <p>
                {{ new Date().getFullYear() }}
                &copy; Lemiil
            </p>
        </footer>


    </div>

</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<style scoped>
p {
    width: 728px;
}

.router-link-active::after {
    content: " 🐾";
    margin-left: 0.25rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.that-button-enter-active,
.that-button-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.6s ease;
}

.slide-enter-from {
    transform: translateX(-100%);
}

.slide-leave-to {
    transform: translateX(-100%);
}
</style>
