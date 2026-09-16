"use client";

import { useState } from "react";

export default function Contador() {
    const [contador, setContador] = useState(0);

    function addUmContador() {
        if (contador < 100) {
            setContador(contador + 1);
        } else {
            alert("Você atingiu o limite máximo de 100!");
        }
    }

    function diminuirContador() {
        if (contador > -5) {
            setContador(contador - 1);
        } else {
            alert("Você atingiu o limite mínimo de -5!");
        }
    }

    useEffect(()=> console.log(contador), [contador]);
    return (
        <>
            <h1>Desenvolvendo contador</h1>
            <p>{contador}</p>

            <div style={{ display: "flex", gap: "10px" }}>
                <button type="button" onClick={addUmContador}> + </button>
                <button type="button" onClick={diminuirContador}> - </button>
            </div>
        </>
    );
}

