const cases = require('./cases')
const fakeCases = require('./fake-cases')

const contactHistoryDefaults = (map, su) => {
  if (su.contactHistory) {
    map[su.CRN] = su.contactHistory.reduce((o, contact) => ({ ...o, [contact.sessionId]: contact }), {})
  }
  return map
}

const highestRiskOfSeriousHarm = (su) => {
  const riskValue = {
    'Low': 0,
    'Medium': 1,
    'High': 2,
    'Very high': 3
  }

  const compareRisk = (a, b) => {
    if (riskValue[a.text] < riskValue[b.text]) { return -1 }
    if (riskValue[a.text] > riskValue[b.text]) { return 1 }
    return 0
  }

  su.riskOfSeriousHarmLevel = su.riskOfHarm.map(r => r.inCommunity).sort(compareRisk).pop()
}

const sessionCases = cases.concat(fakeCases(10))
sessionCases.forEach(su => highestRiskOfSeriousHarm(su))

module.exports = {
  features: {
    filters: false
  },
  'provider-code': 'N55', // Yorkshire and the Humber
  'team-codes': ['N55NIW'],
  'default-teams': {
    'C17': ['C17ETE'],
    'N07': ['N07L10'],
    'N55': ['N55LNG']
  },
  cases: sessionCases,
  'communication': sessionCases.reduce(contactHistoryDefaults, {})
}
