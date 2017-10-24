'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store.js')
const api = require('./api')
const ui = require('./ui')

const onBtnOrderNew = function () {
  ui.showOrderNew()
}

const onBtnOrderList = function () {
  ui.showOrderList()
  onOrderList()
}

const onBtnOrderGet = function () {
  ui.showOrderGet()
}

const onBtnOrderSearch = function (event) {
  event.preventDefault()
  const orderId = $('#order-edit-input-id').val()
  api.orderGet(orderId)
    .then(ui.orderGetSuccess)
    .catch(ui.orderGetFailure)
}

const onOrderCreate = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.orderCreate(data)
    .then(ui.orderCreateSuccess)
    .catch(ui.orderCreateFailure)
}

const onOrderList = function (event) {
  ui.orderListClear()
  api.orderList()
    .then(ui.orderListSuccess)
    .then(function () {
      $('.clickable-row').on('click', onOrderListClick)
    })
    .catch(ui.orderListFailure)
}

const onOrderListClick = function () {
  const orderId = event.target.parentNode.getAttribute('data-id')
  ui.showOrderGet()
  $('#order-edit-input-id').val(orderId)
  api.orderGet(orderId)
    .then(ui.orderGetSuccess)
    .catch(ui.orderGetFailure)
}

const onOrderUpdate = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.orderUpdate(data)
    .then(ui.orderUpdateSuccess)
    .catch(ui.orderUpdateFailure)
}

const onOrderStatusUpdate = function (event) {
  const newStatus = event.target.getAttribute('data-status')
  const data = {
    'order': {
      'status': newStatus
    }
  }
  api.orderUpdate(data)
    .then(ui.orderUpdateSuccess)
    .catch(ui.orderUpdateFailure)
}

const onOrderDestroy = function (event) {
  api.orderDestroy(store.order.id)
    .then(ui.orderDestroySuccess)
    .catch(ui.orderDestroyFailure)
}

const addHandlers = function () {
  $('#btn-order-new').on('click', onBtnOrderNew)
  $('#btn-order-list').on('click', onBtnOrderList)
  $('#order-edit-input').on('submit', onBtnOrderSearch)
  $('#btn-order-get').on('click', onBtnOrderGet)
  $('#order-create').on('submit', onOrderCreate)
  $('#order-list').on('submit', onOrderList)
  $('#order-update').on('submit', onOrderUpdate)
  $('#order-delete-confirm').on('click', onOrderDestroy)
  $('.update-status').on('click', onOrderStatusUpdate)
  $('.order-edit-status').attr('disabled', true)
}

module.exports = {
  addHandlers
}
