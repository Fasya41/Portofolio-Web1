# Portfolio Saya

## 📌 Deskripsi Proyek

**Portfolio Saya** adalah sebuah website portfolio personal berbasis **React + Vite** yang digunakan untuk menampilkan profil, keahlian, serta informasi pendukung lainnya secara modern, ringan, dan responsif. Project ini dirancang sebagai media presentasi profesional yang dapat digunakan untuk keperluan akademik, pencarian kerja, maupun pengembangan personal branding.

Website ini mengadopsi struktur komponen yang rapi, pemisahan data dan tampilan, serta tooling modern JavaScript.

---

## 🎯 Tujuan Proyek

* Menyediakan media portfolio digital yang profesional
* Melatih penggunaan **React component-based architecture**
* Menerapkan workflow frontend modern menggunakan **Vite**
* Menjadi bahan penilaian / dokumentasi proyek

---

## 🛠️ Teknologi yang Digunakan

## ✅ Prasyarat & Persiapan

Sebelum menjalankan project ini, pastikan beberapa tools berikut sudah terpasang di perangkat Anda:

### 1. Node.js

* Versi yang direkomendasikan: **Node.js 18.x atau lebih baru**
* Digunakan untuk menjalankan JavaScript di sisi development dan mengelola dependency

### 2. npm (Node Package Manager)

* npm biasanya sudah terinstal otomatis bersama Node.js
* Digunakan untuk menginstal dependency project

Cek instalasi:

```bash
node -v
npm -v
```

### 3. Git (Opsional)

* Digunakan untuk clone repository dan version control

Cek instalasi:

```bash
git --version
```

### 4. Code Editor

Disarankan menggunakan salah satu editor berikut:

* **Visual Studio Code** (direkomendasikan)
* Sublime Text / WebStorm

### 5. Browser Modern

* Google Chrome, Mozilla Firefox, atau Microsoft Edge
* Digunakan untuk menjalankan dan menguji aplikasi

---

## 🛠️ Teknologi yang Digunakan

* **React.js** – Library JavaScript untuk membangun UI
* **Vite** – Build tool frontend modern
* **JavaScript (ES6+)**
* **HTML5 & CSS3**
* **Node.js & npm** – Dependency management
* **ESLint** – Code quality & linting

---

## 📁 Struktur Folder

```
portfolio-saya/
├── public/                 # Asset publik
├── src/
│   ├── components/         # Komponen UI
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PreLoader.jsx
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point React
│   ├── data.js             # Data terpusat (konten)
│   └── index.css           # Styling utama
├── index.html              # HTML utama
├── package.json            # Konfigurasi project
├── vite.config.js          # Konfigurasi Vite
└── eslint.config.js        # Konfigurasi ESLint
```

---

## ⚙️ Fitur Utama

* **Single Page Application (SPA)**
* **Component-based UI**
* **Preloader halaman**
* **Navigasi (Navbar & Footer)**
* **Manajemen data terpusat**
* **Build cepat dan ringan**

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone Repository

```bash
git clone <url-repository>
cd portfolio-saya
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Menjalankan Development Server

```bash
npm run dev
```

Akses aplikasi di browser:

```
http://localhost:5173
```

---

## 📦 Build untuk Production

```bash
npm run build
```

Hasil build akan tersimpan pada folder `dist/`.

---

## 📌 Catatan Pengembangan

* Project ini menggunakan struktur standar React + Vite
* Data konten dapat dikembangkan melalui file `data.js`
* Komponen dapat ditambah sesuai kebutuhan portfolio

---

## 👤 Pengembang

**Nama:** (Isi nama Anda)

Project ini dikembangkan sebagai bagian dari portfolio dan pengembangan kemampuan frontend web.

---

## 📄 Lisensi

Project ini menggunakan lisensi **MIT License** – bebas digunakan untuk keperluan pembelajaran dan pengembangan.
