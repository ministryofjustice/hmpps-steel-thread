const { DateTime } = require('luxon')
const path = require('path')
const helpers = require(path.join(__dirname, '../../../lib/helpers.js'))
const riskFlags = require(path.join(__dirname, '../reference/risk-flags.json'))

module.exports = (faker, generatorHelpers) => {
  const veryHigh = { text: 'Very high', class: 'app-tag--dark-red' }
  const high = { text: 'High', class: 'govuk-tag--red' }
  const medium = { text: 'Medium', class: 'govuk-tag--yellow' }
  const low = { text: 'Low', class: 'govuk-tag--green' }

  const riskOfHarm = [
    {
      'riskTo': 'Themselves',
      'inCommunity': faker.random.arrayElement([veryHigh, high, medium, low])
    },
    {
      'riskTo': 'Children',
      'inCommunity': faker.random.arrayElement([veryHigh, high, medium, low])
    },
    {
      'riskTo': 'Public',
      'inCommunity': faker.random.arrayElement([veryHigh, high, medium, low])
    },
    {
      'riskTo': 'Known adult',
      'inCommunity': faker.random.arrayElement([veryHigh, high, medium, low])
    },
    {
      'riskTo': 'Staff',
      'inCommunity': faker.random.arrayElement([veryHigh, high, medium, low])
    }
  ]

  const numberOfFlags = faker.datatype.number({ min: 1, max: 8 })
  const activeFlags = riskFlags.flags.filter((flag) => {
    return flag.active === true &&
            !flag.text.toLowerCase().includes('rosh') &&
            !flag.text.toLowerCase().includes('risk')
  })
  const serviceUserRiskFlags = faker.helpers.shuffle(activeFlags).slice(0, numberOfFlags)

  // Sort flags alphabetically
  serviceUserRiskFlags.sort((a, b) => (a.text > b.text ? 1 : -1))

  serviceUserRiskFlags.forEach((flag) => {
    flag.notes = 'Note'
    flag.dateAdded = helpers.happenedOn({ daysAgo: faker.datatype.number({ min: 20, max: 100 }) })

    const hasReview = faker.random.arrayElement([ true, true, false ])
    const monthlyReviewPeriod = flag.reviewPeriod === 0 ? 1 : flag.reviewPeriod

    if (hasReview) {
      const mostRecentReviewDate = faker.date.between(flag.dateAdded, DateTime.now().toISODate())
      flag.mostRecentReviewDate = generatorHelpers.toISODate(mostRecentReviewDate)

      // Sometimes this review will be overdue
      flag.reviewDue = DateTime.fromJSDate(mostRecentReviewDate).plus({ months: monthlyReviewPeriod })
    } else {
      flag.reviewDue = DateTime.fromISO(flag.dateAdded).plus({ months: monthlyReviewPeriod })
    }
  })

  return { riskOfHarm, serviceUserRiskFlags }
}
