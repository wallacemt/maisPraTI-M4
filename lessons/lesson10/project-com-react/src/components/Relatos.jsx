export const Relatos = () => {
    return (
        <div className="flex flex-col items-center justify-center m-auto">
            <div className="flex flex-col sm:flex-row items-center m-auto p-12">
                <img
                    className="w-20 mt-0 fill-white"
                    src="./cruz-02.svg"
                    alt="Cruz"
                />
                <h1 className="text-4xl px-10 mt-6 sm:mt-0 sm:text-5xl font-bold">
                    Relatos de quem já  garantiu sua leitura
                </h1>
                <img
                    className="sm:w-20 w-0 mt-0"
                    src="./cruz-02.svg"
                    alt="Cruz"
                />
            </div>
            <div className="grid items-center justify-center grid-cols-1 gap-12 p-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-2xl sm:text-base xl:text-xl">
                {relatos.map((relatos) => (
                    <img
                        className="w-fit"
                        id={relatos.id}
                        src={relatos.imagem}
                        alt={relatos.alt}
                    />
                ))}
            </div>
        </div>
    );    
}
