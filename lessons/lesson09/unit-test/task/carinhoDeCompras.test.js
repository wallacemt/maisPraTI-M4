const CarrinhoDeCompras = require('./carrinhoDeCompras');

describe("carrinhoDeCompras", () => {
    let carrinho;
    beforeEach(() => {
        carrinho = new CarrinhoDeCompras();
    });

    test("Deve adicionar um produto ao carrinho corretamente", () => {
        carrinho.adicionarProduto("Camiseta", 29.99, 5);
        carrinho.adicionarProduto("Mouse", 19.99, 2);
        
        const produtos = carrinho.listarProdutos();
        expect(produtos).toEqual([
            {nome: 'Camiseta', preco: 29.99, quantidade: 5},
            {nome: 'Mouse', preco: 19.99, quantidade: 2}
        ]);
    });

    test("Deve incrementar a quantidade de um produto pré existente", () => {
        carrinho.adicionarProduto("Lapis", 1.99, 5);
        carrinho.adicionarProduto("Lapis", 1.99, 2);

        const produto = carrinho.listarProdutos();
        expect(produto).toEqual([
            {nome: 'Lapis', preco: 1.99, quantidade: 7}
        ]);
    });

    test("Deve remover um produto do carrinho corretamente", () => {
        carrinho.adicionarProduto("Calça", 120.99, 2);
        carrinho.removerProduto("Calça");

        const produtos = carrinho.listarProdutos();
        expect(produtos).toEqual([]);
    });

    test("Deve lançar um erro ao tentar remover um produto inexistente", () => {
        expect(() => carrinho.removerProduto("Camiseta")).toThrowError('Produto "Camiseta" não encontrado no carrinho.');
    });

    test("Calculo Total", () => {
        carrinho.adicionarProduto("Tenis", 30, 5);
        carrinho.adicionarProduto("Bola", 20, 2);
        const total = carrinho.calcularTotal();
        expect(total).toBeCloseTo(190);
    });

    test("Retornar a lista de produtos", () => {
        carrinho.adicionarProduto("Monitor", 29.99, 5);
        carrinho.adicionarProduto("Fan", 19.99, 2);

        const produtos = carrinho.listarProdutos();
        expect(produtos).toEqual([
            {nome: 'Monitor', preco: 29.99, quantidade: 5},
            {nome: 'Fan', preco: 19.99, quantidade: 2}
        ]);
    });
});
