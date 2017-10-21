'use strict'

const config = require('../config.js')
const store = require('../store.js')

const orderCreate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
      // ContentType: 'application/json'
    },
    data
  })
}

module.exports = {
  orderCreate
}
