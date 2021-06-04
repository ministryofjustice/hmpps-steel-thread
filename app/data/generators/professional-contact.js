const person = require('./person')

module.exports = (faker, generatorHelpers) => {
  const professionalContact = person(faker)
  const years = 2

  return {
    'name': professionalContact.fullName,
    'phone': '0114 123 0000',
    'email': professionalContact.email,
    'provider': 'CPA South Yorkshire',
    'localDeliveryUnit': 'Rotherham',
    'team': 'Rotherham LMC',
    'allocatedUntilDate': generatorHelpers.toISODate(faker.date.past(years))
  }
}
