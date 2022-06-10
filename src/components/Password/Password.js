class Solution {
  Solution(s) {
    var wordArray = s.split(" ");
    var filteredWords = wordArray.forEach((word) => {
      var isValidWord = word.forEach((character) => {
        if (character) {
          console.log(typeof character);
        }
        return true;
      });
      return word;
    });
  }
}
Solution = new Solution();
var S = "test 5 a0A pass007 ?xy1";
Solution(S);
