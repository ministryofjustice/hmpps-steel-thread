const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function confirmAttendanceWizardPaths (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId
  const basePath = `/confirm-attendance/${CRN}/${sessionId}`

  var paths = [
    `/cases/${CRN}/activity-log`,
    `${basePath}`,
    `${basePath}/compliance`,
    `${basePath}/non-compliance-reason`,
    `${basePath}/absence-acceptable`,
    `${basePath}/absence-reason`,
    `${basePath}/rar`,
    `${basePath}/rar-categories`,
    `${basePath}/add-notes`,
    `${basePath}/notes`,
    `${basePath}/sensitive`,
    `${basePath}/check`,
    `${basePath}/confirmation`,
    `/cases/${CRN}/activity-log`
  ]

  return nextAndBackPaths(paths, req)
}

function confirmAttendanceWizardForks (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId
  const basePath = `/confirm-attendance/${CRN}/${sessionId}`

  var forks = [
    {
      currentPath: `${basePath}/compliance`,
      storedData: ['communication', CRN, sessionId, 'did-service-user-comply'],
      excludedValues: [],
      forkPath: (value) => {
        switch (value) {
          case 'Absent':
            return `${basePath}/absence-acceptable`
          case 'No':
            return `${basePath}/non-compliance-reason`
          default:
            return `${basePath}/rar`
        }
      }
    },
    {
      currentPath: `${basePath}/non-compliance-reason`,
      storedData: ['communication', CRN, sessionId, 'was-absence-acceptable'],
      excludedValues: [],
      forkPath: `${basePath}/rar`
    },
    {
      currentPath: `${basePath}/absence-acceptable`,
      storedData: ['communication', CRN, sessionId, 'was-absence-acceptable'],
      values: ['No'],
      forkPath: `${basePath}/rar`
    },
    {
      currentPath: `${basePath}/rar`,
      storedData: ['communication', CRN, sessionId, 'session-counts-towards-rar'],
      values: ['No'],
      forkPath: `${basePath}/add-notes`
    },
    {
      currentPath: `${basePath}/add-notes`,
      storedData: ['communication', CRN, sessionId, 'add-notes'],
      values: ['No (notes can be added later)'],
      forkPath: `${basePath}/sensitive`
    }
  ]

  return nextForkPath(forks, req)
}

module.exports = {
  confirmAttendanceWizardPaths,
  confirmAttendanceWizardForks
}
