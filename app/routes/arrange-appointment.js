const {
  generateRandomString,
  getDataValue,
  setDataValue
} = require('../utils/helpers')

const {
  arrangeSessionWizardPaths,
  arrangeSessionWizardForks
} = require('../utils/arrange-appointment-wizard-paths')

const { ArrangedSession } = require('../models/arranged-session.js')
const { DateTime } = require('luxon')

module.exports = router => {
  router.get('/arrange-appointment/:CRN/start', (req, res) => {
    const sessionId = generateRandomString()
    res.redirect(`/arrange-appointment/${req.params.CRN}/${sessionId}`)
  })

  router.get('/arrange-appointment/:CRN/:sessionId/confirmation', (req, res, next) => {
    setDataValue(req.session.data,
      [
        'communication',
        req.params.CRN,
        req.params.sessionId,
        'confirmed'
      ], true)

    const originalAppointment = req.session.data['communication'][req.params.CRN][req.params.sessionId]
    const repeatAppointments = ArrangedSession.generateRepeatedWeeklyAppointments(originalAppointment)

    repeatAppointments.forEach(appointment => {
      setDataValue(req.session.data,
        [
          'communication',
          req.params.CRN,
          appointment.sessionId
        ], appointment)
    })
    next()
  })

  router.get('/arrange-appointment/:CRN/:sessionId/cancel-confirmation', (req, res, next) => {
    setDataValue(req.session.data,
      [
        'communication',
        req.params.CRN,
        req.params.sessionId,
        'cancelled'
      ], true)
    next()
  })

  router.get([
    '/arrange-appointment/:CRN/:sessionId/repeating-preview',
    '/arrange-appointment/:CRN/:sessionId/check'
  ], (req, res, next) => {
    const appointment = req.session.data['communication'][req.params.CRN][req.params.sessionId]
    var clonedAppointment = Object.assign({}, appointment)

    clonedAppointment['session-date'] = DateTime.local(
      parseInt(appointment['session-date-year']),
      parseInt(appointment['session-date-month']),
      parseInt(appointment['session-date-day'])
    ).toISODate()

    res.locals.thisAppointmentDate = clonedAppointment['session-date']
    const repeatAppointments = ArrangedSession.generateRepeatedWeeklyAppointments(clonedAppointment)

    res.locals.repeatAppointmentDates = repeatAppointments.map(appointment => {
      return appointment['session-date']
    })
    next()
  })

  router.all([
    '/arrange-appointment/:CRN/:sessionId',
    '/arrange-appointment/:CRN/:sessionId/:view'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.CRN = req.params.CRN
    res.locals.sessionId = req.params.sessionId
    res.locals.case = data.cases.find(obj => {
      return obj.CRN === req.params.CRN
    })
    res.locals.appointment = getDataValue(req.session.data, ['communication', req.params.CRN, req.params.sessionId])
    next()
  })

  router.get('/arrange-appointment/:CRN/:sessionId', function (req, res) {
    res.render('arrange-appointment/index', { paths: arrangeSessionWizardPaths(req) })
  })

  router.get('/arrange-appointment/:CRN/:sessionId/:view', function (req, res) {
    res.render(`arrange-appointment/${req.params.view}`, { paths: arrangeSessionWizardPaths(req) })
  })

  router.post([
    '/arrange-appointment/:CRN/:sessionId',
    '/arrange-appointment/:CRN/:sessionId/:view'
  ], function (req, res) {
    const fork = arrangeSessionWizardForks(req)
    const paths = arrangeSessionWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
