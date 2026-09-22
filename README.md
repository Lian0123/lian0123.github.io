# lian0123.github.io

連永立（lian0123）的工程師個人網站，整理自我介紹、個人專案、技術筆記與其他創作。使用本機提供的 React 18.3.1 UMD 與原生 CSS，直接部署於 GitHub Pages，無需建置流程。

## 內容與設計

- 首頁以代表作品、完整工程專案、工程著作與非工程創作呈現跨時期的實作路徑。
- 三語文案以工程師本人自述為主，說明技術背景、學習經歷與具體實作，避免企業服務口號與未經佐證的成效宣稱。
- 工程作品可依工作後與大學時期篩選；首頁作品及著作數量由資料計算。
- 支援深色與亮色主題，並針對桌面與行動裝置調整閱讀密度。
- 響應式版型、鍵盤焦點、跳至主要內容與減少動態效果支援。
- 保留原有 15 個工程專案、18 篇著作、3 件創作、8 個外部平台與兩張電子名片，以及完整繁中／英／日翻譯。
- 首頁技術地圖可切換資料、介面與知識三個領域，支援滑鼠視差、暫停動態與系統減少動態偏好。
- 代表作品依「我在做什麼、實作內容、程式碼從哪裡看起」介紹；流程圖為概念示意，並非實際效能量測。
- 專案可依時期、技術與關鍵字交叉篩選，按 `/` 可聚焦搜尋。作品解說分頁支援方向鍵與 Home / End。
- 新增閱讀進度、目前章節提示、Email 複製，以及完整離線主程式快取。
- v1 檔案仍保留在版本庫中作為歷史資料，但網站不再提供 v1 入口。

## 本機預覽

```sh
python3 -m http.server 8765
```

開啟 http://localhost:8765 。React 隨網站提供，首頁不需依賴外部 CDN。名片內的外部字型或圖片仍可能需要網路。

原有作品資料與互動元件位於 `Source/JS/app-react.js`，新增的三語深度介紹位於 `Source/JS/portfolio-content.js`，目前樣式位於 `Source/CSS/engineering.css`。舊樣式 `Source/CSS/react-site.css` 與歷史資源保留，但不在新版首頁載入。

更新快取資源時請同步調整 `service-worker.js` 的快取版本。主程式與資源可離線讀取；頁面導覽優先更新網路內容。第三方外部連結不由本站快取。`Source/JS/Include/react-LICENSE.txt` 保留 React 的 MIT 授權。

## 回歸檢查

```sh
npm install --prefix /tmp/portfolio-qa --no-audit --no-fund jsdom@26
NODE_PATH=/tmp/portfolio-qa/node_modules node scripts/check-portfolio.cjs
node scripts/check-service-worker.cjs
```

檢查涵蓋原有內容數量與連結、三語切換、搜尋／交叉篩選、明暗主題、技術地圖、鍵盤操作、減少動態偏好、儲存權限受限時的啟動，以及 Service Worker 離線行為。DOM 測試不包含真實瀏覽器的排版、動畫效能或手機觸控驗證，發佈前仍應在桌面與行動瀏覽器檢視。
