import { useState, useEffect } from "react";

const BuscadorDeCEP = () => {
    const [cep, setCep] = useState("");
    const [dados, setDados] = useState(null);
    const [erro, setErro] = useState("");
    const [buscando, setBuscando] = useState(false);

    useEffect(() => {
        if (!buscando) return;

        async function buscar() {
            if (cep.length !== 8 || isNaN(cep)) {
                setErro("Digite um CEP válido (8 números)");
                setBuscando(false);
                return;
            }

            setErro("");
            setDados(null);

            try {
                const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await res.json();
                if (data.erro) {
                    setErro("CEP não encontrado!");
                } else {
                    setDados(data);
                }
            } catch {
                setErro("Erro ao buscar o CEP.");
            }
            setBuscando(false);
        }

        buscar();
    }, [buscando, cep]);

    const limpar = () => {
        setCep("");
        setDados(null);
        setErro("");
    };

    return (
        <div className="buscaContainer">
            <div className="teste">
                <h2>Informe seu CEP: </h2>
                <input type="text"
                    placeholder="(somente números)"
                    value={cep}
                    onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
                    maxLength="8" />
            </div>
            <div className="botoes">
                <button onClick={limpar}>Limpar</button>
                <button className="botaoBuscar" onClick={() => setBuscando(true)}>Buscar</button>
            </div>
            {erro && <p className="erro">{erro}</p>}
            {dados && (
                <div className="resultado">
                    <p><strong>Rua:</strong> {dados.logradouro}</p>
                    <p><strong>Bairro:</strong> {dados.bairro}</p>
                    <p><strong>Cidade:</strong> {dados.localidade} - {dados.uf}</p>
                </div>
            )}
        </div>
    )
}

export default BuscadorDeCEP;