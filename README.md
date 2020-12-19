# is-european

![Last version](https://img.shields.io/github/tag/Kikobeats/is-european.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/com/Kikobeats/is-european/master.svg?style=flat-square)](https://travis-ci.com/Kikobeats/is-european)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/is-european.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/is-european)

> Check if a country is part of EU (European Union) or EEA (pean Economic Area). ISO 3166-1 compliant.

## Install

```bash
$ npm install is-european --save
```

## Usage

```js
const { eeaMember, euMember } = require('is-european')

euMember(578) // => false
euMember('NO') // => false
euMember('NOR') // => false
euMember('Norway') // => false

eeaMember(578) // => true
eeaMember('NO') // => true
eeaMember('NOR') // => true
eeaMember('Norway') // => true
```

## License

**is-european** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/is-european/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/Kikobeats/is-european/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
