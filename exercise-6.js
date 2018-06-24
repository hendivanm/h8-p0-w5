/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan
meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    var arrAwal = str.split (","); // LINE PENTING, HATI-HATI
    var arrSplit = [];
    var melee = [];
    var ranged = [];
    var result = [];
    
    if (str === "") { // UNTUK TEST CASE TERAKHIR
      return [];
    }
    
    // SPLIT HERO AND WEAPON TYPE
    for (var i = 0; i < arrAwal.length; i++) {
      arrSplit.push (arrAwal[i].split("-")); // MENGHILANGKAN "-"
    }
    
    // console.log (arrSplit); // PENTING UNTUK TAU TEST CASE
    
    // MENGELOMPOKAN HERO BERDASARKAN TIPE SENJATA
    for (var j = 0; j < arrSplit.length; j++) {
      if (arrSplit[j][1] === "Melee") {
        melee.push (arrSplit[j][0]);
      } else if (arrSplit[j][1] === "Ranged") {
        ranged.push (arrSplit[j][0]);
      }
    }
    
    result.push (ranged, melee); // PERHATIKAN TEST CASE, RANGED DULU
    
    return result;
}
  
console.log (meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
console.log (meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
console.log (meleeRangedGrouping('')); // []