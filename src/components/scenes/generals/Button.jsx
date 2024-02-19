import React from "react";
import styled from "styled-components";
import { Colors } from "../../../Res/colors";

const Button = ({ width, text, color, onClick }) => {
  return (
    <>
      <Wrapper width={width} text={text} color={color} onClick={onClick}>
        Login
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  border-radius: 15px;
  padding: 10px;
  color: ${Colors.WHITE};
  background-color: ${(props) => (props ? props.color : Colors.Primary)};
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default Button;
