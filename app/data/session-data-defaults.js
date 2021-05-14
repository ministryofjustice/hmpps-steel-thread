const path = require('path')
const cases = require('./cases')
const helpers = require(path.join(__dirname, '../../lib/helpers.js'))

const contactHistoryDefaults = (map, su) => {
  if (su.contactHistory) {
    map[su.CRN] = su.contactHistory.reduce((o, contact) => ({ ...o, [contact.sessionId]: contact}), {})
  }
  return map
}

module.exports = {
  'provider-code': 'N55', // Yorkshire and the Humber
  'team-codes': ['N55NIW'],
  'default-teams': {
    'C17': ['C17ETE'],
    'N07': ['N07L10'],
    'N55': ['N55LNG']
  },
  cases: cases,
  'communication': cases.reduce(contactHistoryDefaults, {})
}
