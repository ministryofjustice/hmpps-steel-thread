const path = require('path')
const contactTypes = require(path.join(__dirname, '../data/reference/contact-types.json'))
const { RARCategories } = require(path.join(__dirname, './rar-categories.js'))
const { generateRandomString } = require('../utils/helpers')
const { DateTime } = require('luxon-business-days')

class ArrangedSession {
  constructor (params) {
    this.params = params

    this.params.date = params.date || '2021-03-25'
    this.params.startTime = params.startTime || '10am'
    this.params.endTime = params.endTime || '11am'
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
      'repeatEndDate': this.params.repeating === 'Yes' && this.params.repeatEndDate ? this.params.repeatEndDate : null
    }
  }

  get contactRecord () {
    return {
      'typeCode': this.rarCategories.contactTypeCode,
      'typeDescription': this.rarCategories.contactTypeCode ? contactTypes[this.rarCategories.contactTypeCode].description : null,
      'locationCode': this.params.locationCode
    }
  }

  get nsiRecord () {
    if (this.params.countsTowardsRAR) {
      return {
        'typeDescription': this.params.rarCategory,
        'subtypeDescription': this.params.rarSubCategory
      }
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

    return Array(numberOfRepeatedAppts).fill().map((_, i) => {
      var clonedAppointment = Object.assign({}, appointment)
      return Object.assign(clonedAppointment, {
        sessionId: generateRandomString(),
        'session-date': DateTime.fromISO(appointment['session-date']).plus({weeks: i + 1}).toISODate()
      })
    })
  }
}

module.exports = {
  ArrangedSession
}
