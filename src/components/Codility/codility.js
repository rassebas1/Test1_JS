var solution = [];
var Lcounter = 0;
var Rcounter = 0;
function separator(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}
function counterAugment(character) {
  if (character === "L") {
    Lcounter++;
  } else if (character === "R") {
    Rcounter++;
  }
}
function counter(arr) {
  Lcounter = 0;
  Rcounter = 0;
  arr.map((character) => {
    counterAugment(character);
  });
}
function Solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  var chunkSize = S.length;
  for (chunkSize; chunkSize >= 1; chunkSize--) {
    var separated = separator(S, chunkSize);

    var isPaired = separated.map((chunk) => {
      //console.log("chunk", chunk);
      counter(chunk.split(""));
      if (Lcounter == Rcounter && Lcounter + Rcounter == chunk.length) {
        return true;
      
      }
      else return false;
    });

    console.log(isPaired);
    //console.log("sep", separated);
    isPaired.map((element, index) => {
      if (element) {
        solution.push(separated[index]);
      }
    });
  }
  console.log(solution);
  return solution;
}
S = "RLRRLLRLRRLL";
S1 = "RLLLRRRLLR";
S2 = "LLRLRLRLRLRLRR";

Solution(S);
console.log("sol", solution);
solution = [];
Solution(S1);
console.log("sol", solution);
solution = [];
Solution(S2);
console.log("sol", solution);
solution = [];
