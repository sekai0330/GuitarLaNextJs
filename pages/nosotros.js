import Image from "next/image"
import Layout from "@/componets/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description='Sobre nosotros, GuitarLA, tienda de musica'
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>  
        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros" />

          <div>
            <p>Fusce nec turpis luctus, faucibus tellus nec, gravida ligula. Cras quis odio laoreet, iaculis lectus in, sollicitudin ex. Ut eu nisi gravida, tincidunt dolor at, dictum quam. Etiam malesuada, turpis lobortis vestibulum cursus, ipsum neque bibendum lectus, in dapibus nisl ante quis odio. Curabitur ultrices mauris sapien, quis pretium est blandit sed. Mauris eu ex vehicula, ullamcorper velit ac, posuere purus.</p>

            <p>Etiam enim risus, auctor sit amet mi ac, accumsan blandit ante. Curabitur accumsan sagittis sapien iaculis varius. Nam sit amet nibh feugiat eros venenatis pulvinar. In hac habitasse platea dictumst. Donec eget nisl condimentum enim dignissim pellentesque. </p>
          </div>
        </div>
      </main>

    </Layout>
  )
}
