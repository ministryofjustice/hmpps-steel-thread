const path = require('path')
const contactTypes = require(path.join(__dirname, '../app/data/reference/contact-types.json'))
const { Locations } = require(path.join(__dirname, '../app/models/locations.js'))
const { ArrangedSession } = require(path.join(__dirname, '../app/models/arranged-session.js'))
const { Outcomes } = require(path.join(__dirname, '../app/models/outcomes.js'))
const { RARCategories } = require(path.join(__dirname, '../app/models/rar-categories.js'))
const { DateTime } = require('luxon-business-days')

exports.progressPercentage = (progressInMonths, lengthInMonths) => {
  return progressInMonths * 1.0 * 100 / lengthInMonths
}

exports.arrangedSession = (params) => {
  return new ArrangedSession(params)
}

exports.possibleRARCategories = (providerCode, typeOfSession, contactTypeCode) => {
  return new RARCategories(providerCode, typeOfSession, contactTypeCode).asList
}

exports.possibleContactTypes = (providerCode) => {
  return Object.keys(contactTypes).map(code => {
    return { 'code': code, 'description': contactTypes[code].description }
  })
}

exports.possibleLocations = (providerCode, teamCodes) => {
  return Locations.forTeams(teamCodes)
}

exports.happeningIn = (params) => {
  return DateTime.now().plusBusiness({days: params.daysLater}).toISODate() + (params.atTime ? 'T' + params.atTime : '')
}

exports.today = (params = {}) => {
  return exports.happeningIn({daysLater: 0, atTime: params.atTime})
}

exports.tomorrow = (params = {}) => {
  return exports.happeningIn({daysLater: 1, atTime: params.atTime})
}

exports.yesterday = (params = {}) => {
  return exports.happeningIn({daysLater: -1, atTime: params.atTime})
}

exports.happenedOn = (params = {}) => {
  return exports.happeningIn({daysLater: -params.daysAgo, atTime: params.atTime})
}

exports.sentenceEndDate = (params = {}) => {
  return DateTime
    .fromISO(params.startDate)
    .plus({months: params.lengthInMonths})
    .minus({days: 1})
    .toISODate()
}

exports.yearsSince = (time) => {
  const i = DateTime.fromISO(time).until(DateTime.now())
  return i.toDuration(['years', 'months']).years
}

exports.currentTimeString = () => {
  return DateTime.now().toISO()
}

// example params = { date: '2021-04-16', time: '4pm' }
// returns a DateTime
exports.dateTimeFrom = (params) => {
  // normalise 4pm => 4:00pm
  if (params.time && !params.time.includes(':')) {
    params.time = params.time.replace(/(\d+)(am|pm)/, '$1:00$2')
  }

  const dateString = params.time ? `${params.date} ${params.time}` : `${params.date} 12:00am`
  return DateTime.fromString(dateString, 'yyyy-MM-dd h:mma')
}

// example params = { date: '2021-04-16', time: '4pm' }
exports.isInThePast = (params) => {
  return DateTime.now() > exports.dateTimeFrom(params)
}

exports.isoDateFromDateInputs = (year, month, day) => {
  return DateTime.local(parseInt(year), parseInt(month), parseInt(day)).toISODate()
}

exports.startDateTime = (appointment) => {
  var timeString
  // normalise 4pm => 4:00pm
  if (!appointment['session-start-time'].includes(':')) {
    timeString = appointment['session-start-time'].replace(/(\d+)(am|pm)/, '$1:00$2')
  } else {
    timeString = appointment['session-start-time']
  }

  return DateTime.fromString(`${appointment['session-date']} ${timeString}`, 'yyyy-MM-dd h:mma')
}

const filterEntriesByCategory = (category) => {
  return function filterEntriesByCategory(entry) {
    switch(category) {
      case 'all-appointments':
        return entry.type === 'Appointment'
      case 'other-communication':
        return entry.type !== 'Appointment'
      case 'previous-appointments':
        return entry.type === 'Appointment' && exports.isInThePast({date: entry['session-date'], time: entry['session-start-time']})
      case 'upcoming-appointments':
        return entry.type === 'Appointment' && !exports.isInThePast({date: entry['session-date'], time: entry['session-start-time']})
      default:
        return true
    }
  }
}

exports.activityLog = (CRN, data, params = {}) => {
  return Object
    .values(data['communication'][CRN])
    .filter(filterEntriesByCategory(params.category))
    .sort((a, b) => a.timestamp < b.timestamp ? 1 : -1)
}

exports.futureAppointments = (CRN, data) => {
  return Object
    .values(data['communication'][CRN])
    .filter(entry => entry.type === 'Appointment' )
    .filter(entry => !exports.isInThePast({date: entry['session-date'], time: entry['session-end-time']}) )
}

exports.nextAppointment = (CRN, data) => {
  return exports.futureAppointments(CRN, data)
    .sort((a, b) => exports.startDateTime(a) < exports.startDateTime(b) ? -1 : 1)
    .shift()
}

exports.previousAppointmentsWithoutOutcomes = (CRN, data) => {
  return exports.activityLog(CRN, data, {category: 'previous-appointments'})
    .filter(entry => entry['did-service-user-comply'] === undefined)
}

exports.failureToComplyReasons = (providerCode, typeOfSession, contactTypeCode) => {
  const contactType = new ArrangedSession({
    providerCode: providerCode,
    typeOfSession: typeOfSession,
    contactType: contactTypeCode
  }).contactType
  return Outcomes.failureToComplyReasons(contactType)
}

exports.acceptableAbsenceReasons = (providerCode, typeOfSession, contactTypeCode) => {
  const contactType = new ArrangedSession({
    providerCode: providerCode,
    typeOfSession: typeOfSession,
    contactType: contactTypeCode
  }).contactType
  return Outcomes.acceptableAbsenceReasons(contactType)
}

exports.allVisibleCases = (data) => {
  return data.cases.filter(entry => !entry.hidden)
}

exports.userName = (data) => {
  return data['user'] && data['user']['first-name'] ? `${data['user']['first-name']} ${data['user']['last-name']}` : 'Mark Berridge'
}

exports.replaceDefaultUserWithSignedInUser = (defaultUser, data) => {
  return defaultUser === 'Mark Berridge' ? exports.userName(data) : defaultUser
}

exports.addHelpers = function (env) {
  env.addGlobal('progressPercentage', exports.progressPercentage)

  env.addGlobal('arrangedSession', exports.arrangedSession)

  env.addGlobal('possibleRARCategories', exports.possibleRARCategories)

  env.addGlobal('possibleContactTypes', exports.possibleContactTypes)

  env.addGlobal('possibleLocations', exports.possibleLocations)

  env.addGlobal('yearsSince', exports.yearsSince)

  env.addGlobal('currentTimeString', exports.currentTimeString)

  env.addGlobal('activityLog', exports.activityLog)

  env.addGlobal('futureAppointments', exports.futureAppointments)

  env.addGlobal('isInThePast', exports.isInThePast)

  env.addGlobal('isoDateFromDateInputs', exports.isoDateFromDateInputs)

  env.addGlobal('nextAppointment', exports.nextAppointment)

  env.addGlobal('previousAppointmentsWithoutOutcomes', exports.previousAppointmentsWithoutOutcomes)

  env.addGlobal('today', exports.today)

  env.addGlobal('allVisibleCases', exports.allVisibleCases)

  env.addGlobal('userName', exports.userName)

  env.addGlobal('replaceDefaultUserWithSignedInUser', exports.replaceDefaultUserWithSignedInUser)

  env.addGlobal('failureToComplyReasons', exports.failureToComplyReasons)

  env.addGlobal('acceptableAbsenceReasons', exports.acceptableAbsenceReasons)
}
