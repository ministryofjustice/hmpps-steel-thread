const path = require('path')
const nsi = require(path.join(__dirname, '../data/reference/nsi.json'))
const contactTypes = require(path.join(__dirname, '../data/reference/contact-types.json'))

class RARCategories {
  constructor (providerCode, typeOfSession, providedContactTypeCode) {
    this.providerCode = providerCode
    this.typeOfSession = typeOfSession
    this.providedContactTypeCode = providedContactTypeCode
  }

  get asList () {
    return this
      .availableNSIsForSession
      .filter(value => Object.keys(this.availableNSIsForProvider).includes(value))
      .map(code => this.mapFriendlyDescriptions(this.availableNSIsForProvider[code], code))
      .sort((a, b) => a.description < b.description ? -1 : 1)
  }

  get contactTypeCode () {
    if (this.typeOfSession === 'Other' && this.providedContactTypeCode) {
      return this.providedContactTypeCode
    } else {
      const typeOfSessionToContactTypeCode = {
        'Office visit': 'APAT',
        'Home visit': 'CHVS',
        'Video call': 'COVC',
        'Phone call': 'COPT'
      }
      return typeOfSessionToContactTypeCode[this.typeOfSession]
    }
  }

  get availableNSIsForProvider () {
    return nsi[this.providerCode].nsiTypes || []
  }

  get availableNSIsForSession () {
    return (this.contactTypeCode == null ? [] : contactTypes[this.contactTypeCode].nsis) || []
  }

  mapFriendlyDescriptions (nsi, code) {
    const friendlyDescriptions = {
      'NPS001': 'Accommodation',
      'NPS002': 'Attitudes, thinking and behaviour',
      'NPS003': 'Children and families',
      'NPS004': 'Drugs and alcohol',
      'NPS005': 'Education, training and employment',
      'NPS006': 'Finance, benefits and debt',
      'NPS007': 'Mental health',
      'NPS008': 'Physical health',
      'NPS009': 'Restorative justice',
      'NPS010': 'Specific interventions for women',
      'NPS011': 'Other'
    }

    if (friendlyDescriptions[code]) {
      nsi.description = friendlyDescriptions[code]
    }

    return nsi
  }
}

module.exports = {
  RARCategories
}
