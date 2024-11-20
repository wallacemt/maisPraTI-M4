import React from "react";

export const CardsProdutos = ({ produto }) => {
    return (
        <div className="bg-verde1 rounded-xl flex flex-col items-center justify-between gap-1 p-10 text-branco">
            <div className="mb-8">
                <img
                    className="w-fit"
                    src="./cruz-02.svg"
                    alt="Cruz"
                />
            </div>

            <div className="text-4xl uppercase">{produto.titulo}</div>

            <img
                className="img-ebook w-fit"
                src={produto.imagem}
                alt={produto.titulo}
            />

            <div className="font-bold text-5xl leading-8 mt-4">{produto.preco1}</div>

            <div
                className="produto-complemento"
                dangerouslySetInnerHTML={{ __html: produto.complemento1 }}
            >
            </div>

            {produto.preco2 && (
                <div className="font-bold text-4xl leading-5 mt-6">{produto.preco2}</div>
            )}

            {produto.complemento2 && (
                <div className="produto-complemento">{produto.complemento2}</div>
            )}

            <div className="mt-6">
                <p>
                    <a
                        href={produto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>
                            COMPRE AGORA
                        </button>
                    </a>
                </p>
            </div>
        </div>
    );
};
