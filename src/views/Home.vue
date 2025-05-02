<script setup>
import layout from './Layout.vue';
</script>

<template>
    <layout>
        <section class="flex justify-start">
            <figure class="max-w-screen-md mx-auto text-center">
                <svg class="w-6 h-6 mx-auto mt-6 text-gray-400 dark:text-gray-600" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path
                        d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote
                    class="p-6 my-6 text-3xl italic font-medium text-gray-900 dark:text-white border-s-4 border-gray-300 bg-coolblack">
                    “An idiot admires complexity, a genius admires simplicity.”
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 mb-12 space-x-4 rtl:space-x-reverse">
                    <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite class="pe-4 font-medium text-gray-900 dark:text-white">Terry Davis</cite>
                    </div>
                </figcaption>
            </figure>
        </section>

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
                    At the same time, I'm alwaysopen to learning something
                    new — like on this website, where I used <a href="https://tailwindcss.com/"
                        class="font-semibold transition underline">Tailwind</a>
                    for the first time.
                </p>
                <p class="text-lg">The
                    <router-link class="font-semibold underline transition" :to="{ name: 'About' }">About
                        me</router-link>
                    and page in particular speak for me as a programmer.

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