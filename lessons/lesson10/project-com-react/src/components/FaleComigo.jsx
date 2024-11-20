import React from "react";

export const FaleComigo = () => {
    return (
        <div
            id="FaleComigo"
            className="flex flex-col items-center m-auto justify-center xl:flex-row p-4 sm:p-12 text-center xl:text-left 2xl:w-2/3"
        >
            <div className="w-full xl:w-2/3 p-12">
                <h1 className="text-4xl font-bold sm:text-5xl mb-8">
                    Para comprar o livro com preço mais acessível (sem tarifas)
                    me chame no Instagram.
                </h1>

                <p className="text-2xl xl:text-xl">
                    Para leitores de Porto Alegre é possível combinar entrega
                    sem custo de frete. Para outros estados este valor deverá
                    ser calculado juntamente.
                    <br />
                    <br />
                    Indico, principalmente, optar por comprar o e-book por
                    e-mail ou DM do Instagram; você também recebe o arquivo na
                    hora, <strong>apoia mais diretamente o trabalho independente!</strong>
                    <br />
                    <br />
                    Neste modo, o valor é direcionado inteiramente à autora, sem
                    ter parte cortada por taxas de plataforma de vendas.
                </p>

                <a
                    href="https://www.instagram.com/rduvng/"
                    target="_blank"
                    class=""
                >
                    <button className="mt-12 text-branco scale-125 xl:scale-100">
                        Reserve o Seu Livro Comigo
                    </button>
                </a>
            </div>

            <div className="w-5/6 xl:w-3/6 p-2 text-center bg-creme1/50 dark:bg-verde2 rounded-b-[32rem] rounded-t-full">
                <img
                    className="m-auto p-10"
                    src=".\foto-autora.webp"
                    alt="Foto da autora Ana Clara Galli"
                />

                <h2 className="font-bold text-2xl">Ana Clara Galli</h2>

                <h3 className="text-xl pb-6">
                    autora de Relatos de um Vampiro na Guerra
                </h3>
            </div>
        </div>
    );
};
