const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

require('./routes/cases')(router)
require('./routes/arrange-a-session')(router)
require('./routes/confirm-attendance')(router)
require('./routes/add-other-communication')(router)

router.get('/switch-provider/:newProvider', function (req, res) {
  const newProvider = req.params['newProvider']
  req.session.data['provider-code'] = newProvider
  req.session.data['team-codes'] = req.session.data['default-teams'][newProvider]

  res.redirect('/cases')
})

module.exports = router
