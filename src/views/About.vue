<script setup>
import layout from './Layout.vue';
</script>

<template>
    <layout>
        <section class="pt-6">
            <div>
                <div class="space-y-6 text-left ">
                    <div class="space-y-6 pr-10">
                        <h2 class="text-3xl font-bold ml-8 text-left">My Tech Stack</h2>
                        <ul class="space-y-4 max-w-3xl ">
                            <li class="flex items-start gap-2">
                                <svg class="h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="pt-1 text-lg">Proficient in <span class="font-semibold">HTML</span>, <span
                                        class="font-semibold">CSS</span>, and
                                    <span class="font-semibold">JavaScript</span> (well, who would have
                                    thought)</span>
                            </li>

                            <li class="flex items-start gap-2">
                                <svg class="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="pt-1 text-lg">Experienced with <span class="font-semibold">PHP</span> and
                                    libraries:
                                    <span class="font-semibold">Slim</span>, <span class="font-semibold">CakePHP</span>,
                                    <span class="font-semibold">Symfony</span>, <span class="font-semibold">Yii2</span>,
                                    and
                                    especially <span class="font-semibold">Laravel</span></span>
                            </li>

                            <li class="flex items-start gap-2">
                                <svg class="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="pt-1 text-lg">Skilled in SQL databases like <span
                                        class="font-semibold">MySQL</span>
                                    and <span class="font-semibold">PostgreSQL</span></span>
                            </li>

                            <li class="flex items-start gap-2">
                                <svg class="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="pt-1 text-lg">Familiar with caching systems: <span
                                        class="font-semibold">Redis</span>,
                                    <span class="font-semibold">Memcached</span></span>
                            </li>

                            <li class="flex items-start gap-2">
                                <svg class="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="pt-1 text-lg">Naturally comfortable with <span
                                        class="font-semibold">Git</span> and
                                    <span class="font-semibold">Docker</span></span>
                            </li>

                            <li class="flex items-start gap-2">
                                <svg class="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="pt-1 text-lg">Solid understanding of <span
                                        class="font-semibold">Linux</span></span>
                            </li>

                            <li class="flex items-start gap-2">
                                <svg class="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="pt-1 text-lg">Knowledgeable in <span class="font-semibold">JQuery</span>,
                                    <span class="font-semibold">Vue</span>, and other JS libraries</span>
                            </li>

                            <li class="flex items-start gap-2">
                                <svg class="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="pt-1 text-lg">Strong grasp of <span class="font-semibold">DRY</span>, <span
                                        class="font-semibold">SOLID</span>, <span class="font-semibold">KISS</span> -
                                    etc
                                    principles</span>
                            </li>

                            <li class="flex items-start gap-2">
                                <svg class="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="pt-1 text-lg">Some <span class="font-semibold">DevOps</span> skills: server
                                    management,
                                    <span class="font-semibold">AWS</span> deployment</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="max-w-7xl mx-auto px-6 mt-12">
            <h2 class="text-3xl font-bold text-left mb-8">My Projects</h2>
            <div class="grid md:grid-cols-3 gap-8">

                <div class="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                    <h3 class="text-2xl font-semibold mb-4">Lorem Ipsum</h3>
                    <p class="text-gray-300 mb-4">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        Ipsum.</p>
                    <a href="#" class="text-blue-400 hover:underline">Lorem Ipsumt</a>
                </div>


                <div class="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                    <h3 class="text-2xl font-semibold mb-4">Lorem Ipsum</h3>
                    <p class="text-gray-300 mb-4">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        Ipsum.</p>
                    <a href="#" class="text-blue-400 hover:underline">Lorem Ipsumt</a>
                </div>


                <div class="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                    <h3 class="text-2xl font-semibold mb-4">Lorem Ipsum</h3>
                    <p class="text-gray-300 mb-4">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        Ipsum.</p>
                    <a href="#" class="text-blue-400 hover:underline">Lorem Ipsumt</a>
                </div>
            </div>
        </section>
    </layout>




</template>