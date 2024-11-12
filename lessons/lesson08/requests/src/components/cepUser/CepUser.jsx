import UseCep from '../../hooks/UseCep';
import './cepUser.css'
const CepUser = () => {
    const { cep, setCep, logradouro, bairro, cidade, estado, loading } = UseCep("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setCep(e.target.cep.value);
    }
    if (loading) return <p className="loading">Carregando...</p>
    return (
        <div className="cep-user-container">
            <h1>Pesquisar CEP</h1>
            <form onSubmit={handleSubmit} className="cep-user-form">
                <input type="text" name="cep" className="cep-input" />
                <button type="submit" className="cep-button">Pesquisar</button>
            </form>
            <div className="cep-info">
                <p>CEP: {cep}</p>
                <p>Logradouro: {logradouro}</p>
                <p>Bairro: {bairro}</p>
                <p>Cidade: {cidade}</p>
                <p>Estado: {estado}</p>
            </div>
        </div>
    )
}
export default CepUser
