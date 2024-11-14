const calculateArea = require('./calculateArea');

describe("Testes para funcao CalculateArea", () => {
    describe("Teste para circulo", () => {
        test("Deve retornar area do circulo de raio 2", () => {
            const result = calculateArea('circle', 2);
            expect(result).toBeCloseTo(12.566370614359172, 4);
        })
        // test("Deve ançar um erro se o raio nao for fornecido", () => {
        //     expect(() => calculateArea('circle')).toThrowError("O raio deve ser fornecido.");
        // })
    })
    describe("Teste para quadrado", () => {
        test("Deve retornar area do quadrado de 4 lados", () => {
            const result = calculateArea('square', 4);
            expect(result).toBe(16);
        })
    })
    describe("Teste para retangulo", () => {
        test("Deve retornar area do retangulo de largura 4 e altura 5", () => { 
            const result = calculateArea('rectangle', 4, 5);
            expect(result).toBe(20);
        })
        // test("Deve ançar um erro para forma desconhecida", () => {
        //     expect(() => calculateArea('triangle', 4, 5)).toThrowError("Forma geometrica desconhecida: triangle");
        // })
    })

})
