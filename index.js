const ageTable = {
  'firstSonAge': 14,
  'secondSonAge': 9,
  'thirdSonAge': 8
}

function whoseBicycle(diary1, diary2, diary3) {

  let son1Raiting = 0,
    son2Raiting = 0,
    son3Raiting = 0;
  for (let key in diary1) {
    son1Raiting += diary1[key];
  }
  for (let key in diary2) {
    son2Raiting += diary2[key];
  }
  for (let key in diary3) {
    son3Raiting += diary3[key];
  }
  let sonName = '';

  if (son1Raiting === son2Raiting && son1Raiting === son3Raiting) {
    sonName = (ageTable['firstSonAge'] > ageTable['secondSonAge']) ?
      ((ageTable['secondSonAge'] > ageTable['thirdSonAge']) ? 'third' : 'second') :
      ((ageTable['firstSonAge'] > ageTable['thirdSonAge']) ? 'third' : 'first');
  }

  if ((son1Raiting === son2Raiting) && (son1Raiting > son3Raiting)) {
    sonName = ageTable['firstSonAge'] < ageTable['secondSonAge'] ? 'first' : 'second';
  }
  if ((son1Raiting === son3Raiting) && (son1Raiting > son2Raiting)) {
    sonName = ageTable['firstSonAge'] < ageTable['thirdSonAge'] ? 'first' : 'third';
  }
  if ((son2Raiting === son3Raiting) && (son2Raiting > son1Raiting)) {
    sonName = ageTable['secondSonAge'] < ageTable['thirdSonAge'] ? 'second' : 'third';
  }
  if ((son1Raiting > son2Raiting) && (son1Raiting > son3Raiting)) {
    sonName = 'first';
  } else if ((son2Raiting > son1Raiting) && (son2Raiting > son3Raiting)) {
    sonName = 'second';
  } else if ((son3Raiting > son1Raiting) && (son3Raiting > son2Raiting)) {
    sonName = 'third';
  }
  return `I need to buy a bicycle for my ${sonName} son.`;
}

console.log(whoseBicycle({
  'algebra': 6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
}, {
  'algebra': 6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
}, {
  'algebra': 6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10
}));