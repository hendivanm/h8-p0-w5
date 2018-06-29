function highestScore (students) {
  var subResult = "";
  var result = {};

  if (students.length === 0 ) { // UNTUK TEST CASE TERAKHIR
    return {};
  } else {
    for (var i = 0; i < students.length; i++) {
      subResult = students[i].class;
      if (result[subResult] === undefined || students[i].score > result[subResult].score) {       
        result[subResult] = {};
        result[subResult].name = students[i].name;
        result[subResult].score = students[i].score;
      }
    }
    return result;
  }
}

// TEST CASE
console.log (highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log (highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log (highestScore([])); // {}