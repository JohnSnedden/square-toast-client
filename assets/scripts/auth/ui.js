'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message').text('New user created, please sign in')
  $('#sign-up-div').addClass('hidden')
  $('#sign-in-div').removeClass('hidden')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  store.user = data.user
  $('#sign-in-div').addClass('hidden')
  $('#nav-user-dropdown').removeClass('hidden')
  $('#order-btn-div').removeClass('hidden')
  $('#order-list-div').removeClass('hidden')
  $('#order-create-div').removeClass('hidden')
  $('#btn-order-new').addClass('btn-primary')
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function () {
  $('#message').text('Password changed successfully')
  $('#change-password-div').addClass('hidden')
  $('#nav-user-dropdown-change-password').removeClass('disabled')
}

const changePasswordFailure = function () {
  $('#message').text('Error changing password')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#nav-user-dropdown').addClass('hidden')
  $('#order-btn-div').addClass('hidden')
  $('#order-create-div').addClass('hidden')
  $('#order-list-div').addClass('hidden')
  $('#sign-in-div').removeClass('hidden')
  $('#order-edit-master-div').addClass('hidden')
  $('#order-list-content').empty()
  $('#btn-order-list').removeClass('btn-primary')
  $('#btn-order-get').removeClass('btn-primary')
}

const signOutFailure = function () {
  $('#message').text('Error signing out')
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
