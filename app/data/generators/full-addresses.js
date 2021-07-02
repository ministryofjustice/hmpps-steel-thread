const address = require('./address')

module.exports = (faker, generatorHelpers, status, singleAddress) => {
  const addressTypes = [
    'Awaiting assessment',
    'Approved premises',
    'BASS accommodation 13 weeks or more',
    'BASS accommodation less than 13 weeks',
    'Friends/Family (settled)',
    'Friends/Family (transient)',
    'Homeless - Other',
    'Homeless - Rough sleeping',
    'Homeless - Squat',
    'Householder (Owner)',
    'Immigration detention',
    'Long term residential healthcare',
    'Rental accommodation',
    'Supported housing',
    'Transient/short term accommodation'
  ]

  const addressStatuses = [
    'Postal',
    'Bail',
    'Secondary'
  ]

  function getFullAddress () {
    status = status || faker.random.arrayElement(addressStatuses)
    const type = faker.random.arrayElement(addressTypes)
    const noFixedAbode = type.includes('Homeless')
    const fullAddress = {
      status,
      noFixedAbode,
      'address': noFixedAbode ? [] : address(faker),
      'startDate': generatorHelpers.toISODate(faker.date.between('2001-01-01', '2020-12-31')),
      type,
      'typeVerified': faker.datatype.boolean()
    }

    if (status === 'Previous') {
      fullAddress.endDate = generatorHelpers.toISODate(faker.date.between(fullAddress.startDate, '2020-12-31'))
    }

    return fullAddress
  }

  if (status === 'Main') {
    return getFullAddress()
  } else {
    const maxCount = (status === 'Previous') ? 9 : 2
    const count = faker.datatype.number({ min: 0, max: maxCount })
    const fullAddresses = []
    for (var i = 0; i < count; i++) {
      fullAddresses.push(getFullAddress())
    }

    return fullAddresses
  }
}
