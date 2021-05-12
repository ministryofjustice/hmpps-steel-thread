const path = require('path')
const contactTypes = require(path.join(__dirname, '../data/reference/contact-types.json'))
const outcomes = require(path.join(__dirname, '../data/reference/outcomes.json'))

class Outcomes {
  static failureToComplyReasons(contactType) {
    const outcomeCodes = contactType.outcomes
    const outcomeDescriptions = outcomeCodes
      .map(code => outcomes[code])
      .filter(outcome => outcome.attended === 'Y' || outcome.attended === null)
      .filter(outcome => outcome.compliantAcceptable === 'N')
      .map(outcome => outcome.description)
    return outcomeDescriptions
  }
}

module.exports = {
  Outcomes
}
