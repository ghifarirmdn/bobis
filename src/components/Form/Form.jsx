import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        style={props.style}
        className="form-input"
      />
    </>
  );
};

export default Form;
