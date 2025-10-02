class Mahasiswa {
  constructor(nama, nim, nilai, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    let _nilai = nilai;

    this.getNilai = function() {
      return _nilai;
    };

    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log('Nilai harus antara 0 dan 100');
      }
    };
  }

  tampilkanInfo() {
    return `Nama: ${this.nama}\nNIM: ${this.nim}\nJurusan: ${this.jurusan}\nNilai: ${this.getNilai()}`;
  }
}

const mahasiswa1 = new Mahasiswa('Budi Santoso', '12345678', 85, 'Teknik Informatika');
console.log(mahasiswa1.tampilkanInfo());

mahasiswa1.setNilai(95);
console.log('\nSetelah nilai diubah:');
console.log(mahasiswa1.tampilkanInfo());

mahasiswa1.setNilai(150);

const mahasiswa2 = new Mahasiswa('Ani Wijaya', '87654321', 75, 'Sistem Informasi');
console.log('\n' + mahasiswa2.tampilkanInfo());

mahasiswa2.setNilai(87);
console.log('\nSetelah nilai diubah:');
console.log(mahasiswa2.tampilkanInfo());
