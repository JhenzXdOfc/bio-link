# Website Bio Link dengan Next.js

Dokumentasi ini menjelaskan cara mengambil, menginstal, dan menjalankan proyek **Website Bio Link** yang menggunakan **Next.js**.

## 📂 1. Clone Repository
Untuk mendapatkan kode sumber proyek ini, jalankan perintah berikut di terminal:
```sh
# Clone repository dari GitHub
git clone https://github.com/JhenzXdOfc/bio-link.git

# Masuk ke folder proyek
cd bio-link
```

## 📦 2. Install Dependencies
Sebelum menjalankan proyek, Anda perlu menginstal semua dependency yang diperlukan. Pastikan Anda telah menginstal **Node.js** dan **npm/yarn** terlebih dahulu.

Jalankan salah satu perintah berikut:
```sh
# Menggunakan npm
npm install

# atau menggunakan yarn
yarn install
```

## 🚀 3. Menjalankan Server Secara Lokal
Setelah semua dependency terinstal, jalankan perintah berikut untuk menjalankan server lokal:
```sh
# Menggunakan npm
npm run dev

# atau menggunakan yarn
yarn dev
```
Server akan berjalan di `http://localhost:3000/` secara default.

## 🌍 4. Deploy ke Hosting
Anda dapat mengonlinekan proyek ini dengan beberapa cara:

### a) Deploy ke Vercel
Vercel adalah platform terbaik untuk Next.js. Ikuti langkah berikut:
1. Install Vercel CLI (jika belum)
   ```sh
   npm install -g vercel
   ```
2. Jalankan perintah deploy
   ```sh
   vercel
   ```
3. Ikuti instruksi yang muncul di terminal, lalu salin URL hasil deploy.

### b) Deploy ke Netlify (Menggunakan Adapter Next.js)
1. Install Netlify CLI
   ```sh
   npm install -g netlify-cli
   ```
2. Build dan deploy proyek
   ```sh
   npm run build
   netlify deploy
   ```

### c) Deploy ke VPS atau Server Mandiri
1. Jalankan perintah build
   ```sh
   npm run build
   ```
2. Jalankan server di mode produksi
   ```sh
   npm start
   ```

## 📖 5. Struktur Folder
```
📂 bio-link
├── 📂 public       # Folder untuk aset statis (gambar, ikon, dll.)
├── 📂 pages        # Halaman utama dan rute Next.js
├── 📂 components   # Komponen UI yang digunakan di halaman
├── 📂 styles       # File CSS atau Tailwind untuk styling
├── package.json   # Konfigurasi proyek dan dependensi
└── next.config.js  # Konfigurasi khusus Next.js
```

## 🔧 6. Konfigurasi Tambahan
- **.env.local**: Untuk menyimpan variabel lingkungan seperti API keys, tambahkan file `.env.local` dan isi dengan format berikut:
  ```ini
  NEXT_PUBLIC_API_URL=https://example.com/api
  ```
- **Custom Styling**: Anda bisa mengedit styling pada folder `styles/` sesuai kebutuhan.

## 🎯 7. Kesimpulan
Sekarang Anda sudah bisa meng-clone, menginstal, menjalankan, dan mengonlinekan proyek **Website Bio Link** menggunakan **Next.js**. Jika mengalami kendala, silakan cek dokumentasi Next.js di [https://nextjs.org/docs](https://nextjs.org/docs).

---
📩 Jika ada pertanyaan, silakan buka Issue di repository atau hubungi pembuat proyek.

Happy Coding! 🚀
