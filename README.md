# stock-transfer

## 版本資訊

```
nodeJS  v12.22.12
npm 6.14.10
```

## 安裝套件

```bash
$ npm install
```

## 啟動服務

```bash
$ cp .env.example .env

$ npm start
```

## 資料庫設定

```bash
# 建立資料庫
$ npm run db:create

# 執行資料表遷移
$ npm run db:migrate

# 初始化資料庫
$ npm run db:init

# 移除資料庫
$ npm run db:drop

# 重設資料庫
$ npm run db:reset
```

## 測試

```bash
$ npm run test
```

## 打包專案

```bash
$ npm run build
```

## 功能描述

1. 將目標資料夾的 .csv 轉換資料結構後輸出 .csv 至結果資料夾
2. 啟動程式時先至目標資料夾找尋是否有今日的 .csv 需要轉換
3. 設定排程功能 每日固定時間執行找尋目標資料夾檔案 並且做轉換輸出
4. 從證交所下載 csv 後指定為當日時間儲存，並執行 api
