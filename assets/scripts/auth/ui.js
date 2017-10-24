'use strict'

const store = require('../store.js')
const sharedUi = require('../shared/ui.js')
const orderUi = require('../order/ui.js')

const signUpSuccess = function (data) {
  sharedUi.showAlert('alert-success', 'User ' + data.user.email + ' created. Please sign in.')
  $('#sign-up-div').addClass('hidden')
  $('#sign-in-div').removeClass('hidden')
}

const signUpFailure = function () {
  sharedUi.showAlert('alert-danger', 'Error creating user')
}

const signInSuccess = function (data) {
  $('#sign-in-div').addClass('hidden')
  $('#nav-user-dropdown').removeClass('hidden')
  $('#order-btn-div').removeClass('hidden')
  store.user = data.user
  orderUi.showOrderNew()
  sharedUi.showAlert('alert-info', 'User ' + data.user.email + ' signed in.')
}

const signInFailure = function () {
  sharedUi.showAlert('alert-danger', 'Error signing in')
}

const changePasswordSuccess = function () {
  sharedUi.showAlert('alert-success', 'Password changed successfully')
  $('#change-password-div').addClass('hidden')
  $('#nav-user-dropdown-change-password').removeClass('disabled')
}

const changePasswordFailure = function () {
  sharedUi.showAlert('alert-danger', 'Error changing password')
}

const signOutSuccess = function () {
  sharedUi.showAlert('alert-info', 'User ' + store.user.email + ' signed out')
  store.user = null
  $('#nav-user-dropdown').addClass('hidden')
  $('#order-btn-div').addClass('hidden')
  $('#order-create-div').addClass('hidden')
  $('#order-list-div').addClass('hidden')
  $('#change-password-div').addClass('hidden')
  $('#sign-in-div').removeClass('hidden')
  $('#order-edit-master-div').addClass('hidden')
  $('#order-list-content').empty()
  $('#btn-order-list').removeClass('btn-primary')
  $('#btn-order-get').removeClass('btn-primary')
}

const signOutFailure = function () {
  sharedUi.showAlert('alert-danger', 'Error signing out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
