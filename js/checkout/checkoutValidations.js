import {
  notEmpty,
  isMoreThanChars,
  isOnlyLetters,
  isOnlyNumbers,
  isAlphanumeric,
} from './basicChecks.js'

export const validateName = (name) => {
  if (!notEmpty(name)) {
    return false
  }
  name = name.trim()
  return isMoreThanChars(name, 2) && isOnlyLetters(name)
}

export const validateSurname = (surname) => {
  if (!notEmpty(surname)) {
    return false
  }
  surname = surname.trim()
  return isMoreThanChars(surname) && isOnlyLetters(surname)
}

export const validateEmail = (email) => {
  if (!notEmpty(email)) {
    return false
  }
  emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailValidationRegex.test(email.trim())
}

export const validatePassword = (password) => {
  if (!notEmpty(password)) {
    return false
  }
  password = password.trim()
  return isAlphanumeric(password) && isMoreThanChars(password, 8)
}

export const validateAdress = (adress) => {
  return notEmpty(adress)
}

export const validatePhone = (phone) => {
  if (!notEmpty(phone)) {
    return false
  }
  return isOnlyNumbers(phone) && isMoreThanChars(phone, 9)
}
