'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onBtnOrderNew = function () {
  ui.showOrderNew()
}

const onBtnOrderList = function () {
  ui.showOrderList()
  onOrderList()
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

const addHandlers = function () {
  $('#btn-order-new').on('click', onBtnOrderNew)
  $('#btn-order-list').on('click', onBtnOrderList)
  $('#order-create').on('submit', onOrderCreate)
  $('#order-list').on('submit', onOrderList)
}

module.exports = {
  addHandlers
}
