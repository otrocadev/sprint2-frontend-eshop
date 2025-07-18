import { storeStatus } from '../store-status.js'

const cartList = document.getElementById('modal-products-list')

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
  let productPrice = 0

  createHTMLElement('h3', container, product.name)
  if (!product.discountedPrice) {
    productPrice = product.price * product.amount
    createHTMLElement(
      'span',
      container,
      '$' + product.price.toFixed(2),
      'cart-product-price'
    )
  } else {
    productPrice = product.discountedPrice * product.amount
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
  createHTMLElement('span', container, 'Subtotal: $' + productPrice.toFixed(2))
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

const deleteAllCheckoutProducts = () => {
  const products = Array.from(cartList.children)
  products.forEach((product) => {
    if (product.id !== 'clean-cart-button') {
      product.remove()
    }
  })
}

export const printCart = () => {
  deleteAllCheckoutProducts()

  storeStatus.cart.forEach((product) => {
    listProductOnCheckout(product, cartList)
  })

  const totalProducts = document.getElementById('articles-count')
  totalProducts.innerText = storeStatus.itemsCount

  const totalPrice = document.getElementById('total-amount-value')
  totalPrice.innerText = '$' + storeStatus.total.toFixed(2)
}
