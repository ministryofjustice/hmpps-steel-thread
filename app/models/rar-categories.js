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
      .map(code => this.availableNSIsForProvider[code])
      .sort((a, b) => a.description < b.description ? -1 : 1)
  }

  get contactTypeCode () {
    if (this.typeOfSession === 'Other' && this.providedContactTypeCode) {
      return this.providedContactTypeCode
    } else {
      const typeOfSessionToContactTypeCode = {
        'Office visit': 'COAP',
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
}

module.exports = {
  RARCategories
}
