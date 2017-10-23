'use strict'

const resetAlert = function () {
  $('#message').removeClass('alert-primary')
  $('#message').removeClass('alert-secondary')
  $('#message').removeClass('alert-success')
  $('#message').removeClass('alert-danger')
  $('#message').removeClass('alert-warning')
  $('#message').removeClass('alert-info')
  $('#message').removeClass('alert-light')
  $('#message').removeClass('alert-dark')
  $('#message').text('.')
}

const showAlert = function (type, text) {
  resetAlert()
  $('#message').removeClass('hidden')
  $('#message').addClass(type)
  $('#message').text(text)
}

const hideAlert = function () {
  resetAlert()
  // currently not using 'hidden' class because it makes the UI jumpy
  // $('#message').addClass('hidden')
}

module.exports = {
  showAlert,
  hideAlert
}
