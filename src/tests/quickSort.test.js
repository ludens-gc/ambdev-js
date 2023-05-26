const quickSort = require("../algorithms/quickSort");

describe("quickSort", () => {
  test("deve retornar a lista ordenada corretamente", () => {
    const input = [4, 2, 7, 1, 5, 3, 6];
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7];
    const result = quickSort(input);
    expect(result).toEqual(expectedOutput);
  });
  test("deve retornar a lista já ordenada corretamente", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    const result = quickSort(input);
    expect(result).toEqual(expectedOutput);
  });
  test("deve retornar a lista com números negativos corretamente ordenada", () => {
    const input = [-5, -2, -7, -1, -4, -3, -6];
    const expectedOutput = [-7, -6, -5, -4, -3, -2, -1];
    const result = quickSort(input);
    expect(result).toEqual(expectedOutput);
  });
  test("deve retornar a lista com números de ponto flutuante corretamente ordenada", () => {
    const input = [3.14, 1.1, 2.2, 0.5, 4.7];
    const expectedOutput = [0.5, 1.1, 2.2, 3.14, 4.7];
    const result = quickSort(input);
    expect(result).toEqual(expectedOutput);
  });
});
