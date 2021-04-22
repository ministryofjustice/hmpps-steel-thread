const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function arrangeSessionWizardPaths (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId

  var paths = [
    `/cases/${CRN}`,
    `/arrange-a-session/${CRN}/${sessionId}`,
    `/arrange-a-session/${CRN}/${sessionId}/where`,
    `/arrange-a-session/${CRN}/${sessionId}/when`,
    `/arrange-a-session/${CRN}/${sessionId}/rar`,
    `/arrange-a-session/${CRN}/${sessionId}/rar-categories`,
    `/arrange-a-session/${CRN}/${sessionId}/add-notes`,
    `/arrange-a-session/${CRN}/${sessionId}/notes`,
    `/arrange-a-session/${CRN}/${sessionId}/check`,
    `/arrange-a-session/${CRN}/${sessionId}/confirmation`,
    `/cases/${CRN}`,
    `/arrange-a-session/${CRN}/${sessionId}/rearrange-or-cancel`,
    `/arrange-a-session/${CRN}/${sessionId}/cancel`,
    `/arrange-a-session/${CRN}/${sessionId}/cancel-confirmation`,
    `/cases/${CRN}`
  ]

  return nextAndBackPaths(paths, req)
}

function arrangeSessionWizardForks (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId

  var forks = [
    {
      currentPath: `/arrange-a-session/${CRN}/${sessionId}`,
      storedData: ['communication', CRN, sessionId, 'type-of-session'],
      excludedValues: ['Office visit', 'Other'],
      forkPath: `/arrange-a-session/${CRN}/${sessionId}/when`
    },
    {
      currentPath: `/arrange-a-session/${CRN}/${sessionId}/rar`,
      storedData: ['communication', CRN, sessionId, 'session-counts-towards-rar'],
      values: ['No'],
      forkPath: `/arrange-a-session/${CRN}/${sessionId}/add-notes`
    },
    {
      currentPath: `/arrange-a-session/${CRN}/${sessionId}/add-notes`,
      storedData: ['communication', CRN, sessionId, 'add-notes'],
      values: ['No'],
      forkPath: `/arrange-a-session/${CRN}/${sessionId}/check`
    },
    {
      currentPath: `/arrange-a-session/${CRN}/${sessionId}/rearrange-or-cancel`,
      storedData: ['communication', CRN, sessionId, 'rearrange-or-cancel'],
      values: ['Rearrange appointment'],
      forkPath: `/arrange-a-session/${CRN}/${sessionId}`
    }
  ]

  return nextForkPath(forks, req)
}

module.exports = {
  arrangeSessionWizardPaths,
  arrangeSessionWizardForks
}
