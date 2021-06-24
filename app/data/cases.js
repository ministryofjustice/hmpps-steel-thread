const path = require('path')
const helpers = require(path.join(__dirname, '../../lib/helpers.js'))

module.exports = [
  // Dylan
  {
    'serviceUserPersonalDetails': {
      'name': 'Dylan Adam Armstrong',
      'firstName': 'Dylan',
      'preferredNameKnownAs': 'Dee',
      'dateOfBirth': '1984-09-27',
      'address': [],
      'mainAddress': {
        'address': [
          '1 Grey Lane',
          'Sheffield',
          'South Yorkshire',
          'S10 1AG'
        ],
        'telephoneNumber': '01234 123456',
        'startDate': '2020-12-03',
        'type': 'Awaiting assessment',
        'typeVerified': true,
        'notes': 'He’s not been here very long'
      },
      'phone': '07700 900 077',
      'email': 'example@example.com',
      'aliases': ['Dee Armstrong'],
      'preferredLanguage': 'English',
      'nationality': 'British',
      'ethnicity': 'White: British',
      'religion': 'None',
      'gender': 'Male',
      'sexualOrientation': 'Heterosexual',
      'disabilitiesAndAdjustments': ['Autism spectrum condition'],
      'circumstances': {
        'employment': 'Full-time employed (30 or more hours per week)',
        'housingStatus': 'Friends/Family (settled)',
        'safeguardingIssues': []
      }
    },
    'personalContacts': [
      {
        'name': 'Pippa Wade',
        'relationship': 'Mum',
        'address': [
          '1 Grey Lane',
          'Sheffield',
          'South Yorkshire',
          'S10 1AG'
        ],
        'phone': '07700 900 141'
      }
    ],
    'professionalContacts': [
      {
        'name': 'Gary Millar',
        'phone': '0114 123 0000',
        'email': 'example@example.com',
        'provider': 'CPA South Yorkshire',
        'localDeliveryUnit': 'Rotherham',
        'team': 'Rotherham LMC',
        'allocatedUntilDate': '2019-11-19'
      }
    ],
    'PNC': '2012/123400000F',
    'CRN': 'J678910',
    'currentOrder': {
      'type': 'Community Order',
      'description': 'Using violence to secure entry (Criminal Law Act/CJ and Public Order Act) - 19563',
      'lengthInMonths': 12,
      'progressInMonths': 6,
      'startDate': '2021-01-05',
      'endDate': helpers.sentenceEndDate({lengthInMonths: 12, startDate: '2021-01-05'}),
      'offenceDate': '2020-11-15',
      'convictionDate': '2020-12-12',
      'court': "Sheffield Magistrates' Court",
      'responsibleCourt': "Sheffield Magistrates' Court",
      'requirements': {
        'rar': {
          'type': 'RAR',
          'value': '15 days',
          'lengthInDays': 15,
          'progressInDays': 5
        },
        'fine': {
          'type': 'Fine',
          'value': '£1000'
        }
      },
      'courtDocuments': [
        {
          'name': 'Pre-sentence report',
          'lastUpdateDate': '2020-12-03'
        },
        {
          'name': 'Order',
          'lastUpdateDate': '2020-12-03'
        },
        {
          'name': 'CPS Pack',
          'lastUpdateDate': '2020-12-03'
        },
        {
          'name': 'Previous convictions',
          'lastUpdateDate': '2020-12-03'
        }
      ],
      'personalDocuments': [
        {
          'name': 'Induction pack',
          'lastUpdateDate': '2020-12-03'
        }
      ]
    },
    'previousOrders': [
      {
        'title': 'Community Order (12 Months)',
        'description': 'Careless driving - 80400',
        'endDate': '2018-05-17'
      },
      {
        'title': 'Suspended Sentence Order (12 Months)',
        'description': 'Common assault and battery - 10501',
        'endDate': '2016-08-10'
      },
      {
        'title': 'Std Determinate Custody (42 Months)',
        'description': 'Kidnapping - 03601',
        'endDate': '2015-06-26'
      },
      {
        'title': 'Community Order (12 Months)',
        'description': 'Assaults occasioning actual bodily harm - 00806',
        'endDate': '2012-01-10'
      },
      {
        'title': 'Community Order (12 Months)',
        'description': 'Offences against Public Order (Summary) - 12500',
        'endDate': '2010-06-30'
      }
    ],
    'breachesCount': 0,
    'restrainingOrdersCount': 0,
    'riskBadges': [
      {
        text: 'Medium risk of harm',
        class: 'orange',
        rosh: true
      },
      {
        text: 'IOM',
        class: 'grey',
        notes: 'Cross-agency',
        reviewDue: helpers.happeningIn({ daysLater: 5, atTime: '13:00' }),
        dateAdded: helpers.happenedOn({ daysAgo: '175' }),
        mostRecentReviewDate: helpers.happenedOn({ daysAgo: '85' })
      }
    ],
    'riskOfSeriousHarmLevel': {
      text: 'Medium',
      class: 'orange'
    },
    'riskOfHarm': [
      {
        'riskTo': 'Themselves',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Children',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Public',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Known adult',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Staff',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Prisoners',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      }
    ],
    'criminogenicNeeds': [
      'Relationships',
      'Thinking and attitudes'
    ],
    'status': 'Previously known',
    'previousOrderStatus': 'Order ended 24 Nov 2016',
    'contactHistory': [
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': helpers.happeningIn({ daysLater: 25, atTime: '13:00' }),
        'session-date': helpers.happeningIn({ daysLater: 25 }),
        'session-start-time': '1pm',
        'session-end-time': '1:30pm',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'sessionId': 459
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': helpers.happeningIn({ daysLater: 15, atTime: '13:00' }),
        'session-date': helpers.happeningIn({ daysLater: 15 }),
        'session-start-time': '1pm',
        'session-end-time': '1:30pm',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'sessionId': 458
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': helpers.happeningIn({ daysLater: 5, atTime: '13:00' }),
        'session-date': helpers.happeningIn({ daysLater: 5 }),
        'session-start-time': '1pm',
        'session-end-time': '1:30pm',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'sessionId': 457
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': helpers.today({ atTime: '9:00' }),
        'session-date': helpers.today(),
        'session-start-time': '9am',
        'session-end-time': '9:30am',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Absent',
        'was-absence-acceptable': 'No',
        'session-notes': 'Dylan failed to attend his appointment. I can confirm that he was given the appointment details in our last meeting and he put the details into his phone there and then. I have tried calling Dylan and his phone goes straight to voicemail. I will send a warning letter informing him that if he fails to attend another appointment within the next 12 months he will be in breach of his order.',
        'sessionId': 456
      },
      {
        'type': 'Appointment',
        'timestamp': '2021-05-06T17:30',
        'session-date': '2021-05-06',
        'session-start-time': '5pm',
        'session-end-time': '5:30pm',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'Attitudes, thinking and behaviour',
        'session-rar-subcategory': 'Attitudes, thinking and behaviour',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Mark Berridge',
        'session-notes': `During today’s session we discussed how Dylan was progressing with the anger management worksheets I had sent him. He has read through them and says he understands why they may be beneficial, but would like to understand how to apply some of the tactics in a real life situation, as they “feel a bit unrealistic.”

        Dylan states that he and his mum are doing much better after their argument last week, and that Dylan is now contributing a bit to the weekly shop when he can. His mum is happy with this arrangement.

        Dylan’s work is still consistent and I believe that this is still an important factor in his rehabilitation, as it gives him structure and routine. He is continuing to engage and I don’t believe that there are any issues that merit a change in the level of RoSH.`,
        'sessionId': 988
      },
      {
        'type': 'Appointment',
        'timestamp': '2021-05-01T17:30',
        'session-date': '2021-05-01',
        'session-start-time': '5pm',
        'session-end-time': '5:30pm',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Absent',
        'was-absence-acceptable': 'Yes',
        'why-absence-acceptable': 'Childcare or family',
        'lastUpdatedBy': 'Mark Berridge',
        'session-notes': ``,
        'sessionId': 987
      },
      {
        'type': 'Appointment',
        'timestamp': '2021-04-29T17:30',
        'session-date': '2021-04-29',
        'session-start-time': '5pm',
        'session-end-time': '5:30pm',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'Attitudes, thinking and behaviour',
        'session-rar-subcategory': 'Attitudes, thinking and behaviour',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Mark Berridge',
        'session-notes': `Dylan arrived on time for his session with me today but seemed quiet at first.

        We discussed his home life with his mum; he seemed a bit reluctant to talk about her and eventually opened up about the fact they had had a minor argument over Dylan contributing some money to the weekly shop, in addition to the bills.

        I asked about how he had felt about his mum asking him to do this. He said that initially he felt angry towards her as he didn’t “see why she suddenly needed more money.” We discussed the positive impact his mother was having in his life by supporting him, and talked about how this evidenced that his mum thought he had made enough progress to be positively contributing to their home. Dylan felt happier about viewing the request in this light, and said he would apologise to his mum for being angry at her.

        Dylan confirmed he had received the anger management worksheets I had sent, but hasn’t had time to review them yet as he’s busy with work. I have asked him to review them in time for our next session.`,
        'sessionId': 986
      },
      {
        'type': 'Appointment',
        'timestamp': '2021-04-22T17:30',
        'session-date': '2021-04-22',
        'session-start-time': '5pm',
        'session-end-time': '5:30pm',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'Attitudes, thinking and behaviour',
        'session-rar-subcategory': 'Attitudes, thinking and behaviour',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Mark Berridge',
        'session-notes': `Dylan presented well to his latest appointment. He is still working as a labourer full time and the new appointment routine is working with his schedule.

        We decided now was a good time to make the move to work on his attitudes, thinking and behaviour, with a focus on reflecting on how his previous violent behaviour has impacted his decisions. Dylan was more responsive towards starting this work than he was when we initially discussed it, after the success he’s had with managing his finances over the last few sessions.

        In the session we reviewed Dylan’s behaviour and decisions up until the point of his offence, plotting them out on a ripple-effect map. Dylan was engaged with the process and began to see how his behaviour had led him to committing his offence. As a result of this work, Dylan commented that he needs “to work on my anger management.”

        I sent Dylan some anger management worksheets in the post to read through and complete at home.`,
        'sessionId': 985
      },
      {
        'type': 'Appointment',
        'timestamp': '2021-04-15T17:30',
        'session-date': '2021-04-15',
        'session-start-time': '5pm',
        'session-end-time': '5:30pm',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'Finance',
        'session-rar-subcategory': 'Finance',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Mark Berridge',
        'session-notes': `During today’s session I helped Dylan set up a bank account online with a debit card being sent to him in the post. I explained how this works as he was concerned it would get him into debt. I explained that this isn’t the same as a credit card.

        Now that he has his account set up he has agreed to pay in 50% of his cash wages into the account every saturday morning after he has put away his savings and given his mum money to help with bills.

        We talked about how this amount might build up over time and that eventually he could look to set up a savings account.

        We reviewed his budget and he was able to stick to it with £5 left over. He seemed pleased with this outcome and we have agreed to try and do the same next week. Dylan has made great progress in a short period of time and I’m happy to keep reviewing this as part of his regular supervision session.`,
        'sessionId': 984
      },
      {
        'type': 'Appointment',
        'timestamp': '2021-04-08T17:30',
        'session-date': '2021-04-08',
        'session-start-time': '5pm',
        'session-end-time': '5:30pm',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'Finance',
        'session-rar-subcategory': 'Finance',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Mark Berridge',
        'session-notes': `Dylan arrived on time and well kept, he mentioned that he had been speaking with his mum about the RAR work and that she has encouraged him to “give it his best”

        We discussed what his goals for this work could be, he outlined the following

        - Open his own bank account
        - Manage his money better so that he could save for his own place
        - Help his mum with the bills whilst he is living with her

        He mentioned that he currently earns £200 per week for his labouring job and that he is paid cash at the end of each week. His employer deducts his national insurance and tax before paying him. His usual strategy is to spend all his money and he normally struggles to buy food on a Thursday because he’s waiting to get paid at the end of the day.

        We first noted down all of his expenses including credit for his mobile phone. Our first step was to create a budget for him to stick to next week and come to his next appointment with the budget and talk to me about whether he was able to stick to it. He is currently spending at least £50 per week on online gambling and has agreed to half this going forward.

        He has also agreed that £20 per week will start to go to his mum to help with the bills whilst he is living with her and that he will pay her this on pay day so that it doesn’t get spent elsewhere.

        We also discussed £10 going into a savings jar.`,
        'sessionId': 983
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-04-01T17:53',
        'session-date': '2021-04-01',
        'session-start-time': '2pm',
        'session-end-time': '2:30pm',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Dylan’s sentencing planning is now complete and we have agreed to weekly appointments for the foreseeable future. He is currently working as a labourer full time and seems stressed about trying to fit in 30 minute appointments around work. As full time work is such a positive thing in terms of his routine and wellbeing we have agreed that we will ensure that all office visits are at the end of the day. 5pm appointments are okay for him.

        We also discussed how to use his RAR days. I mentioned I would like to do some one on one work on thinking skills and attitudes which he seemed dismissive of at first to which he replied “do I have to?” I reiterated that this was part of his sentence requirements and important to engage with this work to help him move forward. I also plan to do work with him on finance as he mentioned that he would like help in this area. He currently doesn’t have a bank account so this is where we’ll start.`,
        'sessionId': 982
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Document',
        'action': 'First warning letter sent',
        'timestamp': '2021-03-27T17:55',
        'contents': `Attached copy of warning letter sent to Dylan following his failure to attend on 27th of March`,
        'sessionId': 7001,
        'filenames': ['warning-letter.doc']
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-27T14:53',
        'session-date': '2021-03-27',
        'session-start-time': '2pm',
        'session-end-time': '2:30pm',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Absent',
        'was-absence-acceptable': 'No',
        'confirmed': true,
        'session-notes': `Dylan failed to attend his appointment. We scheduled a 2nd appointment this week due to him turning up anxious and aggravated on the 25th. I can confirm that he was given the appointment details in our last meeting and he put the details into his phone there and then. I have tried calling Dylan and his phone goes straight to voicemail. I will send a warning letter informing him that if he fails to attend another appointment within the next 12 months he will be in breach of his order`,
        'sessionId': 9811
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-25T14:53',
        'session-date': '2021-03-25',
        'session-start-time': '2pm',
        'session-end-time': '2:30pm',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Dylan turned up for his appointment on time however appeared agitated and anxious. We discussed the reason for his anxiety and he mentioned how in the past he would manage his emotions with marijauna. He is currently not using and was honest about his usage in the past.

        We began his sentence planning but it’s my opinion that this will need a second appointment to complete this work. Dylan clearly has issues managing his emotions and I would like to explore this as a possible cause for his offending.`,
        'sessionId': 981
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Home visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-18T14:53',
        'session-date': '2021-03-18',
        'session-start-time': '2pm',
        'session-end-time': '3pm',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Home visit for Dylan conducted. He is living with his mum currently. The home is well kept and he has his own room. His mum was available for a brief conversation in which she reiterated how much Dylan wanted to “be better”, she asked if there was anything that she could do to help him. Dylan however seemed agitated and anxious at my being at his home. I asked him about this and he said he felt it was an invasion of his privacy.

        I explained that this was a necessary part of his supervision and that my purpose for being there was to help understand more about his circumstances. He mentioned that he would like his own place again someday but can’t afford one.

        I currently have no concerns about his living situation and feel his mum is a stable influence on his life. He mentioned that “things have gone wrong” before when he tried to “make it on his own.”`,
        'sessionId': 980
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-11T14:53',
        'session-date': '2021-03-11',
        'session-start-time': '2pm',
        'session-end-time': '2:30pm',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Dylan arrived on time and presented well for his induction appointment. He filled in all the paperwork required without any resistance and said he understood the process. He mentioned his mum had talked to him a lot over the weekend and helped him to calm down. His mum appears to be a positive influence in his life, which I would like to explore further with him.
        I discussed with him what is expected of him on probation and informed him of next steps. In his next appointment we’ll start his sentence planning.`,
        'sessionId': 979
      }
      // {
      //   'type': 'Appointment',
      //   'type-of-session': 'Phone appointment',
      //   'lastUpdatedBy': 'Mark Berridge',
      //   'timestamp': '2021-03-09T14:53',
      //   'session-date': '2021-03-09',
      //   'session-start-time': '2pm',
      //   'session-end-time': '2:30pm',
      //   'repeating': 'No, it’s a one-off session',
      //   'session-counts-towards-rar': 'No',
      //   'did-service-user-comply': 'No',
      //   'non-compliance-reason': 'Attended - failed to comply',
      //   'confirmed': true,
      //   'session-notes': `I called Dylan to confirm he had understood where he needed to be and when for his induction appointment. He was rude and abusive and in general very hostile in reaction to his sentence saying this wasn’t his fault. He mentioned he “doesn’t have time for this”. I reiterated that he must be at the office on Thursday as part of his sentence requirements and if he doesn’t it’s going to reflect very poorly.`,
      //   'sessionId': 978
      // }
    ]
  },
  // Brian
  {
    'serviceUserPersonalDetails': {
      'name': 'Brian Wilson',
      'firstName': 'Brian',
      'preferredNameKnownAs': 'Baz',
      'dateOfBirth': '1958-01-19',
      'address': [
        '11 Southern Way',
        'Bradford',
        'BR7 6DZ'
      ],
      'phone': '07700 900 721',
      'email': 'example@example.biz',
      'aliases': [],
      'preferredLanguage': 'English',
      'nationality': 'British',
      'ethnicity': 'White: British',
      'religion': 'None',
      'gender': 'Male',
      'sexualOrientation': 'Heterosexual',
      'disabilitiesAndAdjustments': ['Mental Illness'],
      'circumstances': {
        'employment': 'Retired (receiving a pension)',
        'housingStatus': 'Householder (Owner - freehold or leasehold)',
        'safeguardingIssues': ['Referral to Safeguarding Team-Response Received']
      }
    },
    'personalContacts': [
      {
        'name': 'Mary Bell',
        'relationship': 'Wife (separated)',
        'phone': '01274 773 355',
        'address': [
          '21 Valley Parade',
          'Bradford',
          'BD8 7DY'
        ]
      },
      {
        'name': 'Lewis Wilson',
        'relationship': 'Son (30 years old)',
        'phone': '01632 960130',
        'address': [
          '57 Whatlington Road',
          'Coventry',
          'CV1 3PD'
        ]
      }
    ],
    'professionalContacts': [
      {
        'name': 'Fred Parker',
        'phone': '01632 960 130',
        'email': 'example@example.gov',
        'provider': 'Public Protection Unit',
        'localDeliveryUnit': 'Bradford',
        'team': 'Sex offenders',
        'allocatedUntilDate': '2014-04-11'
      },
      {
        'name': 'Sian McDougall',
        'phone': '01274 496 0993',
        'email': 'example@example.gov',
        'provider': 'National Probation Service',
        'localDeliveryUnit': 'Bradford Probation Office',
        'team': 'Sex offenders',
        'allocatedUntilDate': '2014-04-11'
      }
    ],
    'PNC': '2015/0292174J',
    'CRN': 'E577913',
    'currentOrder': {
      'type': 'Suspended Sentence Order',
      'description': 'Breach of Sexual Offences Prevention Order (Sex Offs Act 2003) [incl Breaches of Sex Offender Order (C&D Act 1998)',
      'lengthInMonths': 24,
      'progressInMonths': 17,
      'startDate': '2019-11-29',
      'endDate': helpers.sentenceEndDate({lengthInMonths: 24, startDate: '2019-11-29'}),
      'offenceDate': '2018-08-01',
      'convictionDate': '2019-10-11',
      'court': 'Bradford Crown Court',
      'responsibleCourt': 'Bradford Crown Court',
      'requirements': {
        'rar': {
          'type': 'RAR',
          'value': '20 days',
          'lengthInDays': 20,
          'progressInDays': 18
        },
        'upw': {
          'type': 'Unpaid work',
          'value': '150 hours',
          'lengthInHours': 150,
          'progressInHours': 50
        },
        'ap': {
          'type': 'Accredited Programme ',
          'value': 'Horizon completed'
        }
      },
      'courtDocuments': [
        {
          'name': 'Pre-sentence report',
          'lastUpdateDate': '2019-09-27'
        },
        {
          'name': 'Order',
          'lastUpdateDate': '2019-09-27'
        },
        {
          'name': 'CPS Pack',
          'lastUpdateDate': '2019-09-27'
        },
        {
          'name': 'Previous convictions',
          'lastUpdateDate': '2019-09-27'
        }
      ],
      'personalDocuments': [
        {
          'name': 'Induction pack',
          'lastUpdateDate': '2019-10-08'
        }
      ]
    },
    'previousOrders': [
      {
        'title': 'Suspended Sentence Order (12 Months)',
        'description': 'Sexual assault on a female (Sexual Offences Act 2003) - 02005',
        'endDate': '2014-04-11'
      }
    ],
    'breachesCount': 1,
    'restrainingOrdersCount': 0,
    'riskBadges': [
      {
        text: 'High risk of harm',
        class: 'red',
        rosh: true
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
      }
    ],
    'riskOfSeriousHarmLevel': {
      text: 'High',
      class: 'red'
    },
    'riskOfHarm': [
      {
        'riskTo': 'Themselves',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Children',
        'inCommunity': {
          text: 'High',
          class: 'red'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Public',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Known adult',
        'inCommunity': {
          text: 'High',
          class: 'red'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Staff',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Prisoners',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      }
    ],
    'criminogenicNeeds': [
      'Alcohol Misuse',
      'Thinking & Behaviour'
    ],
    'status': 'Previously known',
    'previousOrderStatus': 'Order ended 14 Nov 2014',
    'contactHistory': [
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': helpers.today({atTime: '15:00'}),
        'session-date': helpers.today(),
        'session-start-time': '3pm',
        'session-end-time': '3:30pm',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'Attitudes, thinking and behaviour',
        'session-rar-subcategory': 'Attitudes, thinking and behaviour',
        'sessionId': 600
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Phone appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-04-07T10:32',
        'session-date': '2021-04-07',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Brian answered as arranged. He stated that he has been fine this week and that he hasn’t been up to much and has only been reading books and newspapers. B was happy to discuss the emotional impact of his daughter not wanting contact with him. B says that he has been struggling with this and that it is taking a toll on his mental health.`,
        'sessionId': 601
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Text message',
        'from': 'Mark Berridge',
        'to': 'Service user',
        'timestamp': '2021-04-06T12:23',
        'contents': 'Hi Brian - it was good to speak today. To confirm, your next probation appointment is by telephone on 7th April 2021 at 10:00. I will call you. Telephone appointments are mandatory and enforceable. Many thanks',
        'sessionId': 602
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Email',
        'from': 'Mark Berridge',
        'to': 'Social Services',
        'timestamp': '2021-04-06T10:27',
        'contents': `I have tried to call you today regarding Brian Wilson. Could you give me a call back please when you can to for an update on the case. Kind regards`,
        'sessionId': 603
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Phone appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-31T10:53',
        'session-date': '2021-03-31',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Brian answered as arranged. Brian is concerned about his living arrangements as he has received a few threats.
        We discussed B's objectives and I asked him to reflect on his progress over the last few months. He thinks he is progressing well and when asked what alternatives he now uses to deal with his emotions he explained that he likes to keep himself busy and have a routine in place.`,
        'sessionId': 604
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-02-19T10:53',
        'session-date': '2021-02-19',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Brian arrived at the office as arranged. He asked his wife to drive him, so she dropped him off and waited for his appointment to finish. We spoke for a while about his SP I asked if there was anything he would particularly like to have as an objective. He said that he wants to speak about the future and have plans in place to put his offence behind him. I informed him that it would be necessary to have objectives regarding his alcohol misuse.`,
        'sessionId': 605
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Phone appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-11T10:16',
        'session-date': '2021-03-11',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Brian answered as arranged. We talked about doing some work around healthy attitudes and how to manage alcohol use and emotions - reminded B of the need to manage any alcohol use especially if he is feeling low or angry and for him to consider the impact of his behaviour on his family. Brian accepted this.`,
        'sessionId': 606
      }
    ]
  },
  // Spencer
  {
    'serviceUserPersonalDetails': {
      'name': 'Spencer Gil',
      'firstName': 'Spencer',
      'dateOfBirth': '1998-01-04',
      'address': [
        '27 Camber Road',
        'Leeds',
        'West Yorkshire',
        'LS2 7EW'
      ],
      'phone': '07700 900 469',
      'email': 'example@example.com',
      'aliases': [],
      'preferredLanguage': 'English',
      'nationality': 'British',
      'ethnicity': 'White',
      'religion': 'None',
      'gender': 'Male',
      'sexualOrientation': 'Heterosexual',
      'disabilitiesAndAdjustments': ['Attention Deficit Hyperactivity Disorder (ADHD)'],
      'circumstances': {
        'employment': 'Full-time employed (30 or more hours per week)',
        'housingStatus': 'Friends/Family (settled)',
        'safeguardingIssues': []
      }
    },
    'personalContacts': [
      {
        'name': 'Gerry Gil',
        'relationship': 'Dad',
        'address': [
          '27 Camber Road',
          'Leeds',
          'West Yorkshire',
          'LS2 7EW'
        ],
        'phone': '07700 900 559'
      }
    ],
    'professionalContacts': [],
    'PNC': '2021/234511111G',
    'CRN': 'K789021',
    'currentOrder': {
      'type': 'Suspended Sentence Order',
      'description': 'Drive whilst disqualified (Revised 2017). Road Traffic Act 1988',
      'lengthInMonths': 12,
      'progressInMonths': 0,
      'startDate': helpers.happenedOn({daysAgo: '3'}),
      'endDate': helpers.sentenceEndDate({lengthInMonths: 12, startDate: helpers.happenedOn({daysAgo: '3'})}),
      'offenceDate': '2021-01-03',
      'convictionDate': helpers.happenedOn({daysAgo: '3'}),
      'court': "Leeds Magistrates' Court",
      'responsibleCourt': "Leeds Magistrates' Court",
      'requirements': {
        'rar': {
          'type': 'RAR',
          'value': '20 days',
          'lengthInDays': 20,
          'progressInDays': 0
        },
        'upw': {
          'type': 'Unpaid work',
          'value': '150 hours',
          'lengthInHours': 150,
          'progressInHours': 0
        }
      },
      'courtDocuments': [
        {
          'name': 'Pre-sentence report',
          'lastUpdateDate': helpers.happenedOn({daysAgo: '3'})
        },
        {
          'name': 'Order',
          'lastUpdateDate': helpers.happenedOn({daysAgo: '3'})
        },
        {
          'name': 'CPS Pack',
          'lastUpdateDate': helpers.happenedOn({daysAgo: '3'})
        },
        {
          'name': 'Previous convictions',
          'lastUpdateDate': null
        }
      ],
      'personalDocuments': [
        {
          'name': 'Induction pack',
          'lastUpdateDate': null
        }
      ]
    },
    'previousOrders': [],
    'breachesCount': 0,
    'restrainingOrdersCount': 0,
    'riskBadges': [
      {
        text: 'Medium risk of harm',
        class: 'orange',
        rosh: true
      }
    ],
    'riskOfSeriousHarmLevel': {
      text: 'Medium',
      class: 'orange'
    },
    'riskOfHarm': [
      {
        'riskTo': 'Themselves',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Children',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Public',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Known adult',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Staff',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Prisoners',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      }
    ],
    'criminogenicNeeds': [
      'Lifestyle & Associates'
    ],
    'status': 'No record',
    'contactHistory': [
      {
        'type': 'Appointment',
        'timestamp': helpers.today({ atTime: '14:00' }),
        'session-date': helpers.today(),
        'session-start-time': '2pm',
        'session-end-time': '2:30pm',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'lastUpdatedBy': 'Mark Berridge',
        'sessionId': 123
      }
    ]
  },
  // Gary
  {
    'hidden': false,
    'serviceUserPersonalDetails': {
      'name': 'Gary Hart',
      'firstName': 'Gary',
      'dateOfBirth': '1999-10-02',
      'address': [
        '94 Kendell Street',
        'Sheffield',
        'S2 9NL'
      ],
      'phone': '07700 900 721',
      'email': 'example@example.com',
      'aliases': [],
      'preferredLanguage': 'English',
      'nationality': 'British',
      'ethnicity': 'White: British',
      'religion': 'None',
      'gender': 'Male',
      'sexualOrientation': 'Heterosexual',
      'disabilitiesAndAdjustments': [],
      'circumstances': {
        'employment': 'Full-time employed (30 or more hours per week)',
        'housingStatus': 'Friends/Family (settled)',
        'safeguardingIssues': []
      }
    },
    'personalContacts': [
      {
        'name': 'Shelly Davis',
        'relationship': 'Partner',
        'address': [
          '100 Drive Street',
          'Flat 10',
          'Sheffield',
          'S23 5FW'
        ]
      },
      {
        'name': 'Bill and Sally Hart',
        'relationship': 'Parents',
        'address': [
          '94 Kendell Street',
          'Sheffield',
          'S2 9NL'
        ]
      }
    ],
    'professionalContacts': [
      {
        'name': 'Rotherham',
        'phone': '0114 7496 0681',
        'email': 'example@example.com',
        'provider': 'CPA South Yorkshire',
        'localDeliveryUnit': 'Rotherham',
        'team': 'Rotherham LMC',
        'allocatedUntilDate': '2019-11-19'
      }
    ],
    'PNC': 'BC34587',
    'CRN': '493227',
    'currentOrder': {
      'type': 'Suspended Sentence Order',
      'description': 'Common assault and battery (Criminal Law Act/CJ and Public Order Act) - 10501',
      'lengthInMonths': 12,
      'progressInMonths': 6,
      'startDate': '2020-10-19',
      'endDate': helpers.sentenceEndDate({ lengthInMonths: 12, startDate: '2020-10-19' }),
      'offenceDate': '2020-01-02',
      'convictionDate': '2020-03-03',
      'court': "Sheffield Magistrates' Court",
      'responsibleCourt': "Sheffield Magistrates' Court",
      'requirements': {
        'rar': {
          'type': 'RAR',
          'value': '15 days',
          'lengthInDays': 15,
          'progressInDays': 3
        },
        'ap': {
          'type': 'Accredited Programme ',
          'value': 'Building Better Relationships'
        }
      },
      'courtDocuments': [
        {
          'name': 'Pre-sentence report',
          'lastUpdateDate': '2020-10-19'
        },
        {
          'name': 'Order',
          'lastUpdateDate': '2020-10-19'
        },
        {
          'name': 'CPS Pack',
          'lastUpdateDate': '2020-10-19'
        },
        {
          'name': 'Previous convictions',
          'lastUpdateDate': '2020-10-19'
        }
      ],
      'personalDocuments': [
        {
          'name': 'Induction pack',
          'lastUpdateDate': '2020-10-26'
        }
      ]
    },
    'previousOrders': [
      {
        'title': 'Suspended Sentence Order (12 Months)',
        'description': 'Using violence to secure entry (Criminal Law Act/CJ and Public Order Act) - 19563',
        'endDate': '2019-08-15'
      }
    ],
    'breachesCount': 0,
    'restrainingOrdersCount': 0,
    'riskBadges': [
      {
        text: 'Medium risk of harm',
        class: 'orange',
        rosh: true
      },
      {
        text: 'Domestic abuse',
        class: 'turquoise',
        notes: 'Partner is the victim',
        reviewDue: helpers.happeningIn({ daysLater: 5, atTime: '13:00' }),
        dateAdded: helpers.happenedOn({ daysAgo: '175' }),
        mostRecentReviewDate: helpers.happenedOn({ daysAgo: '85' })
      }
    ],
    'riskOfSeriousHarmLevel': {
      text: 'Medium',
      class: 'orange'
    },
    'riskOfHarm': [
      {
        'riskTo': 'Themselves',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Children',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Public',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Known adult',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Staff',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Prisoners',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      }
    ],
    'criminogenicNeeds': [
      'Alcohol Misuse',
      'Relationships',
      'Thinking and attitudes'
    ],
    'status': 'Previously known',
    'previousOrderStatus': 'Order ended 15 Aug 2019',
    'contactHistory': [
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Sally Smith',
        'timestamp': helpers.today({ atTime: '14:30' }),
        'session-date': helpers.today(),
        'session-start-time': '2:30pm',
        'session-end-time': '3pm',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `• Update Gary on referral to group programme
        • Review alcohol diary`,
        'sessionId': 'A10'
      },
      {
        'type': 'Appointment',
        'timestamp': helpers.happenedOn({monthsAgo: 1, atTime: '10:00'}),
        'session-date': helpers.happenedOn({daysAgo: 20}),
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'Attitudes, thinking and behaviour',
        'session-rar-subcategory': 'Attitudes, thinking and behaviour',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Sally Smith',
        'session-notes': `Gary has managed to pay off his gambling debt sooner than he expected by taking on some overtime at work. He seems really delighted with the progress. We discussed methods on how to not accumulate debt from now on and that his next goal was to start saving for a flat.

        His alcohol consumption has reduced however he still struggles when out with his mates. We moved on to another are to help focus on this by

        Demonstrating improved emotional self management

        His diary is a good step towards this but we discussed additional methods. He mentioned he likes going to his local gym, so we set a time early on Saturday mornings for him to book in a gym session so he avoids drinking too much the night before. We agreed to try this for a few weeks to see if it helps with his decision making.`,
        'sessionId': 'A09'
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Sally Smith',
        'timestamp': helpers.happenedOn({daysAgo: 40, atTime: '10:00'}),
        'session-date': helpers.happenedOn({daysAgo: 40}),
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `Gary arrived on time and presented well. There was no sign of recent alcohol use and we discussed his alcohol diary to which he has said he managed it 4 days out of 7. This is an improvement for him.

        We discussed that I felt he would really benefit from group work on Building Better Relationships and he agreed he felt ready for group work now as he wanted to talk to other people “like him”

        Our next meeting we shall review his alcohol diary once more and continue work on thinking skills and attitudes`,
        'sessionId': 'A08'
      },
      {
        'type': 'Phone call',
        'from': 'Service user',
        'to': 'Sally Smith',
        'timestamp': helpers.happenedOn({daysAgo: 45, atTime: '13:00'}),
        'contents': `Phone call from Gary to double check when his next appointment was, we talked briefly about how his recent week off work had been. He mentioned that he got quite drunk and had an argument with his ex partner Shelly over the phone. He admitted that he had gone to her home and shouted outside the door and the police were called but Shelly refused to press charges. This matched the Reportable incidents information I received this morning.

        We talked about his goal to reduce his alcohol intake and that he will now keep a diary of his drinking and agreed to book in a supervision appointment for a week's time.`,
        'sessionId': 'A07'
      },
      {
        'type': 'Appointment',
        'timestamp': helpers.happenedOn({daysAgo: 50, atTime: '10:00'}),
        'session-date': helpers.happenedOn({daysAgo: 50}),
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'Attitudes, thinking and behaviour',
        'session-rar-subcategory': 'Attitudes, thinking and behaviour',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Sally Smith',
        'session-notes': `Gary mentioned that his mum had helped him with his homework prior to the session. He was worried this would mean he had “cheated”. We discussed how leaning on others for support was a good thing when trying to complete a task especially someone like his mum who he has a good relationship with.

          Gary has completed the tasks set for him at our previous meeting and has set out 3 goals for the next 6 months

          Reduce his alcohol intake from 8 beers a day to 2
          To start saving for a deposit on his own flat
          To pay off his gambling debt of £800

          We discussed techniques for each off those goals and agreed we will review them every month to monitor progress. We also discussed how his 2nd goal needed to have something we can measure success by and have agreed to change it to “save £500 towards the first months rent as deposit on a flat”

          I have set Gary some further work for him to write down how he is going to achieve these things and break them down into steps`,
        'sessionId': 'A06'
      },
      {
        'type': 'Appointment',
        'timestamp': helpers.happenedOn({daysAgo: 60, atTime: '10:00'}),
        'session-date': helpers.happenedOn({daysAgo: 60}),
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'Attitudes, thinking and behaviour',
        'session-rar-subcategory': 'Attitudes, thinking and behaviour',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Sally Smith',
        'session-notes': `Gary presented on time and engaged well with the session.

        Started working with Gary on Thinking Skills and attitudes and agreed that our aim is to cover the following areas over the next few session

        • demonstrating improved problem-solving and goal setting skills
        • demonstrating improved emotional self management
        • considering other people’s perspectives and emotional responses
        • develop more positive relationships

        This session we discussed problem solving and goal setting skills. I have set Gary some homework to set 5 things he would like to achieve over the next 6 months that will improve his well being. For review at our next session. `,
        'sessionId': 'A05'
      },
      {
        'lastUpdatedBy': 'Sally Smith',
        'type': 'Email',
        'to': 'someone@socialservices.gov.uk',
        'from': 'Sally Smith',
        'timestamp': helpers.happenedOn({daysAgo: 69, atTime: '13:00'}),
        'contents': `SUBJECT: Gary Hart
        Hi there,

        Just to inform you that Gary Hart is now longer living with his partner and her daughter which has reduced concerns I had over his living arrangements

        I’ll update you if that changes in the future.`,
        'sessionId': 'A04'
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Sally Smith',
        'timestamp': helpers.happenedOn({daysAgo: 70, atTime: '10:00'}),
        'session-date': helpers.happenedOn({daysAgo: 70}),
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `Carried out initial sentence planning supervision appointments with Gary

          Gary and I discussed some of his criminogenic needs, he agreed that those were three areas he needed support with especially his use of alcohol when dealing with relationships. We agreed an action to refer him to an alcohol treatment programmer however he also agreed that we should do some work together on thinking skills and attitudes.

          Plan to allocate 5 of his 20 RAR days to that piece of work

          His current relationship with his partner Shelly has ended since our last meeting and he has moved in with his parents, with whom he has a good relationship. He understands that this is a good opportunity to get his alcohol consumption under control in a supportive environment. However he is adamant that he does not want to do any group work. I believe that group work is important to him rehabilitating and reducing his chance of reoffending so will approach this with him in the future.

          First 1-1 RAR session to be booked for 2 weeks time`,
        'sessionId': 'A03'
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Sally Smith',
        'timestamp': helpers.happenedOn({daysAgo: 90, atTime: '10:00'}),
        'session-date': helpers.happenedOn({daysAgo: 90}),
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `Induction appointment with Gary

        Gary has always been in stable accommodation. Prior to moving in with his current partner he lived with his parents with whom he has a good relationship.

        Gary has a stable employment history working as a labourer on a construction site with his father. He earns approx. £2,500 a month. He has around £900 debt as a result of gambling, but he is working towards paying this off.

        Gary reports that he mostly drinks on weekends with his friends at the local pub. His previous conviction in 2019 was committed whilst he had been drinking heavily throughout the day.
        Gary has no children.

        Gary reports no issues with drug misuse. Gary reports good physical and mental health. There is no history of self-harm or suicide.`,
        'sessionId': 'A02'
      },
      {
        'lastUpdatedBy': 'Sally Smith',
        'type': 'Email',
        'from': 'someone@socialservices.gov',
        'to': 'Sally Smith',
        'timestamp': helpers.happenedOn({daysAgo: 91, atTime: '13:00'}),
        'contents': `Hi there,
        I got your message about Gary Hart. Yes he is known to us.

        He has previously threatened his partner and their daughter when under the influence of alcohol. On one occasion Mr Hart assaulted his daughter, on another occasion the daughter witnessed Mr Hart self-harming.

        Daughter’s details follows:
        Carina Hart
        born 13/03/2009`,
        'sessionId': 'A01'
      }
    ]
  },
  // Andrei
  {
    'serviceUserPersonalDetails': {
      'name': 'Andrei Edwards',
      'firstName': 'Andrei',
      'dateOfBirth': '1992-02-01',
      'address': [
        '22 Smith Street',
        'Walker',
        'Newcastle-upon-Tyne',
        'NE6 4EY'
      ],
      'phone': '09100 822 429',
      'email': 'felis@ataugue.co.uk',
      'aliases': [],
      'preferredLanguage': 'English',
      'nationality': 'British',
      'ethnicity': 'White: British',
      'religion': 'None',
      'gender': 'Male',
      'sexualOrientation': 'Bisexual',
      'disabilitiesAndAdjustments': [],
      'circumstances': {
        'employment': 'Part-time employed (under 16 hours per week)',
        'housingStatus': 'Rental accommodation - private rental',
        'safeguardingIssues': []
      }
    },
    'personalContacts': [
      {
        'name': 'Shelly Davis',
        'relationship': 'Partner',
        'address': [
          '100 Drive Street',
          'Flat 10',
          'Sheffield',
          'S23 5FW'
        ]
      },
      {
        'name': 'John Edwards',
        'relationship': 'Brother',
        'address': [
          '64 Pharetra Ave',
          'Blaydon',
          'Newcastle-upon-Tyne',
          'NE4 7YB'
        ]
      }
    ],
    'professionalContacts': [
      {
        'name': 'Ted Brown',
        'phone': '07624 503311',
        'email': 'Cras.eget@orci.co.uk',
        'provider': 'Community Health and Social Care Direct'
      }
    ],
    'PNC': '2021/156400000G',
    'CRN': 'H6785129',
    'currentOrder': {
      'type': 'Community Order',
      'description': 'Use threatening / abusive / insulting words / behaviour with intent to cause fear of / provoke unlawful violence',
      'lengthInMonths': 12,
      'progressInMonths': 1,
      'startDate': '2021-03-12',
      'endDate': helpers.sentenceEndDate({ lengthInMonths: 12, startDate: '2021-03-12' }),
      'offenceDate': '2021-01-31',
      'convictionDate': '2021-03-10',
      'court': "South Tyneside Magistrates' Court",
      'responsibleCourt': "South Tyneside Magistrates' Court",
      'requirements': {
        'rar': {
          'type': 'RAR',
          'value': '22 days',
          'lengthInDays': 22,
          'progressInDays': 3
        },
        'upw': {
          'type': 'Unpaid work',
          'value': '150 hours',
          'lengthInHours': 150,
          'progressInHours': 35
        }
      },
      'courtDocuments': [
        {
          'name': 'Pre-sentence report',
          'lastUpdateDate': '2021-03-11'
        },
        {
          'name': 'Order',
          'lastUpdateDate': '2021-03-10'
        },
        {
          'name': 'CPS Pack',
          'lastUpdateDate': '2021-02-10'
        },
        {
          'name': 'Previous convictions',
          'lastUpdateDate': '2020-10-19'
        }
      ],
      'personalDocuments': [
        {
          'name': 'Induction pack',
          'lastUpdateDate': '2021-03-15'
        }
      ]
    },
    'previousOrders': [
      {
        'title': 'Suspended Sentence (18 months)',
        'description': 'Common assault and battery',
        'endDate': '2019-01-05'
      }
    ],
    'breachesCount': 0,
    'restrainingOrdersCount': 1,
    'riskBadges': [
      {
        text: 'Medium risk of harm',
        class: 'orange',
        rosh: true
      },
      {
        text: 'Restraining Order',
        class: 'turquoise',
        notes: 'Against ex-partner',
        reviewDue: helpers.happeningIn({ daysLater: 5, atTime: '13:00' }),
        dateAdded: helpers.happenedOn({ daysAgo: '175' }),
        mostRecentReviewDate: helpers.happenedOn({ daysAgo: '85' })
      }
    ],
    'riskOfSeriousHarmLevel': {
      text: 'Medium',
      class: 'orange'
    },
    'riskOfHarm': [
      {
        'riskTo': 'Themselves',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Children',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Public',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Known adult',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Staff',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      },
      {
        'riskTo': 'Prisoners',
        'inCommunity': {
          text: 'Low',
          class: 'green'
        },
        'inCustody': {
          text: 'Low',
          class: 'green'
        }
      }
    ],
    'criminogenicNeeds': [
      'Substance misuse',
      'Lifestyle'
    ],
    'status': 'Previously known',
    'previousOrderStatus': 'Order ended 05 Jan 2019',
    'contactHistory': [
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': helpers.today({ atTime: '16:00' }),
        'session-date': helpers.today(),
        'session-start-time': '4pm',
        'session-end-time': '4:30pm',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'Attitudes, thinking and behaviour',
        'session-rar-subcategory': 'Attitudes, thinking and behaviour',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'sessionId': 699
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Document',
        'action': 'First warning letter sent',
        'timestamp': '2021-04-15T17:55',
        'contents': `Attached copy of warning letter sent to Andrei following his failure to comply on 14th of April`,
        'sessionId': 7002,
        'filenames': ['warning-letter.doc']
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Note',
        'timestamp': '2021-04-14T11:55',
        'contents': `After Andrei's check in appointment, I've started the interventions process for substance misuse. He was clearly under the influence when he arrived for his appointment. He was uncommunicative and sluggish and it was apparent when he arrived at the reception desk that he wouldn't be able to engage with me for the check in appointment.`,
        'sessionId': 700
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-04-14T11:30',
        'session-date': '2021-04-14',
        'session-start-time': '11:30am',
        'session-end-time': '12:30pm',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'No',
        'non-compliance-reason': 'Attended - sent home (behaviour)',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `This was a check-in appointment and Andrei mentioned that he might have to change his mobile phone number as some of his contacts are drug users and he doesn't want to jeopardise his probation. He was clearly under the influence during this appointment and did not comply.

        A warning letter has been sent`,
        'sessionId': 701
      },
      {
        'type': 'Appointment',
        'timestamp': '2021-04-07T11:30',
        'session-date': '2021-04-07',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'Attitudes, thinking and behaviour',
        'session-rar-subcategory': 'Attitudes, thinking and behaviour',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Mark Berridge',
        'session-notes': `Andrei had completed the homework assigned last week and engaged well with the session. He told me about how he had already tried using the thinking skills when he felt angry at the shop a few days ago. He is making progress.`,
        'sessionId': 702
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-31T11:30',
        'session-date': '2021-03-31',
        'session-start-time': '11:30am',
        'session-end-time': '12:30pm',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `Andrei was very distracted but he did engage with me. We talked about working on a RAR activity in the next session and he was a agreeable to that. I assigned him some homework and we talked about technique for him to control his anger when he is confronted. He agreed to try and think about it. He took the paperwork.`,
        'sessionId': 703
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-24T11:30',
        'session-date': '2021-03-24',
        'session-start-time': '11:30am',
        'session-end-time': '12:30pm',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `Andrei turned up but is still angry about having to do UPW. He wants to increase his hours at his job and is upset that he can't take the hours they offered him because of UPW and having to attend appointments here. We discussed how he might approach his employer to find time around these commitments but he was negative about how well it would go. He did not disclose the RI and I didn't bring it up with him in this meeting because it wouldn't have been a productive conversation in his angry state.`,
        'sessionId': 704
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Email',
        'to': 'someone@socialservices.gov.uk',
        'from': 'Mark Berridge',
        'timestamp': '2021-03-22T13:33',
        'contents': `Email from Case Admin to confirm a Reportable Incident took place on Friday 19/03. Andrei was reported to the police for shouting at a group of women from the other side of the road on Friday night. He appeared to be under the influence of alcohol.`,
        'sessionId': 705
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-17T11:30',
        'session-date': '2021-03-17',
        'session-start-time': '11:30am',
        'session-end-time': '12:30pm',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `After the last session when we worked on the ISP, we ran through it together to ensure Andrei understands what is expected and how I will work with him to progress this. We discussed RAR activities in more detail and I explained they would involve doing some preparation homework the week prior. Andrei struggles with his handwriting and asked if he could do the RAR homework online but I explained this is not currently available.`,
        'sessionId': 706
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-12T11:30',
        'session-date': '2021-03-12',
        'session-start-time': '11:30am',
        'session-end-time': '12:30pm',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `This was Andrei's second appointment and we discussed his Sentence Plan and what to include and what he thought would help him. He has been through this process before and was quite negative about how likely it was that he could change his behaviour. We discussed the different types of future he might have and he left the session with a more positive attitude. The ISP was completed.`,
        'sessionId': 707
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-10T11:30',
        'session-date': '2021-03-10',
        'session-start-time': '11:30am',
        'session-end-time': '12:30pm',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `Andrei arrived on time for his Induction appointment. He has been on probation before and so he was familiar with the process and all the paperwork. He complained about having to repeat it all and asked why we couldn't just use the previous answers he gave. He was reluctant to engage and is angry and feels wronged by having to complete this order. We went through the paperwork as quickly as possible to alleviate the tension. Induction pack has been scanned and uploaded by Case Admin.`,
        'sessionId': 708
      }
    ]
  }
]
