// =========================================
// 1. FUNGSI SIDEBAR MENU (Dipakai di Semua Halaman)
// =========================================
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  // Cek apakah elemen ada untuk menghindari error
  if (!sidebar || !overlay) return;

  const isHidden = sidebar.classList.contains("-translate-x-full");

  if (isHidden) {
    // Buka Menu
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
    // Animasi fade in overlay
    setTimeout(() => {
      overlay.classList.remove("opacity-0");
    }, 10);
  } else {
    // Tutup Menu
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("opacity-0");
    // Tunggu animasi selesai baru sembunyikan overlay
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 300);
  }
}

// Event Listener: Tutup menu jika Overlay diklik (area gelap di luar menu)
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.addEventListener("click", toggleMenu);
  }
});

// =========================================
// 2. FUNGSI FORMAT RUPIAH (Utility)
// =========================================
// Mengubah angka biasa (misal 150000) menjadi format harga (Rp 150.000)
function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}
