'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

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

const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  // $('#change-password').on('submit', onChangePassword)

  // $('#new-user').click(onNewUser)
  $('#new-user').on('click', onNewUser)
  // $('#new-user-cancel').click(onNewUserCancel)
  $('#new-user-cancel').on('click', onNewUserCancel)

  // $('#nav-user-dropdown-sign-out').click(onSignOut)
  // $('#nav-user-dropdown-change-password').click(onChangePasswordBtn)
  // $('#change-password-cancel').click(onChangePasswordCancel)
}

module.exports = {
  addHandlers
}
