/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  'provider-code': 'C17', // CPA London
  'default-teams': {
    'C17': ['C17ETE'],
    'N07': ['N07L10']
  },
  'team-codes': ['C17ETE']
}
