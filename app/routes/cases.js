const {
  generateRandomString,
  getDataValue
} = require('../utils/helpers')
const slugify = require('slugify')

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

  router.get('/cases/:CRN/activity-log/add', (req, res) => {
    res.render('case/add-communication')
  })

  router.post('/cases/:CRN/activity-log/add', (req, res) => {
    const typeOfThingToAdd = req.session.data['add-communication'][req.params.CRN]['type-of-thing-to-add']
    if (typeOfThingToAdd === 'confirm-attendance') {
      res.redirect(`/confirm-attendance/${req.params.CRN}`)
    } else if (typeOfThingToAdd === 'appointment-notes') {
      res.redirect(`/cases/${req.params.CRN}/appointments/notes`)
    } else {
      const typeOfOtherComms = req.session.data['add-communication'][req.params.CRN]['type-of-new-other-communication']
      const sessionId = generateRandomString()
      const dynamicPath = `${req.params.CRN}/${sessionId}/new`

      switch (typeOfOtherComms) {
        case 'phonecall':
          res.redirect(`/add-phone-call/${dynamicPath}`)
          break
        case 'email':
          res.redirect(`/add-email/${dynamicPath}`)
          break
        default:
          res.redirect(`/add-text/${dynamicPath}`)
          break
      }
    }
  })

  router.all('/cases/:CRN/activity-log/:category', function (req, res) {
    res.locals.category = req.params.category
    res.render('case/activity-log')
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
    res.locals.appointment = getDataValue(req.session.data, ['communication', req.params.CRN, req.params.sessionId])
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

  router.all('/cases/:CRN/flag/:flagSlug', function (req, res) {
    const riskFlags = res.locals.case.riskFlags
    const flag = riskFlags.find(flag => {
      return slugify(flag.text, { lower: true }) === req.params.flagSlug
    })
    res.locals.flag = flag
    res.render('case/flag')
  })

  router.all('/cases/:CRN/personal-contact/:contactSlug', function (req, res) {
    const personalContacts = res.locals.case.personalContacts
    const personalContact = personalContacts.find(contact => {
      return slugify(contact.name, { lower: true }) === req.params.contactSlug
    })
    res.locals.personalContact = personalContact
    res.render('case/personal-contact')
  })

  router.all('/cases/:CRN/:view', function (req, res) {
    res.render(`case/${req.params.view}`)
  })
}
