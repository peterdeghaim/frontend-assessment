<script setup>
import Card from '../components/Card.vue'
</script>
<template>
    <div class="flex flex-col w-screen min-h-screen">
        <div class="h-[100vw] md:h-[28rem] w-screen bg-cover bg-center bg-hero-sm md:bg-hero">
            <div
                class="flex flex-col items-center justify-center h-full w-full backdrop-filter backdrop-brightness-[0.72] tracking-[0.125em] text-center">
                <h1 class="text-7xl text-white font-bold">Hello Developer!</h1>
                <p class="text-4xl text-white font-light mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
            </div>
        </div>
        <div
            class="flex flex-col md:flex-row w-full h-full justify-center p-6 mt-6 mb-6 space-y-8 md:p-6 md:space-x-8 md:space-y-0">
            <Card
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Card
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Card
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        </div>
        <div class="w-full h-28 bg-gray-500 flex justify-center align-middle mt-auto">
            <RouterLink to="/exercise2" class="text-white text-2xl underline m-auto">Go to Exercise 2 ></RouterLink>
        </div>
    </div>
</template>