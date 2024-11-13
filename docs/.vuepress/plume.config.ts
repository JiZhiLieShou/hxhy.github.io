import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: './images/logo[32x32].ico',
  // 你的 git repo 链接
  // docsRepo: '',
  // docsDir: 'docs',

  appearance: true,

  profile: {
    avatar: './images/avatar.jpg',
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
    { icon: 'bilibili', link: 'https://space.bilibili.com/688597448' },
    { icon: 'github', link: 'https://github.com/JiZhiLieShou' },
    
  ],
})
