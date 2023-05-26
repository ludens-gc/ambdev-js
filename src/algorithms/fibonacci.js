function fibonacci(number) {
  const num = Number(number.trim());
  let seq = [0, 1];
  if (num <= 2) {
    return seq.slice(0, num);
  } else {
    for (let i = 2; i < num; i++) {
      seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
  }
}

module.exports = fibonacci;
