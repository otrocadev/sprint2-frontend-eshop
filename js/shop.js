import { storeStatus } from './store-status.js'
import { buy } from './shop/buy.js'
import { applyPromotionsCart } from './shop/applyPromotionsCart.js'
import { printCart } from './shop/printCard.js'

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

// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {}

const open_modal = () => {
  printCart()
}

buy(1)
buy(1)
buy(1)
buy(1)
buy(1)
buy(1)
buy(1)
buy(1)
buy(1)
buy(2)
buy(3)
buy(3)
buy(6)
buy(6)
buy(7)
buy(7)

calculateTotal()
console.log(storeStatus.cart)
console.log(storeStatus.total)

applyPromotionsCart()
console.log(storeStatus.subTotalWithDiscount)

printCart()
