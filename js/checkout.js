import {
  validateName,
  validateSurname,
  validateEmail,
  validatePassword,
  validateAdress,
  validatePhone,
} from './checkout/checkoutValidations.js'

const submitBtn = document.getElementById('btn')
submitBtn.addEventListener('click', (event) => {
  validate()
})

const showError = (errorElement) => {
  errorElement.classList.add('visible')
}

const hideError = (errorElement) => {
  errorElement.classList.remove('visible')
}

const validate = () => {
  let error = 0

  const fName = document.getElementById('fName')
  const fLastN = document.getElementById('fLastN')
  const fEmail = document.getElementById('fEmail')
  const fPassword = document.getElementById('fPassword')
  const fAddress = document.getElementById('fAddress')
  const fPhone = document.getElementById('fPhone')

  const errorName = document.getElementById('errorName')
  const errorLastN = document.getElementById('errorLastN')
  const errorEmail = document.getElementById('errorEmail')
  const errorPassword = document.getElementById('errorPassword')
  const errorAddress = document.getElementById('errorAddress')
  const errorPhone = document.getElementById('errorPhone')

  if (validateName(fName.value)) {
    hideError(errorName)
  } else {
    showError(errorName)
    error++
  }

  if (validateSurname(fLastN.value)) {
    hideError(errorLastN)
  } else {
    showError(errorLastN)
    error++
  }

  if (validateEmail(fEmail.value)) {
    hideError(errorEmail)
  } else {
    showError(errorEmail)
    error++
  }

  if (validatePassword(fPassword.value)) {
    hideError(errorPassword)
  } else {
    showError(errorPassword)
    error++
  }

  if (validateAdress(fAddress.value)) {
    hideError(errorAddress)
  } else {
    showError(errorAddress)
    error++
  }

  if (validatePhone(fPhone.value)) {
    hideError(errorPhone)
  } else {
    showError(errorPhone)
    error++
  }

  if (error > 0) {
    alert('Please fill in all required fields.')
  } else {
    console.log(error)
    alert('Form submitted successfully')
  }
}
