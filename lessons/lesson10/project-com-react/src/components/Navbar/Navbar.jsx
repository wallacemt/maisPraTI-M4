import React from "react";
import './navbar.css';
import CruzImg from '../../assets/img/cruz-03.svg';
import Mockup from '../../assets/img/mockup-leve-1.png';

const Navbar = () => {
    return (
        <>
            <div className="navigation">
                <div className="logo-autora">
                    <div className="cruz">
                        <img src={CruzImg} alt="Cruz Logo" />
                    </div>
                    <div className="nome-navigation">Ana Clara Galli</div>
                </div>
                <div className="navigation-itens">
                    <div className="itens">
                        <p><a href="#kits" id="linkKits">Kits</a></p>
                        <p><a href="#onde-comprar" id="linkOndeComprar">Onde Comprar</a></p>
                        <p><a href="#fale-comigo" id="linkFaleComigo">Fale Comigo</a></p>
                        <div className="button-navigation">
                            <div className="ComprarAgora">
                                <a id="ComprarAgora" href="https://www.catarse.me/rduvng" target="_blank" rel="noopener noreferrer">Comprar Agora</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main">
                <div className="background">
                    <h1 className="title">Relatos de um <br/>Vampiro na Guerra</h1>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, impedit nihil odit amet quos quod vero
                        expedita dicta ad saepe temporibus officia odio laudantium aspernatur. Esse nulla officia maxime autem
                        rem, ratione obcaecati unde, sapiente ex quam dolorum excepturi corrupti sequi dolor. Tempore
                        repellendus assumenda qui exercitationem ex! Aspernatur, voluptatibus.
                    </p>
                </div>

                <a href="#primeiros-capitulos">
                    <div className="button-main">
                        <div className="button-main-text">Leia os primeiros capítulos de graça!</div>
                    </div>
                </a>
                <img className="mockup" src={Mockup} alt="Mockup do Livro" />
            </div>
        </>
    );
};

export default Navbar;

