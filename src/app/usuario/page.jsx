"use client";

import { useEffect, useState } from "react";

export default function Usuarios() {

    const [listaUser, setListaUser] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=50")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setListaUser(data.results);
                setMsgErro("");
            })
            .catch(erro => setMsgErro(erro.message));
    }, []);

    return (
        <main>
            <h1>Página de usuários</h1>
            {msgErro != "" && <p>Erro: {msgErro}</p>}
            {listaUser.length > 0 ?
                <div>
                    {listaUser.map((user, idx) => {
                        return (
                            <div key={idx}>
                                <h3>{user.name.first}{" "}{user.name.last}</h3>
                                <img src={user.picture.large} alt="" />
                                <p>Email: <b>{user.email}</b></p>
                            </div>
                        )
                    })}
                </div>
                :
                <div>
                    Sem usuários por enquanto! Tente novamente mais tarde...
                </div>
            }
        </main>
    )
}