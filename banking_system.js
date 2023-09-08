class BankAccount {
  constructor(saldo = 0) {
    this.saldo = saldo;
  }

  deposit(jumlah) {
    setTimeout(() => {
      if (jumlah > 0) {
        this.saldo += jumlah;
        const successMessage = `Deposit ${jumlah} berhasil. Saldo saat ini: ${this.saldo}`;
        alert(successMessage);
        console.log(successMessage);
      } else {
        const errorMessage = 'Jumlah deposit harus lebih dari 0.';
        alert(errorMessage);
        console.log(errorMessage);
      }
    }, 2000); // Menunda eksekusi selama 2 detik
  }

  withdraw(jumlah) {
    setTimeout(() => {
      if (jumlah > 0 && jumlah <= this.saldo) {
        this.saldo -= jumlah;
        const successMessage = `Withdraw ${jumlah} berhasil. Saldo saat ini: ${this.saldo}`;
        alert(successMessage);
        console.log(successMessage);
      } else if (jumlah > this.saldo) {
        const errorMessage = 'Saldo tidak mencukupi.';
        alert(errorMessage);
        console.log(errorMessage);
      } else {
        const errorMessage = 'Jumlah withdraw harus lebih dari 0.';
        alert(errorMessage);
        console.log(errorMessage);
      }
    }, 2000); // Menunda eksekusi selama 2 detik
  }
}

// Contoh penggunaan BankAccount
const myAccount = new BankAccount(0);

function main() {
  while (true) {
    let option = window.prompt(
      'Pilih Proses dibawah ini:\n1. Deposit\n2. Withdraw\n3. Keluar'
    );

    switch (option) {
      case '1':
        let depositJumlah = parseFloat(window.prompt('Masukkan jumlah setoran tunai:'));
        myAccount.deposit(depositJumlah);
        break;

      case '2':
        let withdrawJumlah = parseFloat(window.prompt('Masukkan jumlah penarikan tunai:'));
        myAccount.withdraw(withdrawJumlah);
        break;

      case '3':
        alert('Terima Kasih! Sampai jumpa kembali.');
        console.log('Terima Kasih! Sampai jumpa kembali.');
        return;

      default:
        alert('Opsi tidak valid.');
    }
  }
}

main();
