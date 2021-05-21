/* global $, PrototypeKit */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  PrototypeKit.modules.start()
  window.GOVUKFrontend.initAll()

  if (document.querySelector('#other-type-of-session')) {
    window.accessibleAutocomplete.enhanceSelectElement({
      selectElement: document.querySelector('#other-type-of-session')
    })
  }

  $('.time-field').timepicker({ minTime: '9:00AM', maxTime: '4:45PM', step: 15 })
})
