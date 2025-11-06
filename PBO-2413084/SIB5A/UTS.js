class Cuti {
    constructor(nama) {
        this.nama = nama;
    }
    KuotaCuti() {
        console.log("Jenis cuti dan kuota")
    }
}

class CutiTahunan extends Cuti{
    KuotaCuti(nama, CT,) {
        super.nama = nama;
        if (CT <= 12) {
            console.log(`${this.nama}, Kuota anda cukup untuk mengajukan cuti ini`);
        } 
        else {
            console.log(`${this.nama}, Kuota anda tidak cukup untuk mengajukan cuti ini`);
        }
    }
}

class CutiSakit extends Cuti{
    KuotaCuti(nama, CS) {
        super.nama = nama;
        if (CS <= 2) {
            console.log(`${this.nama}, Kuota anda cukup untuk mengajukan cuti ini`);
        }
        else {
            console.log(`${this.nama}, Kuota anda tidak cukup untuk mengajukan cuti ini`);
        }
    }
}

class CutiMelahirkan extends Cuti{
    KuotaCuti(nama, CM) {
        super.nama = nama;
        if (CM <= 90) {
            console.log(`${this.nama}, Kuota anda cukup untuk mengajukan cuti ini`);
        }
    
        else {
            console.log(`${this.nama}, Kuota anda tidak cukup untuk mengajukan cuti ini`);
        }
    }
}


const cutiTahunan = new CutiTahunan();
cutiTahunan.KuotaCuti("Budi",13);

const cutiSakit = new CutiSakit();
cutiSakit.KuotaCuti("Sita",2);

const cutiMelahirkan = new CutiMelahirkan();
cutiMelahirkan.KuotaCuti("Nani",91);