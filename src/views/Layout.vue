<template>
    <div id="app">
        <nav class="nav">
            <router-link :to="{ name: 'home' }">
                Home
            </router-link>
            <router-link :to="{ name: 'about' }">
                About me
            </router-link>
            <router-link :to="{ name: 'about' }">
                About me
            </router-link>
            <router-link :to="{ name: 'about' }">
                About me
            </router-link>
            <!-- <router-link :to="{ name: 'projects' }">
                Projects
            </router-link> -->
            <!-- <a href="#">Skills</a>
            <a href="#">Contact</a> -->
        </nav>
        <header>
            <h1>Lemiil</h1>
            <p class="subtitle">Web Developer</p>
        </header>
        <main class="main-content">
            <slot />
        </main>

        <footer>
            <p>2025 Lemiil</p>
        </footer>
    </div>
</template>

<script setup>
// yeah
</script>

<style scoped>
/* yeah */
</style>