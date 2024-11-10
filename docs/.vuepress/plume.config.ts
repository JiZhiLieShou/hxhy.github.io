import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'plume.svg',
  // 你的 git repo 链接
  // docsRepo: '',
  // docsDir: 'docs',

  appearance: true,

  profile: {
    avatar: 'avatar.jpg',
    name: '绘夏合羽',
    description: '🏆2022年奥林匹克杯获得者',
    circle: true,
    location: '河南 焦作',
    organization: '繁星工作室',
    layout: 'right'
  },

  navbar,
  notes,
  social: [
    { icon: 'bilibili', link: '/' },
    { icon: 'github', link: '/' },
    
  ],
})
