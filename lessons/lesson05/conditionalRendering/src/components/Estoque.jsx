import { useState } from "react";

function Estoque() {
    const [mostrarDisponiveis, setMostrarDisponiveis] = useState(true);
    const produtos = [
        {id: 1, nome: "Mouse", preco: 39.90,  inStock: true},
        {id: 2, nome: "Teclado", preco: 29.90, inStock: true},
        {id: 3, nome: "Monitor", preco: 99.90},
        {id: 4, nome: "Mem Ram", preco: 49.90},
        {id: 5, nome: "RTX 4090", preco: 79.90, inStock:true},
    ];
    const produtosDisponiveis = produtos.filter(produto => produto.inStock);
    return (
        <div>
            <button onClick={() => setMostrarDisponiveis(!mostrarDisponiveis)}>
                {mostrarDisponiveis ? 'Mostrar Indisponiveis' : 'Mostrar Disponiveis'}
            </button>
            {mostrarDisponiveis ? (
                produtosDisponiveis.map(produto => (
                    <div key={produto.id}>
                        <h3>{produto.nome}</h3>
                        <p>Preço: R$ {produto.preco}</p>
                        {produto.inStock ? <p>Estoque: Disponível</p> : <p>Estoque: Indisponível</p>}
                    </div>
                ))
            ) : (
                produtos.filter(produto => !produto.inStock).map(produto => (
                    <div key={produto.id}>
                        <h3>{produto.nome}</h3>
                        <p>Preço: R$ {produto.preco}</p>
                        <p>Estoque: Indisponível</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default Estoque;

