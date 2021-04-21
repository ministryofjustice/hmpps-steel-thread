const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function addOtherCommunicationWizardPaths (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId

  var paths = [
    `/cases/${CRN}/communication/add`,
    `/add-other-communication/${CRN}/${sessionId}/new`,
    `/add-other-communication/${CRN}/${sessionId}/check`,
    `/add-other-communication/${CRN}/${sessionId}/confirmation`,
    `/cases/${CRN}/communication`
  ]

  return nextAndBackPaths(paths, req)
}

function addOtherCommunicationWizardForks (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId

  var forks = []

  return nextForkPath(forks, req)
}

module.exports = {
  addOtherCommunicationWizardPaths,
  addOtherCommunicationWizardForks
}
