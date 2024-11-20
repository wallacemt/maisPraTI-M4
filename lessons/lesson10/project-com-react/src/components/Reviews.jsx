export const Reviews = () => {
    return (
        <div className="p-6">
            <h1 className="text-preto font-bold">Mural de recados</h1>
            <p>Deixe aqui seu recado para a autora</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 m-0 p-4">
                <input
                    className="p-3 m-0 rounded-lg text-branco"
                    type="text"
                    value={newName}
                    placeholder="Seu nome..."
                    maxLength="30"
                    onChange={(e) => setNewName(e.target.value)}
                />
                <input
                    className="p-3 m-0 rounded-lg text-branco"
                    type="text"
                    value={newReview}
                    placeholder="Escreva aqui seu recado..."
                    maxLength="60"
                    onChange={(e) => setNewReview(e.target.value)}
                />
                <button className="text-branco m-0" onClick={addReview}>
                    {editIndex !== null ? "Atualizar Recado" : "Adicionar Recado"}
                </button>
            </div>
            <ul className="grid items-center justify-center m-auto grid-cols-1 gap-12 p-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-2/3">
                {reviews.map((review, index) => (
                    <li className="relative" key={index}>
                        <div className="absolute inset-0 flex justify-center items-center text-branco opacity-0 hover:opacity-100 transition-opacity transition-color rounded-2xl hover:backdrop-blur-sm hover:bg-preto/20">
                            <button
                                className="p-4 mx-2 bg-verde2 hover:bg-preto"
                                onClick={() => editReview(index)}
                            >
                                <FaEdit />
                            </button>
                            <button
                                className="p-4 mx-2"
                                onClick={() => deleteReview(index)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                        <div className="max-w-80 w-fit h-fit m-auto bg-creme1 dark:bg-verde2 dark:text-branco text-2xl p-12 rounded-xl">
                            <strong>{review.name}:</strong> {review.text}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );    
}
