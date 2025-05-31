<script setup>
import layout from './Layout.vue';
</script>

<template>
    <layout>
 
        <section class="flex justify-start">
            <div class="space-y-6 text-left max-w-3xl pr-10">
                <h1 class="text-3xl font-bold">Hey there!</h1>
                <p class="text-xl">I'm <span class="font-semibold">Lemiil</span>, a web developer.</p>
                <p class="text-lg">
                    I've been doing this for quite a while and have a solid understanding of programming and the web in
                    particular.
                </p>
                <p class="text-lg">
                    I try to use proven methods and patterns in web
                    development.
                    At the same time, I'm always open to learning something
                    new — like on this website, where I used <a href="https://tailwindcss.com/"
                        class="font-semibold transition underline">Tailwind</a>
                    for the first time.
                </p>
                <p class="text-lg">The
                    <router-link class="font-semibold underline transition" :to="{ name: 'About' }">about
                        me</router-link>
                    page in particular speak for me as a programmer.

                </p>

                <p class="text-lg">
                    I'm available for contact via email:
                    <span class="text-sky-500  hover:underline"><a
                            href="mailto:lemiildev@gmail.com">lemiildev@gmail.com</a></span>
                    or discord: <span style="color: #7289da" class="hover:underline"><a
                            href="https://discord.com/app">lemiil</a> </span>
                </p>

                <p class="text-lg">Also, by the way, this site in <a href="https://github.com/lemiil/lemiil-fun"
                        class="font-semibold transition underline">open source</a>.
                </p>
            </div>
        </section>
    </layout>




</template>
