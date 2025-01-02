RuangBelajar - Platform Belajar Online
RuangBelajar adalah platform belajar online untuk siswa dengan fitur video pembelajaran, kuis, dan tracking progres. Platform ini memungkinkan siswa untuk mengakses materi pembelajaran dalam bentuk video, mengikuti kuis untuk menguji pemahaman, serta melacak progres belajar mereka.

Fitur
Registrasi & Login: Pengguna dapat mendaftar dan masuk dengan menggunakan email dan password.
Video Pembelajaran: Pengguna dapat mengakses video pembelajaran yang telah disediakan.
Kuis: Pengguna dapat mengikuti kuis untuk menguji pemahaman mereka setelah mengikuti video.
Tracking Progres: Pengguna dapat melihat progres belajar mereka berdasarkan video dan kuis yang telah mereka ikuti.
Teknologi yang Digunakan

Backend:
Node.js
Express.js
Prisma (untuk ORM dengan MySQL)
JWT (JSON Web Token) untuk autentikasi
Bcryptjs untuk enkripsi password'

Frontend:
React.js

Database:
MySQL (untuk menyimpan data pengguna, kuis, dan progres)
Dev Tools:

Nodemon (untuk development environment)
Postman (untuk testing API)
Instalasi
Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di lokal Anda.

1. Clone repository
Clone repository ini ke mesin lokal Anda:

```bash
git clone https://github.com/username/ruangbelajar.git
cd ruangbelajar
```

2. Install Dependencies
Jalankan perintah berikut untuk menginstall dependensi yang diperlukan:
```bash
npm install
```
3. Konfigurasi Database
Pastikan Anda sudah menginstal MySQL di mesin Anda.
Buat database baru di MySQL, misalnya dengan nama ruangbelajar.
Konfigurasi Prisma dengan menjalankan perintah berikut untuk membuat dan mengatur skema database:
```bash
npx prisma migrate dev
```
5. Setup File .env
Buat file .env di root folder proyek Anda dan masukkan konfigurasi berikut:

```env
DATABASE_URL="mysql://username:password@localhost:3306/ruangbelajar"
JWT_SECRET="your-strong-secret-key"
Gantilah username, password, dan your-strong-secret-key sesuai kebutuhan Anda.
```
5. Menjalankan Server
Jalankan server menggunakan Nodemon:

```bash
npm run dev
Aplikasi akan berjalan di http://localhost:3000.
```
