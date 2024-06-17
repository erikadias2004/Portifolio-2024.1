import React from 'react';
import fotoImg from "../assets/img/foto.png";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from "../styles/Contato.module.css";

const Contato: React.FC = () => {
  return (
    <main className={styles.contatoContainer}>
      <section className={styles.contatoContent}>
        <div className={styles.imageContainer}>
          <img src={fotoImg} alt="Foto de Contato" />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.iconItem}>
            <a href="https://github.com/erikadias2004" className={styles.link}>
              <FaGithub size={40} />
              Github
            </a>
          </div>
          <div className={styles.iconItem}>
            <a href="https://www.linkedin.com/in/erika-dias-ribeiro-608359266/" className={styles.link}>
              <FaLinkedin size={40} />
              LinkedIn
            </a>
          </div>
          <div className={styles.iconItem}>
            <a href="mailto:diasribeiroerica4@gmail.com" className={styles.link}>
              <FaEnvelope size={40} />
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
