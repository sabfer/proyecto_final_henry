import React from "react";
import style from "./landing.module.css";
// import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.header_title}>
          <h2>NOMBRE</h2>
        </div>
        <nav className={style.header_nav}>
          <ul>
            <a href="/">Inicio</a>
            <li>
              <button className={style.login_button}>Ingresar</button>
            </li>
            <li>
              <button className={style.signup_button}>Registro</button>
            </li>
          </ul>
        </nav>
      </header>

      <section className={style.main_content}>
        <div className={style.blob_1}></div>
        <div className={style.blob_2}></div>
        <h1 className={style.main_title}>
          Gestionar tu restaurante, <br /> nunca fue tan sencillo.
        </h1>
        <button className={style.main_button}>Registro</button>
      </section>

      <footer className={style.footer}>
        <div className={style.footer_left}>
          <a href="/">Productos</a>
          <a href="/">Sobre nosotros</a>
        </div>
        <div className={style.footer_right}>
          <button className={style.login_button}>Ingresar</button>
          <button className={style.signup_button}>Registro</button>
        </div>
      </footer>
    </div>
  );
}

export default Landing;

