# Mulai Dari Sini / Start Here

Panduan orientasi cepat untuk siapa saja yang baru mengkloning repo ini.  
Quick orientation for anyone who just cloned this repo.

---

## Apa isi repo ini? / What is in this repo?

Repo ini berisi disertasi doktoral tentang **klasifikasi cryptocurrency dalam keuangan Islam** (Islamic finance).  
This repo contains a doctoral dissertation on **cryptocurrency classification in Islamic finance**.

- **Topik / Topic:** Apakah cryptocurrency halal atau haram? Bagaimana cara menilainya secara sistematis menggunakan Maqasid Shariah?
- **Penulis / Author:** zudin2007@gmail.com
- **Institusi / Institution:** UIN Sunan Gunungjati Bandung
- **Status:** ~70–75% selesai / ~70–75% complete (~70,000 kata / words)

---

## Langkah Pertama / First Steps

### Jika kamu penulis disertasi / If you are the dissertation author:

**Buka ini dulu:**
```
DISSERTATION_COMPLETION_GUIDE.md
```
File ini berisi:
- Status setiap bab (sudah selesai / perlu dilengkapi)
- Apa yang harus ditulis di setiap bagian yang kurang
- Urutan penulisan yang disarankan (5 minggu roadmap)
- Target jumlah kata per bagian
- Referensi akademik yang perlu dikutip

**Open this first:**
```
DISSERTATION_COMPLETION_GUIDE.md
```
This file contains:
- Completion status for every chapter
- Exactly what to write in each gap
- Prioritized 5-week writing roadmap
- Word count targets per section
- Academic references to cite

---

### Jika kamu pembaca / reviewer / If you are a reader or reviewer:

```
ABSTRACT.md               ← Ringkasan disertasi / Dissertation summary
TABLE_OF_CONTENTS.md      ← Daftar isi / Table of contents
CHAPTER_1_Introduction.md ← Mulai baca di sini / Start reading here
```

---

### Jika kamu peneliti yang ingin menggunakan framework ini / If you are a researcher using this framework:

```
CHAPTER_5_Unified_Classification_Framework.md  ← Framework 5 dimensi
APPENDIX_F_Detailed_Measurement_Examples.md    ← Contoh penilaian Bitcoin, USDC
QUICK_START.md                                 ← Cara menggunakan tools penelitian
```

---

### Jika kamu pembuat kebijakan / If you are a policymaker:

```
CHAPTER_4_Regulatory_Landscape.md                      ← 5 yurisdiksi Islam
CHAPTER_6_Regulatory_Harmonization_Recommendations.md  ← Proposal IIFRC
APPENDIX_D_Regulatory_Executive_Summaries.md           ← Ringkasan untuk OJK/BNM/AAOIFI
```

---

## Struktur Bab / Chapter Structure

| Bab / Chapter | Topik | Status |
|---|---|---|
| Bab 1 / Ch1 | Pendahuluan / Introduction | ✅ Selesai |
| Bab 2 / Ch2 | Kerangka Hukum Islam / Islamic Legal Framework | 🟡 Perlu ditambah |
| Bab 3 / Ch3 | Posisi Ulama / Jurisprudential Positions | 🟡 Perlu ditambah |
| Bab 4 / Ch4 | Regulasi / Regulatory Landscape | 🟡 Perlu ditambah |
| Bab 5 / Ch5 | Framework Klasifikasi / Classification Framework | ✅ Lengkap |
| Bab 6 / Ch6 | Rekomendasi Harmonisasi / Harmonization Recommendations | 🟡 Perlu ditambah |
| Bab 7 / Ch7 | Kesimpulan / Conclusion | 🟡 Perlu bagian limitasi |
| Bab 8 / Ch8 | Agenda Penelitian Empiris / Empirical Research Agenda | 🔴 Prospektus (belum dilaksanakan) |

---

## Tools Penelitian / Research Tools

Jalankan perintah ini di terminal setelah clone:

```bash
# Install dependensi
npm install

# Query data halal/haram cryptocurrency dari API
node research-halalscreener.js

# Generate data analisis (tanpa API key)
node research-analysis.js
```

Lihat [HALALSCREENER_SETUP.md](HALALSCREENER_SETUP.md) untuk konfigurasi API key.

---

## Yang Paling Penting / Most Important File

Jika hanya bisa membuka satu file, buka ini:

> **[DISSERTATION_COMPLETION_GUIDE.md](DISSERTATION_COMPLETION_GUIDE.md)**

If you can only open one file, open this one.

---

*Repo: https://github.com/zudin2007/Disertasi*  
*Branch: claude/halalscreener-mcp-setup-0imrfp*
