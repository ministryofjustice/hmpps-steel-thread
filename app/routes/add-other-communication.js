const {
  generateRandomString,
  getDataValue,
  setDataValue
} = require('../utils/helpers')

const {
  dateTimeFrom,
  today
} = require('../../lib/helpers')

const {
  addOtherCommunicationWizardPaths,
  addOtherCommunicationWizardForks
} = require('../utils/add-other-communication-wizard-paths')

module.exports = router => {
  router.get('/add-other-communication/:CRN/new', (req, res) => {
    const sessionId = generateRandomString()
    res.redirect(`/add-other-communication/${req.params.CRN}/${sessionId}/new?type=${req.query.type}`)
  })

  router.get('/add-other-communication/:CRN/:sessionId/new', (req, res) => {
    res.locals.CRN = req.params.CRN
    res.locals.sessionId = req.params.sessionId
    res.locals.type = req.query.type
    res.render(`add-other-communication/new`, { paths: addOtherCommunicationWizardPaths(req) })
  })

  router.get('/add-other-communication/:CRN/:sessionId/confirmation', (req, res, next) => {
    setDataValue(req.session.data, ['communication', req.params.CRN, req.params.sessionId, 'confirmed'], true)

    const typeOfDate = getDataValue(req.session.data, ['communication', req.params.CRN, req.params.sessionId, 'type-of-date'])
    var dateString
    if (typeOfDate === 'Today') {
      dateString = today()
    } else {
      dateString = getDataValue(req.session.data, ['communication', req.params.CRN, req.params.sessionId, 'date'])
    }
    const timeString = getDataValue(req.session.data, ['communication', req.params.CRN, req.params.sessionId, 'time'])

    setDataValue(
      req.session.data,
      ['communication', req.params.CRN, req.params.sessionId, 'timestamp'],
      dateTimeFrom({ date: dateString, time: timeString}).toISO()
    )

    if (getDataValue(req.session.data, ['communication', req.params.CRN, req.params.sessionId, 'from']) === 'Other') {
      setDataValue(
        req.session.data,
        ['communication', req.params.CRN, req.params.sessionId, 'from'],
        getDataValue(req.session.data, ['communication', req.params.CRN, req.params.sessionId, 'other-from'])
      )
    }

    if (getDataValue(req.session.data, ['communication', req.params.CRN, req.params.sessionId, 'to']) === 'Other') {
      setDataValue(
        req.session.data,
        ['communication', req.params.CRN, req.params.sessionId, 'to'],
        getDataValue(req.session.data, ['communication', req.params.CRN, req.params.sessionId, 'other-to'])
      )
    }

    next()
  })

  router.all([
    '/add-other-communication/:CRN/:sessionId',
    '/add-other-communication/:CRN/:sessionId/:view'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.CRN = req.params.CRN
    res.locals.sessionId = req.params.sessionId
    res.locals.case = data.cases.find(obj => {
      return obj.CRN === req.params.CRN
    })
    next()
  })

  router.get('/add-other-communication/:CRN/:sessionId/:view', function (req, res) {
    res.render(`add-other-communication/${req.params.view}`, { paths: addOtherCommunicationWizardPaths(req) })
  })

  router.post([
    '/add-other-communication/:CRN/:sessionId',
    '/add-other-communication/:CRN/:sessionId/:view'
  ], function (req, res) {
    const fork = addOtherCommunicationWizardForks(req)
    const paths = addOtherCommunicationWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
