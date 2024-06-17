import React from 'react';
import styles from "../styles/HeaderFooter.module.css";
import logo from "../assets/img/logo-com-nome.png"
import githubIcon from "../assets/img/icon-github.png"
import linkedinIcon from "../assets/img/icon-linkedin.png"
import emailIcon from "../assets/img/icon-email.png"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoTexto}>
        <img className={styles.imgFooter} src={logo} alt="Logo" />
      </div>
      <div className={styles.contato}>
        <a href="https://github.com/erikadias2004"><img className={styles.imgFooter} src={githubIcon} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/erika-dias-ribeiro-608359266/"><img className={styles.imgFooter} src={linkedinIcon} alt="LinkedIn" /></a>
        <a href="mailto:diasribeiroerica4@gmail.com"><img className={styles.imgFooter} src={emailIcon} alt="Email" /></a>
      </div>
    </footer>
  );
};

export default Footer;
