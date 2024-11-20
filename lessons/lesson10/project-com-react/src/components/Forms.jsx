export const Forms = () => {
    return (
        <div className="w-full mt-12 bg-verde2 m-auto flex flex-col items-center justify-center xl:flex-row text-branco md:p-4 xl:p-0">

            <h1 className="text-2xl md:text-4xl xl:text-3xl text-center m-0 xl:pl-12 xl:text-left pt-12 xl:pt-0">
                Para dúvidas ou contato, <br /> encaminhe sua mensagem
            </h1>

            <form onSubmit={handleSubmit}>

                <div className="flex flex-col xl:flex-row gap-8 p-12 md:w-full">

                    <div className="flex flex-col xl:flex-row xl:w-full md:w-dvw m-auto bg-verde1 p-6 rounded-2xl">

                        <label className="p-4 text-2xl" htmlFor="name">Nome</label>

                        <input
                            className="p-3 rounded-xl text-center"
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Insira seu nome aqui"
                        />
                    </div>

                    <div className="flex flex-col xl:flex-row w-full bg-verde1 p-6 rounded-2xl">

                        <label className="p-4 text-2xl" htmlFor="mensagem">Mensagem</label>
                        <input
                            className="p-3 rounded-xl text-center"
                            type="text"
                            id="mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            maxLength="300"
                            placeholder="Insira sua mensagem aqui"
                        />
                    </div>

                    <button className="m-auto scale-125 xl:scale-100" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

