function countInt(list) {
  if (list.trim() === "") {
    return 0;
  }
  const arr = list.trim().split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      count++;
    }
  }
  return count;
}

module.exports = countInt;
