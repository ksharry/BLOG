# Harry Chang 的個人網站

基於 [timlrx](https://github.com/timlrx/tailwind-nextjs-starter-blog) 的儲存庫樣板！

## 專案結構

以下是專案檔案結構的概覽：

- **app/**: 包含 Next.js App Router 的頁面和佈局。
- **components/**: 整個網站使用的可重複使用 React 元件。
- **css/**: 全域樣式和 Tailwind CSS 設定 (v4)。
- **data/**:
    - **blog/**: 部落格文章的 Markdown/MDX 檔案。
    - **authors/**: 作者個人資料。
    - **siteMetadata.js**: 網站標題、作者、社群連結等設定。
    - **projectsData.ts**: 專案頁面的資料。
    - **headerNavLinks.ts**: 導覽連結設定。
- **layouts/**: 不同頁面類型的佈局元件 (例如：PostLayout, ListLayout)。
- **public/**: 靜態資源，如圖片和網站圖示 (favicons)。
- **scripts/**: 用於 RSS 生成等任務的實用腳本。
- **contentlayer.config.ts**: Contentlayer 設定，用於管理內容轉換。
- **next.config.js**: Next.js 設定檔。
- **package.json**: 專案依賴和腳本。
