<template>
    <div id="app" class="min-h-screen flex flex-col">
        <header class="accent-border relative">
            <div class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                <a href="/" class="w-1/4">
                    <h1 class="text-2xl font-bold">Lemiil</h1>
                </a>
                <button @click="isMenuOpen = !isMenuOpen" class="that-button sm:hidden z-50 ease-in-out">
                    <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 transition-opacity transform duration-300 ease-in-out" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>



                <nav class="hidden sm:flex gap-4 justify-center">
                    <router-link class="accent-hover transition" :to="{ name: 'Home' }">Home</router-link>
                    <router-link class="accent-hover transition" :to="{ name: 'About' }">About me</router-link>
                    <router-link class="accent-hover transition" :to="{ name: 'Projects' }">Projects</router-link>
                    <router-link class="accent-hover transition" :to="{ name: 'Contact' }">Contact</router-link>
                </nav>

                <div class="w-1/4 flex justify-end">
                    <div class="avatar">
                        <img src="https://avatars.githubusercontent.com/u/168548703?s=400&u=3cb8a2f7444d7e8069f42e715988448319d06a07&v=4"
                            alt="avatar" class="avatar-img">
                    </div>
                </div>
            </div>

            <transition name="fade">
                <div v-if="isMenuOpen" @click.self="isMenuOpen = false" class="fixed inset-0 z-40 sm:hidden">
                    <div class="bg-coolblack absolute top-0 left-0 w-3/4 h-full p-6 flex flex-col gap-4 z-50 shadow-lg">
                        <router-link class="accent-hover transition" @click="isMenuOpen = false"
                            :to="{ name: 'Home' }">Home</router-link>
                        <router-link class="accent-hover transition" @click="isMenuOpen = false"
                            :to="{ name: 'About' }">About me</router-link>
                        <router-link class="accent-hover transition" @click="isMenuOpen = false"
                            :to="{ name: 'Projects' }">Projects</router-link>
                        <router-link class="accent-hover transition" @click="isMenuOpen = false"
                            :to="{ name: 'Contact' }">Contact</router-link>
                    </div>
                </div>
            </transition>
        </header>


        <main class="flex-grow flex items-center justify-center px-4">
            <div class="text-center max-w-3xl">
                <slot />
            </div>
        </main>

        <footer class="text-center py-6 text-gray-500">
            <p> 2025 &copy; Lemiil</p>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>


<style scoped>
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
    transition: transform 0.3s ease;
}

.slide-enter-from {
    transform: translateX(-100%);
}

.slide-leave-to {
    transform: translateX(-100%);
}
</style>
