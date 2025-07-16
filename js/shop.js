import { storeStatus } from './store-status.js'
import { buy } from './shop/buy.js'

const itemButtons = document.querySelectorAll('[data-product-id]')
itemButtons.forEach((itemButton) => {
  const id = Number(itemButton.dataset.productId)
  itemButton.addEventListener('click', () => {
    buy(id)
  })
})

export const cleanCart = () => (storeStatus.cart.length = 0)

export const calculateTotal = () => {
  storeStatus.cart.forEach((product) => {
    const productsTotalPrice = product.price * product.amount
    storeStatus.total = storeStatus.total + productsTotalPrice
  })
}

// Exercise 4
const applyPromotionsCart = () => {
  // Apply promotions to each item in the array "cart"
}

// Exercise 5
const printCart = () => {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {}

const open_modal = () => {
  printCart()
}

buy(3)
buy(3)
buy(3)
buy(3)

calculateTotal()

console.log(storeStatus.cart)
console.log(storeStatus.total)
