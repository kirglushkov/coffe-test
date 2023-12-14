<script setup lang="ts">

import { ref } from 'vue'

const { data } = await useFetch('/api/config')
const Items = useItems()
const selectedSize = ref('standard')
const selectedNumberOfDrinks = ref(6)
const selectedIndex = ref(0)

const selectSize = (size: string) => {
  selectedSize.value = size
}

const selectNumberOfDrinks = (numberOfDrinks: number) => {
  selectedNumberOfDrinks.value = numberOfDrinks
}

const addToStorage = () => {
  Items.value.push({
    size: selectedSize.value,
    numberOfDrinks: selectedNumberOfDrinks.value
  })
}

</script>

<template>
  <div class="container">
    <h1 class="text-3xl font-bold mb-4">
      Configuration Header
    </h1>
    <p class="text-red-500">
      Size: {{ selectedSize }}
    </p>
    <p class="text-blue-500">
      Number of Drinks: {{ selectedNumberOfDrinks }}
    </p>

    <div class="options">
      <h2 class="text-lg font-semibold mb-2">
        Device Size
      </h2>
      <button v-for="(size, index) in data" :key="index" :class="{ 'bg-blue-500 text-white': selectedSize === size.name }" class="px-4 py-2 rounded-md mr-2 mb-2 hover:bg-blue-700" @click="selectSize(size.name); selectedIndex=index">
        {{ size.name }}
      </button>
    </div>

    <div class="options">
      <h2 class="text-lg font-semibold mb-2">
        Number of Drinks
      </h2>
      <template v-if="data">
        <button v-for="numberOfDrinks in data[selectedIndex].numberOfDrinks" :key="numberOfDrinks" :class="{ 'bg-blue-500 text-white': selectedNumberOfDrinks === numberOfDrinks }" class="px-4 py-2 rounded-md mr-2 mb-2 hover:bg-blue-700" @click="selectNumberOfDrinks(numberOfDrinks)">
          {{ numberOfDrinks }}
        </button>
      </template>
    </div>
    <div class="photo">
      <img v-if="data" :src="data[selectedIndex].img" alt="">
    </div>

    <button class="add-button bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700" @click="addToStorage">
      Add to Storage
    </button>
    <ul class="mt-4">
      <li v-for="item in Items" :key="item.size + item.numberOfDrinks" class="mb-1">
        {{ item.size }} - {{ item.numberOfDrinks }}
      </li>
    </ul>
    <NuxtLink to="/list" class="mt-4 text-blue-500">
      Список всех товаров
    </NuxtLink>
  </div>
</template>

<style>
.container {
  padding: 20px;
}

.options {
  margin-bottom: 20px;
}

.options h2 {
  margin-bottom: 10px;
}

.options button {
  margin-right: 10px;
}

.add-button {
  margin-top: 20px;
}
</style>
