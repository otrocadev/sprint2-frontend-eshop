import { calculateTotal } from '../shop/manageCart.js'
import { storeStatus } from '../store-status.js'

const calculatediscountedPrice = (originalPrice, discount) => {
  const discountedPrice = originalPrice * ((100 - discount) / 100)
  return discountedPrice
}

export const applyPromotionsCart = () => {
  let isAnyProductDiscounted = false
  storeStatus.cart.forEach((product) => {
    if (product.offer) {
      if (product.amount >= product.offer.number) {
        isAnyProductDiscounted = true
        const discountedPrice = calculatediscountedPrice(
          product.price,
          product.offer.percent
        )
        product.discountedPrice = discountedPrice
      }
    }
    if (!isAnyProductDiscounted) return
    calculateTotal(true)
  })
}
