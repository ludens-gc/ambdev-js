function quickSort(list) {
  if (typeof list === "string") {
    list = list.trim().split(" ").map(Number);
  }
  const arr = list;
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);
  return [...sortedLeft, pivot, ...sortedRight];
}

module.exports = quickSort;
