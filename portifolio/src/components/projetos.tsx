import React from 'react';
import criancaRenalImg from "../assets/img/crianca-renal.png";
import magicatImg from "../assets/img/magicat.png";
import projeto from "../assets/img/projeto.png";
import oceanImg from "../assets/img/ocean.png"
import styles from "../styles/Projetos.module.css";

const Projetos: React.FC = () => {
  const projetosacademicos = [
    { nome: 'Criança Renal - API 2023.2', descricao: 'Este projeto foi dedicado a crianças que sofrem com a doença renal crônica, afim de trazer esse problema á pública para concientização e ajudar familiares que passam por isso.', participacao: 'Contribuição: Atuei principalmente na parte de estilização do site, trabalhando com as tecnolias HTML, CSS e o Figma.', tecnologias: 'HTML, CSS, JavaScript, Figma, Sass, Python, Flask, MySQL.', link: 'https://github.com/TeamHiveAPI/API-2023.2', imagem: criancaRenalImg },
    { nome: 'Magicat', descricao: 'Um site de uma escola fictícia que oferece aulas de magia para gatos', tecnologias: 'HTML, CSS, MySQL, Python, Flask', link: 'https://github.com/erikadias2004/Magicat', imagem: magicatImg },
    { nome: 'Internet Ocean - API 2024.1', descricao: 'Este projeto foi dedicado para a criação de um help desk', participacao: 'Contribuição: Atuei tanto no front quanto no back, utilizando node.js, react e typescript', tecnologias: 'React, Typescript, CSS, Node.js, Figma, Bootstrap', link: 'https://github.com/CoddingWarriors/Api_CoddingWarriors/tree/main', imagem: oceanImg }
  ];

  return (
    <main>
      <section>
        <article className={styles.introducao}>
          <img src={projeto} alt="Projeto" />
          <div className={styles.introducaoTexto}>
            <p>Desde o início dos meus estudos tenho buscado aprimorar minhas habilidades e conhecimentos nesse campo, com o intuito de aprender sempre mais. Apesar de ainda estar no início da minha carreira, acredito que a minha curiosidade e paixão pela área me fará melhorar cada vez mais.</p>
            <p>Abaixo você encontrará meus trabalhos feitos até o momento</p>
          </div>
        </article>
        <article className={styles.academico}>
          <div className={styles.academicoTitulo}>
            <hr />
            <h2>Acadêmico</h2>
            <hr />
          </div>
          <div className={styles.academicoCards}>
            {projetosacademicos.map((academico, index) => (
              <div key={index} className={`${styles.card} card`}>
                <img src={academico.imagem} alt="Imagem" />
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>{academico.nome}</h5>
                  <p className={styles.Cardtext}>{academico.descricao}</p>
                  <p>{academico.participacao}</p>
                  <p className={styles.Cardtext}><strong>Tecnologias utilizadas: </strong>{academico.tecnologias}</p>
                  <a href={academico.link} className={`${styles.button} button`}>Saiba mais</a>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Projetos;
