'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onOrderCreate = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.orderCreate(data)
    .then(ui.orderCreateSuccess)
    .catch(ui.orderCreateFailure)
}

const addHandlers = function () {
  $('#order-create').on('submit', onOrderCreate)
}

module.exports = {
  addHandlers
}
