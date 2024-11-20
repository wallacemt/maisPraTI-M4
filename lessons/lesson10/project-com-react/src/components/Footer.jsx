import React from "react";
import { FaSquareInstagram } from "react-icons/fa6"; 
import { FaGoodreads } from "react-icons/fa"; 

export const Footer = () => {
    return (
        <div className="p-12 bg-preto text-branco">
            <h1 className="footer-title text-4xl font-sans font-bold">
                Relatos de um Vampiro na Guerra
            </h1>

            <div className="flex flex-row items-center justify-center pt-12 w-full gap-8 m-auto">
                <a
                    href="https://www.goodreads.com/book/show/211226924-relatos-de-um-vampiro-na-guerra"
                    target="_blank"
                >
                    <div className="text-5xl" alt="Good Reads">
                        <FaGoodreads />
                    </div>
                </a>

                <a href="https://www.instagram.com/rduvng/" target="_blank">
                    <div className="text-5xl" alt="Instagram">
                        <FaSquareInstagram />
                    </div>
                </a>

                <a
                    href="https://www.skoob.com.br/relatos-de-um-vampiro-na-guerra-122450332ed122451356.html"
                    target="_blank"
                >
                    <img
                        className="w-10 h-10"
                        src=".\icon-skoob.webp"
                        alt="Skoob"
                    />
                </a>
            </div>

            <div className="pt-10 w-full text-xl">
                <a
                    href="https://www.linkedin.com/in/leonardo-boeira-maciel/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="hover:underline">
                        Site desenvolvido por Leonardo Boeira Maciel
                    </div>
                </a>
            </div>
        </div>
    );
};
