const fibonacci = require("../algorithms/fibonacci");

describe("fibonacci", () => {
  test("deve retornar a sequência correta para um número positivo", () => {
    const input = 6;
    const expectedOutput = [0, 1, 1, 2, 3, 5];
    const result = fibonacci(input);
    expect(result).toEqual(expectedOutput);
  });
  test("deve retornar a sequência correta para o número 0", () => {
    const input = 0;
    const expectedOutput = [];
    const result = fibonacci(input);
    expect(result).toEqual(expectedOutput);
  });
  test("deve retornar a sequência correta para o número 1", () => {
    const input = 1;
    const expectedOutput = [0];
    const result = fibonacci(input);
    expect(result).toEqual(expectedOutput);
  });
  test("deve retornar a sequência correta para o número 2", () => {
    const input = 2;
    const expectedOutput = [0, 1];
    const result = fibonacci(input);
    expect(result).toEqual(expectedOutput);
  });
  test("deve retornar a sequência correta para um número grande", () => {
    const input = 10;
    const expectedOutput = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    const result = fibonacci(input);
    expect(result).toEqual(expectedOutput);
  });
});
