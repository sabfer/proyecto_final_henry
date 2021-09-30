import React from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className={style.container}>
      <header className={style.header + " " + style.vignette_top}>
        <div className={style.header_title}>
          <h2>Proyecto X</h2>
        </div>
        <nav className={style.header_nav}>
          <ul>
            <li>
              <Link to="/" className={style.Link + " " + style.Link_Home}>
                Inicio
              </Link>
            </li>
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

      <section className={style.register_container}>
        <div className={style.register_form}>
          <div className={style.register_top}>
            <h2>
              Registrate y conoce las <br /> bondades de una buena <br /> gestión
            </h2>
            <div className={style.overlay}></div>
          </div>
          <div className={style.register_bottom}>
            <div className={style.form}>
              <h2 className={style.title}>Registro</h2>
              <div className={style.input_container}>
                <input required id="email" className={style.input} type="email" placeholder=" " autoComplete="off" />
                <label htmlFor="email" className={style.placeholder}>
                  Correo electrónico
                </label>
              </div>
              <div className={style.input_container}>
                <input
                  required
                  id="password"
                  className={style.input}
                  type="password"
                  placeholder=" "
                  autoComplete="off"
                />
                <label htmlFor="password" className={style.placeholder}>
                  Contraseña
                </label>
              </div>
              <div className={style.input_container}>
                <input
                  required
                  id="confirmPassword"
                  className={style.input}
                  type="password"
                  placeholder=" "
                  autoComplete="off"
                />
                <label htmlFor="confirmPassword" className={style.placeholder}>
                  Confirmar contraseña
                </label>
              </div>
              <div className={style.signUpContainer}>
                <button type="submit" className={style.registerSubmit}>
                  Registrarme
                </button>
                <div id="gSignInWrapper" className={style.gSignInWrapper}>
                  <div id="customBtn" className={style.customGPlusSignIn}>
                    <div className={style.icon}></div>
                    <span className={style.buttonText}>Continuar con Google</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Register;
