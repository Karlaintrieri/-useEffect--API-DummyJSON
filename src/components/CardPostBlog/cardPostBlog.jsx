import Link from "next/link";
import "./cardPostBlog.css";

export default function CardPostBlog({ post }) {
  return (
    <article className="card-post-blog">

      <img
        src={post.imagem}
        alt={post.titulo}
        className="card-post-imagem"
      />

      <div className="card-post-conteudo">

        <span className="card-post-categoria">
          {post.categoria}
        </span>

        <h2>{post.titulo}</h2>

        <p>{post.resumo}</p>

        <div className="card-post-informacoes">
          <span>{post.autor}</span>
          <span>{post.data}</span>
        </div>

      </div>

    </article>
  );
}