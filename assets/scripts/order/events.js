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

const onBtnOrderPos = function () {
  ui.showOrderPos()
}

const onPosButtonPress = function (event) {
  const desc = event.target.getAttribute('data-description')
  const price = event.target.getAttribute('data-price')
  ui.posBtnPress(desc, price)
}

const onPosButtonClear = function () {
  ui.posButtonClear()
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

const onOrderCreatePos = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.orderCreate(data)
    .then(ui.orderCreatePosSuccess)
    .catch(ui.orderCreatePosFailure)
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
  $('#btn-order-pos').on('click', onBtnOrderPos)
  $('#order-create').on('submit', onOrderCreate)
  $('#order-create-pos-lhs').on('submit', onOrderCreatePos)
  $('#order-list').on('submit', onOrderList)
  $('#order-update').on('submit', onOrderUpdate)
  $('#order-delete-confirm').on('click', onOrderDestroy)
  $('.update-status').on('click', onOrderStatusUpdate)
  $('.pos-btn-item').on('click', onPosButtonPress)
  $('#order-pos-btn-clear').on('click', onPosButtonClear)
}

module.exports = {
  addHandlers
}
