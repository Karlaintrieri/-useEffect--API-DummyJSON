"use client";

import { useState } from "react";
import "./page.css";

export default function Ordens() {
const [ordens, setOrdens] = useState([]);

const [cliente, setCliente] = useState("");
const [equipamento, setEquipamento] = useState("");
const [descricao, setDescricao] = useState("");

const [erro, setErro] = useState("");

function cadastrarOrdem(event) {
    event.preventDefault();

    // Validação dos campos
    if (
        cliente.trim() === "" ||
        equipamento.trim() === "" ||
        descricao.trim() === ""
    ) {
        setErro("Preencha todos os campos!");
        return;
    }

    // Validação da descrição
    if (descricao.trim().length < 15) {
        setErro("A descrição deve ter no mínimo 15 caracteres!");
        return;
    }

    if (descricao.trim().length > 100) {
        setErro("A descrição deve ter no máximo 100 caracteres!");
        return;
    }

    const novaOrdem = {
        id: Date.now(),
        cliente: cliente.trim(),
        equipamento: equipamento.trim(),
        descricao: descricao.trim(),
        status: "Aberta",
    };

    setOrdens([...ordens, novaOrdem]);

    setCliente("");
    setEquipamento("");
    setDescricao("");
    setErro("");
}

function fecharOrdem(id) {
    const ordensAtualizadas = ordens.map((ordem) => {
        if (ordem.id === id) {
            return {
                ...ordem,
                status: "Fechada",
            };
        }

        return ordem;
    });

    setOrdens(ordensAtualizadas);
}

return (
    <main className="container">
        <h1>Ordens de Serviço</h1>

        <form onSubmit={cadastrarOrdem}>

            <label htmlFor="cliente">Cliente:</label>

            <input
                type="text"
                name="cliente"
                id="cliente"
                placeholder="Nome do cliente"
                value={cliente}
                onChange={(event) => setCliente(event.target.value)}
            />

            <label htmlFor="equipamento">Equipamento:</label>

            <input
                type="text"
                name="equipamento"
                id="equipamento"
                placeholder="Ex.: Notebook"
                value={equipamento}
                onChange={(event) => setEquipamento(event.target.value)}
            />

            <label htmlFor="descricao">Descrição:</label>

            <textarea
                id="descricao"
                placeholder="Descreva o problema"
                value={descricao}
                maxLength={100}
                onChange={(event) => setDescricao(event.target.value)}
            />

            <p className="contador">
                {descricao.length}/100 caracteres
            </p>

            {erro !== "" && (
                <p className="erro">{erro}</p>
            )}

            <button type="submit">
                Cadastrar Ordem
            </button>
        </form>

        <h2>Ordens Cadastradas</h2>

        {ordens.length === 0 ? (
            <p>Nenhuma ordem cadastrada.</p>
        ) : (
            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Equipamento</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {ordens.map((ordem) => (
                        <tr key={ordem.id}>
                            <td>{ordem.cliente}</td>
                            <td>{ordem.equipamento}</td>
                            <td>{ordem.descricao}</td>
                            <td>{ordem.status}</td>

                            <td>
                                {ordem.status === "Aberta" ? (
                                    <button
                                        onClick={() =>
                                            fecharOrdem(ordem.id)
                                        }
                                    >
                                        Fechar Ordem
                                    </button>
                                ) : (
                                    <span>Finalizada</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </main>
);


}
