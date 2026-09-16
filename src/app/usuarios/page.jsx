"use client";

import { useEffect, useState } from "react";
import Usuarios from "@/components/usuarios";

export default function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  return (
    <main className="usuarios">
      <h1>Lista de Usuários</h1>

      <div className="listaUsuarios">
        {users.map((user) => (
          <Usuarios key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}