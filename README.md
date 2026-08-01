# InvoiceGo

InvoiceGo adalah aplikasi web sederhana berbasis React.js yang digunakan untuk membuat invoice profesional dan mengunduhnya dalam format PDF secara langsung.

## ✨ Fitur

- Membuat invoice dengan mudah
- Input data perusahaan
- Input data pelanggan
- Menambahkan item produk/jasa
- Mengatur quantity dan harga
- Perhitungan subtotal otomatis
- Perhitungan pajak
- Perhitungan diskon
- Perhitungan total pembayaran
- Menambahkan catatan invoice
- Export invoice ke PDF
- Responsive design

## 🛠️ Teknologi

- React.js
- Vite
- Tailwind CSS
- React Icons
- html2canvas
- jsPDF

## 📁 Struktur Folder

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── InvoiceForm.jsx
│   └── InvoicePreview.jsx   
│
├── pages/
│   ├── Home.jsx
│   └── Invoice.jsx
│
├── utils/
│   └── generatePDF.js
│
├── App.jsx
├── main.jsx
└── index.css
└── App.css
```

## 🚀 Instalasi

Clone repository:

```bash
git clone https://github.com/username/invoicego.git
```

Masuk ke folder project:

```bash
cd invoicego
```

Install dependency:

```bash
npm install
```

Jalankan project:

```bash
npm run dev
```

Buka browser:

```text
http://localhost:5173
```

## 📦 Dependency

Install semua package yang dibutuhkan:

```bash
npm install react-router-dom
npm install react-icons
npm install jspdf
npm install html2canvas
```

## 🎯 Cara Menggunakan

1. Buka halaman InvoiceGo
2. Klik tombol **Buat Invoice**
3. Isi data perusahaan
4. Isi data pelanggan
5. Tambahkan item produk atau jasa
6. Atur quantity dan harga
7. Tambahkan pajak atau diskon jika diperlukan
8. Klik **Render & Download PDF**
9. Invoice akan otomatis terunduh dalam format PDF

## 🔮 Pengembangan Selanjutnya

- Preview invoice realtime
- Dark mode
- Template invoice lebih banyak
- Simpan invoice ke Local Storage
- Export ke PNG
- Generate nomor invoice otomatis
- Riwayat invoice
- Dukungan logo perusahaan

## 👨‍💻 Author

M. Ridho Adha

Sistem Informasi - Institut Teknologi Rokan Hilir

---

⭐ Jika project ini bermanfaat, jangan lupa berikan star pada repository GitHub.
