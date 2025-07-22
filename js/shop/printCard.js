import { storeStatus } from '../store-status.js'
import { applyPromotionsCart } from './applyPromotionsCart.js'
import {
  addProductToCart,
  reduceProductFromCart,
  deleteExistingProduct,
  calculateTotal,
} from './manageCart.js'

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

const createAmountComponent = (productContainer, productid, amount) => {
  const ammountContainer = document.createElement('div')
  const amountManager = document.createElement('div')
  const subTrackButton = document.createElement('button')
  const addButton = document.createElement('button')
  const amountText = document.createElement('span')
  const binButton = document.createElement('button')
  const binIcon = document.createElement('i')

  amountManager.className = 'cart-product-amount'
  subTrackButton.className = 'subtrack-button-amount'
  addButton.className = 'add-button-amount'
  ammountContainer.className = 'ammount-container'
  binButton.className = 'bin-button'
  binIcon.className = 'fa-solid fa-trash'

  subTrackButton.innerText = '-'
  addButton.innerText = '+'
  amountText.innerText = amount

  amountManager.appendChild(subTrackButton)
  amountManager.appendChild(amountText)
  amountManager.appendChild(addButton)
  binButton.appendChild(binIcon)

  ammountContainer.appendChild(amountManager)
  ammountContainer.appendChild(binButton)

  productContainer.appendChild(ammountContainer)

  addButton.addEventListener('click', () => {
    addProductToCart(productid)
    printCart()
  })

  subTrackButton.addEventListener('click', () => {
    reduceProductFromCart(productid)
    printCart()
  })

  binButton.addEventListener('click', () => {
    reduceProductFromCart(productid, true)
    printCart()
  })
}

const createProductHTMLELements = (container, product) => {
  const isDiscounted = !!product.discountedPrice
  const priceToUse = isDiscounted ? product.discountedPrice : product.price
  const productPrice = priceToUse * product.amount

  createHTMLElement('h3', container, product.name)

  if (isDiscounted) {
    createHTMLElement(
      'span',
      container,
      '$' + product.price.toFixed(2),
      'cart-discounted-price'
    )
  }

  createHTMLElement(
    'span',
    container,
    '$' + priceToUse.toFixed(2),
    'cart-product-price'
  )

  createAmountComponent(container, product.id, product.amount)
  createHTMLElement(
    'span',
    container,
    'Subtotal: $' + productPrice.toFixed(2),
    'total-product-price'
  )
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
  applyPromotionsCart()
  calculateTotal()

  storeStatus.cart.forEach((product) => {
    listProductOnCheckout(product, cartList)
  })

  const totalProducts = document.getElementById('articles-count')
  totalProducts.innerText = storeStatus.itemsCount

  const totalPrice = document.getElementById('total-amount-value')
  totalPrice.innerText = '$' + storeStatus.total.toFixed(2)
}
