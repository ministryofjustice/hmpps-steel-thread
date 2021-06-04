const path = require('path')
const helpers = require(path.join(__dirname, '../../../lib/helpers.js'))

module.exports = (faker) => {
  const flags = [
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
  const randomFlags = faker.helpers.shuffle(flags).slice(0, numberOfFlags)
  randomFlags.unshift({
    text: 'Medium risk of harm',
    class: 'orange',
    rosh: true
  })

  return randomFlags
}
