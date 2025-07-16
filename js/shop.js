import { storeStatus } from './store-status.js'
import { buy } from './shop/buy.js'
import { applyPromotionsCart } from './shop/applyPromotionsCart.js'

const itemButtons = document.querySelectorAll('[data-product-id]')
itemButtons.forEach((itemButton) => {
  const id = Number(itemButton.dataset.productId)
  itemButton.addEventListener('click', () => {
    buy(id)
  })
})

export const cleanCart = () => (storeStatus.cart.length = 0)

export const calculateTotal = (discounted = false) => {
  storeStatus.cart.forEach((product) => {
    if (!discounted) {
      const productTotalPrice = product.price * product.amount
      storeStatus.total = storeStatus.total + productTotalPrice
      return
    }
    if (discounted) {
      storeStatus.subTotalWithDiscount = 0
      if (product.discountedPrice) {
        console.log('detecto que hi ha un discountedPrice')
        const productTotalPrice = product.discountedPrice * product.amount
        storeStatus.subTotalWithDiscount =
          storeStatus.subTotalWithDiscount + productTotalPrice
      } else {
        const productTotalPrice = product.price * product.amount
        storeStatus.subTotalWithDiscount =
          storeStatus.subTotalWithDiscount + productTotalPrice
      }
    }
  })
}

// Exercise 5
const printCart = () => {
  const newElement = document.createElement('p')
  const newElementText = document.createTextNode('HOLAAAAAAA')
  newElement.appendChild(newElementText)

  const element = document.getElementById('cart_list')
  element.appendChild(newElement)
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
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)
buy(3)

calculateTotal()
console.log(storeStatus.cart)
console.log(storeStatus.total)

applyPromotionsCart()
console.log(storeStatus.subTotalWithDiscount)

printCart()
