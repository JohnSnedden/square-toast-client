'use strict'

const showOrdersTemplate = require('../templates/order-listing.handlebars')
const store = require('../store.js')

const showOrderNew = function () {
  $('#message').text('-')
  $('#order-create-div').removeClass('hidden')
  $('#order-list-div').addClass('hidden')
  $('#order-edit-master-div').addClass('hidden')
  $('#btn-order-new').addClass('btn-primary')
  $('#btn-order-list').removeClass('btn-primary')
  $('#btn-order-get').removeClass('btn-primary')
  $('#order-create-description').focus()
}

const showOrderList = function () {
  $('#message').text('-')
  $('#order-create-div').addClass('hidden')
  $('#order-list-div').removeClass('hidden')
  $('#order-edit-master-div').addClass('hidden')
  $('#btn-order-new').removeClass('btn-primary')
  $('#btn-order-list').addClass('btn-primary')
  $('#btn-order-get').removeClass('btn-primary')
}

const showOrderGet = function () {
  $('#message').text('-')
  $('#order-create-div').addClass('hidden')
  $('#order-list-div').addClass('hidden')
  $('#order-edit-master-div').removeClass('hidden')
  $('#btn-order-new').removeClass('btn-primary')
  $('#btn-order-list').removeClass('btn-primary')
  $('#btn-order-get').addClass('btn-primary')

  $('#order-edit-input-id').val('')
  $('#order-edit-div').addClass('hidden')
}

// default order date on new order form to today's date
document.getElementById('order-create-date').valueAsDate = new Date()

const orderCreateSuccess = function (data) {
  $('#message').text('Order ' + data.order.id + ' created!')
  $('#order-create-description').val('')
  $('#order-create-price').val('')
  $('#order-create-description').focus()
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

const orderGetSuccess = function (data) {
  $('#message').text('Order ' + data.order.id + ' located')
  store.order = data.order
  $('#order-edit-div').removeClass('hidden')
  $('#order-edit-date').val(data.order.date)
  $('#order-edit-status').val(data.order.status)
  $('#order-edit-description').val(data.order.description)
  $('#order-edit-price').val(data.order.price)
}

const orderGetFailure = function () {
  $('#message').text('Unable to find order ' + store.order.id)
  store.order = null
  $('#order-edit-div').addClass('hidden')
  $('#order-edit-date').val('')
  $('#order-edit-status').val('')
  $('#order-edit-description').val('')
  $('#order-edit-price').val('')
}

const orderUpdateSuccess = function (data) {
  $('#message').text('Order ' + data.order.id + ' updated!')
  $('#order-edit-input-id').val('')
  $('#order-edit-date').val('')
  $('#order-edit-status').val('')
  $('#order-edit-description').val('')
  $('#order-edit-price').val('')
  $('#order-edit-div').addClass('hidden')
  $('#order-edit-input-id').focus()
}

const orderUpdateFailure = function () {
  $('#message').text('Error updating order')
}

const orderDestroySuccess = function () {
  $('#message').text('Order ' + store.order.id + ' deleted')
  store.order = null
  $('#order-edit-div').addClass('hidden')
  $('#order-edit-input-id').val('')
  $('#order-edit-date').val('')
  $('#order-edit-status').val('')
  $('#order-edit-description').val('')
  $('#order-edit-price').val('')
  $('#orderDeleteConfirmation').modal('hide')
}

const orderDestroyFailure = function () {
  const orderId = $('#order-edit-input-id').val()
  $('#message').text('Unable to delete order ' + orderId)
}

module.exports = {
  showOrderNew,
  showOrderList,
  showOrderGet,
  orderCreateSuccess,
  orderCreateFailure,
  orderListSuccess,
  orderListClear,
  orderListFailure,
  orderGetSuccess,
  orderGetFailure,
  orderUpdateSuccess,
  orderUpdateFailure,
  orderDestroySuccess,
  orderDestroyFailure
}
