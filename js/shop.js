import { storeStatus } from './store-status.js'
import { buy } from './shop/buy.js'

const itemButtons = document.querySelectorAll('[data-product-id]')
itemButtons.forEach((itemButton) => {
  const id = Number(itemButton.dataset.productId)
  itemButton.addEventListener('click', () => {
    buy(id)
  })
})

// Exercise 2
const cleanCart = () => {}

// Exercise 3
const calculateTotal = () => {
  // Calculate total price of the cart using the "cartList" array
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

console.log(storeStatus.cart)
