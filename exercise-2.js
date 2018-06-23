/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi.
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot (arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var biaya = 2000; // LIHAT INSTRUKSI
    var hasil = [];
    
    if (arrPenumpang.length === 0) {
      return arrPenumpang;
    }
    
    for (var i = 0; i < arrPenumpang.length; i++) {
      var penumpang = arrPenumpang[i];
      var objPenumpang = {};
      
      objPenumpang.penumpang = penumpang[0];
      objPenumpang.naikDari = penumpang[1];
      objPenumpang.tujuan = penumpang[2];
      objPenumpang.bayar = biaya * (rute.indexOf (objPenumpang.tujuan) - rute.indexOf (objPenumpang.naikDari));
      
      hasil.push (objPenumpang);
    }
    return hasil;
  }
  
  console.log (naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log (naikAngkot([])); // []