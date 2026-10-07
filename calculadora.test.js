const {soma, subtrai, multiplica, divide, ehPar, raiz, media} = require ("./calculadora");

// Describe = grupos do seu teste
describe("soma", () => { 
    test("Soma com dois números positivos", () => {  // Caso de teste
        expect(soma(2,3)).toBe(5); // Tá pegando lá da calculadora - Passo
    });
});

describe("raiz", () => {
    test("Calcula a raíz de número não exato com precisão", () => {
        expect(raiz(2)).toBeCloseTo(1.414); // "toBe" é pra ser exatamente igual, aqui está um float
    });                 // Vai considerar os números depois da vírgula

    test("Lançar erro para número negativo", () => {
        expect(() => raiz(-4)).toThrow("Nao e possivel calcular raiz de numero negativo") // Não funciona com acento
    })
});


// Exercícios

// 1. Subtração
describe("subtrai", () => {
    test("Retornar subtração com número correto", () => {
        expect(subtrai(5, 3)).toBe(2);
    });

    test("Retornar número negativo quando o resultado for negativo", () => {
        expect(subtrai(3, 5)).toBe(-2);
    });
});

// 2. Multiplação
describe("multiplica", () => {
    test("Retornar produto correto de dois números", () => {
        expect(multiplica(6, 7)).toBe(42);
    });

    test("Retornar 0 quando um dos valores for 0", () => {
        expect(multiplica(0, 9)).toBe(0);
    });

    test("Retornar resultado maior que ambos os números (quando maiores que 1)", () => {
        expect(multiplica(2, 2)).toBeGreaterThan(2);
    });
})

// 3. Divisão
describe("divide", () => {
    test("Retorna resultado correto da divisão", () => {
        expect(divide(42, 7)).toBe(6);
    });

    test("Lançar erro de divisão por 0", () => {
        expect(() => divide(4, 0)).toThrow('Nao e possivel dividir por zero'); 
    });
})

//4. ehPar
describe("ehPar", () => {
    test("Retornar valor verdadeiro para número par", () => {
        expect(ehPar(2)).toBeTruthy();
    });

    test("Retornar valor falso para número ímpar", () =>{
         expect(ehPar(5)).toBeFalsy(); 
    });
});

//5. Media
describe("media", () => {
    test("Calcular corretamente a média de números inteiros", () => {
        expect(media([2, 4, 6, 8])).toBe(5);
    });

    test("Calcular a média de números que derão decimal", () => {
        expect(media([5, 6])).toBeCloseTo(5.5); 
    });

    test("Lançar erro quando a lista estiver vazia", () => {
        expect( () => media([])).toThrow("A lista de numeros nao pode ser vazia");
    });

    test("Lançar erro quando a lista não for um array", () => {
        expect( () => media("2, 4, 6")).toThrow("A lista de numeros nao pode ser vazia")
    });
});