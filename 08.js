try {
  let mahasiswa = ["Andi", "Budi", "Citra"];
  console.log(mahasiswa[5].toUpperCase());
} catch (error) {
  console.log("Terjadi error: " + error.message);
} finally {
  console.log("Proses selesai.");
}

console.log("\n");

try {
  let usia = 16;
  if (usia < 18) {
    throw new Error("Maaf, Anda belum cukup umur!");
  }
  console.log("Selamat datang!");
} catch (error) {
  console.log("Terjadi kesalahan: " + error.message);
}

console.log("\n");

class ValidasiError extends Error {
  constructor(pesan) {
    super(pesan);
    this.name = "ValidasiError";
  }
}

try {
  let nama = "Jo";
  if (nama.length < 3) {
    throw new ValidasiError("Nama terlalu pendek!");
  }
  console.log(`Nama valid: ${nama}`);
} catch (error) {
  if (error instanceof ValidasiError) {
    console.log("Terjadi kesalahan validasi: " + error.message);
  } else {
    console.log("Kesalahan lain: " + error.message);
  }
}
