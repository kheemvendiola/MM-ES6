
const countVowels = str => Array.from(str.toLowerCase())
  .filter(letter => 'aeiou'.includes(letter)).length;

const countConsonants = str => Array.from(str.toLowerCase())
  .filter(letter => 'bcdfghjklmnpqrstvwxyz'.includes(letter)).length;


let count = () => {
  var res = '';

  // const stringToCount = 'The quick brown QA jumps over the lazy Dev.';

  let stringToCount = document.getElementById("inputText").value;
  let result = document.getElementById("result");


  if (stringToCount.length > 50) {
    let words = stringToCount.split(' ').length;
    let v = countVowels(stringToCount);
    let c = countConsonants(stringToCount);


    res = `Input: ${stringToCount}
     Number of word(s) found: ${words}`;
    res += (v > 0) ? `\nNumber of vowel(s) found: ${v}` : ''
    res += (c > 0) ? `\nNumber of consonant(s) found: ${c}` : '';
  }


  result.innerText = res;

}