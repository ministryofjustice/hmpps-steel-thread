const path = require('path')
const riskFlags = require(path.join(__dirname, '../reference/risk-flags.json'))

module.exports = (faker) => {
  const high = { text: 'High', class: 'red' }
  const medium = { text: 'Medium', class: 'orange' }
  const low = { text: 'Low', class: 'green' }

  const riskOfSeriousHarmLevel = faker.random.arrayElement([high, medium, low])
  const riskOfHarm = [
    {
      'riskTo': 'Themselves',
      'inCommunity': faker.random.arrayElement([high, medium, low]),
      'inCustody': faker.random.arrayElement([high, medium, low])
    },
    {
      'riskTo': 'Children',
      'inCommunity': faker.random.arrayElement([high, medium, low]),
      'inCustody': faker.random.arrayElement([high, medium, low])
    },
    {
      'riskTo': 'Public',
      'inCommunity': faker.random.arrayElement([high, medium, low]),
      'inCustody': faker.random.arrayElement([high, medium, low])
    },
    {
      'riskTo': 'Known adult',
      'inCommunity': faker.random.arrayElement([high, medium, low]),
      'inCustody': faker.random.arrayElement([high, medium, low])
    },
    {
      'riskTo': 'Staff',
      'inCommunity': faker.random.arrayElement([high, medium, low]),
      'inCustody': faker.random.arrayElement([high, medium, low])
    },
    {
      'riskTo': 'Prisoners',
      'inCommunity': faker.random.arrayElement([high, medium, low]),
      'inCustody': faker.random.arrayElement([high, medium, low])
    }
  ]

  const numberOfFlags = faker.datatype.number({ min: 1, max: 8 })
  const serviceUserRiskFlags = faker.helpers.shuffle(riskFlags.flags).slice(0, numberOfFlags)

  // Sort flags alphabetically
  serviceUserRiskFlags.sort((a, b) => (a.text > b.text ? 1 : -1))

  // Put risk flag first
  serviceUserRiskFlags.unshift({
    text: `${riskOfSeriousHarmLevel.text} risk of harm`,
    class: riskOfSeriousHarmLevel.class,
    rosh: true
  })

  return { riskOfSeriousHarmLevel, riskOfHarm, serviceUserRiskFlags }
}
