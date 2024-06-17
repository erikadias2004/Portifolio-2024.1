import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/HeaderFooter.module.css";
import logo from "../assets/img/logo-com-nome.png";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container-fluid">
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className={styles.imgHeader} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className={`navbar-nav ms-auto ${styles.links}`}>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projetos">Projetos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contato">Contato</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
