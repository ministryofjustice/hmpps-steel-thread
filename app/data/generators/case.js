const faker = require('faker')
faker.locale = 'en_GB'

const person = require('./person')
const address = require('./address')
const personalContact = require('./personal-contact')
const professionalContact = require('./professional-contact')
const currentOrder = require('./current-order')
const previousOrders = require('./previous-orders')
const risk = require('./risk')
const generatorHelpers = require('./generator-helpers')

const serviceUser = person(faker)
const serviceUserCurrentOrder = currentOrder(faker)
const serviceUserRisk = risk(faker)

const _case = {
  serviceUserPersonalDetails: {
    'name': serviceUser.fullName,
    'firstName': serviceUser.firstName,
    'dateOfBirth': generatorHelpers.toISODate(faker.date.between('1950-01-01', '2002-12-31')),
    'address': address(faker),
    'phone': '07700 900 077',
    'email': serviceUser.email,
    'aliases': [],
    'preferredLanguage': 'English',
    'nationality': 'British',
    'ethnicity': 'White: British',
    'religion': 'None',
    'gender': serviceUser.gender,
    'sexualOrientation': 'Heterosexual',
    'disabilitiesAndAdjustments': ['Autism spectrum condition'],
    'circumstances': {
      'employment': 'Full-time employed (30 or more hours per week)',
      'housingStatus': 'Friends/Family (settled)',
      'safeguardingIssues': []
    }
  },
  personalContacts: [
    personalContact(faker)
  ],
  professionalContacts: [
    professionalContact(faker, generatorHelpers)
  ],
  'PNC': `${faker.datatype.number({ min: 1980, max: 2021 })}/${faker.datatype.number({ min: 1000000, max: 1300000 })}${faker.random.alpha(1).toUpperCase()}`, // 2012/12340000F
  'CRN': `${faker.random.alpha(1).toUpperCase()}${faker.datatype.number({ min: 100000, max: 999999 })}`, // J123456
  currentOrder: serviceUserCurrentOrder,
  previousOrders: previousOrders(faker, serviceUserCurrentOrder, generatorHelpers),
  breachesCount: 0,
  restrainingOrdersCount: 0,
  riskBadges: serviceUserRisk.riskFlags,
  riskOfSeriousHarmLevel: serviceUserRisk.riskOfSeriousHarmLevel,
  riskOfHarm: serviceUserRisk.riskOfHarm
}

module.exports = _case

//   'criminogenicNeeds': [
//     'Relationships',
//     'Thinking and attitudes'
//   ],
//   'status': 'Previously known',
//   'previousOrderStatus': 'Order ended 24 Nov 2016',
//   'appointmentStatistics': {
//     'complied': 9,
//     'acceptableAbsence': 0,
//     'failureToComply': 1
//   },
//   'contactHistory': [
//     {
//       'type': 'Appointment',
//       'type-of-session': 'Office visit',
//       'lastUpdatedBy': 'Mark Berridge',
//       'timestamp': helpers.happeningIn({ daysLater: 25, atTime: '13:00' }),
//       'session-date': helpers.happeningIn({ daysLater: 25 }),
//       'session-start-time': '1pm',
//       'session-end-time': '1:30pm',
//       'repeating': 'No, it’s a one-off session',
//       'session-counts-towards-rar': 'No',
//       'sessionId': 459
//     }
//   ]
// },
