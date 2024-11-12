import { useState, useEffect } from "react";
import ApiCep from "../api/ApiCep";

const UseCep = (initialCep = "41100024") => {
    const [cep, setCepState] = useState(initialCep);
    const [addressData, setAddressData] = useState({
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: ""
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await ApiCep.get(`/${cep}/json/`);
                setAddressData({
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    cidade: data.localidade,
                    estado: data.uf
                });
            } catch (error) {
                console.error("Erro ao buscar o CEP", error);
            } finally {
                setLoading(false);
            }
        };
        if (cep) fetchData();
    }, [cep]);

    return {
        cep,
        setCep: (newCep) => setCepState(newCep),
        ...addressData,
        loading,
    };
};

export default UseCep;

