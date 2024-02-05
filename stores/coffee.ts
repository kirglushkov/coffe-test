import { defineStore } from 'pinia'

export type Item = {
  numberOfDrinks: number,
  size: string,
}

export const useItemsStore = defineStore({
  id: 'items',
  state: () => ({
    items: [] as Item[],
    selectedSize: 'standard',
    selectedNumberOfDrinks: 6,
    selectedIndex: 0
  }),
  getters: {
    sortedItems (): Record<string, Item[]> {
      const sorted: Record<string, Item[]> = {}
      for (const item of this.items) {
        if (!sorted[item.size]) {
          sorted[item.size] = []
        }
        sorted[item.size].push(item)
      }
      for (const size in sorted) {
        sorted[size].sort((a, b) => a.size.localeCompare(b.size))
      }
      return sorted
    },
    sortedSizes (): string[] {
      return Object.keys(this.sortedItems).sort()
    }
  },
  actions: {
    selectSize (size: string) {
      this.selectedSize = size
    },
    selectNumberOfDrinks (numberOfDrinks: number) {
      this.selectedNumberOfDrinks = numberOfDrinks
    },
    addToStorage () {
      this.items.push({
        size: this.selectedSize,
        numberOfDrinks: this.selectedNumberOfDrinks
      })
    },
    useItem (item: Item) {
      this.items.push(item)
    },
    increaseValue (item: Item) {
      item.numberOfDrinks++
    },
    decreaseValue (item: Item) {
      if (item.numberOfDrinks > 0) {
        item.numberOfDrinks--
      }
    }
  }
})
