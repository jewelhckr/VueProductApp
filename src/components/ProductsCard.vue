<template>

        

<div class="w-full bg-white border mt-4 rounded-lg shadow-xl overflow-hidden ">
    <a href="#">
        <img :src="recipelist.image" alt="Recipe Image" class="w-full h-48 object-cover rounded-t-lg">
    </a>
    <!-- <button @click="sendItem">Send to Parent</button> -->
    <div class="px-5 pb-5">
        <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-black mt-4">{{recipelist.name}}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <svg v-for="star in 5" :key="star" class="w-4 h-4" :class="{'text-yellow-300': star <= recipelist.rating, 'text-gray-200': star > recipelist.rating}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">{{ recipelist.rating }}</span>
        </div>
    <div class="flex justify-between items-center mt-4">
        <button @click="toggleLike" class="focus:outline-none">
            <svg v-if="isLiked" class="w-6 h-6 text-red-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <svg v-else class="w-6 h-6 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zM12 19.35l-.45-.43C6.4 14.36 4 11.28 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.78-2.4 5.86-7.55 10.43l-.45.42z"/>
            </svg>
        </button>
        </div>
        <!-- <i class="fa-regular fa-heart"></i> -->
        <div class="flex justify-between items-center">
        <button  @click="showModal" class="button19 border p-4 w-full">
            View Product
        </button>
        
        </div>
        
    </div>
    </div>  
    

    <teleport to="body">
    <fwb-modal v-if="isShowModal" @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg font-bold">
                Details
            </div>
        </template>
        <template #body>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {{recipelist.name}} 
        </p>
        <!-- <div v-for="(recipe, index) in recipelist" :key="index" :recipelist="recipe">
            <button>{{ recipe.ingredients[index]}}</button>
        </div> -->
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <!-- meal ingredients -->
            <!-- {{ recipelist.ingredients}} -->
        </p>

        
        <div v-for="(ingredient, index) in recipelist.ingredients" :key="index">
            <button class="text-sm font-medium text-gray-900 bg-gray-200 rounded-lg px-3 py-1 my-1">{{ ingredient }}</button>
        </div>
            <br>
        <div>
        <div v-for="(instruction, index) in recipelist.instructions" :key="index">
            <button class="text-sm font-medium text-gray-900 bg-gray-200 rounded-lg px-3 py-1 my-1">✖️ {{ instruction }}</button>
        </div>
        </div>

        </template>
        <template #footer>
        <div class="flex justify-between">
            <fwb-button @click="closeModal" color="alternative">
            </fwb-button>
            <fwb-button class="border p-3 bg-black hover:bg-red-500 text-white font-bold rounded-lg" @click="closeModal" color="green">
            Close List
            </fwb-button>
        </div>
        </template>
    </fwb-modal>
    </teleport>
</template>

<script setup>
// import ModalPage from './ModalPage.vue'

defineProps(['recipelist'])
import { ref } from 'vue'
//   import { FwbModal } from 'flowbite-vue'
    
    const isShowModal = ref(false)
    
    function closeModal () {
    isShowModal.value = false
    }
    function showModal () {
    isShowModal.value = true
    }

    function toggleLike() {
    //  isLiked.value = !isLiked.value;
}

// const emit = defineEmits(['updateName','changeName'])
// const sendItem = ()=>{
//    emit('updateName', ['Mango','Lemon'])
//    emit('changeName')
//}

</script>

<style scoped>
    

    .button19 {
    width: 100%;
    height: 60px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #44ffff;
    transition: 0.5s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
}
.button19::after,
.button19::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    transform: skew(90deg) translate(-50%, -50%);
    position: absolute;
    inset: 50%;
    left: 25%;
    z-index: -1;
    transition: 0.5s ease-out;
    background-color: #0c0c0c;
}
/* .button19::before {
    top: -50%;
    left: -25%;
    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
}
/* .button19:hover::before {
    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
}
.button19:hover::after {
    transform: skew(75deg) translate(-50%, -50%);
} */
.button19:hover {
    background-color: #44ffff;
}
.button19:active {
    filter: brightness(0.7);
    transform: scale(0.98);
}
</style>