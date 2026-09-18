# lian0123.github.io

個人後端與全端工程作品集，使用 React 18 UMD 與原生 CSS，直接部署於 GitHub Pages。

## 內容與設計

- 首頁以代表作品、完整工程專案、工程著作與非工程創作呈現跨時期的實作路徑。
- 工程作品可依工作後與大學時期篩選；首頁作品及著作數量由資料計算。
- 支援深色與亮色主題，並針對桌面與行動裝置調整閱讀密度。
- 響應式版型、鍵盤焦點、跳至主要內容與減少動態效果支援。
- v1 檔案仍保留在版本庫中作為歷史資料，但網站不再提供 v1 入口。

## 本機預覽

```sh
python3 -m http.server 8765
```

開啟 http://localhost:8765 。React 由 jsDelivr 載入，首次開啟需要網路。

主要內容位於 `Source/JS/app-react.js`，樣式位於 `Source/CSS/react-site.css`。更新快取資源時請同步調整 `service-worker.js` 的快取版本。
