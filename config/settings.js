/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "0000";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Mutia";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "i'd like to watch you sleeping",             // ← GANTI JUDUL LAGU
    artist: "Sal Priadi",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 25,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "jujur deh, satu senyum dari kamu aja udah cukup buat bikin hariku jauh lebih baik." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "kamu itu literally alasan kenapa hatiku bisa terasa sepenuh ini." },
  { file: "img3.jpeg", caption: "setiap detik bareng kamu udah jelas jadi yang paling favorit buat aku." },
  { file: "img4.jpeg", caption: "orang lain mungkin nyarinya seumur hidup, tapi aku nemu kebahagiaan itu di kamu." },
  { file: "img5.jpeg", caption: "entah gimana caranya, kamu berhasil bikin hidupku yang biasa jadi seindah ini." },
  { file: "img6.jpeg", caption: "hatiku tuh paling tenang dan aman kalau lagi sama kamu." },
  { file: "img7.jpeg", caption: "kalau bisa mengulang momen mana pun, aku bakal pilih kita, setiap kali." },
  { file: "img8.jpeg", caption: "masih orang paling favorit, sekarang, besok, dan selamanya." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"jadi, aku pengen ngirim ini kayak cara pelaut zaman dulu ngirim kabar ke rumah — disegel, dilepas ke lautan, dan cuma berharap suratnya bakal sampai ke orang yang tepat. kayak sebuah pesan kecil yang dilepas ke lautan dan berharap akhirnya sampai tepat ke orang yang dituju.",
"hari ini literally hari kamu. semoga hari ini terasa persis kayak gitu: santai, hangat, dan penuh hal-hal kecil yang menyenangkan. semoga hari ini berjalan pelan, nyaman, dan dipenuhi hal-hal kecil yang bikin kamu senyum. kamu pantas mendapatkan semuanya itu.",
"makasih udah jadi orang yang kehadirannya aja udah bikin hari-hari yang paling biasa pun jadi berasa berharga. kehadiran kamu tuh punya cara sendiri buat bikin hari yang biasa aja jadi terasa spesial. sudut kecil internet ini cuma cara kecilku buat ngomong itu.",
"apapun yang kamu lakukan hari ini, aku cuma berharap kamu dikelilingi orang-orang yang sayang sama kamu, setulus aku bahkan lebih. semoga hari ini penuh sama orang-orang yang tulus sayang sama kamu dan bikin kamu ngerasa dicintai. selamat ulang tahun, orang paling favoritku."

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Bab Satu",
    title: "di sinilah semua bermula",
    text:  "tepat di momen itu semuanya langsung terasa klik, dan tiba-tiba semuanya mulai masuk akal.",
  },
  {
    depth: "8m",
    year:  "Bab Dua",
    title: "hari-hari yang tenang",
    text:  "cuma kamu, aku, dan momen-momen sederhana kecil yang ternyata berakhir jadi segalanya.",
  },
  {
    depth: "16m",
    year:  "Bab Tiga",
    title: "melewati badai",
    text:  "kita memang pernah punya masa-masa berat, ada badai dan kekacauan juga, tapi entah gimana kita selalu menemukan jalan kembali satu sama lain.",
  },
  {
    depth: "24m",
    year:  "Bab Empat",
    title: "menemukan cahaya",
    text:  "kamu sungguh-sungguh bagian paling terang dari seluruh perjalananku, yang selalu bikin segalanya terasa sedikit lebih ringan bahkan di saat terberat sekalipun.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "semoga tahun ini memberimu ketenangan seluas samudra, dan sedalam itu juga hatimu yang selalu penuh dengan kebaikan." },
  { icon: "shell",   text: "semoga hari-harimu selalu secerah ini, kayak matahari yang memantul di atas air, dan malam-malammu tetap setenang ombak yang pelan-pelan kembali ke laut." },
  { icon: "star",    text: "semoga setiap keinginan kecilmu pelan-pelan menjadi kenyataan, tepat di saat kamu paling membutuhkannya." },
  { icon: "compass", text: "ke mana pun tahun ini membawamu, semoga kamu selalu menemukan jalan kembali ke orang-orang yang tulus peduli dan menyayangimu." },
  { icon: "anchor",  text: "tetap teguh, tetap bersyukur, dan jadilah dirimu yang sekarang — indah dengan caramu sendiri, selalu." },
  { icon: "heart",   text: "selamat ulang tahun — selamat menyambut satu tahun lagi penuh kenangan yang selalu layak untuk disimpan." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281234567890";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "heyy aku baru buka botolnya, makasih banyak ya udah bikin hariku jadi jauh lebih baik! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);