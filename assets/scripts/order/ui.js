'use strict'

const showOrdersTemplate = require('../templates/order-listing.handlebars')
const store = require('../store.js')
const sharedUi = require('../shared/ui.js')

const showOrderNew = function () {
  sharedUi.hideAlert()
  // show appropriate div / hide all others
  $('#order-create-div').removeClass('hidden')
  $('#order-list-div').addClass('hidden')
  $('#order-edit-master-div').addClass('hidden')
  // adjust highlighting of section buttons
  $('#btn-order-new').addClass('btn-primary')
  $('#btn-order-list').removeClass('btn-primary')
  $('#btn-order-get').removeClass('btn-primary')
  // clear input fields
  $('#order-create-date').val('')
  $('#order-create-description').val('')
  $('#order-create-price').val('')
  // default order date on new order form to today's date
  document.getElementById('order-create-date').valueAsDate = new Date()
  // focus cursor in correct field for good UX
  $('#order-create-description').focus()
}

const showOrderList = function () {
  sharedUi.hideAlert()
  // show appropriate div / hide all others
  $('#order-create-div').addClass('hidden')
  $('#order-list-div').removeClass('hidden')
  $('#order-edit-master-div').addClass('hidden')
  // adjust highlighting of section buttons
  $('#btn-order-new').removeClass('btn-primary')
  $('#btn-order-list').addClass('btn-primary')
  $('#btn-order-get').removeClass('btn-primary')
}

const showOrderGet = function () {
  sharedUi.hideAlert()
  // show appropriate div / hide all others
  $('#order-create-div').addClass('hidden')
  $('#order-list-div').addClass('hidden')
  $('#order-edit-master-div').removeClass('hidden')
  // adjust highlighting of section buttons
  $('#btn-order-new').removeClass('btn-primary')
  $('#btn-order-list').removeClass('btn-primary')
  $('#btn-order-get').addClass('btn-primary')
  // reset this screens content
  $('#order-edit-input-id').val('')
  $('#order-edit-div').addClass('hidden')
}

const orderCreateSuccess = function (data) {
  sharedUi.showAlert('alert-success', 'Order # ' + data.order.id + ' created!')
  // clear user entered values from input fields ready for next entry
  $('#order-create-description').val('')
  $('#order-create-price').val('')
  $('#order-create-description').focus()
}

const orderCreateFailure = function () {
  sharedUi.showAlert('alert-danger', 'Error creating order')
}

const orderListSuccess = function (data) {
  sharedUi.showAlert('alert-info', 'Order list generated successfully')
  const showOrdersHtml = showOrdersTemplate({ orders: data.orders })
  $('#order-list-content').append(showOrdersHtml)
}

const orderListClear = function () {
  sharedUi.hideAlert()
  $('#order-list-content').empty()
}

const orderListFailure = function () {
  sharedUi.showAlert('alert-danger', 'Error getting order list')
}

const orderGetSuccess = function (data) {
  sharedUi.showAlert('alert-success', 'Order # ' + data.order.id + ' located!')
  store.order = data.order
  // show order form
  $('#order-edit-div').removeClass('hidden')
  // fill order edit form fields with order data from db
  $('#order-edit-date').val(data.order.date)
  $('#order-edit-status').val(data.order.status)
  $('#order-edit-description').val(data.order.description)
  $('#order-edit-price').val(data.order.price)
}

const orderGetFailure = function () {
  sharedUi.showAlert('alert-danger', 'Unable to open order')
  store.order = null
  // hide order form
  $('#order-edit-div').addClass('hidden')
  // clear values in order edit form
  $('#order-edit-date').val('')
  $('#order-edit-status').val('')
  $('#order-edit-description').val('')
  $('#order-edit-price').val('')
}

const orderUpdateSuccess = function (data) {
  sharedUi.showAlert('alert-success', 'Order # ' + data.order.id + ' updated!')
  // hide order edit form
  $('#order-edit-div').addClass('hidden')
  // clear value in order search input
  $('#order-edit-input-id').val('')
  // clear values in order edit form fields
  $('#order-edit-date').val('')
  $('#order-edit-status').val('')
  $('#order-edit-description').val('')
  $('#order-edit-price').val('')
  // position cursor in search input fdor good UX
  $('#order-edit-input-id').focus()
}

const orderUpdateFailure = function () {
  sharedUi.showAlert('alert-danger', 'Error updating order')
}

const orderDestroySuccess = function () {
  sharedUi.showAlert('alert-success', 'Order # ' + store.order.id + ' deleted!')
  store.order = null
  // hide delete confirmation modal
  $('#orderDeleteConfirmation').modal('hide')
  // hide order edit form
  $('#order-edit-div').addClass('hidden')
  // clear value in order search input
  $('#order-edit-input-id').val('')
  // clear values in order edit form fields
  $('#order-edit-date').val('')
  $('#order-edit-status').val('')
  $('#order-edit-description').val('')
  $('#order-edit-price').val('')
}

const orderDestroyFailure = function () {
  const orderId = $('#order-edit-input-id').val()
  sharedUi.showAlert('alert-danger', 'Unable to delete order ' + orderId)
  // hide delete confirmation modal
  $('#orderDeleteConfirmation').modal('hide')
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
