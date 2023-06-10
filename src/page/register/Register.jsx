import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "name") {
      setInput({ ...input, name: value });
    } else if (name === "email") {
      setInput({ ...input, email: value });
    } else if (name === "password") {
      setInput({ ...input, password: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(input);
    let { email, name, password } = input;
    let body = {
      name,
      email,
      password,
    };

    axios
      .post("https://tiket-bus-api.kencang.id/api/register", body, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        toast.success("Registrasi Berhasil!");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        toast.error("Registrasi Gagal!");
      });
  };

  return (
    <>
      <div className="register">
        <div className="title-text">
          <h1>Selamat Datang</h1>
          <p>Silahkan Registrasi Terlebih Dahulu</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Form
            onChange={handleInput}
            placeholder="masukkan nama"
            type="text"
            name="name"
            value={input.name}
          />
          <Form
            onChange={handleInput}
            placeholder="masukkan email"
            type="email"
            name="email"
            value={input.email}
          />
          <Form
            onChange={handleInput}
            placeholder="masukkan password"
            type="password"
            name="password"
            value={input.password}
          />
          <button className="button-registrasi" type={"submit"}>
            {isLoading ? <LoadingSpinner /> : "Registrasi"}
          </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          ;
        </form>

        <p style={{ textAlign: "center", paddingTop: "20px", color: "white" }}>
          atau
        </p>

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
