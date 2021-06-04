const { DateTime } = require('luxon')

module.exports = {
  toISODate: (jsDate) => {
    // 2021-01-01
    return DateTime.fromJSDate(jsDate).toISODate()
  }
}
