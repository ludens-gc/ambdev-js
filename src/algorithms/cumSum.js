function cumSum(list) {
  const arr = list.trim().split(" ").map(Number);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

module.exports = cumSum;
