const { DateTime } = require('luxon')
const slugify = require('slugify')

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  // example: "This thing" becomes "this-thing"
  filters.toSlug = string => {
    return slugify(string, { lower: true })
  }

  // example: Monday 7 December
  filters.dateWithDayAndWithoutYear = datetimeString => {
    return DateTime.fromISO(datetimeString).toFormat('cccc d MMMM')
  }

  // example: Monday
  filters.dayOfWeek = datetimeString => {
    return DateTime.fromISO(datetimeString).toFormat('cccc')
  }

  // example: 3:30pm
  // example: 1am
  filters.govukTime = datetimeString => {
    if (datetimeString === undefined) return ''

    const timeOnly = !datetimeString.includes('-')

    var datetime
    if (timeOnly) {
      // normalise 4pm => 4:00pm
      if (!datetimeString.includes(':')) {
        datetimeString = datetimeString.replace(/(\d+)(am|pm)/, '$1:00$2')
      }

      datetime = DateTime.fromString(datetimeString, 'h:mma')
    } else {
      datetime = DateTime.fromISO(datetimeString)
    }
    const hourMinuteFormat = datetime.minute === 0 ? 'ha' : 'h:mma'
    return datetime.toFormat(hourMinuteFormat).toLowerCase()
  }

  // example: 3:30pm
  // example: 1:00am
  filters.govukTimeWithMinutes = datetimeString => {
    return DateTime.fromISO(datetimeString).toFormat('h:mma').toLowerCase()
  }

  // example: 7 December 2021
  filters.dateWithYear = datetimeString => {
    return DateTime.fromISO(datetimeString).toFormat('d MMMM yyyy')
  }

  // example: 7 Dec 2021
  filters.dateWithYearShortMonth = datetimeString => {
    return DateTime.fromISO(datetimeString).toFormat('d MMM yyyy')
  }

  filters.forceArray = stringOrArray => {
    return Array.isArray(stringOrArray) ? stringOrArray : [stringOrArray]
  }

  return filters
}
