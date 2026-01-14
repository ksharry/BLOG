interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'ODOO16社群版-ERP使用手冊',
    description: `這是2023年 iThome 鐵人賽系列文章，詳細介紹了 Odoo 16 社群版的操作與使用，幫助使用者快速上手 ERP 系統。`,
    imgSrc: '/static/images/ithome.jpg',
    href: 'https://ithelp.ithome.com.tw/users/20161788/ironman/5957',
  },
  {
    title: '做模組 × 畫地圖：30 天在地化會計模組的挑戰',
    description: `這是2025年 iThome 鐵人賽系列文章，專注於 Odoo 在地化會計模組的開發與實踐，深入探討在地化需求的解決方案。`,
    imgSrc: '/static/images/ithome.jpg',
    href: 'https://ithelp.ithome.com.tw/users/20161788/ironman/8455',
  },
]

export default projectsData
