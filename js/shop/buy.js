import { products } from '../mocked-data/products.js'
import { storeStatus } from '../store-status.js'

const addToTotalItemsCount = () => {
  storeStatus.itemsCount++
  updateCount()
}

const productsCount = document.getElementById('count_product')
const updateCount = () => {
  productsCount.innerText = storeStatus.itemsCount
}

const addNewProduct = (id) => {
  const productToAdd = products.find((product) => product.id === id)
  storeStatus.cart.push(productToAdd)
  storeStatus.cart.find((product) => product.id === id).amount = 1
}

const addAmountToProduct = (id) => {
  storeStatus.cart.find((product) => product.id === id).amount += 1
}

export const buy = (id) => {
  const isProductOnCart = storeStatus.cart.find((product) => product.id === id)
  isProductOnCart ? addAmountToProduct(id) : addNewProduct(id)
  addToTotalItemsCount()
}
