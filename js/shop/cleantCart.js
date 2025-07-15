import { storeStatus } from '../store-status.js'

export const cleanCart = () => (storeStatus.cart.length = 0)
