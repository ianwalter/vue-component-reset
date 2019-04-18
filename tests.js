const { test } = require('@ianwalter/bff')
const Vue = require('Vue')
const vueComponentReset = require('.')

test('component gets reset', ({ expect }) => {
  const data = { singer: 'JMSN' }
  const newSinger = 'Rostam'
  const resetMixin = vueComponentReset(() => data)
  const component = new Vue({ mixins: [resetMixin] })
  expect(component.$data).toBe(data)
  component.singer = newSinger
  expect(component.$data.singer).toBe(newSinger)
  component.reset()
  expect(component.$data).toBe(data)
})

test('component property gets reset', ({ expect }) => {
  const data = { playlist: '3030', songs: ['3030', 'All Caps'] }
  const newData = { playlist: 'Mastermind', songs: ['3030', 'Mastermind'] }
  const resetMixin = vueComponentReset(() => data)
  const component = new Vue({ mixins: [resetMixin] })
  expect(component.$data).toBe(data)
  component.playlist = newData.playlist
  component.songs = newData.songs
  expect(component.$data).toEqual(newData)
  component.reset('songs')
  expect(component.$data).toEqual({ ...newData, songs: data.songs })
})
