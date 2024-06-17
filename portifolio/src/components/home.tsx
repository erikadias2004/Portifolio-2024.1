import React from 'react';
import { Link } from 'react-router-dom';
import foto from "../assets/img/foto.png"
import styles from "../styles/Home.module.css"

const Home: React.FC = () => {
  const conteudos = [
    { nome: 'Sobre mim', link: '/sobremim' },
    { nome: 'Projetos', link: '/projetos' }
  ];

  return (
    <main>
      <section>
        <article className={styles.introducao}>
          <aside>
            <img className={styles.foto} src={foto} alt="Foto" />
          </aside>
          <div className={styles.introducaoTexto}>
            <h1>Olá! Eu me chamo Erika.</h1>
            <h2>Sou estudante de desenvolvimento de software multiplataforma na FATEC - SJC.</h2>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
