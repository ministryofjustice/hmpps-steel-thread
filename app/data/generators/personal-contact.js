const person = require('./person')
const address = require('./address')

module.exports = (faker) => {
  const personalContact = person(faker)
  const possibleRelationships = personalContact.sex === 'Male' ? ['Dad', 'Brother'] : ['Mum', 'Sister']

  return {
    'name': personalContact.fullName,
    'relationship': faker.random.arrayElement(possibleRelationships),
    'address': address(faker),
    'phone': '07700 900 141'
  }
}
