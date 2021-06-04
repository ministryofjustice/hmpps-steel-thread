const path = require('path')
const helpers = require(path.join(__dirname, '../../../lib/helpers.js'))
const faker = require('faker')
const { DateTime } = require('luxon')
faker.locale = 'en_GB'

const person = require('./person')
const address = require('./address')
const personalContact = require('./personal-contact')
const professionalContact = require('./professional-contact')
const serviceUser = person(faker)

const _case = {
  serviceUserPersonalDetails: {
    'name': serviceUser.fullName,
    'firstName': serviceUser.firstName,
    'dateOfBirth': DateTime.fromJSDate(faker.date.between('1950-01-01', '2002-12-31')).toISODate(),
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
    professionalContact(faker)
  ]
}

module.exports = _case

//
//
//
//   'professionalContacts': [
//     {
//       'name': 'Gary Millar',
//       'phone': '0114 123 0000',
//       'email': 'example@example.com',
//       'provider': 'CPA South Yorkshire',
//       'localDeliveryUnit': 'Rotherham',
//       'team': 'Rotherham LMC',
//       'allocatedUntilDate': '2019-11-19'
//     }
//   ],
//   'PNC': '2012/123400000F',
//   'CRN': 'J678910',
//   'currentOrder': {
//     'type': 'Community Order',
//     'description': 'Using violence to secure entry (Criminal Law Act/CJ and Public Order Act) - 19563',
//     'lengthInMonths': 12,
//     'progressInMonths': 6,
//     'startDate': '2021-01-05',
//     'endDate': helpers.sentenceEndDate({lengthInMonths: 12, startDate: '2021-01-05'}),
//     'offenceDate': '2020-11-15',
//     'convictionDate': '2020-12-12',
//     'court': "Sheffield Magistrates' Court",
//     'responsibleCourt': "Sheffield Magistrates' Court",
//     'requirements': {
//       'rar': {
//         'type': 'RAR',
//         'value': '15 days',
//         'lengthInDays': 15,
//         'progressInDays': 5
//       },
//       'fine': {
//         'type': 'Fine',
//         'value': '£1000'
//       }
//     },
//     'courtDocuments': [
//       {
//         'name': 'Pre-sentence report',
//         'lastUpdateDate': '2020-12-03'
//       }
//     ],
//     'personalDocuments': [
//       {
//         'name': 'Induction pack',
//         'lastUpdateDate': '2020-12-03'
//       }
//     ]
//   },
//   'previousOrders': [
//     {
//       'title': 'ORA Community Order (12 Months)',
//       'description': 'Careless driving - 80400',
//       'endDate': '2018-05-17'
//     }
//   ],
//   'breachesCount': 0,
//   'restrainingOrdersCount': 0,
//   'riskBadges': [
//     {
//       text: 'Medium risk of harm',
//       class: 'orange',
//       rosh: true
//     },
//     {
//       text: 'IOM',
//       class: 'grey',
//       notes: 'Cross-agency',
//       reviewDue: helpers.happeningIn({ daysLater: 5, atTime: '13:00' }),
//       dateAdded: helpers.happenedOn({ daysAgo: '175' }),
//       mostRecentReviewDate: helpers.happenedOn({ daysAgo: '85' })
//     }
//   ],
//   'riskOfSeriousHarmLevel': {
//     text: 'Medium',
//     class: 'orange'
//   },
//   'riskOfHarm': [
//     {
//       'riskTo': 'Themselves',
//       'inCommunity': {
//         text: 'Low',
//         class: 'green'
//       },
//       'inCustody': {
//         text: 'Low',
//         class: 'green'
//       }
//     },
//     {
//       'riskTo': 'Children',
//       'inCommunity': {
//         text: 'Low',
//         class: 'green'
//       },
//       'inCustody': {
//         text: 'Low',
//         class: 'green'
//       }
//     },
//     {
//       'riskTo': 'Public',
//       'inCommunity': {
//         text: 'Medium',
//         class: 'orange'
//       },
//       'inCustody': {
//         text: 'Low',
//         class: 'green'
//       }
//     },
//     {
//       'riskTo': 'Known adult',
//       'inCommunity': {
//         text: 'Medium',
//         class: 'orange'
//       },
//       'inCustody': {
//         text: 'Low',
//         class: 'green'
//       }
//     },
//     {
//       'riskTo': 'Staff',
//       'inCommunity': {
//         text: 'Low',
//         class: 'green'
//       },
//       'inCustody': {
//         text: 'Low',
//         class: 'green'
//       }
//     },
//     {
//       'riskTo': 'Prisoners',
//       'inCommunity': {
//         text: 'Low',
//         class: 'green'
//       },
//       'inCustody': {
//         text: 'Low',
//         class: 'green'
//       }
//     }
//   ],
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
