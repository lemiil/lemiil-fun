<template>
    <div id="app" class="min-h-screen flex flex-col">
        <header class="accent-border relative">
            <div class="mx-auto w-full max-w-screen-xl py-6 px-4 flex justify-between items-center">

                <div class="flex items-center gap-3">
                    <div class="avatar">
                        <img src="https://avatars.githubusercontent.com/u/168548703?s=400&u=3cb8a2f7444d7e8069f42e715988448319d06a07&v=4"
                            alt="avatar" class="avatar-img w-10 h-10 rounded-full">
                    </div>
                    <a href="/">
                        <h1 class="text-2xl font-bold">Lemiil</h1>
                    </a>
                </div>

                <nav class="hidden sm:flex gap-6">
                    <router-link class="accent-hover transition" :to="{ name: 'Home' }">Home</router-link>
                    <router-link class="accent-hover transition" :to="{ name: 'About' }">About me</router-link>
                    <router-link class="accent-hover transition" :to="{ name: 'Contact' }">Contact</router-link>
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
                            :to="{ name: 'About' }">About me</router-link>
                        <router-link class="accent-hover transition" @click="isMenuOpen = false"
                            :to="{ name: 'Contact' }">Contact</router-link>
                    </div>
                </div>
            </transition>
        </header>

        <main class="flex-grow flex items-center justify-center px-4">
            <div class="text-center max-w-screen-md container">
                <slot />
            </div>
        </main>

        <footer class="text-center py-6 text-gray-500">
            <p>2025 &copy; Lemiil</p>
        </footer>
    </div>

</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<style scoped>
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
