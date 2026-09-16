import Link from "next/link";
import "./header.css"
   export default function Header(){
            return(
            <>
            <section className="header">
            <h2>unbounce</h2>

            <nav className="nav">
            <Link href="/">Página Inicial</Link>
            <Link href="/product">Product</Link>
            <Link href="/product/solutions">Solutions</Link>
            <Link href="/product/solutions/pricing">Pricing</Link>
            <Link href="/product/solutions/pricing/learn">Learn</Link>
            <Link href="/product/solutions/pricing/learn/contact">Contact</Link>
            </nav>

            <button className="login">
            Log In
            </button>

            <button className="trial">
            Start My Free Trial
            </button>
            </section>
            </>
            )
        }