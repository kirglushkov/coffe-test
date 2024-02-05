<template>
  <div>
    <div class="flex">
      <div v-for="size in sortedSizes" :key="size" class="flex-1">
        <h2 class="text-lg font-semibold mb-2">
          {{ size }}
        </h2>
        <ul>
          <li v-for="item in sortedItems[size]" :key="item.size + item.numberOfDrinks" class="mb-1 flex items-center">
            <span class="mr-2">{{ item.size }} - {{ item.numberOfDrinks }}</span>
            <button class="px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-700" @click="increaseValue(item)">
              +
            </button>
            <button class="px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-700" @click="decreaseValue(item)">
              -
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Item } from '~~/composables/states'

const Items = useItemsStore()

const increaseValue = (item: Item) => {
  item.numberOfDrinks++
}

const decreaseValue = (item: Item) => {
  if (item.numberOfDrinks > 0) {
    item.numberOfDrinks--
  }
}

const sortedItems = computed(() => {
  interface SortedItems {
  [key: string]: any[];
}

  const sorted: SortedItems = {}
  for (const item of Items.items) {
    if (!sorted[item.size]) {
      sorted[item.size] = []
    }
    sorted[item.size].push(item)
  }
  for (const size in sorted) {
    sorted[size].sort((a, b) => a.size.localeCompare(b.size))
  }
  return sorted
})

const sortedSizes = computed(() => Object.keys(sortedItems.value).sort())
</script>

<style>
ul {
  list-style: none;
}

.flex {
  display: flex;
}

.flex-1 {
  flex: 1;
  padding: 10px;
}
</style>
