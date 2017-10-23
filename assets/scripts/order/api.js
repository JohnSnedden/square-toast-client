'use strict'

const config = require('../config.js')
const store = require('../store.js')

const orderCreate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const orderList = function () {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const orderGet = function (orderId) {
  return $.ajax({
    url: config.apiOrigin + '/orders/' + orderId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const orderUpdate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/orders/' + store.order.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const orderDestroy = function (orderId) {
  return $.ajax({
    url: config.apiOrigin + '/orders/' + orderId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  orderCreate,
  orderList,
  orderGet,
  orderUpdate,
  orderDestroy
}
