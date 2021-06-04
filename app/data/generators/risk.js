const path = require('path')
const helpers = require(path.join(__dirname, '../../../lib/helpers.js'))

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

  const availableFlags = [
    {
      text: 'IOM',
      class: 'grey',
      notes: 'Cross-agency',
      reviewDue: helpers.happeningIn({ daysLater: 5, atTime: '13:00' }),
      dateAdded: helpers.happenedOn({ daysAgo: '175' }),
      mostRecentReviewDate: helpers.happenedOn({ daysAgo: '85' })
    },
    {
      text: 'Registered sex offender',
      class: 'purple',
      notes: 'Possession of indecent images',
      reviewDue: helpers.happeningIn({ daysLater: 5, atTime: '13:00' }),
      dateAdded: helpers.happenedOn({ daysAgo: '175' }),
      mostRecentReviewDate: helpers.happenedOn({ daysAgo: '85' })
    },
    {
      text: 'MAPPA',
      class: 'purple',
      notes: 'Level 2, Category 3',
      reviewDue: helpers.happenedOn({ daysAgo: '1' }),
      dateAdded: helpers.happenedOn({ daysAgo: '91' })
    },
    {
      text: 'Restraining order',
      class: 'turquoise',
      notes: 'Against ex-partner',
      reviewDue: helpers.happeningIn({ daysLater: 60, atTime: '13:00' }),
      dateAdded: helpers.happenedOn({ daysAgo: '175' }),
      mostRecentReviewDate: helpers.happenedOn({ daysAgo: '85' })
    },
    {
      text: 'Domestic abuse',
      class: 'turquoise',
      notes: 'Partner is the victim',
      reviewDue: helpers.happeningIn({ daysLater: 5, atTime: '13:00' }),
      dateAdded: helpers.happenedOn({ daysAgo: '175' }),
      mostRecentReviewDate: helpers.happenedOn({ daysAgo: '85' })
    }
  ]

  const numberOfFlags = faker.datatype.number({ min: 1, max: 4 })
  const riskFlags = faker.helpers.shuffle(availableFlags).slice(0, numberOfFlags)

  riskFlags.unshift({
    text: `${riskOfSeriousHarmLevel.text} risk of harm`,
    class: riskOfSeriousHarmLevel.class,
    rosh: true
  })

  return { riskOfSeriousHarmLevel, riskOfHarm, riskFlags }
}
