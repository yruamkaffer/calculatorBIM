import { Modal } from './modal.js'

export function notNumber(value) {
  return isNaN(value) || value == ''
}

export function calculateBMI(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(1)
}

export function displayResultMessage(result) {
  const message = `Your BIM score: ${result}`
  Modal.message.innerText = message
  Modal.open()
}
