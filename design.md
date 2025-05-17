# 🎨 UI/UX Design Process

## Emphatize Stage

### 🗣️ Wawancara

Wawancara dilakukan untuk memahami kebutuhan, kebiasaan, dan preferensi pengguna terhadap aplikasi baca buku digital. Target wawancara adalah mahasiswa Jurusan Teknik Informatika Universitas Paramadina.

#### 📚 Kebiasaan dalam Mencari Buku Digital

Responden mengungkapkan alasan mereka menggunakan atau tidak menggunakan aplikasi buku digital. Faktor yang sering disebut meliputi:

- Kemudahan akses
- Rekomendasi dari dosen
- Kebutuhan untuk penelitian

#### 🔎 Preferensi Pencarian Informasi Buku

Responden menyatakan bahwa mereka sering mencari buku digital melalui:

- Google
- Google Scholar
- Wattpad
- Webtoon

#### 💡 Pengetahuan Umum tentang Aplikasi Baca Buku

Wawancara menggali sejauh mana responden mengetahui dan menggunakan aplikasi membaca buku, termasuk harapan dan fitur yang mereka inginkan.

#### 📱 Kebiasaan Menggunakan Aplikasi Sejenis

Pertanyaan ini mengeksplorasi pengalaman mereka dengan aplikasi sejenis, mencatat:

- Fitur yang disukai
- Masalah teknis yang sering muncul
- Kebutuhan yang belum terpenuhi

#### 🌐 Pandangan Umum tentang Layanan Sejenis

Diskusi ini mencakup:

- Sistem aplikasi
- Keluhan yang sering dihadapi
- Harapan terhadap fitur masa depan

### ☁️ Word Cloud Hasil Wawancara

Word cloud berikut menunjukkan tema-tema utama yang sering muncul dalam wawancara:
![Word Cloud](./public/word-cloud.png)
📷 _Word Cloud Hasil Wawancara Penelitian_

> Word cloud menyoroti tema dominan seperti:
>
> - **Kemudahan Akses**: kebutuhan terhadap akses yang cepat dan mudah.
> - **Buku Fisik**: masih dianggap relevan oleh beberapa responden.
> - **Google**: sebagai alat utama pencarian.
> - **Jurnal Penelitian**: menunjukkan kebutuhan akan sumber terpercaya.
> - **Keamanan dan Privasi**: kekhawatiran terhadap perlindungan data pengguna.

---

## Define Stage

Tahapan ini bertujuan menyusun Point of View dari pengguna berdasarkan hasil wawancara. Temuan ini dirangkum ke dalam dua alat penting:

### 👤 User Persona

User persona dibuat berdasarkan wawancara dengan 5 mahasiswa Teknik Informatika:

| Nama        | Semester | Karakteristik Utama                                      |
| ----------- | -------- | -------------------------------------------------------- |
| Responden 1 | 8        | Sering mencari jurnal digital, aksesibilitas jadi fokus. |
| Responden 2 | 8        | Butuh kecepatan dan integrasi referensi akademik.        |
| Responden 3 | 6        | Aktif menggunakan e-book untuk tugas kampus.             |
| Responden 4 | 4        | Senang membaca Wattpad dan Webtoon di waktu luang.       |
| Responden 5 | 2        | Baru mengenal aplikasi baca buku digital. Butuh panduan. |

Berikut akan dipaparkan kedalam gambar setiap hasil user persona dari kelima responden mahasiswa.

📎 **Lihat User Persona secara visual di Figma**:  
👉 [Klik untuk membuka Figma Board](https://www.figma.com/board/5EPVr8gfTAFc5vO3rWbcmq/MariBaca-Skripsi?node-id=51-539&t=VdT1pQOb3MS0ilhc-4)

---

> User persona ini membantu dalam menentukan fitur penting dan pendekatan desain yang lebih sesuai dengan karakteristik pengguna target.

### Affinity Diagram

Setelah pembuatan user persona selesai, langkah selanjutnya adalah menyusun _Affinity Diagram_ untuk mengelompokkan dan menyederhanakan berbagai permasalahan yang diungkapkan oleh responden. Tujuannya adalah untuk mengidentifikasi pola, tema, dan kebutuhan utama pengguna berdasarkan wawancara sebelumnya.

Affinity diagram ini membantu menyaring permasalahan menjadi kategori yang lebih spesifik dan relevan, sehingga proses perancangan solusi dapat lebih terfokus dan tepat sasaran.

#### 📌 Kategori Utama pada Affinity Diagram:

1. **📂 Akses terhadap Konten**

   - Kesulitan menemukan buku digital yang sesuai.
   - Kurangnya panduan dalam mengakses koleksi yang relevan.
   - Tidak semua konten tersedia dalam bentuk digital.

2. **📑 Kualitas dan Relevansi Konten**

   - Konten yang ditemukan sering kali tidak sesuai kebutuhan akademik.
   - Tidak semua sumber memiliki kualitas dan kredibilitas yang tinggi.
   - Kurangnya sistem kurasi atau rekomendasi berbasis kebutuhan pengguna.

3. **🧭 Pengalaman Pengguna (User Experience)**

   - Navigasi yang membingungkan pada aplikasi sejenis.
   - Kurangnya fitur personalisasi.
   - Tampilan yang tidak ramah pengguna.

4. **⏱️ Manajemen Waktu**

   - Sulit mengatur waktu membaca karena aplikasi tidak mendukung fitur pengingat.
   - Tidak adanya statistik atau progress membaca.

5. **💰 Biaya dan Aksesibilitas**

   - Beberapa aplikasi membaca buku memerlukan langganan mahal.
   - Keterbatasan akses konten karena pembatasan geografis atau lisensi.

6. **🔐 Privasi dan Keamanan**

   - Kekhawatiran terhadap data pribadi saat mendaftar aplikasi.
   - Iklan yang terlalu invasif dan mengganggu.

7. **👤 Kebutuhan Persona yang Unik**
   - Mahasiswa awal semester memerlukan bantuan navigasi dan rekomendasi awal.
   - Mahasiswa akhir semester lebih fokus pada sumber referensi ilmiah dan kecepatan akses.
   - Beberapa pengguna menyukai fitur sosial (komentar, rekomendasi teman).

📎 **Lihat Affinity Diagram secara visual di Figma**:  
👉 [Klik untuk membuka Figma Board](https://www.figma.com/board/5EPVr8gfTAFc5vO3rWbcmq/MariBaca-Skripsi?node-id=6-889&t=ILMvrKcOTEPzMRDQ-4)

---

> Affinity Diagram ini memberikan dasar yang kuat dalam menyusun fitur utama dan alur desain aplikasi baca buku digital yang benar-benar responsif terhadap kebutuhan nyata pengguna.

## Ideate Stage

Pada tahapan **Ideate**, penulis mulai menghasilkan berbagai ide solusi berdasarkan masalah yang telah diidentifikasi melalui user persona dan diperkuat melalui affinity diagram. Tahapan ini bertujuan untuk merumuskan berbagai kemungkinan solusi yang tepat sasaran. Proses ini terdiri dari dua langkah utama: _Solution Idea_ dan _Prioritization Idea_.

---

#### 🧠 Solution Idea

Berdasarkan hasil analisis pada tahap _Define_, berikut ini adalah ide-ide solusi yang dikembangkan untuk menjawab kategori permasalahan utama pengguna:

- **📂 Akses terhadap Konten**: Fitur pencarian lanjutan dan filter konten.
- **📑 Kualitas dan Relevansi Konten**: Sistem rekomendasi berbasis kebutuhan akademik.
- **🧭 Pengalaman Pengguna (UX)**: Navigasi yang intuitif, personalisasi antarmuka.
- **⏱️ Manajemen Waktu**: Fitur pengingat membaca dan progress tracker.
- **💰 Biaya dan Aksesibilitas**: Akses freemium dan integrasi dengan sumber gratis.
- **🔐 Privasi dan Keamanan**: Perlindungan data pengguna dan kontrol privasi.
- **👤 Kebutuhan Persona Unik**: Fitur onboarding khusus untuk mahasiswa baru dan alat referensi cepat untuk mahasiswa akhir.

📎 **Lihat dokumen Solution Idea di Figma**:  
👉 [Klik di sini untuk melihat Solution Idea di Figma](https://www.figma.com/board/5EPVr8gfTAFc5vO3rWbcmq/MariBaca-Skripsi?node-id=6-694&t=Uote5FcdxN8LNN6g-4)

---

#### 🔢 Prioritization Idea

Setelah semua ide solusi terkumpul, penulis menggunakan **Diagram Prioritas (Prioritization Grid)** untuk mengelompokkan solusi berdasarkan nilai manfaat (_value_) dan tingkat kesulitan pelaksanaan (_effort_). Diagram ini membantu memutuskan fitur mana yang perlu diutamakan dalam implementasi awal.

Empat kuadran utama dalam diagram ini adalah:

- ✅ **High Value – Low Effort**: Prioritas utama.
- 🧐 **High Value – High Effort**: Direncanakan setelah MVP.
- ⏳ **Low Value – Low Effort**: Opsional.
- 🚫 **Low Value – High Effort**: Dihindari.

📎 **Lihat Prioritization Idea di Figma**:  
👉 [Klik di sini untuk melihat Prioritization Idea di Figma](https://www.figma.com/board/5EPVr8gfTAFc5vO3rWbcmq/MariBaca-Skripsi?node-id=6-828&t=tkTJIUcK5hCOxBc6-4)

---

> Dengan menggunakan pendekatan ini, penulis dapat menentukan fitur yang paling penting dan realistis untuk dikembangkan terlebih dahulu dalam aplikasi membaca buku digital.

## Prototype Stage

Pada tahapan ini, akan mengembangkan versi awal dari solusi yang telah diidentifikasi dalam tahap _Ideate_. Tujuannya adalah untuk membuat representasi fisik atau digital dari ide-ide solusi, sehingga dapat diuji dan divalidasi oleh pengguna.

Prototype dibagi menjadi dua jenis utama, yaitu:

- **📄 Low Fidelity**
- **🎨 High Fidelity**

---

#### 📄 Low Fidelity

Low fidelity prototype merupakan representasi awal yang masih sederhana, fokus pada fungsi dan struktur dasar, bukan pada detail visual atau estetika. Prototype ini sangat berguna dalam menguji alur kerja dan memahami pengalaman pengguna secara keseluruhan.

##### a. 🧭 User Flow

User Flow menggambarkan langkah-langkah yang diambil pengguna dari awal hingga akhir dalam menggunakan aplikasi. Diagram ini bertujuan untuk memvisualisasikan proses interaksi pengguna dengan sistem, serta memastikan setiap langkah memiliki arah yang jelas dan logis.

Komponen kunci dalam user flow meliputi:

- **📥 Masuk ke Aplikasi**: Pengguna membuka aplikasi dan masuk ke halaman utama.
- **🔍 Mencari Buku**: Pengguna menggunakan fitur pencarian atau filter untuk menemukan buku yang diinginkan.
- **📖 Membaca Buku**: Setelah memilih buku, pengguna dapat mulai membaca.
- **💾 Menyimpan & Melanjutkan**: Pengguna dapat menyimpan progres membaca dan melanjutkan di waktu berikutnya.

##### b. 📝 Wireframe

Wireframe yang telah dibuat berdasarkan **user flow** memberikan gambaran bagaimana pengguna akan berinteraksi dengan aplikasi secara langkah demi langkah. Dengan wireframe ini, tim pengembang dapat memahami struktur navigasi dan penempatan elemen secara lebih terarah.

📎 **Lihat User Flow dan Wireframe**:  
👉 [Klik di sini untuk melihat prototipe low fidelity](https://whimsical.com/userflow-DMzzesxfqXyyuu7GiDSxQm@2bsEvpTYSt1Hj6pZ98q3w79K1rJjk9m1ei1)

> 💬 Tahapan _Low Fidelity_ memungkinkan proses eksplorasi ide secara fleksibel dan cepat, serta memberikan dasar kuat untuk pengembangan ke tahap prototipe visual (_High Fidelity_) yang lebih mendetail.

#### 📄 High Fidelity

High fidelity prototype merupakan representasi visual yang lebih rinci dan menyerupai produk akhir. Pada tahap ini, elemen-elemen desain ditampilkan secara lengkap, termasuk warna, tipografi, ikon, serta interaksi yang lebih realistis untuk memberikan pengalaman pengguna yang mendekati kenyataan.

##### a. 🧪 Prototype

Prototipe _high fidelity_ dirancang untuk memberikan gambaran visual dan interaktif yang akurat tentang tampilan dan fungsi akhir dari aplikasi. Tujuan utamanya adalah:

- 🎯 Memberikan ilustrasi nyata dari desain akhir
- 🔄 Menguji interaksi pengguna secara realistis
- 📣 Mendapatkan umpan balik mendalam dari pengguna

Dengan tingkat detail yang tinggi, prototipe ini sangat berguna dalam proses validasi dan penyempurnaan desain sebelum pengembangan ke tahap implementasi.

📎 **Lihat Prototype**:  
👉 [Klik di sini untuk melihat Prototipe](https://www.figma.com/proto/aWAqdQ9LH7QkFpEDHSTLi6/Maribaca?node-id=346-3469&t=0PgfKdCnIGoDZYTe-0&scaling=scale-down&content-scaling=fixed&page-id=6%3A2&starting-point-node-id=65%3A2637&show-proto-sidebar=1)

> 🎯 Tahapan _High Fidelity_ memberikan visualisasi yang mendekati produk akhir, memungkinkan pengujian desain yang lebih realistis, serta mengumpulkan umpan balik pengguna secara lebih akurat sebelum pengembangan final dilakukan.

## Testing Stage

Setelah penilaian dilakukan, hasil dari evaluasi heuristic dianalisis berdasarkan kategori keberhasilan untuk menentukan seberapa efektif aplikasi dalam memenuhi prinsip-prinsip _usability_.

### ✅ Evaluasi Heuristik

Setelah dilakukan evaluasi terhadap sepuluh tema utama yang telah diidentifikasi, lima responden memberikan penilaian. Berikut adalah rincian skor rata-rata yang diberikan oleh masing-masing responden untuk setiap tema variabel penilaian:

#### 📊 Rincian Skor Rata-rata Responden Penelitian

| No  | Tema Variabel Penilaian                                               | R1  | R2  | R3  | R4  | R5  |
| --- | --------------------------------------------------------------------- | --- | --- | --- | --- | --- |
| 1   | Variabel Visibilitas Sistem                                           | 4.0 | 4.0 | 3.4 | 4.2 | 5.0 |
| 2   | Variabel Kecocokan antara Sistem dan Dunia Nyata                      | 4.0 | 3.8 | 3.2 | 4.2 | 4.8 |
| 3   | Variabel Kontrol Pengguna dan Kebebasan                               | 4.0 | 4.0 | 4.0 | 4.2 | 5.0 |
| 4   | Variabel Konsistensi dan Standar                                      | 4.0 | 4.0 | 3.2 | 3.8 | 5.0 |
| 5   | Variabel Pencegahan Kesalahan                                         | 4.0 | 2.6 | 3.2 | 3.2 | 5.0 |
| 6   | Variabel Pengenalan daripada Pengingatan                              | 4.0 | 3.8 | 3.6 | 4.4 | 5.0 |
| 7   | Variabel Fleksibilitas dan Efesiensi Penggunaan                       | 4.0 | 3.6 | 3.8 | 3.8 | 5.0 |
| 8   | Variabel Desain Estetika dan Minimalis                                | 4.0 | 3.8 | 4.0 | 4.0 | 5.0 |
| 9   | Variabel Membantu Pengguna Mengenali, Mendiagnosis, dan Memulihkan... | 4.0 | 2.8 | 3.8 | 3.2 | 4.8 |
| 10  | Variabel Bantuan dan Dokumentasi                                      | 4.0 | 2.6 | 3.8 | 4.2 | 5.0 |

---

### 🧠 Penilaian Keberhasilan Evaluasi Heuristik

Dalam analisis tema variabel penilaian yang dilakukan terhadap lima responden, skor rata-rata dievaluasi untuk menentukan tingkat keberhasilan masing-masing aspek yang dipelajari. Klasifikasi kategori keberhasilan didasarkan pada rentang rata-rata sebagai berikut:

#### 📈 Klasifikasi Kategori Keberhasilan

| 🎯 Indikator Keberhasilan | 🏆 Kategori Keberhasilan |
| ------------------------- | ------------------------ |
| 4.5 – 5.0                 | 🟢 Sangat Berhasil       |
| 3.5 – 4.4                 | 🟡 Berhasil              |
| 2.5 – 3.4                 | 🟠 Cukup Berhasil        |
| 1.5 – 2.4                 | 🔴 Tidak Berhasil        |
| 1.0 – 1.4                 | ⚫ Sangat Tidak Berhasil |

Sebagian besar responden memberikan penilaian yang memasukkan variabel ke dalam kategori “Berhasil” atau “Sangat Berhasil", menunjukkan pencapaian yang baik dalam aspek-aspek yang dinilai. Namun, terdapat pula variabel yang mendapat penilaian dalam kategori "Cukup Berhasil", yang mengindikasikan adanya ruang untuk peningkatan lebih lanjut.

#### 📊 Klasifikasi Kategori dan Indikator Keberhasilan

| No  | Tema Variabel Penilaian                                         | 📌 Indikator | 🏅 Kategori |
| --- | --------------------------------------------------------------- | ------------ | ----------- |
| 1   | Visibilitas Sistem                                              | 4.12         | 🟡 Berhasil |
| 2   | Kecocokan antara Sistem dan Dunia Nyata                         | 4.00         | 🟡 Berhasil |
| 3   | Kontrol Pengguna dan Kebebasan                                  | 4.24         | 🟡 Berhasil |
| 4   | Konsistensi dan Standar                                         | 4.00         | 🟡 Berhasil |
| 5   | Pencegahan Kesalahan                                            | 3.60         | 🟡 Berhasil |
| 6   | Pengenalan daripada Pengingatan                                 | 4.16         | 🟡 Berhasil |
| 7   | Fleksibilitas dan Efesiensi Penggunaan                          | 4.04         | 🟡 Berhasil |
| 8   | Desain Estetika dan Minimalis                                   | 4.16         | 🟡 Berhasil |
| 9   | Membantu Mengenali, Mendiagnosis, dan Memulihkan dari Kesalahan | 3.72         | 🟡 Berhasil |
| 10  | Bantuan dan Dokumentasi                                         | 3.92         | 🟡 Berhasil |

---

### 💡 Rekomendasi

Rekomendasi didasarkan pada pertanyaan yang memperoleh kategori keberhasilan dari **Cukup Berhasil** hingga **Berhasil**.

#### 🛠️ Rekomendasi

| No  | ❓ Pertanyaan                                                                                                           | ✅ Rekomendasi                      | 📚 Tema Variabel                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------- |
| 1   | Apakah aplikasi memberikan saran atau koreksi otomatis saat terjadi kesalahan (misalnya salah ketik saat mencari buku)? | Auto-Correction dan Saran Pencarian | Pencegahan Kesalahan                                            |
| 2   | Apakah aplikasi menyediakan panduan langkah demi langkah untuk mengatasi kesalahan umum?                                | Panduan Pemulihan Kesalahan         | Membantu Mengenali, Mendiagnosis, dan Memulihkan dari Kesalahan |
