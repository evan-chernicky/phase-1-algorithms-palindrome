function isPalindrome(word) {
  // Write your algorithm here

  const splitWord = word.split('')
  const reversedSplitWord = [...splitWord].reverse()
  const reversedWord = reversedSplitWord.join('')

  if (word === reversedWord) {
    return true
  } else {
    return false
  }

}

isPalindrome('blah')

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
