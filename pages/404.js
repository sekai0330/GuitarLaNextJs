import Link from "next/link"
import Layout from "@/componets/layout"

export default function Pagina404() {
  return (
    <Layout
        title="Pagina no encontrada"
    >
        <p className="error">Pagina no encontrada</p>
        <Link legacyBehavior href='/'>
            <a className="error-enlace">
                Ir a inicio
            </a>        
        </Link>
    </Layout>
  )
}
