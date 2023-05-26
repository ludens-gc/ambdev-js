const isPrime = require("../algorithms/isPrime");

describe("isPrime", () => {
  test("deve retornar true para números primos", () => {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    primes.forEach((prime) => {
      expect(isPrime(prime)).toBe(true);
    });
  });
  test("deve retornar false para números não primos", () => {
    const nonPrimes = [0, 1, 4, 6, 8, 9, 10, 12, 14, 15];
    nonPrimes.forEach((nonPrime) => {
      expect(isPrime(nonPrime)).toBe(false);
    });
  });
  test("deve retornar false para números negativos", () => {
    const negatives = [-2, -3, -5, -7, -11, -13, -17, -19, -23, -29];
    negatives.forEach((negative) => {
      expect(isPrime(negative)).toBe(false);
    });
  });
  test("deve retornar false para zero", () => {
    const input = 0;
    const result = isPrime(input);
    expect(result).toBe(false);
  });
  test("deve retornar false para um", () => {
    const input = 1;
    const result = isPrime(input);
    expect(result).toBe(false);
  });
});
