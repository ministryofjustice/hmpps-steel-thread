const path = require('path')
const contactTypes = require(path.join(__dirname, '../data/reference/contact-types.json'))
const { RARCategories } = require(path.join(__dirname, './rar-categories.js'))
const { generateRandomString } = require('../utils/helpers')
const { DateTime } = require('luxon-business-days')

class ArrangedSession {
  constructor (params) {
    this.params = params

    this.params.date = this.getDateString(params)
    this.params.startTime = params.startTime || '10am'
    this.params.endTime = params.endTime || '11am'
  }

  getDateString (params) {
    if (params.date) {
      return params.date
    } else if (params.year) {
      return DateTime.local(parseInt(params.year), parseInt(params.month), parseInt(params.day)).toISODate()
    } else {
      return '2021-03-25'
    }
  }

  get summary () {
    return {
      'typeOfSession': this.sessionLabel || 'Office visit',
      'date': this.params.date,
      'time': this.params.startTime + ' to ' + this.params.endTime,
      'countsTowardsRAR': this.params.countsTowardsRAR,
      'rarCategory': this.params.countsTowardsRAR ? this.params.rarCategory : null,
      'rarSubCategory': this.params.countsTowardsRAR ? this.params.rarSubCategory : null,
      'repeating': this.params.repeating === 'Yes' ? this.params.repeatingFrequency : 'No',
      'repeatingCount': this.params.repeating === 'Yes' && this.params.repeatingCount ? this.params.repeatingCount : null
    }
  }

  get sessionLabel () {
    if (this.params.typeOfSession === 'Other' && this.params.contactTypeCode) {
      return contactTypes[this.params.contactTypeCode].description
    } else {
      return this.params.typeOfSession
    }
  }

  get rarCategories () {
    return new RARCategories(this.params.providerCode, this.params.typeOfSession, this.params.contactTypeCode)
  }

  get contactType () {
    return contactTypes[this.rarCategories.contactTypeCode]
  }

  static generateRepeatedWeeklyAppointments (appointment, number = 3) {
    const numberOfRepeatedAppts = (appointment['repeating'] === 'Yes' ? number : 0)
    return Array.from(Array(numberOfRepeatedAppts)).map((_, i) => {
      return this.generateRepeatAppointment({appointment: appointment, weeksInFuture: i+1})
    })
  }

  static generateRepeatAppointment (params) {
    var clonedAppointment = Object.assign({}, params.appointment)
    return Object.assign(clonedAppointment, {
      sessionId: generateRandomString(),
      'session-date': DateTime.fromISO(clonedAppointment['session-date']).plus({weeks: params.weeksInFuture}).toISODate()
    })
  }
}

module.exports = {
  ArrangedSession
}
