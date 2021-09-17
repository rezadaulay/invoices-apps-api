# Simple Order Apps Api
Aplikasi ini menggunakan **node.js** dengan framework **express.js** dan orm **sequelize**.

## Langkah Instalasi
- Masuk ke direktori lalu jalankan command `npm install`
- Lalu, sesuaikan konfigurasi anda dengan membuat file `.env`, silahkan contoh file `example.env`
- Jalankan command `node_modules/.bin/sequelize db:migrate`
- Opsional: anda dapat menjalankan seeder data dengan command `node_modules/.bin/sequelize db:seed:all`

## Menjalankan aplikasi
- Jalankan command `npm run serve`
- Aplikasi dapat diakses meggunakan port 8081
```sh
http://localhost:8081
```

## API Collection
Tersedia Collection Postman di file `api_postman_collection.json`
