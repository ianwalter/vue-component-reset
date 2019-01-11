import test from 'ava'
import Vue from 'vue'
import vueComponentReset from '.'

test('component gets reset', t => {
  const data = { singer: 'JMSN' }
  const newSinger = 'Rostam'
  const resetMixin = vueComponentReset(() => data)
  const component = new Vue({ mixins: [resetMixin] })
  t.is(component.$data, data)
  component.singer = newSinger
  t.is(component.$data.singer, newSinger)
  component.reset()
  t.is(component.$data, data)
})

test('component property gets reset', t => {
  const data = { playlist: '3030', songs: ['3030', 'All Caps'] }
  const newData = { playlist: 'Mastermind', songs: ['3030', 'Mastermind'] }
  const resetMixin = vueComponentReset(() => data)
  const component = new Vue({ mixins: [resetMixin] })
  t.is(component.$data, data)
  component.playlist = newData.playlist
  component.songs = newData.songs
  t.deepEqual(component.$data, newData)
  component.reset('songs')
  t.deepEqual(component.$data, { ...newData, songs: data.songs })
})
