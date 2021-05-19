const path = require('path')
const outcomes = require(path.join(__dirname, '../data/reference/outcomes.json'))

class Outcomes {
  static failureToComplyReasons (contactType) {
    return contactType
      .outcomes
      .map(code => outcomes[code])
      .filter(outcome => outcome.attended === 'Y' || outcome.attended === null)
      .filter(outcome => outcome.compliantAcceptable === 'N')
      .map(outcome => outcome.description)
  }

  static acceptableAbsenceReasons (contactType) {
    return contactType
      .outcomes
      .map(code => outcomes[code])
      .filter(outcome => outcome.attended === 'N')
      .filter(outcome => outcome.compliantAcceptable === 'Y')
      .filter(outcome => outcome.description !== 'Acceptable Absence - Other') // Other gets its own option
      .filter(outcome => outcome.description !== 'Acceptable Absence-Professional Judgement Decision') // all the remaining options are professional judgement decisions so this is too generic
      .filter(outcome => !outcome.description.includes('Rescheduled')) // rescheduling is handled elsewhere in the app
      .filter(outcome => !outcome.description.includes('YOT')) // not dealing with youth offenders at this stage
      .filter(outcome => !outcome.description.includes('Suspended')) // not dealing with suspended sentences at this stage
      .map(outcome => this.mapFriendlyDescriptions(outcome.description))
  }

  static mapFriendlyDescriptions (description) {
    const friendlyDescriptions = {
      'Acceptable Absence - Court/Legal': 'Court or legal',
      'Acceptable Absence - Employment': 'Work or employment',
      'Acceptable Absence - Family/ Childcare': 'Childcare or family',
      'Acceptable Absence - Holiday': 'Holiday or annual leave',
      'Acceptable Absence - Medical': 'Medical',
      'Acceptable Absence - Other': 'Other',
      'Acceptable Absence - Religious': 'Religious',
      'Acceptable Absence - RIC': 'Remanded in custody',
      'Acceptable Absence - Stood Down': 'Stood down',
      'Rescheduled - Offender Request': 'Rescheduled at the service user’s request',
      'YOT Breach - Not Enforceable': 'Youth offending team breach - not enforceable',
      'Acceptable Absence-Professional Judgement Decision': 'Professional judgement decision'
    }

    return friendlyDescriptions[description] || description
  }
}

module.exports = {
  Outcomes
}
