import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [
      { text: '阅读', link: '/notes/read/README.md' },
      { text: '语言', link: '/notes/language/README.md' },
      { text: '框架', link: '/notes/framework/README.md' },
      { text: '工具', link: '/notes/tools/README.md' },
      { text: '其他', link: '/notes/others/README.md' }
    ]
  },
])
