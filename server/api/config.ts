
export default eventHandler(() => {
  const numberOfDrinksSmall = [2, 4, 6]
  const numberOfDrinksMedium = [4, 6, 8]
  const numberOfDrinksLarge = [6, 8, 12]
  const config = [
    {
      name: 'Маленький',
      numberOfDrinks: numberOfDrinksSmall,
      img: 'https://klike.net/uploads/posts/2019-07/1562054125_5.jpg'
    },
    {
      name: 'Стандартный',
      numberOfDrinks: numberOfDrinksMedium,
      img: 'https://www.dairyreporter.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/dairyreporter.com/news/ingredients/the-popularity-of-prebiotics-in-dairy/10920445-1-eng-GB/The-popularity-of-prebiotics-in-dairy.jpg'
    },
    {
      name: 'Большой',
      numberOfDrinks: numberOfDrinksLarge,
      img: 'https://media.istockphoto.com/id/1363117198/photo/a-cup-of-iced-latte-coffee-with-ice-cubes-placed-on-a-wooden-table-in-a-coffee-shop.jpg?s=612x612&w=0&k=20&c=_STAy4LixVchJvobW-Afuc04eYhWs2bkRlA5xnQYsqE='
    }
  ]

  return config
})
