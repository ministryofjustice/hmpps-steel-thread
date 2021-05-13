const path = require('path')
const outcomes = require(path.join(__dirname, '../data/reference/outcomes.json'))

class Outcomes {
  static failureToComplyReasons(contactType) {
    return contactType
      .outcomes
      .map(code => outcomes[code])
      .filter(outcome => outcome.attended === 'Y' || outcome.attended === null)
      .filter(outcome => outcome.compliantAcceptable === 'N')
      .map(outcome => outcome.description)
  }

  static acceptableAbsenceReasons(contactType) {
    return contactType
      .outcomes
      .map(code => outcomes[code])
      .filter(outcome => outcome.attended === 'N')
      .filter(outcome => outcome.compliantAcceptable === 'Y')
      .map(outcome => outcome.description)
  }
}

module.exports = {
  Outcomes
}
