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
  return DateTime.now().plusBusiness({days: params.daysLater}).toISODate() + 'T' + params.atTime
}

exports.todayAt = (time) => {
  return exports.happeningIn({daysLater: 0, atTime: time})
}

exports.tomorrowAt = (time) => {
  return exports.happeningIn({daysLater: 1, atTime: time})
}

exports.yesterdayAt = (time) => {
  return exports.happeningIn({daysLater: -1, atTime: time})
}

exports.addHelpers = function (env) {
  env.addGlobal('progressPercentage', exports.progressPercentage)

  env.addGlobal('arrangedSession', exports.arrangedSession)

  env.addGlobal('possibleRARCategories', exports.possibleRARCategories)

  env.addGlobal('possibleContactTypes', exports.possibleContactTypes)

  env.addGlobal('possibleLocations', exports.possibleLocations)
}
