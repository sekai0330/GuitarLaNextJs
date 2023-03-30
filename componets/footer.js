import Link from "next/link"
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
                <Link href='/'>
                    Inicio
                </Link>
                <Link href='/nosotros'>
                    Nosotros
                </Link>
                <Link href='/tienda'>
                    Tienda
                </Link>
                <Link href='/blog'>
                    Blog
                </Link>
                
            </nav>
            <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}
