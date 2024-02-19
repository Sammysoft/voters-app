import styled from "styled-components";
import React from "react";

const InputField = ({ width, placeholder, onChange, value }) => {
  return (
    <>
      <Input
        width={width}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

const Input = styled.input`
  border: 2px solid grey;
  border-radius: 10px;
  padding: 25px 25px;
  background-color: transparent;
  font-family: Kanit;
  width: ${(props) => (props ? props.width : props.width)};
  font-size: 2rem;
  &:focus {
    background-color: transparent;
    border: 2px solid grey;
  }
`;

export default InputField;
