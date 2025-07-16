import { storeStatus } from '../store-status.js'

const createHTMLElement = (htmlElement, parentElement, textInside) => {
  const newElement = document.createElement(htmlElement)
  const newElementText = document.createTextNode(textInside)
  newElement.appendChild(newElementText)
  parentElement.appendChild(newElement)
}

const listProductOnCheckout = (product, cartList) => {
  const totalPrice = product.price + product.amount
  const newProductTable = document.createElement('tr')
  cart_list.appendChild(newProductTable)
  createHTMLElement('tr', cartList, product.name)
  createHTMLElement('td', cartList, '$' + product.price)
  createHTMLElement('td', cartList, product.amount)
  createHTMLElement('td', cartList, '$' + totalPrice)
  if (product.discountedPrice)
    createHTMLElement('td', cartList, '$' + product.discountedPrice)
}

export const printCart = () => {
  const cart_list = document.getElementById('cart_list')
  storeStatus.cart.forEach((product) => {
    listProductOnCheckout(product, cart_list)
  })

  const totalPrice = document.getElementById('total_price')
  totalPrice.innerText = storeStatus.total
}
