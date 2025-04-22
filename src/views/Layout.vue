<template>
    <div id="app" class="min-h-screen flex flex-col">
        <header class="accent-border">
            <div class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                <a href="/" class="w-1/4">
                    <h1 class="text-2xl font-bold">Lemiil</h1>
                </a>

                <nav
                    class="grid grid-cols-2 gap-4 justify-items-center sm:flex sm:justify-center sm:space-x-6 sm:gap-0">
                    <router-link class="accent-hover transition" :to="{ name: 'Home' }">
                        Home
                    </router-link>
                    <router-link class="accent-hover transition" :to="{ name: 'About' }">
                        About me
                    </router-link>
                    <router-link class="accent-hover transition" :to="{ name: 'Projects' }">
                        Projects
                    </router-link>
                    <router-link class="accent-hover transition" :to="{ name: 'Contact' }">
                        Contact
                    </router-link>
                </nav>



                <div class="w-1/4 flex justify-end">
                    <div class="avatar">
                        <img src="https://avatars.githubusercontent.com/u/168548703?s=400&u=3cb8a2f7444d7e8069f42e715988448319d06a07&v=4"
                            alt="avatar" class="avatar-img">
                    </div>
                </div>
            </div>
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
// yeah
</script>

<style scoped></style>
