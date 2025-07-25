import { products } from '../mocked-data/products.js'
import { storeStatus } from '../store-status.js'

const productsCount = document.getElementById('count_product')

export const updateCount = () => {
  productsCount.innerText = storeStatus.itemsCount
}

const checkOfferAmmount = (id) => {
  const product = storeStatus.cart.find((product) => product.id === id)
  if (!product.offer) return false
  else return product.offer.number
}

const addToTotalItemsCount = () => {
  storeStatus.itemsCount++
  updateCount()
}

const reduceTotalItemsCount = (amount = undefined) => {
  if (amount) {
    storeStatus.itemsCount = storeStatus.itemsCount - amount
  }
  storeStatus.itemsCount--
  updateCount()
}

const addNewProduct = (id) => {
  const productToAdd = products.find((product) => product.id === id)
  storeStatus.cart.push(productToAdd)
  storeStatus.cart.find((product) => product.id === id).amount = 1
}

export const deleteExistingProduct = (id) => {
  storeStatus.cart = storeStatus.cart.filter((product) => product.id !== id)
}

const addAmountToProduct = (id) => {
  storeStatus.cart.find((product) => product.id === id).amount += 1
}

const reduceAmountOfProduct = (id) => {
  const product = storeStatus.cart.find((product) => product.id === id)
  product.amount -= 1
  const offerAmmount = checkOfferAmmount(id)
  if (!offerAmmount) return
  else {
    if (product.amount < offerAmmount) delete product.discountedPrice
  }
}

export const addProductToCart = (id) => {
  const isProductOnCart = storeStatus.cart.find((product) => product.id === id)
  isProductOnCart ? addAmountToProduct(id) : addNewProduct(id)
  addToTotalItemsCount()
}

export const reduceProductFromCart = (id, del = false) => {
  let totalItems = storeStatus.cart.find((product) => product.id === id).amount
  const hasMoreThanOne = totalItems > 1

  if (!hasMoreThanOne || del) {
    deleteExistingProduct(id)
    reduceTotalItemsCount(totalItems - 1)
  } else {
    reduceAmountOfProduct(id)
    reduceTotalItemsCount()
  }
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

export const cleanCart = () => {
  storeStatus.cart.length = 0
  storeStatus.itemsCount = 0
  storeStatus.total = 0
  updateCount()
}
