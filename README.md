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
