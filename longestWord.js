function findLongestWord(wordsArr) {
    const sortedArr = wordsArr.sort((a, b) => b.length - a.length)
    
    return sortedArr[0].length
    
    // console.log(sortedArr)
  }
  
  findLongestWord(["hi", "hello", 'car', 'tower', 'submarine', 'a']);
  // -> 5
  
  console.log( [2, 9, 1, 2, 92].sort((a, b) => b - a) )