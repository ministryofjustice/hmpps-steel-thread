const path = require('path')
const contactTypes = require(path.join(__dirname, '../app/data/reference/contact-types.json'))
const { Locations } = require(path.join(__dirname, '../app/models/locations.js'))
const { ArrangedSession } = require(path.join(__dirname, '../app/models/arranged-session.js'))
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
// returns a DateTime assuming UTC
exports.dateTimeFrom = (params) => {
  // normalise 4pm => 4:00pm
  if (!params.time.includes(':')) {
    params.time = params.time.replace(/(\d+)(am|pm)/, '$1:00$2')
  }

  return DateTime.fromString(`${params.date} ${params.time}`, 'yyyy-MM-dd h:mma')
}

// example params = { date: '2021-04-16', time: '4pm' }
exports.isInThePast = (params) => {
  return DateTime.now() > exports.dateTimeFrom(params)
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
    if (category === 'other') {
      return entry.type !== 'Appointment'
    } else if (category === 'previous') {
      return entry.type === 'Appointment' && exports.isInThePast({date: entry['session-date'], time: entry['session-end-time']})
    } else if (category === 'upcoming') {
      return entry.type === 'Appointment' && !exports.isInThePast({date: entry['session-date'], time: entry['session-end-time']})
    } else {
      return true
    }
  }
}

exports.communicationEntries = (CRN, data, params = {}) => {
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
  return exports.communicationEntries(CRN, data, {category: 'previous'})
    .filter(entry => entry['did-service-user-comply'] === undefined)
}

exports.addHelpers = function (env) {
  env.addGlobal('progressPercentage', exports.progressPercentage)

  env.addGlobal('arrangedSession', exports.arrangedSession)

  env.addGlobal('possibleRARCategories', exports.possibleRARCategories)

  env.addGlobal('possibleContactTypes', exports.possibleContactTypes)

  env.addGlobal('possibleLocations', exports.possibleLocations)

  env.addGlobal('yearsSince', exports.yearsSince)

  env.addGlobal('currentTimeString', exports.currentTimeString)

  env.addGlobal('communicationEntries', exports.communicationEntries)

  env.addGlobal('isInThePast', exports.isInThePast)

  env.addGlobal('nextAppointment', exports.nextAppointment)

  env.addGlobal('previousAppointmentsWithoutOutcomes', exports.previousAppointmentsWithoutOutcomes)

  env.addGlobal('today', exports.today)
}
