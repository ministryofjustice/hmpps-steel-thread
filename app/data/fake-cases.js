const fakeCase = require('./generators/case')
module.exports = (count) => {
  const cases = []
  for (var i = 0; i < count; i++) {
    cases.push(fakeCase())
  }
  return cases
}
