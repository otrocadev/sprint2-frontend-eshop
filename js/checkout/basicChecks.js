export const notEmpty = (value) => {
  return value.trim() !== ''
}

export const isMoreThanChars = (value, lenght = 3) => {
  return value.length >= lenght
}

export const isOnlyLetters = (value) => {
  return /^[a-zA-Z]+$/.test(value)
}

export const isOnlyNumbers = (value) => {
  return /^[0-9]+$/.test(value)
}

export const isAlphanumeric = (value) => {
  const hasNumbers = /[0-9]/.test(value)
  const hasLetters = /[a-zA-Z]/.test(value)
  return hasNumbers && hasLetters
}
