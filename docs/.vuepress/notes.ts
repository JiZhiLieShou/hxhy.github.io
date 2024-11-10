import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const readNote = defineNoteConfig({
  dir: 'read',
  link: '/read',
  sidebar: 'auto',
})
const languageNote = defineNoteConfig({
  dir: 'language',
  link: '/language',
  sidebar: 'auto',
})
const toolsNote = defineNoteConfig({
  dir: 'tools',
  link: '/tools',
  sidebar: 'auto',
})
const feameworkNote = defineNoteConfig({
  dir: 'framework',
  link: '/framework',
  sidebar: 'auto',
})
const othersNote = defineNoteConfig({
  dir: 'others',
  link: '/others',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [readNote, languageNote, toolsNote, feameworkNote, othersNote],
})
