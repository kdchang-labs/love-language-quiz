# 發現你的愛之語網站

一個可部署到 GitHub Pages 的純前端靜態網站。使用者可以完成 15 題二選一測驗，了解自己在家人、伴侶、朋友等關係中如何感受到被愛與被在乎。

## 檔案

- `index.html`：頁面結構
- `styles.css`：響應式樣式
- `script.js`：測驗題目、計分、結果渲染
- `assets/relationship-map.svg`：網站標誌

## 本機預覽

直接用瀏覽器打開 `index.html` 即可。

也可以在此資料夾啟動簡易伺服器：

```bash
python3 -m http.server 8080
```

然後開啟：

```text
http://localhost:8080
```

## GitHub Pages 部署

1. 建立一個 GitHub repository。
2. 將此資料夾內容推上 GitHub。
3. 到 repository 的 `Settings` -> `Pages`。
4. `Build and deployment` 選擇 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/root`。
6. 儲存後等待 GitHub Pages 產生網址。
