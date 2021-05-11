const {
  generateRandomString,
  getDataValue,
  setDataValue
} = require('../utils/helpers')

const {
  dateTimeFrom,
  today,
  isoDateFromDateInputs
} = require('../../lib/helpers')

const {
  addOtherCommunicationWizardPaths,
  addOtherCommunicationWizardForks
} = require('../utils/add-other-communication-wizard-paths')

module.exports = router => {
  router.all([
    '/add-phone-call/:CRN/:sessionId',
    '/add-phone-call/:CRN/:sessionId/:view',
    '/add-email/:CRN/:sessionId',
    '/add-email/:CRN/:sessionId/:view',
    '/add-text/:CRN/:sessionId',
    '/add-text/:CRN/:sessionId/:view'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.CRN = req.params.CRN
    res.locals.sessionId = req.params.sessionId
    res.locals.case = data.cases.find(obj => {
      return obj.CRN === req.params.CRN
    })
    res.locals.communication = getDataValue(req.session.data, ['communication', req.params.CRN, req.params.sessionId])
    next()
  })

  router.get([
    '/add-phone-call/:CRN/:sessionId/confirmation',
    '/add-email/:CRN/:sessionId/confirmation',
    '/add-text/:CRN/:sessionId/confirmation'
  ], (req, res, next) => {
    const sessionId = req.params.sessionId
    const CRN = req.params.CRN
    const data = req.session.data

    setDataValue(data, ['communication', CRN, sessionId, 'confirmed'], true)

    const timeString = getDataValue(data, ['communication', CRN, sessionId, 'time'])
    const typeOfDate = getDataValue(data, ['communication', CRN, sessionId, 'type-of-date'])
    var dateString
    if (typeOfDate === 'Today') {
      dateString = today()
    } else {
      dateString = isoDateFromDateInputs(
        getDataValue(data, ['communication', CRN, sessionId, 'date-year']),
        getDataValue(data, ['communication', CRN, sessionId, 'date-month']),
        getDataValue(data, ['communication', CRN, sessionId, 'date-day'])
      )
    }

    setDataValue(
      data,
      ['communication', CRN, sessionId, 'timestamp'],
      dateTimeFrom({ date: dateString, time: timeString }).toISO()
    )

    if (getDataValue(data, ['communication', CRN, sessionId, 'from']) === 'other') {
      setDataValue(
        data,
        ['communication', CRN, sessionId, 'from'],
        getDataValue(data, ['communication', CRN, sessionId, 'other-from'])
      )
    }

    if (getDataValue(data, ['communication', CRN, sessionId, 'to']) === 'other') {
      setDataValue(
        data,
        ['communication', CRN, sessionId, 'to'],
        getDataValue(req.session.data, ['communication', CRN, sessionId, 'other-to'])
      )
    }

    next()
  })

  router.get('/add-phone-call/:CRN/:sessionId/:view', (req, res) => {
    res.render(`add-other-communication/phone-call/${req.params.view}`, { paths: addOtherCommunicationWizardPaths(req) })
  })

  router.get('/add-email/:CRN/:sessionId/:view', (req, res) => {
    res.render(`add-other-communication/email/${req.params.view}`, { paths: addOtherCommunicationWizardPaths(req) })
  })

  router.get('/add-text/:CRN/:sessionId/:view', (req, res) => {
    res.render(`add-other-communication/text/${req.params.view}`, { paths: addOtherCommunicationWizardPaths(req) })
  })

  router.post([
    '/add-phone-call/:CRN/:sessionId',
    '/add-phone-call/:CRN/:sessionId/:view',
    '/add-email/:CRN/:sessionId',
    '/add-email/:CRN/:sessionId/:view',
    '/add-text/:CRN/:sessionId',
    '/add-text/:CRN/:sessionId/:view'
  ], function (req, res) {
    const fork = addOtherCommunicationWizardForks(req)
    const paths = addOtherCommunicationWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
