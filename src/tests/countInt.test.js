const countInt = require("../algorithms/countInt");

describe("countInt", () => {
  test("deve retornar a contagem correta de números inteiros", () => {
    const input = "1 2 3 4 5";
    const result = countInt(input);
    expect(result).toBe(5);
  });
  test("deve retornar 0 se não houver números inteiros", () => {
    const input = "1.5 2.8 3.1 4.6";
    const result = countInt(input);
    expect(result).toBe(0);
  });
  test("deve retornar 0 para uma string vazia", () => {
    const input = "";
    const result = countInt(input);
    expect(result).toBe(0);
  });
  test("deve retornar a contagem correta com números positivos e negativos", () => {
    const input = "-1 2 -3 4 -5";
    const result = countInt(input);
    expect(result).toBe(5);
  });
});
