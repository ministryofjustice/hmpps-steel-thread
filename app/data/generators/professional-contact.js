const person = require('./person')
const { DateTime } = require('luxon')

module.exports = (faker) => {
  const professionalContact = person(faker)
  const years = 2

  return {
    'name': professionalContact.fullName,
    'phone': '0114 123 0000',
    'email': professionalContact.email,
    'provider': 'CPA South Yorkshire',
    'localDeliveryUnit': 'Rotherham',
    'team': 'Rotherham LMC',
    'allocatedUntilDate': DateTime.fromJSDate(faker.date.past(years)).toISODate()
  }
}
