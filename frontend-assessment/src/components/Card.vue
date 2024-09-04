<script setup>
const props = defineProps(['content'])
</script>

<template>
    <div
        class="relative flex flex-col border-2 border-gray-100 rounded-md w-full md:w-80 transition duration-300 hover:border-gray-300">
        <div class="p-5 w-full flex justify-center">
            <img src="../assets/thumbnail.png" class="rounded-md overflow-hidden w-full"
                alt="Thumbnail placeholder with text 400 x 300">
        </div>
        <div class="container px-6 text-center">
            <p class="font-light">{{ content }}</p>
        </div>
        <div class="container flex justify-center p-6 w-full mt-auto">
            <button
                class="rounded-full border-[3px] border-black px-5 py-[0.6rem] font-bold tracking-[0.25em] text-sm transition duration-300 hover:bg-black hover:text-white">
                READ MORE
            </button>
        </div>
    </div>
</template>