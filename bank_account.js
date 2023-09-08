class BankAccount {
  constructor() {
    this.saldo = 0;
  }

  deposit(jumlah) {
    setTimeout(() => {
      if (jumlah > 0) {
        this.saldo += jumlah;
        alert(`Deposit ${jumlah} berhasil. Saldo saat ini: ${this.saldo}`);
        console.log(`Deposit ${jumlah} berhasil. Saldo saat ini: ${this.saldo}`);
        console.log(`Saldo terbaru: ${this.saldo}`);
      } else {
        alert('Jumlah deposit harus lebih dari 0.');
        console.log('Jumlah deposit harus lebih dari 0.');
      }
    }, 2000); // Menunda eksekusi selama 2 detik
  }

  withdraw(jumlah) {
    setTimeout(() => {
      if (jumlah > 0 && jumlah <= this.saldo) {
        this.saldo -= jumlah;
        alert(`Penarikan ${jumlah} berhasil. Saldo saat ini: ${this.saldo}`);
        console.log(`Penarikan ${jumlah} berhasil. Saldo saat ini: ${this.saldo}`);
        console.log(`Saldo terbaru: ${this.saldo}`);
      } else if (jumlah > this.saldo) {
        alert('Saldo tidak mencukupi.');
        console.log('Saldo tidak mencukupi.');
      } else {
        alert('Jumlah penarikan harus lebih dari 0.');
        console.log('Jumlah penarikan harus lebih dari 0.');
      }
    }, 2000); // Menunda eksekusi selama 2 detik
  }
}

function main() {
  const myAccount = new BankAccount();

  while (true) {
    let opsi = prompt("Pilih Proses dibawah ini:\n1. Setor Tunai\n2. Tarik Tunai\n3. Keluar");

    switch (opsi) {
      case "1":
        let depositAmount = parseFloat(prompt("Masukkan jumlah setoran tunai:"));
        myAccount.deposit(depositAmount);
        break;

      case "2":
        let withdrawAmount = parseFloat(prompt("Masukkan jumlah penarikan tunai:"));
        myAccount.withdraw(withdrawAmount);
        break;

      case "3":
        alert("Terima Kasih! Sampai jumpa kembali.");
        console.log("Terima Kasih! Sampai jumpa kembali.");
        return;

      default:
        alert("Opsi tidak valid.");
    }
  }
}

main();
