/*
To Do:

1. Debug to get npm tests passing -Done

2. Implement transpose function which should return array of arrays to loop through and create vertical arrays to check word.includes -Done

3. If empty array, return false/undefined/ console.log(error)-Done

4. Word that gets passed in needs to be in uppercase -Done

5. If word is passed in anything other than "string" -Done
*/


const transpose = matrix => {
  let result = [];
  let cols = matrix.length;
  let rows = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    let newRows = [];
    
    for (let j = 0; j < cols; j++) {
      newRows.push(matrix[j][i]);

    }
    result.push(newRows);
  }

  return result;
};

const wordSearch = (letters, word) => {
  if (letters.length < 1 || typeof word !== "string") {
    return "Error";
  }
  
  let wordToUpperCase = word.toUpperCase(); //needed to be redeclared before passing in as arguments to .includes()
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let horLetters of horizontalJoin) {
    let horLettersToUpperCase = horLetters.toUpperCase();
    if (horLettersToUpperCase.includes(wordToUpperCase)) return true;
  }
  //console.log("horizontal join=", horizontalJoin); //checking horizontal works

  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let vertLetters of verticalJoin) {
    let vertLettersToUpperCase = vertLetters.toUpperCase();
    if (vertLettersToUpperCase.includes(wordToUpperCase))
      //console.log("vertical join=", verticalJoin);// checking vertical works
      return true;
  }
    


  return false;
};

console.log(wordSearch([
  ['H', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['E', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['l', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['l', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['O', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], "hello"));
//return "error"

module.exports = wordSearch;
