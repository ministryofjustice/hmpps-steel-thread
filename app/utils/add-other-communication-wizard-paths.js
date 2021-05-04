const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function addOtherCommunicationWizardPaths (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId

  var paths = [
    // Phone
    `/cases/${CRN}/communication/add`,
    `/add-phone-call/${CRN}/${sessionId}/new`,
    `/add-phone-call/${CRN}/${sessionId}/receiver`,
    `/add-phone-call/${CRN}/${sessionId}/when`,
    `/add-phone-call/${CRN}/${sessionId}/details`,
    `/add-phone-call/${CRN}/${sessionId}/sensitive`,
    `/add-phone-call/${CRN}/${sessionId}/check`,
    `/add-phone-call/${CRN}/${sessionId}/confirmation`,
    `/cases/${CRN}/communication`,

    // Email
    `/cases/${CRN}/communication/add`,
    `/add-email/${CRN}/${sessionId}/new`,
    `/add-email/${CRN}/${sessionId}/receiver`,
    `/add-email/${CRN}/${sessionId}/when`,
    `/add-email/${CRN}/${sessionId}/details`,
    `/add-email/${CRN}/${sessionId}/sensitive`,
    `/add-email/${CRN}/${sessionId}/check`,
    `/add-email/${CRN}/${sessionId}/confirmation`,
    `/cases/${CRN}/communication`,

    // Text
    `/cases/${CRN}/communication/add`,
    `/add-text/${CRN}/${sessionId}/new`,
    `/add-text/${CRN}/${sessionId}/receiver`,
    `/add-text/${CRN}/${sessionId}/when`,
    `/add-text/${CRN}/${sessionId}/details`,
    `/add-text/${CRN}/${sessionId}/sensitive`,
    `/add-text/${CRN}/${sessionId}/check`,
    `/add-text/${CRN}/${sessionId}/confirmation`,
    `/cases/${CRN}/communication`
  ]

  return nextAndBackPaths(paths, req)
}

function addOtherCommunicationWizardForks (req) {
  var forks = []
  return nextForkPath(forks, req)
}

module.exports = {
  addOtherCommunicationWizardPaths,
  addOtherCommunicationWizardForks
}
