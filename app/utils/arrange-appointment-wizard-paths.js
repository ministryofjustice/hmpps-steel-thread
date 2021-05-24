const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function arrangeSessionWizardPaths (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId

  var paths = [
    `/cases/${CRN}`,
    `/arrange-appointment/${CRN}/${sessionId}`,
    `/arrange-appointment/${CRN}/${sessionId}/where`,
    `/arrange-appointment/${CRN}/${sessionId}/when`,
    `/arrange-appointment/${CRN}/${sessionId}/repeating`,
    `/arrange-appointment/${CRN}/${sessionId}/rar`,
    `/arrange-appointment/${CRN}/${sessionId}/rar-categories`,
    `/arrange-appointment/${CRN}/${sessionId}/add-notes`,
    `/arrange-appointment/${CRN}/${sessionId}/notes`,
    `/arrange-appointment/${CRN}/${sessionId}/sensitive`,
    `/arrange-appointment/${CRN}/${sessionId}/check`,
    `/arrange-appointment/${CRN}/${sessionId}/confirmation`,
    `/cases/${CRN}/schedule`,
    `/arrange-appointment/${CRN}/${sessionId}/rearrange-or-cancel`,
    `/arrange-appointment/${CRN}/${sessionId}/cancel`,
    `/arrange-appointment/${CRN}/${sessionId}/cancel-confirmation`,
    `/cases/${CRN}/schedule`
  ]

  return nextAndBackPaths(paths, req)
}

function arrangeSessionWizardForks (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId

  var forks = [
    {
      currentPath: `/arrange-appointment/${CRN}/${sessionId}`,
      storedData: ['communication', CRN, sessionId, 'type-of-session'],
      excludedValues: ['Office visit', 'Other'],
      forkPath: `/arrange-appointment/${CRN}/${sessionId}/when`
    },
    {
      currentPath: `/arrange-appointment/${CRN}/${sessionId}/rar`,
      storedData: ['communication', CRN, sessionId, 'session-counts-towards-rar'],
      values: ['No'],
      forkPath: `/arrange-appointment/${CRN}/${sessionId}/add-notes`
    },
    {
      currentPath: `/arrange-appointment/${CRN}/${sessionId}/add-notes`,
      storedData: ['communication', CRN, sessionId, 'add-notes'],
      values: ['No (notes can be added later)'],
      forkPath: `/arrange-appointment/${CRN}/${sessionId}/sensitive`
    },
    {
      currentPath: `/arrange-appointment/${CRN}/${sessionId}/rearrange-or-cancel`,
      storedData: ['communication', CRN, sessionId, 'rearrange-or-cancel'],
      values: ['Rearrange appointment'],
      forkPath: `/arrange-appointment/${CRN}/${sessionId}`
    }
  ]

  return nextForkPath(forks, req)
}

module.exports = {
  arrangeSessionWizardPaths,
  arrangeSessionWizardForks
}
