import React from "react";

export const Sticker = () => {
    return (
        <div className="flex flex-col m-auto w-full p-12">
            <h1 className="text-center text-5xl font-bold xl:text-5xl sm:text-4xl">
                O que você encontrará neste livro:
            </h1>

            <ul className="grid grid-cols-1 gap-12 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-2xl sm:text-base xl:text-xl">
                <li className="flex flex-col items-center gap-4 mb-12">
                    <img
                        className="w-60"
                        src="./adesivo-01.webp"
                        alt=""
                    />

                    <p className="text-2xl">
                        Uma jornada épica de autodescoberta e desafios inimagináveis.
                    </p>
                </li>

                <li className="flex flex-col items-center gap-4 mb-12">
                    <img
                        className="w-60"
                        src="./adesivo-02.webp"
                        alt=""
                    />

                    <p className="text-2xl">
                        Uma protagonista corajosa que desafia as convenções de seu tempo.
                    </p>
                </li>

                <li className="flex flex-col items-center gap-4 mb-12">
                    <img
                        className="w-60"
                        src="./adesivo-03.webp"
                        alt=""
                    />

                    <p className="text-2xl">
                        Um mergulho na cultura e na história da Hungria nas vésperas da Primeira Guerra Mundial.
                    </p>
                </li>

                <li className="flex flex-col items-center gap-4 mb-12">
                    <img
                        className="w-60"
                        src="./adesivo-04.webp"
                        alt=""
                    />

                    <p className="text-2xl">
                        Um confronto com mitos e realidades que mudarão a vida de Mina para sempre.
                    </p>
                </li>
            </ul>
        </div>
    );
};
