# RESEARCH EXECUTION MANUAL
## Classification, Regulation, and Adoption of Crypto Assets under Islamic Law
### Mixed-Methods Study: Indonesia, Malaysia, GCC | August–September 2026

**Document Version:** 2.0 (Integrated)  
**Status:** Ready for Deployment  
**Last Updated:** July 29, 2026  

---

## PART A: WEEK 5 GO-LIVE CHECKLIST (August 1–5, 2026)

### CRITICAL GO/NO-GO GATE
**Pilot survey deployment ONLY proceeds if:**
- IRB UIN confirms ethical status permits pilot (≤100 respondents before full approval)
- Check explicitly with IRB on Langkah 1.1 (Monday, Aug 1)
- If NO: shift pilot to approval date; run all non-data-collection tasks per schedule

### PRE-LAUNCH: FRIDAY–SATURDAY, JULY 30–31

**Placeholder Completion (MUST-DO):**
- [ ] Kuesioner_Pilot_v2.0_ID.md: Fill contact info, incentive mechanism, IRB number
- [ ] Ringkasan_Riset_dan_Consent_Wawancara.md: Add researcher name & contact
- [ ] Expert_Interview_Recruitment_Templates.md: Verify 3 email templates (regulator, ulama, operator)
- [ ] Konversi Ringkasan Riset to 1-page PDF (ID & EN) for email attachments

**Recruitment List:**
- [ ] Populate Tracking_Minggu5_Launch.xlsx "Rekrutmen" sheet with 6–8 priority contacts (Tier 1: network-based, including Rio Erismen via STEI)

**Supervisor Check-in:**
- [ ] Email pembimbing: Month 1 complete + repo link (latest branch) + schedule meeting 7 August

---

### MONDAY, AUGUST 1 (PAGI)

**08:00 — IRB Critical Contact:**
- [ ] Email IRB UIN: Confirm application receipt + ask (a) decision timeline, (b) pilot ≤100 respondents before full approval?
- [ ] Record answer in "Log Etik IRB" sheet

**09:00 — Wave 1 Expert Interviews (Send Recruitment Emails):**
- [ ] Send 2 emails: Template 1 (Regulator) + Template 2 (Ulama) with PDF ringkasan attachment
- [ ] Record in Tracking_Minggu5_Launch.xlsx "Rekrutmen" sheet; set auto follow-up +7 days

**10:00 — Qualtrics Setup:**
- [ ] Build survey from Kuesioner_Pilot_v2.0_ID.md:
  - Mandatory consent page + 3 screening questions (S1–S3)
  - Skip logic: M1(e) → end; if M1=regulated, continue; if M1=unregulated/inactive, abbreviated M path
  - Attention check: J4 (answer 4 = "Agree"; anything else = fail)
  - Prevent multiple submissions + record duration + randomize section order (except consent first)
  - Load IP blocking if repeat submissions detected

**Afternoon — Internal QA:**
- [ ] Self-test survey 2x (1x regulated user path, 1x unregulated path)
- [ ] Ask 2 colleagues to complete; verify duration ≤20 min, skip logic correct

**IF GO GATE CLEARS (Sore/Evening):**
- [ ] Post pilot link to: 2 FB groups (crypto Indonesia) + 1 Telegram channel
- [ ] Activate daily monitoring: fill "Monitor Pilot Survei" sheet each evening

---

### TUESDAY, AUGUST 2

- [ ] Wave 2 interview emails (2–4 contacts)
- [ ] Check pilot H+1 response count; if <10 → activate 1–2 additional channels (community WA, X/Twitter)
- [ ] Begin Malay adaptation (terminology list only; full translation after v3.0 revision)

### WEDNESDAY, AUGUST 3

- [ ] Reply to ALL interview responses within 24 hours; send 3 schedule options + Ringkasan Part 2 (consent form)
- [ ] Screen pilot data: check duration, attention check (J4), straight-lining patterns; note problem items

### THURSDAY, AUGUST 4

- [ ] If interviews scheduled for Week 6: prepare interview guide (adapted from methodology Ch3 §5.1.3, respondent-type variants); test recording device
- [ ] Check IRB status again if no response from Langkah 1.1 (call if needed)

### FRIDAY, AUGUST 5 (CHECKPOINT 1)

**Mid-morning Check-in:**
- [ ] **Target metrics:**
  - ≥50 valid pilot responses (check "Monitor Pilot Survei" sheet)
  - ≥2 positive interview responses confirmed
- [ ] Fill "check-in W5" row in all three tracking sheets
- [ ] Send 5-line update to pembimbing: ethics status / pilot count / interview status / blockers / Week 6 plan

**Contingency:**
- [ ] If pilot <30 responses → decide on paid online panel activation (budget: $1,000–1,500) for Week 6 start

---

## PART B: SURVEY INSTRUMENT v2.0 — INDONESIAN PILOT

**Platform:** Qualtrics (UIN institutional license)  
**Duration:** 18–20 minutes  
**Target:** 50 responses (pilot) → 2,000–3,000 (full)  
**Incentive:** 50,000–75,000 IDR per valid response (mechanism: e-wallet/pulsa/post-survey)

**KEY NOTATION:**
- [SL] = Skip Logic
- [AC] = Attention Check  
- [R] = Reverse-coded in scoring
- Skala Likert 1–5: "Sangat Tidak Setuju" (1) → "Sangat Setuju" (5), unless noted

---

### HALAMAN 0 — INFORMED CONSENT (Mandatory)

**Title:** Penelitian Adopsi Platform Aset Kripto dan Kepatuhan Syariah di Indonesia

**Peneliti:** [Nama], Kandidat Doktor, UIN Sunan Gunungjati Bandung  
**Pembimbing:** [Nama pembimbing]  
**Kontak:** [email UIN] | [HP/WA]  
**Persetujuan Etik:** [No. IRB UIN] (issued [date])

**Informed Consent Points:**
1. **Durasi:** ±18–20 menit
2. **Sukarela:** Dapat menolak menjawab/mengundurkan diri kapan saja tanpa konsekuensi
3. **Anonim:** Tidak ada pengumpulan identitas pribadi (nama, NIK, rekening); jawaban tidak dapat ditelusuri ke individu
4. **Data:** Disimpan terenkripsi, hanya diakses peneliti & pembimbing, dimusnahkan setelah 3 tahun
5. **Risiko:** Minimal — tidak ada pertanyaan sensitif medis/hukum
6. **Insentif:** [50,000–75,000 IDR] per respons valid — mekanisme [e-wallet/pulsa/sebelum deploy]

**☑ Saya berusia 18+ tahun, memahami penjelasan, dan setuju berpartisipasi → lanjut**  
**☐ Saya tidak setuju → akhiri survei**

---

### SCREENING (3 Item — Mandatory Gate)

**S1. Apakah Anda memiliki atau pernah bertransaksi aset kripto dalam 12 bulan terakhir?**
- ☑ Ya → lanjut
- ☐ Tidak → [SL: akhiri survei; terima kasih]

**S2. Apakah Anda berdomisilir di Indonesia?**
- ☑ Ya → lanjut
- ☐ Tidak → [SL: akhiri survei; terima kasih]

**S3. Pekerjaan utama Anda di industri aset kripto (karyawan exchange, pengelola dana kripto, developer)?**
- ☑ Ya (populasi dieksklusi) → [SL: akhiri — terima kasih, tapi anda adalah insider; kami hanya menerima retail]
- ☐ Tidak → lanjut ke Section A

---

### SECTION A — DEMOGRAFI & LATAR BELAKANG (7 Item)

**A1. Usia Anda:** [Numeric entry, years]

**A2. Jenis kelamin:**
- ☑ Laki-laki ☑ Perempuan ☑ Lainnya ☑ Tidak ingin menjawab

**A3. Pendidikan terakhir:**
- ☑ SMP/sederajat ☑ SMA/sederajat ☑ Diploma ☑ S1 ☑ S2/S3

**A4. Pekerjaan utama:**
- ☑ Karyawan swasta ☑ PNS/ASN ☑ Wiraswasta ☑ Pelajar/mahasiswa ☑ Profesional ☑ Tidak bekerja ☑ Lainnya: ____

**A5. Pendapatan per bulan:**
- ☑ < Rp 4 juta ☑ Rp 4–8 juta ☑ Rp 8–15 juta ☑ Rp 15–40 juta ☑ > Rp 40 juta

**A6. Sudah berapa lama Anda terlibat dengan aset kripto?**
- ☑ < 6 bulan ☑ 6–12 bulan ☑ 1–2 tahun ☑ 2–4 tahun ☑ > 4 tahun

**A7. Provinsi domisili:** [Dropdown: 38 Provinsi Indonesia]

---

### SECTION B — PENGETAHUAN & PERILAKU KRIPTO (6 Item)

**B1. Aset kripto yang saat ini Anda miliki (pilih semua yang berlaku):**
- ☑ Bitcoin ☑ Ethereum ☑ Solana ☑ USDT ☑ USDC ☑ Token emas (mis. GIDR) ☑ Lainnya: ____ ☑ Tidak memiliki saat ini

**B2. Frekuensi transaksi Anda:**
- ☑ Harian ☑ Mingguan ☑ Bulanan ☑ Beberapa kali/tahun ☑ Hampir tidak pernah (hold saja)

**B3. Platform utama yang Anda gunakan (tulis nama):**
[Text entry; coding post-survey: regulated OJK / overseas regulated / unregulated / DEX]

**B4. Berapa persen dari total portofolio investasi Anda yang berupa aset kripto?**
[Slider 0–100%]

**B5. Motivasi utama Anda (pilih SATU yang paling utama):**
- ☑ Keuntungan finansial ☑ Lindung nilai inflasi ☑ Inovasi teknologi/agama ☑ Pembayaran/remitansi ☑ Lainnya: ____

**B6. Seberapa penting faktor-faktor berikut saat Anda memilih platform kripto? (Likert 1–5: Tidak Penting – Sangat Penting)**
- Keamanan & reputasi platform
- Kepatuhan regulasi
- Biaya/komisi
- Kecepatan transaksi
- Ketersediaan Shariah screening

---

### SECTION C — KESADARAN KEPATUHAN SYARIAH (6 Item)

**C1. Apakah Anda tahu bahwa ada perdebatan ulama tentang status syariah aset kripto?**
- ☑ Ya ☑ Tidak

**C2. Apakah Anda pernah membaca atau mendengar tentang Keputusan Ijtima' Ulama MUI tahun 2021 tentang aset kripto?**
- ☑ Ya ☑ Tidak

**C3. Apakah Anda tahu bahwa sejak Januari 2025 pengawasan aset kripto beralih dari Bappebti ke OJK?**
- ☑ Ya ☑ Tidak

**C4. Apakah Anda pernah mendengar tentang produk aset digital berbasis emas yang lulus uji regulator (sandbox OJK)?**
- ☑ Ya ☑ Tidak

**C5. Dari mana Anda mendapat informasi tentang aspek syariah aset kripto? (Pilih SEMUA yang berlaku)**
- ☑ Media sosial ☑ Berita ☑ Teman/keluarga ☑ Situs OJK/regulator ☑ Situs exchange ☑ Ustadz/penasehat agama ☑ Belum pernah dapat informasi ☑ Lainnya: ____

**C6. Seberapa penting bagi Anda bahwa investasi kripto Anda sesuai dengan prinsip syariah?**
[Likert 1–5: Sangat Tidak Penting – Sangat Penting]

---

### SECTION D — SKALA KEPEDULIAN SYARIAH (5 Item, Likert 1–5)

**D1.** Penting bagi saya bahwa kepemilikan aset kripto saya sesuai dengan prinsip-prinsip Islam.

**D2.** Saya lebih memilih platform kripto yang teregulasi dan sesuai syariah meskipun biayanya lebih tinggi.

**D3.** Pertimbangan agama/etika memengaruhi keputusan investasi saya.

**D4.** Saya khawatir perdagangan kripto yang tidak teregulasi melanggar prinsip keuangan Islam.

**D5.** Keluarga/komunitas saya akan mendukung jika saya menggunakan platform kripto yang sesuai syariah.

---

### SECTION E — PERSEPSI KEGUNAAN (TAM, 5 Item, Likert 1–5)

**E1.** Penilaian syariah (screening) membantu saya membuat pilihan investasi yang saya yakini benar.

**E2.** Batas posisi (position limit) di platform teregulasi melindungi saya dari risiko berlebihan.

**E3.** Saya lebih percaya pada Dewan Syariah tentang aset kripto daripada informasi tidak resmi.

**E4.** Mengetahui platform diawasi OJK membuat saya lebih percaya diri di bertransaksi.

**E5.** Pembatasan leverage di platform teregulasi bermanfaat bagi saya.

---

### SECTION F — KEMUDAHAN & HAMBATAN (TAM, 5 Item, Likert 1–5; F3–F5 Reverse-Coded)

**F1.** Membuka akun di exchange kripto teregulasi itu mudah.

**F2.** Platform teregulasi memiliki tampilan yang mudah digunakan.

**F3. [R]** Saya keberatan dengan dokumen KYC yang diminta platform teregulasi.

**F4. [R]** Biaya di platform teregulasi terlalu tinggi dibanding alternatif tidak teregulasi.

**F5. [R]** Saya tidak memakai platform teregulasi karena sulit diakses.

---

### SECTION G — KEPERCAYAAN PADA REGULATOR (5 Item, Likert 1–5; G5 Reverse-Coded)

**G1.** Saya percaya OJK mampu mengatur exchange aset kripto dengan baik.

**G2.** Saya yakin kajian syariah aset kripto yang melibatkan ulama dilakukan secara independen.

**G3.** Proses uji regulator (sandbox) terhadap produk aset digital kredibel dan menyeluruh.

**G4.** Regulator memperioritaskan perlindungan investor ritel.

**G5. [R]** Saya khawatir regulator bisa berhasikap tidak adil terhadap proyek kripto tertentu.

---

### SECTION H — KUIS PENGETAHUAN REGULASI (5 Item, Pilihan Ganda, Objektif) ✅ VERSI KOREKSI

**H1.** Sejak Januari 2025, lembaga yang mengawasi perdagangan aset kripto di Indonesia adalah:
- ☑ Bappebti ☑ **OJK** ✓ ☑ Bank Indonesia ☑ Kementerian Perdagangan ☑ Tidak tahu

**H2.** Keputusan Ijtima' Ulama MUI tahun 2021 menyatakan bahwa penggunaan kripto **sebagai mata uang hukumnya:**
- ☑ Halal ☑ **Haram** ✓ ☑ Makruh ☑ Belum dipunyakan ☑ Tidak tahu

**H3.** Menurut keputusan yang sama, aset kripto boleh **diperjualbelikan jika:**
- ☑ Harganya stabil ☑ **Memiliki underlying/aset dasar yang jelas dan memenuhi syarat si'lah** ✓ ☑ Terdaftar di luar negeri ☑ Tidak ada pencegalan apa pun ☑ Tidak tahu

**H4.** Lembaga yang fatwa­nya menjadi rujukan resmi sektor jasa keuangan syariah di Indonesia (hingga awal 2026 sebelum meluarkan fatwa khusus aset kripto) adalah:
- ☑ Komisi Fatwa MUI ☑ **Dewan Syariah Nasional (DSN-MUI)** ✓ ☑ Kementerian Agama ☑ MES ☑ Tidak tahu

**H5.** Produk yang telah lulus uji sandbox OJK (Agustus 2025) dan memenuhi pengecualian butir 3 keputusan MUI 2021 adalah:
- ☑ Bitcoin ☑ **Tokenisasi emas (token dijamin emas fisik)** ✓ ☑ Dogecoin ☑ NFT ☑ Tidak tahu

**Scoring:** Hitung % benar (0–100). "Tidak tahu" = salah. Gunakan untuk analisis institutional authority gap vs. C1–C5 (sumber informasi).

---

### SECTION I — NORMA SOSIAL (TPB, 3 Item, Likert 1–5)

**I1.** Keluarga saya menganggap penting saya memakai investasi yang sesuai syariah.

**I2.** Komunitas keagamaan saya akan menyetujui perdagangan kripto yang teregulasi dan sesuai syariah.

**I3.** Orang-orang yang saya hormati mengutamakan prinsip Islam dalam keputusan keuangan mereka.

---

### SECTION J — PERSEPSI KONTROL (TPB, 3 Item, Likert 1–5; J3 Reverse-Coded)

**J1.** Saya punya pilihan yang baik untuk investasi kripto yang sesuai syariah.

**J2.** Saya merasa mampu menggunakan platform teregulasi dan sesuai syariah jika saya mau.

**J3. [R]** Sulit menghindari exchange tidak teregulasi karena alternatif yang sesuai syariah kurang lengkap.

**[AC] J4. ATTENTION CHECK — Untuk memastikan Anda membaca dengan teliti, pilih "Setuju" untuk pertanyaan ini:**
[Likert 1–5; jawaban 4 = "Setuju" atau AC terdeteksi gagal — flag respons]

---

### SECTION K — AVERSI RISIKO (4 Item, Likert 1–5)

**K1.** Saya lebih suka investasi dengan parameter risiko yang jelas dan teregulasi.

**K2.** Saya tidak nyaman dengan investasi yang sangat fluktuatif.

**K3.** Batas posisi dalam perdagangan membuat saya lebih tenang.

**K4.** Saya ingin tahu detail teknis suatu aset kripto sebelum membeli.

---

### SECTION L — LITERASI KEUANGAN (5 Item)

**L1.** Saya memahami cara kerja pasar aset kripto. [Likert 1–5]

**L2.** Saya memahami apa itu smart contract. [Likert 1–5]

**L3.** Fungsi utama blockchain adalah:
- ☑ **Mencatat transaksi secara terdistribusi dan tidak mudah diubah** ✓
- ☑ Mencetak uang digital
- ☑ Menjamin harga naik
- ☑ Menyimpan uang di bank
- ☑ Tidak tahu

**L4.** Saya meninjau detail teknis suatu aset kripto sebelum membeli. [Likert 1–5]

**L5.** Keputusan investasi saya berbasis riset, bukan ikut-ikutan. [Likert 1–5]

---

### SECTION M — PILIHAN PLATFORM & PERILAKU TRADING (6 Item — PRIMARY OUTCOME)

**M1. Manakah yang paling menggambarkan platform utama Anda?**
- ☑ (a) Exchange berizin OJK di Indonesia (Tokocrypto, Indodax, Pintu, Reku, Ajaib Kripto)
- ☑ (b) Exchange teregulasi di negara lain
- ☑ (c) Exchange luar negeri tanpa izin Indonesia
- ☑ (d) DEX / peer-to-peer
- ☑ (e) Saat ini tidak aktif bertransaksi → [SL: lompat ke Closing]

[Coding outcome: a=1 (regulated); b/c/d=0 (unregulated)]

**M2.** Berapa persen dari total volume transaksi kripto Anda yang terjadi di platform berizin OJK? [Slider 0–100%]

**M3.** Rata-rata berapa kali Anda beli/jual kripto per bulan? [Numeric entry: isian angka]

**M4.** Ukuran posisi tipikal per transaksi, sebagai % dari portofolio kripto Anda: [Slider 0–100%]

**M5.** Pernahkah Anda terbentuk batas maksimum kerugian sebelum berinvestasi? ☑ Ya ☑ Tidak ☑ Tidak yakin

**M6.** Apakah Anda menyesuaikan cara trading karena adanya pembatasan leverage di platform teregulasi?
- ☑ Ya ☑ Tidak ☑ Tidak relevan bagi saya

---

### PENUTUP

**Terima kasih.** [Instruksi klaim insentif — mekanisme: e-wallet/pulsa/sebelum deploy]

**Optional Follow-up (tidak wajib):**
☑ "Apakah Anda bersediakan untuk dihubungi untuk wawancara lanjutan singkat?" 
- ☑ Ya → [form kontak TERPISAH dari data survei — tidak disimpan di Qualtrics]
- ☐ Tidak

---

### CATATAN QUALITY ASSURANCE PILOT (MINGGU 7 ANALYSIS)

**Threshold Reliabilitas:**
1. Cronbach α: D≥0.75, E/F/G≥0.70, I/J≥0.65 (3 item). Item-total <0.30 → kandidat revisi
2. **Durasi:** median ≤20 menit; identifikasi item dengan drop-off tinggi
3. **Distribusi H1–H5:** jika >90% benar semua = terlalu mudah; <15% = ambigu/sulit
4. **Buang respons:** durasi <5 menit, AC (J4) gagal, straight-lining (SD=0 pada ≥5 item), IP duplikat
5. **Versi Melayu** (Malaysia) – adaptasi SETELAH pilot selesai (Week 7) — jangan terjemah sebelum revisi v3.0

---

## PART C: EXPERT INTERVIEW PROTOCOL & MATERIALS

### INTERVIEW GUIDE OVERVIEW

**Duration:** 45–60 minutes  
**Format:** In-person / Zoom / Phone  
**Recording:** Audio only (transcription + 14-day participant review)  
**Participants:** 8–10 total across 3 categories

| Category | Count | Institutions | Purpose |
|----------|-------|--------------|---------|
| **Regulators (A)** | 3 | OJK, BNM, VARA | Policy mechanisms, sandbox design, coordination with DSN-MUI |
| **Scholars (B)** | 3 | DSN-MUI, Shariah Advisory Boards, Islamic Dev Bank | Jurisprudential reasoning, classification dilemmas, fatwa process |
| **Industry (C)** | 2–4 | AFSI, Exchanges, Blockchain Platforms | Adoption barriers, compliance operationalization, market feedback |

---

### INTERVIEW STRUCTURE (6 Sections)

#### **Section 1: Background & Institutional Context (5–7 min)**

*All respondents*

1. Can you briefly introduce your current role and institution?
2. How long have you been engaged with cryptocurrency/Islamic finance regulation?
3. In your view, what is the most pressing issue in crypto adoption in your country right now?

#### **Section 2: Classification & Jurisprudential Framework (12–15 min)**

**For Scholars (B):**
1. Can you walk us through DSN-MUI's (or your board's) approach to classifying crypto assets?
2. The 2021 MUI Ijtima' decision carves an exception (butir 3) for asset-backed tokens. How did that exception emerge, and what does "underlying asset" mean operationally?
3. Do you see divergence between your guidance and OJK's regulatory approach? If so, where?
4. What remains unresolved in the classification of crypto for Shariah purposes?

**For Regulators (A):**
1. How does OJK (or your regulator) approach Shariah classification as a supervisory matter?
2. What was the trigger for coordinating with DSN-MUI on this issue?
3. In your view, what barriers exist to clear institutional alignment on Shariah compliance?
4. [If sandbox model relevant] How does the sandbox approach test Shariah compliance assumptions?

**For Industry (C):**
1. From your platform's perspective, how do you navigate the gap between MUI and regulatory messaging on crypto compliance?
2. What would clearer classification guidance from authorities enable you to do?
3. What fraction of your user base is motivated by Shariah compliance vs. other factors?

#### **Section 3: Regulatory Implementation & Sandbox Experience (12–15 min)**

**For Regulators (A):**
1. Walk us through the sandbox model for [specific asset class, e.g., gold tokenization].
2. What metrics do you use to assess Shariah compliance in sandbox testing?
3. What was the outcome, and how does it feed back into regulatory policy?
4. How do you see the sandbox evolving over the next 12–18 months?

**For Industry (C):**
1. Have you participated in or applied for sandbox approval?
2. If yes: What was the process, timeline, and outcome? What was the most challenging aspect?
3. If no: What would incentivize participation?
4. How does regulatory clarity (or lack thereof) affect your product roadmap?

**For Scholars (B):**
1. Are you (or DSN-MUI) involved in evaluating sandbox proposals for Shariah compliance?
2. If yes: What is your assessment framework, and how do you communicate findings to OJK?
3. What gaps do you see in the current coordination model?

#### **Section 4: Adoption Barriers & Institutional Participation (8–10 min)**

*All respondents, tailored*

1. In your experience, what is the single biggest barrier to users adopting Shariah-compliant crypto platforms?
   - [Scholars: barrier on the scholarly side]
   - [Regulators: barrier on the regulatory/market side]
   - [Industry: barrier users cite to you]

2. Do you think clearer messaging from authorities would move the needle on adoption? How?

3. What role does institutional authority — i.e., whose message do users actually trust — play in adoption decisions?

#### **Section 5: Future Development & Research Implications (8–10 min)**

1. Looking 12–24 months ahead, what do you expect to change in crypto regulation under Islamic law?

2. Are there pending policy decisions or scholarly deliberations that will shape classification and compliance?

3. [If multi-jurisdictional relevant] How coordinated do you think crypto regulation will be across Indonesia, Malaysia, GCC?

4. From your vantage point, what would be the highest-value research question we could pursue to support better regulation/scholarship/adoption?

#### **Section 6: Closing & Clarification (2–3 min)**

1. Is there anything you'd like to add on the relationship between classification, regulation, and adoption?
2. May we follow up if we have clarification questions during analysis?
3. Would you like a summary of findings before publication?

---

### CONSENT & CONFIDENTIALITY

**Anonymization Scheme:**
- Regulator A, Regulator B, Regulator C (or by institution: OJK, BNM, VARA if non-identifiable)
- Scholar A, Scholar B, Scholar C
- Industry Operator A, Industry Operator B, Industry Operator C, Industry Operator D

**Opt-In Named Attribution (optional):**
- Respondent may request named attribution in writing; document consent explicitly

**Recording & Transcription:**
- Audio recorded (transcription-only purpose)
- Transcript shared within 7 days for participant review
- 14-day right to request corrections/redactions
- Destroyed after 3 years per IRB protocol

**Data Storage:**
- Encrypted (AES-256), UIN server
- Access: researcher + supervisor only
- Retention: 3 years, then destroyed

---

### INTERVIEW RECRUITMENT TEMPLATES

**Template 1: REGULATORS (OJK, BNM, VARA)**

---

**Subyek:** Invitation to Participate: Crypto Classification & Regulation Study (UIN Sunan Gunungjati)

Dear [Name/Title],

I am writing to invite you to participate in a doctoral research study on crypto asset classification, regulatory frameworks, and adoption patterns under Islamic law — currently one of the most dynamic areas in Islamic finance.

**The Study:**
This research spans Indonesia, Malaysia, and the GCC (2,000–3,000 user survey + 8–10 expert interviews + regulatory case studies). We are particularly interested in understanding how classification frameworks translate into operational policy, and where implementation gaps emerge.

**Your Role:**
As a [regulator / policymaker] at [Institution], your perspective on policy design, Shariah coordination, and adoption barriers is invaluable to our analysis. The interview is approximately 45–60 minutes, on your schedule (in-person, Zoom, or phone).

**Commitment:**
- Full confidentiality (anonymized as "Regulator A" or by institution if you prefer)
- Transcript review on request
- Findings summary shared before publication

**Why This Matters:**
Clearer understanding of how regulatory frameworks operationalize Shariah classification can inform better-aligned policy across jurisdictions and support evidence-based Shariah scholarship.

I have attached a 1-page research summary (Indonesian + English) with full details.

Could we schedule a conversation in early August? I am flexible on format and timing.

Best regards,

[Nama Peneliti]  
Kandidat Doktor, UIN Sunan Gunungjati Bandung  
[Email UIN] | [HP/WA]

---

**Template 2: SCHOLARS (DSN-MUI, Shariah Advisory Boards, Islamic Development Bank)**

---

**Subyek:** Undangan Berpartisipasi: Studi Klasifikasi & Adopsi Aset Kripto dalam Hukum Islam

Assalamu'alaikum Wa Rahmatullahi Wa Barakatuh,

Dengan hormat, saya mengundang Anda untuk berpartisipasi dalam penelitian doktor tentang klasifikasi aset kripto, kerangka regulasi, dan pola adopsi dalam perspektif hukum Islam — salah satu isu paling dinamis dalam keuangan syariah kontemporer.

**Penelitian Kami:**
Penelitian lintas-metode ini mencakup Indonesia, Malaysia, dan GCC dengan survei 2,000–3,000 pengguna, 8–10 wawancara pakar, dan studi kasus regulasi lima yurisdiksi. Kami ingin memahami bagaimana kerangka klasifikasi syariah diterjemahkan ke dalam operasional regulasi, dan di mana terjadi kesenjangan implementasi.

**Peran Anda:**
Sebagai [ulama / anggota dewan syariah] di [Institusi], perspektif Anda tentang proses fatwa, koordinasi dengan otoritas regulasi, dan hambatan adopsi sangat berarti bagi analisis kami. Wawancara berlangsung ±45–60 menit, sesuai jadwal Anda (tatap muka, Zoom, atau telepon).

**Komitmen Kami:**
- Kerahasiaan penuh (anonimkan sebagai "Ulama A" atau sebutkan institusi saja)
- Transkrip dapat Anda tinjau dalam 7 hari
- Ringkasan temuan akan dibagikan sebelum publikasi

**Mengapa Ini Penting:**
Pemahaman yang lebih jelas tentang bagaimana kerangka regulasi mengoperasionalkan klasifikasi syariah dapat menginformasikan kebijakan yang lebih terpadu lintas yurisdiksi dan mendukung kajian syariah berbasis bukti empiris.

Saya telah melampirkan ringkasan riset 1 halaman (bahasa Indonesia + Inggris) dengan detail lengkap.

Bisakah kita mengatur percakapan di awal Agustus? Saya fleksibel dengan format dan waktu.

Wassalamu'alaikum Wa Rahmatullahi Wa Barakatuh,

[Nama Peneliti]  
Kandidat Doktor, UIN Sunan Gunungjati Bandung  
[Email UIN] | [HP/WA]

---

**Template 3: INDUSTRY (Exchanges, Blockchain Platforms, AFSI)**

---

**Subyek:** Invitation to Participate: Crypto Adoption & Regulatory Compliance Study

Dear [Name/Title],

I am reaching out to invite you to participate in doctoral research exploring how crypto platforms navigate Shariah compliance, regulatory frameworks, and user adoption — a critical area as markets mature.

**The Study:**
Our mixed-methods research (Indonesia, Malaysia, GCC) includes a 2,000–3,000-user survey, 8–10 expert interviews, and regulatory case studies. We want to understand the lived experience of platforms operationalizing Shariah compliance and the barriers users and operators face.

**Your Role:**
As [operator / compliance officer] at [Exchange/Platform], your frontline perspective on user demand, regulatory coordination, and product design is essential. The interview is 45–60 minutes, flexible format (in-person, Zoom, phone).

**Commitment:**
- Full confidentiality (anonymized as "Industry Operator A" or your company name if you prefer)
- Transcript review available
- Non-disclosure of proprietary data — we ask only about strategies and barriers, not volumes
- Findings summary shared before publication

**Why This Matters:**
This research can help inform regulatory policy that better supports compliant innovation and evidence-based user education.

I have attached a 1-page research summary with details.

Could we find time in early August? I'm happy to accommodate your schedule.

Best regards,

[Nama Peneliti]  
Kandidat Doktor, UIN Sunan Gunungjati Bandung  
[Email UIN] | [HP/WA]

---

## PART D: ANALYSIS PLAN

### D.1 QUALITATIVE DATA ANALYSIS (Interviews)

**Method:** Thematic analysis with NVivo / Atlas.ti  
**Timeline:** September–October 2026

**Coding Scheme (5 Primary Themes):**

1. **Maqasid Application**
   - How respondents frame Shariah compliance via Maqasid Shariah (Necessity, Certainty, Public Interest, Justice, Dignity)
   - Trade-offs between permissibility and practical adoption

2. **Regulatory Implementation**
   - Policy design rationale; translation of Shariah guidance into rule-making
   - Sandbox model effectiveness; approval/rejection criteria

3. **Adoption Barriers**
   - User-side: uncertainty, cost, platform trust, cultural acceptability
   - Operator-side: compliance complexity, market size, regulatory ambiguity
   - Scholar-side: time-lag in fatwa issuance, institutional authority gaps

4. **Institutional Coordination**
   - DSN-MUI ↔ OJK alignment; messaging clarity
   - Multi-jurisdictional coordination (Indonesia–Malaysia–GCC patterns)
   - Authority gaps and divergence sources

5. **Future Direction**
   - Expected policy evolution; pending deliberations
   - Research priorities identified by respondents

**Output:**
- Thematic summary document (≤20 pages)
- Illustrative quotations per theme (anonymized)
- Institutional authority gap evidence

---

### D.2 QUANTITATIVE DATA ANALYSIS (Survey)

**Software:** R (ggplot2, lm, lavaan, psych) or SPSS  
**Timeline:** September–October 2026

#### **Phase 1: Descriptive Statistics**

- Demographic profile (age, gender, education, income, crypto experience)
- Behavioral outcomes (M1–M6): platform choice distribution, trading frequency, position sizing
- Awareness metrics (C1–C5): % aware of MUI Fatwa, % aware of OJK transition, % aware of GIDR
- Knowledge quiz (H1–H5): % correct per item; correlation with awareness sources (C5)

#### **Phase 2: Bivariate Analysis**

**Correlations & Group Comparisons:**
- H1–H5 knowledge vs. C1–C5 information sources (chi-square / t-test): test messaging effectiveness
- D1–D5 (Shariah compliance motivation) vs. M1 (platform choice): does Shariah concern predict regulated platform adoption?
- F1–F5 (barriers) vs. M1 (outcomes): which barriers most predictive of platform choice?
- G1–G5 (regulatory trust) vs. M2 (% on OJK platform): trust correlation with behavior

#### **Phase 3: Multivariate Analysis**

**Factor Analysis:**
- EFA on Sections D–J (attitudes, norms, perceived control); confirm dimensions
- Verify 5-factor structure aligns theory (Maqasid dimensions vs. TPB)

**Regression Model (DV = M1: Regulated vs. Unregulated Platform Choice):**

$$M1 \sim D + E + F + G + I + J + K + L + \text{Demographics}$$

- **D (Shariah motivation):** Expected positive β
- **E (perceived usefulness):** Expected positive β
- **F (ease of use; reverse-coded):** Expected positive β (lower barriers → regulated)
- **G (regulatory trust):** Expected positive β
- **I (social norms):** Expected positive β
- **J (perceived control):** Expected positive β
- **K (risk aversion):** Expected positive β (risk-averse → regulated)
- **L (financial literacy):** Expected positive β

**Model fit:** Report R², adjusted R², AIC

#### **Phase 4: Institutional Authority Gap Analysis**

**Cross-Tabulation: H4–H5 × C5 (Info Sources)**

- H4 (knows DSN-MUI vs. OJK): cross-tab with C5 response (which sources used)
- H5 (knows GIDR/sandbox): cross-tab with C5
- Report: % who get info from "official sources" (OJK/exchange/ustadz) vs. "informal" (social media) and their H-score distributions

**Hypothesis:** Users citing "formal" information sources score higher on H4–H5 (institutional authority clarity effect)

#### **Phase 5: Mediation Analysis (Optional)**

**Path:** C1–C5 (awareness) → D (Shariah motivation) → M1 (platform choice)

- Test if awareness mediates the path from information source quality to behavioral adoption
- Indirect effect via D1–D5 using lavaan::sem()

---

### D.3 MIXED-METHODS INTEGRATION

**Convergence Table:**
| Finding | Qualitative Support | Quantitative Evidence |
|---------|---------------------|----------------------|
| Institutional authority gap shapes adoption | Regulator/Scholar interviews cite DSN-MUI/OJK coordination lag | H4–H5 scores lower; variance by C5 source |
| Shariah motivation predicts platform choice | Industry reports user demand for compliance screening | β(D) positive, significant in M1 regression |
| Regulatory trust correlates with adoption | Operator feedback on compliance-conscious segment | r(G,M1) or r(G,M2) significant |

---

## PART E: ETHICS & DATA SECURITY

### E.1 INFORMED CONSENT

**Survey:**
- Mandatory checkbox before Section A
- 6-point disclosure: duration, voluntary, anonymous, data storage, risk, incentive
- Rejection → survey terminates, respondent thanked

**Interview:**
- Verbal informed consent recorded at start (for remote); written signature for in-person
- Covers: voluntary, recording, anonymity options, transcript review, data retention

### E.2 PRIVACY & ANONYMIZATION

**Survey:**
- No name, NIK, ID card, or account details collected
- Response data stored with auto-generated respondent ID only
- IP address logged only to detect duplicates; deleted post-screening

**Interview:**
- Coded as Regulator A–C, Scholar A–C, Industry Operator A–D
- Optional named attribution by written request; flagged separately
- Institution name may appear (e.g., "OJK") without individual identifier

### E.3 DATA STORAGE & SECURITY

**Physical/Digital:**
- Encrypted storage (AES-256) on UIN secure servers
- Access: researcher + supervisor only
- No cloud storage without institutional approval
- Destruction: 3 years post-collection per IRB protocol

**Recordings:**
- Audio files stored encrypted
- Transcripts stored separately from identifying info
- Deletion timeline: 3 years post-completion

### E.4 RISK MITIGATION

**Minimal Risk Assessment:**
- No sensitive medical, legal, or financial account disclosures
- Regulator/scholar views on policy are professional opinions, not personal
- Industry operator feedback kept non-proprietary (strategy/barriers, not volumes)

**Breach Protocol:**
- Immediate notification to IRB if unauthorized access detected
- Participant notification within 48 hours
- Incident report + remediation plan filed

---

## PART F: COMPLETE TIMELINE & MILESTONES (WEEKS 5–12)

### **WEEK 5 (Aug 1–5, 2026) — LAUNCH**

| Day | Milestone | Owner | Status |
|-----|-----------|-------|--------|
| M 08:00 | IRB pilot approval confirmation | Researcher | [ ] |
| M 09:00 | Wave 1 interview emails (2 regulator, 1 ulama) | Researcher | [ ] |
| M 10:00 | Qualtrics survey deployed | Research Assistant | [ ] |
| M/Tu | Internal QA; post pilot link | Research Assistant | [ ] |
| Tu | Wave 2 interview emails (2–4 contacts) | Researcher | [ ] |
| W | Screen pilot data; respond to interview inquiries | Research Assistant | [ ] |
| Th | Interview guide + recording setup | Researcher | [ ] |
| **F 08:00** | **CHECKPOINT 1: ≥50 pilot responses, ≥2 interview confirmations** | Researcher | [ ] |

---

### **WEEK 6 (Aug 8–14) — SCALE-UP & INTERVIEWS BEGIN**

| Day | Milestone | Owner |
|-----|-----------|-------|
| M–W | Wave 3 interview emails (remaining contacts if needed) | Researcher |
| M | Confirm interviewed participant schedule; send consent form Part 2 | Research Asst |
| Tu–Th | First 3–4 interviews conducted (likely remote) | Researcher |
| Th | Transcription begins (first interviews) | Research Asst |
| F | Update pembimbing; scale pilot to 200–300 responses if targets met | Researcher |

---

### **WEEK 7 (Aug 15–21) — PILOT ANALYSIS & INTERVIEWS CONTINUE**

| Day | Milestone | Owner |
|-----|-----------|-------|
| M–W | Interviews 5–8 | Researcher |
| Th–F | Pilot data quality analysis: Cronbach α, distribution H1–H5, buang <3 min responses, AC fail, straight-lining | Research Asst |
| F | Decide: v2.0 revisions needed? (minor wording vs. major reshape) | Researcher + Statistician |
| **F Check-in** | **CHECKPOINT 2: Pilot ≥200 valid responses; ≥6 interviews completed** | Researcher |

---

### **WEEK 8 (Aug 22–28) — FULL SURVEY DEPLOYMENT**

| Day | Milestone | Owner |
|-----|-----------|-------|
| M | If revisions needed: deploy v2.1 | Research Asst |
| M–W | Final interviews (target ≥8–10 total) | Researcher |
| M | Transcription in progress (≥6 interviews) | Research Asst |
| Tu | Full survey deployment (2,000–3,000 target): activate paid panel if <500 organic | Research Asst |
| W–Th | Monitor response quality; remove duplicates, speeders, straight-liners daily | Research Asst |
| F | **CHECKPOINT 3: ≥1,000 responses; ≥8–10 interviews completed & transcribed** | Researcher |

---

### **WEEK 9–10 (Aug 29–Sep 11) — DATA COLLECTION & TRANSCRIPTION**

| Day | Milestone | Owner |
|-----|-----------|-------|
| Daily | Monitor survey response count & quality | Research Asst |
| Daily | Transcription continues; participant review copies sent | Research Asst |
| End W9 | Target: ≥1,500 responses | Research Asst |
| End W10 | **Target: ≥2,000 responses; ≥90% interviews transcribed** | Researcher |

---

### **WEEK 11 (Sep 12–18) — FINAL DATA COLLECTION & ANALYSIS BEGINS**

| Day | Milestone | Owner |
|-----|-----------|-------|
| M–W | Final push for survey completion (close Friday W11) | Research Asst |
| M–Th | Begin qualitative thematic coding (NVivo) | Researcher |
| Th | Last survey responses cleaned; data export for analysis | Research Asst |
| F | **CHECKPOINT 4: Survey closed; N ≥ 2,000; all interview transcripts finalized** | Researcher |

---

### **WEEK 12 (Sep 19–25) — ANALYSIS & SYNTHESIS**

| Day | Milestone | Owner |
|-----|-----------|-------|
| M–W | Quantitative analysis: descriptive, bivariate, factor, regression | Statistician |
| M–Th | Qualitative thematic analysis complete; draft 20-page summary | Researcher |
| Th | Integration memo: mixed-methods convergence table | Researcher |
| F | **Preliminary report to pembimbing** | Researcher |

---

## APPENDIX: QUICK REFERENCE CHECKLIST

### **Pre-Launch (July 30–31)**
- [ ] IRB approval confirmation email
- [ ] Placeholder data filled (name, contact, IRB #, incentive)
- [ ] Research summary PDF created (ID + EN)
- [ ] Recruitment template emails ready
- [ ] Priority contact list finalized (6–8 names)
- [ ] Tracking spreadsheet initialized

### **Week 5 Daily Checklist**
- [ ] Mon 08:00: IRB contact
- [ ] Mon 09:00: Wave 1 emails + tracking logged
- [ ] Mon 10:00: Qualtrics deployed; internal QA 2x
- [ ] Mon Evening: Pilot link posted (2 FB groups, 1 Telegram)
- [ ] Tue–Fri: Daily pilot monitoring; interview response follow-up
- [ ] Fri 08:00: Milestone checkpoint (50 responses, 2+ interviews)

### **Ongoing**
- [ ] Monitor daily: survey quality (speeders, duplicates, straight-liners)
- [ ] Monitor daily: interview response rate; send 7-day follow-ups
- [ ] Weekly: Update tracking sheets
- [ ] Weekly: Brief pembimbing (5-line update)
- [ ] Ethics: Any issues → escalate to IRB immediately

---

## DOCUMENT CONTROL

| Version | Date | Changes | Approval |
|---------|------|---------|----------|
| 1.0 | July 22, 2026 | Initial protocol | Pembimbing |
| 2.0 | July 29, 2026 | **Integrated execution manual (user + protocol)** | Pembimbing pending |

---

**Prepared by:** Claude (Code AI)  
**For:** [Peneliti], UIN Sunan Gunungjati Bandung  
**Status:** Ready for Deployment August 1, 2026

---

**END OF RESEARCH EXECUTION MANUAL**
