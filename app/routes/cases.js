const { getDataValue } = require('../utils/helpers')

module.exports = router => {
  router.get([
    '/cases/:CRN',
    '/cases/:CRN/*'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.CRN = req.params.CRN
    res.locals.case = data.cases.find(obj => {
      return obj.CRN === req.params.CRN
    })
    next()
  })

  router.all('/cases/:CRN', function (req, res) {
    res.render('case/index')
  })

  router.get('/cases/:CRN/communication/add', (req, res) => {
    res.render('case/add-communication')
  })

  router.post('/cases/:CRN/communication/add', (req, res) => {
    const typeOfThingToAdd = req.session.data['add-communication'][req.params.CRN]['type-of-thing-to-add']
    if (typeOfThingToAdd === 'confirm-attendance') {
      res.redirect(`/confirm-attendance/${req.params.CRN}`)
    } else if (typeOfThingToAdd === 'appointment-note') {
      res.redirect(`/cases/${req.params.CRN}/appointments/notes`)
    } else {
      const typeOfOtherComms = req.session.data['add-communication'][req.params.CRN]['type-of-new-other-communication']
      res.redirect(`/add-other-communication/${req.params.CRN}/new?type=${typeOfOtherComms}`)
    }
  })

  router.all('/cases/:CRN/communication/:category', function (req, res) {
    res.locals.category = req.params.category
    res.render('case/communication')
  })

  router.get('/cases/:CRN/appointments/notes', function (req, res) {
    res.render('case/which-appointment-to-add-notes-to')
  })

  router.post('/cases/:CRN/appointments/notes', function (req, res) {
    const sessionId = getDataValue(req.session.data, ['appointment-to-add-notes-to', req.params.CRN])
    res.redirect(`/cases/${req.params.CRN}/appointments/${sessionId}/notes`)
  })

  router.all('/cases/:CRN/appointments/:sessionId', function (req, res) {
    res.locals.sessionId = req.params.sessionId
    res.render('case/appointment', { messages: req.flash('success') })
  })

  router.get('/cases/:CRN/appointments/:sessionId/notes', function (req, res) {
    res.locals.sessionId = req.params.sessionId
    res.render('case/appointment-notes')
  })

  router.post('/cases/:CRN/appointments/:sessionId/notes', function (req, res) {
    req.flash('success', 'Appointment notes saved')
    res.redirect(`/cases/${req.params.CRN}/appointments/${req.params.sessionId}`)
  })

  router.all('/cases/:CRN/other-communication/:sessionId', function (req, res) {
    res.locals.sessionId = req.params.sessionId
    res.render('case/other-communication')
  })

  router.all('/cases/:CRN/:view', function (req, res) {
    res.render(`case/${req.params.view}`)
  })
}
