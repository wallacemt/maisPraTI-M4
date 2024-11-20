export const OndeComprar = () => {
    return (
        <div id="kits">
            <h1>Escolha seu Kit</h1>

            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 h-20 w-20"></div>
                </div>
            ) : error ? (
                <div className="text-red-500 text-xl">
                    {error}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-12 p-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-2xl sm:text-base xl:text-xl">
                    {produtos.map((produto) => (
                        <CardsProdutos key={produto.id} produto={produto} />
                    ))}
                </div>
            )}
        </div>
    );
}
