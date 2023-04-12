import React from "react";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="title-text">
          <h1>Selamat Datang</h1>
          <p>Silahkan Registrasi Terlebih Dahulu</p>
        </div>

        <Form placeholder="masukkan email" type="email" />
        <Form placeholder="masukkan nama" type="text" />
        <Form placeholder="masukkan password" type="password" />
        <Form placeholder="ulangi password" type="password" />

        <Link to="/home" style={{ textDecoration: "none" }}>
          <button className="button-registrasi" type="submit">
            Registrasi
          </button>
        </Link>

        <p style={{ textAlign: "center", paddingTop: "20px", color: "white" }}>
          atau
        </p>

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
            Sudah Punya Akun?
            <Link to="/">
              <b> Masuk di sini</b>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
