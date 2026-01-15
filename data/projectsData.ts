interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '2025年-演講-COSCUP 開源人年會',
    description: `COSCUP 開源人年會，ODOO不是 BI，但我們用它做出類 Power BI 的即時報表`,
    imgSrc: '/static/images/2025 COSCUP.jpg',
    href: 'https://www.youtube.com/watch?v=60yfCo5UySU&list=PLqfib4St70XP6X8yxKodbbonZqIb7zryN&index=7',
  },
  {
    title: '2025年-優選-做模組 × 畫地圖：30 天在地化會計模組的挑戰',
    description: `iThome 鐵人賽系列文章，專注於 Odoo 在地化會計模組的開發與實踐，深入探討在地化需求的解決方案。`,
    imgSrc: '/static/images/2023 ithome.jpg',
    href: 'https://ithelp.ithome.com.tw/users/20161788/ironman/8455',
  },
  {
    title: '2024年-書籍-顧問教你做 ─ Odoo 在台教戰手冊',
    description: `iThome 鐵人賽系列書籍，專注於 Odoo 在地化會計模組的開發與實踐，深入探討在地化需求的解決方案。`,
    imgSrc: '/static/images/2024 book.jpg',
    href: 'https://www.tenlong.com.tw/products/9786263339200',
  },
  {
    title: '2023年-冠軍-ODOO16社群版-ERP使用手冊',
    description: `iThome 鐵人賽系列文章，詳細介紹了 Odoo 16 社群版的操作與使用，幫助使用者快速上手 ERP 系統。`,
    imgSrc: '/static/images/2023 ithome.jpg',
    href: 'https://ithelp.ithome.com.tw/users/20161788/ironman/5957',
  },
  {
    title: '2021年-創業-小型酒廠建廠與設廠經驗',
    description: `2021 年錯誤評估酒牌申請難度的失敗創業經驗`,
    imgSrc: '/static/images/2021 eqip.jpg',
    href: 'https://www.facebook.com/groups/homebrew.tw/permalink/24931445273112779/',
  },
  {
    title: '2018年-冠軍-自釀比賽美式啤酒風格',
    description: `榮獲 2018 台灣自釀啤酒大賽 - 美式啤酒組冠軍`,
    imgSrc: '/static/images/2018 beer.jpg',
    href: 'https://www.facebook.com/homebrew.tw/photos/t.1190407304/339704393263143/?type=3',
  },

]

export default projectsData
