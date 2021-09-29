import React from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={style.container}>
      <header className={style.header + " " + style.vignette_top}>
        <div className={style.header_title}>
          <h2>Proyecto X</h2>
        </div>
        <nav className={style.header_nav}>
          <ul>
            <li>
              <Link to="/login" className={style.Link}>
                <button className={style.login_button}>Ingresar</button>
              </Link>
            </li>
            <li>
              <Link to="/register" className={style.Link}>
                <button className={style.signup_button}>Registro</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className={style.main_content}>
        <div className={style.main_ribbon}></div>
        <h1 className={style.main_title}>
          Gestionar tu restaurante, <br /> nunca fue tan sencillo.
        </h1>
        <Link to="/login" className={style.Link + " " + style.Link_Main}>
          <button className={style.main_button}>Ingresar</button>
        </Link>
      </section>

      <footer className={style.footer + " " + style.vignette_bottom}>
        <div className={style.footer_left}>
          <a href="/">Productos</a>
          <a href="/">Sobre nosotros</a>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
