import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link, Navigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import UserContext from "../../context/userContext";
import { toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let { email, password } = input;
    let body = {
      email,
      password,
    };

    axios
      .post("https://tiket-bus-api.kencang.id/api/login", body)
      .then((res) => {
        setIsLoading(false);
        localStorage.setItem("token", res.data.accesToken);
        const token = res.data.accesToken;
        axios
          .get("https://tiket-bus-api.kencang.id/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setUser(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
          });
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        toast.error("Login Gagal!");
      });
  };

  return (
    <>
      <div className="login">
        <div className="blank-login"></div>
        <div className="welcome-text">
          <h1>Selamat Datang</h1>
          <p>Silahkan Masuk Terlebih Dahulu</p>
        </div>

        <form onSubmit={handleLogin}>
          <Form
            placeholder="masukkan email"
            type="text"
            name="email"
            onChange={handleChange}
            value={input.email}
          />
          <Form
            placeholder="masukkan password"
            type="password"
            name="password"
            onChange={handleChange}
            value={input.password}
          />
          <button
            className="button-login"
            type="submit"
            disabled={isLoading}
            style={{ textAlign: "center" }}
          >
            {isLoading ? <LoadingSpinner /> : "Login"}
          </button>
        </form>
        <div className="register-text">
          <p>
            Belum Punya Akun?
            <Link to="/register">
              <b> Daftar di sini</b>
            </Link>
          </p>
        </div>
        <div className="blank-bottom-login"></div>
      </div>
    </>
  );
};

export default Login;
