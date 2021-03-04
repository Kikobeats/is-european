'use strict'

const test = require('ava')

const { euMember, eeaMember } = require('../src')

test('ISO 3166-1 name', t => {
  t.false(euMember('Norway'))
  t.false(euMember('norway'))
  t.true(eeaMember('norway'))
  t.true(eeaMember('Norway'))
})

test('ISO 3166-1 numeric', t => {
  t.false(euMember(578))
  t.true(eeaMember(578))
})

test('ISO 3166-1 alpha-2', t => {
  t.false(euMember('NO'))
  t.true(eeaMember('NO'))
})

test('ISO 3166-1 alpha-3', t => {
  t.false(euMember('NOR'))
  t.true(eeaMember('NOR'))
})

test('invalid', t => {
  ;['XX', 0, '', null, undefined].forEach(input => {
    t.false(euMember(input))
    t.false(eeaMember(input))
  })
})
