import { storeStatus } from './store-status.js'
import { buy, updateCount } from './shop/buy.js'
import { applyPromotionsCart } from './shop/applyPromotionsCart.js'
import { printCart } from './shop/printCard.js'

const itemButtons = document.querySelectorAll('[data-product-id]')
itemButtons.forEach((itemButton) => {
  const id = Number(itemButton.dataset.productId)
  itemButton.addEventListener('click', () => {
    buy(id)
  })
})

export const cleanCart = () => {
  storeStatus.cart.length = 0
  storeStatus.itemsCount = 0
  storeStatus.total = 0
  updateCount()
  printCart()
}

export const calculateTotal = () => {
  storeStatus.total = 0

  storeStatus.cart.forEach((product) => {
    const priceToUse = product.discountedPrice
      ? product.discountedPrice
      : product.price
    const productTotalPrice = priceToUse * product.amount
    storeStatus.total += productTotalPrice
  })
}

// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {}

const cartModal = document.getElementById('cartModal')

const open_modal = () => {
  cartModal.classList.remove('inactive')
  cartModal.classList.add('active')
  calculateTotal()
  applyPromotionsCart()
  printCart()
}

const close_modal = () => {
  cartModal.classList.remove('active')
  cartModal.classList.add('inactive')
}

const cartButton = document.getElementById('cart-button')
cartButton.addEventListener('click', (e) => open_modal())

const closeButton = document.getElementById('modal-close-button')
closeButton.addEventListener('click', (e) => close_modal())

const cleanCartButton = document.getElementById('clean-cart-button')
cleanCartButton.addEventListener('click', (e) => {
  cleanCart()
})
