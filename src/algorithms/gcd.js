function gcd(list) {
  if (typeof list === "string") {
    list = list.trim().split(" ").map(Number);
  }
  const arr = list;
  let [numX, numY] = arr;
  numX = Math.abs(numX);
  numY = Math.abs(numY);
  if (numY === 0) {
    return numX;
  }
  return gcd([numY, numX % numY]);
}

module.exports = gcd;
