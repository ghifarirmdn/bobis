import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="welcome-text">
          <h1>Selamat Datang</h1>
          <p>Silahkan Masuk Terlebih Dahulu</p>
        </div>

        <Form placeholder="masukkan nama" type="text" />
        <Form placeholder="masukkan password" type="password" />

        <Link to="/home" style={{ textDecoration: "none" }}>
          <button className="button-login" type="submit">
            Login
          </button>
        </Link>

        <div className="other-login">
          <p>
            Lupa Password akunmu? <b>Atur Ulang Password</b> <br /> <br />
            atau
          </p>
        </div>
        <div className="logo-login">
          <ul className="logo-login-list">
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faGoogle}
                  size="2xl"
                  style={{ color: "#fff" }}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2xl"
                  style={{ color: "#fff" }}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="register-text">
          <p>
            Belum Punya Akun?
            <Link to="/register">
              <b> Daftar di sini</b>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
