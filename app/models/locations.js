const path = require('path')
const locations = require(path.join(__dirname, '../data/reference/locations.json'))

class Locations {
  static forTeams (teamCodes) {
    const potentialLocations = teamCodes
      .flatMap(teamCode => locations.teamsToLocations[teamCode])
      .map(code => locations.locations[code])

    return this.deduplicatedLocations(potentialLocations)
  }

  static deduplicatedLocations (locations) {
    const result = []
    const map = new Map()
    for (const location of locations) {
      if (!map.has(location.code)) {
        map.set(location.code, true)
        result.push(location)
      }
    }
    return result
  }
}

module.exports = {
  Locations
}
