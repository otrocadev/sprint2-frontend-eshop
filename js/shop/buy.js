import { products } from '../mocked-data/products.js'
import { storeStatus } from '../store-status.js'

const addNewProduct = (id) => {
  const productToAdd = products.find((product) => product.id === id)
  storeStatus.cart.push(productToAdd)
  storeStatus.cart.find((product) => product.id === id).amount = 1
}

const addAmountToProduct = (id, amount = 1) => {
  storeStatus.cart.find((product) => product.id === id).amount += amount
}

export const buy = (id) => {
  const isProductOnCart = storeStatus.cart.find((product) => product.id === id)
  isProductOnCart ? addAmountToProduct(id) : addNewProduct(id)
}
