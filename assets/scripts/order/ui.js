'use strict'

const showOrdersTemplate = require('../templates/order-listing.handlebars')

const showOrderNew = function () {
  $('#message').text('')
  $('#order-create-div').removeClass('hidden')
  $('#order-list-div').addClass('hidden')
  $('#btn-order-new').addClass('btn-primary')
  // $('#btn-order-new').removeClass('btn-light')
  $('#btn-order-list').removeClass('btn-primary')
  // $('#btn-order-list').addClass('btn-light')
}

const showOrderList = function () {
  $('#message').text('')
  $('#order-create-div').addClass('hidden')
  $('#order-list-div').removeClass('hidden')
  $('#btn-order-new').removeClass('btn-primary')
  // $('#btn-order-new').addClass('btn-light')
  $('#btn-order-list').addClass('btn-primary')
  // $('#btn-order-list').removeClass('btn-light')
}

// default order date on new order form to today's date
document.getElementById('order-create-date').valueAsDate = new Date()

const orderCreateSuccess = function (data) {
  $('#message').text('Order created successfully')
}

const orderCreateFailure = function () {
  $('#message').text('Error creating order')
}

const orderListSuccess = function (data) {
  $('#message').text('Order list generated successfully')
  const showOrdersHtml = showOrdersTemplate({ orders: data.orders })
  $('#order-list-content').append(showOrdersHtml)
}

const orderListClear = function () {
  $('#order-list-content').empty()
}

const orderListFailure = function () {
  $('#message').text('Error getting order list')
}

module.exports = {
  showOrderNew,
  showOrderList,
  orderCreateSuccess,
  orderCreateFailure,
  orderListSuccess,
  orderListClear,
  orderListFailure
}
