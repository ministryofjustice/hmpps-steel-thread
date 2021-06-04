const cases = require('./cases')
const fakeCases = require('./fake-cases')

const contactHistoryDefaults = (map, su) => {
  if (su.contactHistory) {
    map[su.CRN] = su.contactHistory.reduce((o, contact) => ({ ...o, [contact.sessionId]: contact }), {})
  }
  return map
}

const sessionCases = cases.concat(fakeCases(10))

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
