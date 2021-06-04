const path = require('path')
const helpers = require(path.join(__dirname, '../../../lib/helpers.js'))
const { DateTime } = require('luxon')

module.exports = (faker) => {
  const lengthInYears = faker.random.arrayElement([4, 3, 2, 1, 0.5])
  const lengthInMonths = lengthInYears * 12
  const progressInMonths = faker.datatype.number({ min: 1, max: lengthInMonths - 2 })
  const startDate = DateTime.now().minus({ months: progressInMonths })

  // Work backwords to a fake offence date
  const offenceInMonthsBeforeStartDate = faker.datatype.number({ min: 6, max: 120 })
  const offenceDate = startDate.minus({ months: offenceInMonthsBeforeStartDate }).toISODate()

  // Work backwords to a conviction date
  const convictionInDaysBeforeStartDate = faker.datatype.number({ min: 1, max: 35 })
  const convictionDate = startDate.minus({ days: convictionInDaysBeforeStartDate }).toISODate()

  const rarDays = faker.random.arrayElement([5, 10, 15, 20, 30])
  const rarDaysProgress = faker.datatype.number({ min: 1, max: rarDays - 2 })

  return {
    'type': 'Community Order',
    'description': 'Using violence to secure entry (Criminal Law Act/CJ and Public Order Act) - 19563',
    'lengthInMonths': lengthInMonths,
    'progressInMonths': progressInMonths,
    'startDate': startDate.toISODate(),
    'endDate': helpers.sentenceEndDate({ lengthInMonths: lengthInMonths, startDate: startDate.toISODate() }),
    'offenceDate': offenceDate,
    'convictionDate': convictionDate,
    'court': "Sheffield Magistrates' Court",
    'responsibleCourt': "Sheffield Magistrates' Court",
    'requirements': {
      'rar': {
        'type': 'RAR',
        'value': `${rarDays} days`,
        'lengthInDays': rarDays,
        'progressInDays': rarDaysProgress
      },
      'fine': {
        'type': 'Fine',
        'value': '£1000'
      }
    },
    'courtDocuments': [
      {
        'name': 'Pre-sentence report',
        'lastUpdateDate': convictionDate
      }
    ],
    'personalDocuments': [
      {
        'name': 'Induction pack',
        'lastUpdateDate': convictionDate
      }
    ]
  }
}
