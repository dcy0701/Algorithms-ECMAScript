var judgeSquareSum = function(c) {
  let maxOneNum = Math.floor(Math.sqrt(c))

  if (c < 0) {
      return false;
  } else if (c === 0) {
      return true;
  }
  for (var i = 0; i <= maxOneNum; i++) {
      let squareOtherNum = c - i * i;
      let j = Math.sqrt(squareOtherNum)
      if (Number.isInteger(j)) {
          return true;
      }
  }
  return false;
};

console.log(judgeSquareSum(2147483645));
