function test(description, callback) {
    try {
        callback();
        console.log(`✅ ${description}`);
    } catch (error) {
        console.log(`❌ ${description}`);
    }
}

function assertEquals(actual, expected) {
    if (actual !== expected) {
        throw new Error(`Expected ${actual} to equal ${expected}`);
    }
}

function isEven(number) {
    return number % 2 === 0
}

test("Deve retorna 'true' se o numero for par", () => {
    assertEquals(isEven(2), true);
    assertEquals(isEven(4), true);
    assertEquals(isEven(6), true);
});

test("Deve retorna 'false' se o numero for ímpar", () => {
    assertEquals(isEven(1), false);
    assertEquals(isEven(5), false);
    assertEquals(isEven(7), fase);
});