import { addProductToCart, cleanCart } from './shop/manageCart.js'
import { printCart } from './shop/printCard.js'

const itemButtons = document.querySelectorAll('[data-product-id]')
itemButtons.forEach((itemButton) => {
  const id = Number(itemButton.dataset.productId)
  itemButton.addEventListener('click', () => {
    addProductToCart(id)
  })
})

const cartModal = document.getElementById('cartModal')

const open_modal = () => {
  cartModal.classList.remove('inactive')
  cartModal.classList.add('active')
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
  printCart()
})
