'use strict'

// default order date to today's date
document.getElementById('order-create-date').valueAsDate = new Date()

const orderCreateSuccess = function (data) {
  $('#message').text('Order created successfully')
}

const orderCreateFailure = function () {
  $('#message').text('Error creating order')
}

module.exports = {
  orderCreateSuccess,
  orderCreateFailure
}
