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
  // console.log('store.data.order is ', store.data.order)
  // store.data.order = null
  // console.log('store.data.order is ', store.data.order)
  ui.showOrderGet()
}

// const onOrderListRowBtn = function () {
//
// }

const onBtnOrderSearch = function (event) {
  // const data = getFormFields(this)
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
    // this is where I can add an action to the table items
    // .then(function () {
    //   $('.xxxxx').on('click', xxxxx)
    // })
    .catch(ui.orderListFailure)
}

const onOrderDestroy = function (event) {
  console.log('in onOrderDestroy, orderId is ', store.order.id)
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
  $('#order-delete-confirm').on('click', onOrderDestroy)
}

module.exports = {
  addHandlers
}
