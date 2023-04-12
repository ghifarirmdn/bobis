import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <>
      <form action="">
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="form-input"
        />
      </form>
    </>
  );
};

export default Form;
