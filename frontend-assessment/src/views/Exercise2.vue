<script setup>
import sourceData from '../assets/data.json'
import { ref } from 'vue'

let data = sourceData
const selected = ref(0)
const accordionIsOpen = ref(true)

function setSelected(index) {
    selected.value = index
}

function toggleAccordion() {
    accordionIsOpen.value = !accordionIsOpen.value
}

function setSelectedAccordion(index) {
    if (selected.value == index) {
        toggleAccordion()
    }
    else {
        setSelected(index)
        accordionIsOpen.value = true
    }
}

</script>

<template>
    <div class="flex flex-col w-screen min-h-screen">
        <div class="container flex justify-center mx-auto p-6 md:p-12">
            <div class="hidden md:flex flex-col w-3/4 xl:w-1/2">
                <div class="justify-center gap-6 md:flex flex-row">
                    <button v-for="(item, index) in data" :key="item.title"
                        :class="{ 'bg-slate-500 text-white': index === selected }"
                        class="px-4 py-3 rounded-md hover:bg-slate-200 hover:text-black transition duration-300 font-bold"
                        @click="setSelected(index)">
                        {{ item.title }}
                    </button>
                </div>
                <div v-show="selected === index" v-for="(item, index) in data" :key="item.title"
                    class="flex mt-6 justify-center">
                    <span v-html="item.content" class="text-normal w-full" />
                </div>
            </div>
            <div class="md:hidden w-full">
                <div v-for="(item, index) in data" :key="item.title" :open="index === selected" class="w-full mt-4">
                    <div class="block px-4 py-3 rounded-md hover:bg-slate-200 hover:text-black w-full transition duration-300"
                        @click="setSelectedAccordion(index)" :class="{ 'bg-slate-500 text-white': index === selected }">
                        <h1 class="font-bold">{{ item.title }}</h1>
                    </div>
                    <div class="px-4 py-2 overflow-hidden transition-all duration-500"
                        v-show="index === selected && accordionIsOpen">
                        <span v-html="item.content" class="text-normal" />
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-28 bg-gray-500 flex flex-col justify-center align-middle mt-auto">
            <RouterLink to="/" class="text-white text-2xl underline m-auto">Back to Exercise 1 ></RouterLink>
        </div>
    </div>
</template>

<style>
/* Used so list styling can appear through Vue v-html */
li {
    @apply list-disc;
}
</style>