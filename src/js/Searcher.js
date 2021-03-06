import rules from 'js/Rules.js'

export default {
  // return infos
  search(query = '') {
    let words = query.toLowerCase().split(/\s+/)
    let filters = rules.map(rule => {
      return rule.parse(words)
    }, this)

    let infos = Object.keys(CardInfo).map(key => CardInfo[key])
    return filters.reduce((results, filter) => {
      return results.filter(filter)
    }, infos)
  },
}
