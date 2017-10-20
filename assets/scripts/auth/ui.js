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
  $('#btn-bar').removeClass('hidden')
  $('#nav-user-dropdown').removeClass('hidden')
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure
}
