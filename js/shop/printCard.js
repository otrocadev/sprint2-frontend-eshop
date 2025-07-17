import { storeStatus } from '../store-status.js'

const createHTMLElement = (
  htmlElement,
  parentElement,
  textInside,
  className = null
) => {
  const newElement = document.createElement(htmlElement)
  const newElementText = document.createTextNode(textInside)
  newElement.appendChild(newElementText)
  if (className) {
    newElement.classList.add(className)
  }
  parentElement.appendChild(newElement)
}

const createProductHTMLELements = (container, product) => {
  const totalPrice = product.price * product.amount
  createHTMLElement('h3', container, product.name)
  if (!product.discountedPrice) {
    createHTMLElement(
      'span',
      container,
      '$' + product.price.toFixed(2),
      'cart-product-price'
    )
  } else {
    createHTMLElement(
      'span',
      container,
      '$' + product.price.toFixed(2),
      'cart-discounted-price'
    )
    createHTMLElement(
      'span',
      container,
      '$' + product.discountedPrice.toFixed(2),
      'cart-product-price'
    )
  }
  createHTMLElement('span', container, product.amount)
  createHTMLElement('span', container, 'Subtotal: $' + totalPrice.toFixed(2))
}

const listProductOnCheckout = (product, cartList) => {
  const newProductElement = document.createElement('div')
  newProductElement.className = 'cart-product-card'
  cartList.appendChild(newProductElement)

  const newProductImageElement = document.createElement('img')
  newProductImageElement.src = './images/products/' + product.id + '.png'
  newProductElement.appendChild(newProductImageElement)

  const newProductTextElement = document.createElement('div')
  newProductTextElement.className = 'cart-product-card-text'
  newProductElement.appendChild(newProductTextElement)

  createProductHTMLELements(newProductTextElement, product)
}

export const printCart = () => {
  const cartList = document.getElementById('modal-products-list')
  storeStatus.cart.forEach((product) => {
    listProductOnCheckout(product, cartList)
  })

  const totalPrice = document.getElementById('total_price')
  totalPrice.innerText = storeStatus.total
}
