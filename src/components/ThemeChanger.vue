<template>
    <button @click="toggleTheme" :class="['theme-toggle', currentTheme]">
        {{ currentTheme === 'dark' ? '🌙' : '☀️' }}
    </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentTheme = ref('light')

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
        currentTheme.value = 'dark'
        document.documentElement.classList.add('dark')
    }
})

const toggleTheme = () => {
    if (currentTheme.value === 'light') {
        currentTheme.value = 'dark'
        document.documentElement.classList.add('dark')
    } else {
        currentTheme.value = 'light'
        document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', currentTheme.value)
}
</script>

<style>
.theme-toggle {
    padding: 20px 20px;
    position: relative;
    left: -25px;
    font-size: 19px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
}

.theme-toggle.light {
    background: #eee;
    color: #111;
}

.theme-toggle.dark {
    background: #222;
    color: #fff;
}

body.dark {
    background-color: #121212;
    color: #f5f5f5;
}
</style>