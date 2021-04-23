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
    } else {
      const typeOfOtherComms = req.session.data['add-communication'][req.params.CRN]['type-of-new-other-communication']
      res.redirect(`/add-other-communication/${req.params.CRN}/new?type=${typeOfOtherComms}`)
    }
  })

  router.all('/cases/:CRN/communication/:category', function (req, res) {
    res.locals.category = req.params.category
    res.render('case/communication')
  })

  router.all('/cases/:CRN/appointments/:sessionId', function (req, res) {
    res.locals.sessionId = req.params.sessionId
    res.render('case/appointment')
  })

  router.all('/cases/:CRN/other-communication/:sessionId', function (req, res) {
    res.locals.sessionId = req.params.sessionId
    res.render('case/other-communication')
  })

  router.all('/cases/:CRN/:view', function (req, res) {
    res.render(`case/${req.params.view}`)
  })
}
