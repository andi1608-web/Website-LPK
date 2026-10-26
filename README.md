# LingoAcademy — Demo Website

Website landing page kursus bahasa asing yang terinspirasi dari UI referensi.

## Cara menjalankan di VS Code
1. Ekstrak folder `lingoacademy`.
2. Buka folder tersebut di Visual Studio Code.
3. Buka `index.html` di browser. Cara paling nyaman: pasang ekstensi **Live Server**, klik kanan `index.html`, lalu pilih **Open with Live Server**.

## Fitur yang tersedia
- Layout responsif untuk desktop, tablet, dan ponsel.
- Navigasi anchor dan menu hamburger untuk layar kecil.
- Kartu pilihan bahasa Inggris, Jepang, Korea, dan Jerman.
- Klik kartu bahasa untuk membuka modal pendaftaran dengan pilihan bahasa terisi otomatis.
- Modal pendaftaran dan masuk (simulasi frontend).
- Form kontak dengan validasi browser dasar dan pesan konfirmasi.
- Artikel/tips belajar dengan pop-up pesan.
- Tombol Escape atau klik backdrop untuk menutup modal.
- Tahun footer otomatis mengikuti tahun saat ini.

## Struktur file
- `index.html` — struktur dan konten halaman.
- `style.css` — desain, layout, animasi hover, dan responsive breakpoint.
- `script.js` — interaksi navigasi, modal, dan form.

## Catatan penting
Ini adalah **demo frontend**. Pendaftaran, login, dan kontak belum menyimpan data ke server/database dan belum mengirim email. Untuk website produksi, sambungkan form ke backend (misalnya Node.js + Express atau PHP) dan database, gunakan autentikasi aman, serta tambahkan kebijakan privasi.
