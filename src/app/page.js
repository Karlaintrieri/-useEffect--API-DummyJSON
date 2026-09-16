import Image from "next/image";
import styles from "./globals.css";
import BannerCTA from "@/components/bannerCTA";



const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  
  await sleep(3500);

  // throw new Error("Erro simulado!!!");

  return (
    <>
      <section className="principal">
        <div className="texto">
          <h1>Convert More <br/>Leads</h1>
          <p>Create custom landing pages with Unbounce that convert more visitors than any website - no coding required.</p>
          <button>Start My Free Trial</button>
        </div>

        <div className="imagem">
          <img src="./imagens/fundo.png" alt="Lading page"></img>
        </div>
        
      </section>
    <BannerCTA/>
    
    </>
  );
}
