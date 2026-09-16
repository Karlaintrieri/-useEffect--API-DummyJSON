import CardPostBlog from "@/components/CardPostBlog/cardPostBlog";
import "./blog.css";

const posts = [
  {
    id: 1,
    titulo: "Tecnologia transforma a forma como vivemos nas grandes cidades",
    categoria: "Tecnologia",
    resumo:
      "Novas soluções digitais estão ajudando cidades a se tornarem mais inteligentes, conectadas e eficientes.",
    autor: "Redação TechNews",
    data: "26 Ago 2026",
    imagem:
      "/imagens/noticia1.png",
  },
  {
    id: 2,
    titulo: "Inteligência artificial ganha espaço no mercado de trabalho",
    categoria: "Inteligência Artificial",
    resumo:
      "Empresas estão utilizando ferramentas de inteligência artificial para automatizar tarefas e melhorar processos.",
    autor: "Mariana Souza",
    data: "25 Ago 2026",
    imagem:
      "/imagens/noticia2.png",
  },
  {
    id: 3,
    titulo: "Startups brasileiras apostam em inovação para crescer",
    categoria: "Negócios",
    resumo:
      "Empresas de tecnologia encontram novas oportunidades para desenvolver produtos e serviços inovadores.",
    autor: "Lucas Almeida",
    data: "24 Ago 2026",
    imagem:
      "/imagens/noticia3.png",
  },
  {
    id: 4,
    titulo: "Segurança digital se torna prioridade para empresas",
    categoria: "Segurança",
    resumo:
      "Com o aumento dos ataques virtuais, organizações estão investindo cada vez mais em proteção de dados.",
    autor: "Redação TechNews",
    data: "23 Ago 2026",
    imagem:
      "/imagens/noticia4.png",
  },
  {
    id: 5,
    titulo: "Novas tecnologias podem melhorar a mobilidade urbana",
    categoria: "Mobilidade",
    resumo:
      "Aplicativos e sistemas inteligentes estão ajudando a transformar a maneira como as pessoas se deslocam.",
    autor: "Gabriel Santos",
    data: "22 Ago 2026",
    imagem:
      "/imagens/noticia5.png",
  },
  {
    id: 6,
    titulo: "Educação tecnológica abre novas oportunidades para jovens",
    categoria: "Educação",
    resumo:
      "Cursos e programas de tecnologia estão preparando estudantes para as novas demandas do mercado.",
    autor: "Ana Clara",
    data: "21 Ago 2026",
    imagem:
      "/imagens/noticia6.png",
  },
  {
    id: 7,
    titulo: "Computação em nuvem muda a rotina das empresas",
    categoria: "Cloud",
    resumo:
      "Serviços em nuvem permitem que empresas armazenem informações e utilizem sistemas de qualquer lugar.",
    autor: "Rafael Lima",
    data: "20 Ago 2026",
    imagem:
      "/imagens/noticia7.png",
  },
  {
    id: 8,
    titulo: "Desenvolvimento de software continua entre as áreas mais procuradas",
    categoria: "Programação",
    resumo:
      "O crescimento dos serviços digitais mantém a procura por profissionais especializados em desenvolvimento.",
    autor: "Redação TechNews",
    data: "19 Ago 2026",
    imagem:
      "/imagens/noticia8.png",
  },
  {
    id: 9,
    titulo: "Aplicativos ajudam consumidores a economizar tempo no dia a dia",
    categoria: "Inovação",
    resumo:
      "Novos aplicativos estão simplificando tarefas e oferecendo soluções para problemas comuns da rotina.",
    autor: "Julia Martins",
    data: "18 Ago 2026",
    imagem:
      "/imagens/noticia9.png",
  },
  {
    id: 10,
    titulo: "O futuro da tecnologia será cada vez mais conectado",
    categoria: "Futuro",
    resumo:
      "Internet das coisas, inteligência artificial e automação devem continuar transformando diferentes setores.",
    autor: "Redação TechNews",
    data: "17 Ago 2026",
    imagem:
      "/imagens/noticia10.png",
  },
];

export default function Blog() {
  return (
    <main className="blog">

      <section className="blog-header">
        <span>NOTÍCIAS</span>

        <h1>Blog</h1>

        <p>
          Informação, tecnologia e inovação em um só lugar.
        </p>
      </section>

      <section className="blog-conteudo">

        <div className="blog-topo">
          <h2>Últimas notícias</h2>
          <div className="linha"></div>
        </div>

        <div className="blog-grid">

          {posts.map((post) => (
            <CardPostBlog
              key={post.id}
              post={post}
            />
          ))}

        </div>

      </section>

    </main>
  );
}