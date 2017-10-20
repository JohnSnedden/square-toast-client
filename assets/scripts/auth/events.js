'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onNewUser = function () {
  event.preventDefault()
  $('#sign-in-div').addClass('hidden')
  $('#sign-up-div').removeClass('hidden')
}

const onNewUserCancel = function () {
  event.preventDefault()
  $('#sign-up-div').addClass('hidden')
  $('#sign-in-div').removeClass('hidden')
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePasswordBtn = function () {
  event.preventDefault()
  $('#change-password-div').removeClass('hidden')
  $('#nav-user-dropdown-change-password').addClass('disabled')
}

const onChangePasswordCancel = function () {
  event.preventDefault()
  $('#nav-user-dropdown-change-password').removeClass('disabled')
  $('#change-password-div').addClass('hidden')
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('#nav-user-dropdown-change-password').removeClass('disabled')
}

const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)

  $('#new-user').on('click', onNewUser)
  $('#new-user-cancel').on('click', onNewUserCancel)
  $('#sign-up').on('submit', onSignUp)

  $('#nav-user-dropdown-change-password').on('click', onChangePasswordBtn)
  $('#change-password-cancel').on('click', onChangePasswordCancel)
  $('#change-password').on('submit', onChangePassword)

  $('#nav-user-dropdown-sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
