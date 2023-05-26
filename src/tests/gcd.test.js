const gcd = require("../algorithms/gcd");

describe("gcd", () => {
  test("deve retornar o máximo divisor comum corretamente", () => {
    const input = [36, 48];
    const expectedOutput = 12;
    const result = gcd(input);
    expect(result).toBe(expectedOutput);
  });
  test("deve retornar o primeiro número se o segundo número for 0", () => {
    const input = [17, 0];
    const expectedOutput = 17;
    const result = gcd(input);
    expect(result).toBe(expectedOutput);
  });
  test("deve retornar o máximo divisor comum corretamente com números negativos", () => {
    const input = [-15, -25];
    const expectedOutput = 5;
    const result = gcd(input);
    expect(result).toBe(expectedOutput);
  });
  test("deve retornar o máximo divisor comum corretamente com uma string de números", () => {
    const input = "16 24";
    const expectedOutput = 8;
    const result = gcd(input);
    expect(result).toBe(expectedOutput);
  });
});
