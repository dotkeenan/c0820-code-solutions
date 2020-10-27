/* eslint-disable no-unused-vars */
function titleCase(title) {
  const minorWords = [
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to'
  ];
  const specialWords = [
    'JavaScript',
    'JavaScript:',
    'API'
  ];
  const specialWordsLower = specialWords.map(x => x.toLowerCase());
  const titleArr = title.split(' ');
  const capWord = '';
  const capWordsArr = [];
  let specialResult = '';

  for (let i = 0; i < titleArr.length; i++) {
    if (!minorWords.includes(titleArr[i]) && !specialWords.includes(titleArr[i]) && !specialWordsLower.includes(titleArr[i])) {
      capWordsArr.push(titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1));
    } else if (minorWords.includes(titleArr[i])) {
      capWordsArr.push(titleArr[i]);
    } else if (specialWordsLower.includes(titleArr[i])) {
      const index = specialWordsLower.indexOf(titleArr[i]);
      capWordsArr.push(specialWords[index]);
    } else if (specialWords.includes(titleArr[i])) {
      capWordsArr.push(titleArr[i]);
    }
  }

  const result = capWordsArr.join(' ');

  // Very hacky band-aid style code...  I need to revisit this.
  if (result.indexOf(':') > 0 || result.indexOf('-') > 0) {
    specialResult = capWordsArr.join(' ').replace(/an|the|depth/gi, x => x.charAt(0).toUpperCase() + x.slice(1));
    specialResult = specialResult.replace(/Javascript/gi, 'JavaScript');
    return specialResult;
  }

  return result;
}

/* eslint-disable no-unused-vars */
// function titleCase(string) {
//   const lowerCase = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'en', 'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'per', 'the', 'to'];
//   const techWords = ['JavaScript', 'HTML', 'CSS', 'API', 'JavaScript:'];
//   const lowerTechWords = techWords.map(x => x.toLowerCase());
//   const word = string.split(' ');
//   let result = null;

//   for (let i = 0; i < word.length; i++) {
//     word[i] = word[i].toLowerCase();
//     if (lowerTechWords.includes(word[i])) {
//       const index = lowerTechWords.indexOf(word[i]);
//       word[i] = techWords[index];
//     } else if (!lowerCase.includes(word[i])) {
//       word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
//     }
//     result = word.join(' ');
//   }

//   if (result.indexOf(':') > 0 || result.indexOf('-') > 0) {
//     result = result.replace(/an|the|depth/gi, x => x.charAt(0).toUpperCase() + x.slice(1));
//   }

//   return result;
// }
