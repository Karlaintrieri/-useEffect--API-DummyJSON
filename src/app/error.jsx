"use client"

import ErrorAnimation from "@/components/errorAnimation"
import Link from "next/link"

export default function Error() {
  return (
    <>
      <div className="container">
        <div className="flex">
          <h2>Ocorreu um erro</h2>

          <ErrorAnimation />

          <p>Não foi possível carregar o conteúdo.</p>

        <div className="botao">
          <Link href={"/"}>Tente novamente</Link>
          </div>
        </div>
      </div>
    </>
  )
}