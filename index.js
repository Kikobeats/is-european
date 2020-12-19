'use strict'

const iso31661 = require('iso-3166')

const EU_COUNTRIES = [
  'Austria',
  'Belgium',
  'Bulgaria',
  'Croatia',
  'Cyprus',
  'Czechia',
  'Denmark',
  'Estonia',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Ireland',
  'Italy',
  'Latvia',
  'Lithuania',
  'Luxembourg',
  'Malta',
  'Netherlands',
  'Poland',
  'Portugal',
  'Romania',
  'Slovakia',
  'Slovenia',
  'Spain',
  'Sweden'
]

const EEA_COUNTRIES = EU_COUNTRIES.concat([
  'Iceland',
  'Liechtenstein',
  'Norway'
])

const isEqual = (str1, str2) => str1.toLowerCase() === str2.toLowerCase()

const isNumber = input => typeof input === 'number'

const getValidator = input => {
  if (isNumber(input)) return item => input === Number(item.numeric)
  if (input.length === 2) return item => isEqual(input, item.alpha2)
  if (input.length === 3) return item => isEqual(input, item.alpha3)
  return item => isEqual(input, item.name)
}

const getCountry = input => iso31661.find(getValidator(input))

const factory = collection => input =>
  collection.includes(getCountry(input).name)

/* European Economic Area Members */
const eeaMember = factory(EEA_COUNTRIES)

/* European Union Members */
const euMember = factory(EU_COUNTRIES)

module.exports = { eeaMember, euMember, getCountry }
