const cumSum = require("../algorithms/cumSum");

describe("cumSum", () => {
  test("deve retornar a soma correta dos números", () => {
    const input = "1 2 3 4 5";
    const result = cumSum(input);
    expect(result).toBe(15);
  });
  test("deve retornar 0 se a string estiver vazia", () => {
    const input = "";
    const result = cumSum(input);
    expect(result).toBe(0);
  });
  test("deve retornar a soma correta com números positivos e negativos", () => {
    const input = "-1 2 -3 4 -5";
    const result = cumSum(input);
    expect(result).toBe(-3);
  });
});
