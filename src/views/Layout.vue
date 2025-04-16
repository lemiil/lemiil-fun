<template>
    <div id="app">
        <header>
            <div class="row">
                <h1>Lemiil</h1>
                <nav class="nav">
                    <router-link :to="{ name: 'Home' }">
                        Home
                    </router-link>
                    <router-link :to="{ name: 'About' }">
                        About me
                    </router-link>
                    <router-link :to="{ name: 'Projects' }">
                        Projects
                    </router-link>
                    <router-link :to="{ name: 'Contact' }">
                        Contact
                    </router-link>
                </nav>
                <a href="https://github.com/lemiil">
                    <div class="avatar">
                        <img src="/src/assets/pablofullhd.jpg">
                    </div>
                </a>
            </div>
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