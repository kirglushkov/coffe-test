export type Item = {
  numberOfDrinks: number
  size: string,
}

export const useItems = () => useState<Item[]>('items', () => [])

// increase or deacrese useItems
export const useItem = () => {
  const items = useItems()
  return (item: Item) => {
    items.value.push(item)
  }
}
