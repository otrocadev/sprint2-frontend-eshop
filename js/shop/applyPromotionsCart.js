import { storeStatus } from '../store-status.js'

const calculatediscountedPrice = (amount, originalPrice, discount) => {
  const discountedPrice = amount * originalPrice * (discount / 100)
  return discountedPrice
}

export const applyPromotionsCart = () => {
  storeStatus.cart.forEach((product) => {
    if (product.offer) {
      if (product.amount >= product.offer.number) {
        const discountedPrice = calculatediscountedPrice(
          product.amount,
          product.price,
          product.offer.percent
        )
        storeStatus.subTotalWithDiscount = storeStatus.total
        storeStatus.subTotalWithDiscount =
          storeStatus.subTotalWithDiscount - discountedPrice
      }
    }
    return
  })
}
