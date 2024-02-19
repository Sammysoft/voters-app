import React from "react";
import styled from "styled-components";
import { Colors } from "../../../Res/colors";
import InputField from "../generals/InputField";
import Button from "../generals/Button";

const RegistrationForm = () => {
  return (
    <>
      <Wrapper>
        <Header>
          Hello, please create an account for eligibility to vote!
        </Header>
        <InputGroup>
          <Label>Voter's ID</Label>
          <InputField width={"90%"} placeholder={"Enter your Voter's ID"} />
          <Label>First Name</Label>
          <InputField
            width={"90%"}
            placeholder={"Enter your secret password"}
            type={"password"}
          />
        </InputGroup>
        <Bottom>
          <Empty>Create voters account?</Empty>
          <Button text={"Log in"} width={"20%"} color={Colors.Primary} />
        </Bottom>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 70%;
  width: 100%;
`;

const Header = styled.div`
  text-align: left;
  color: ${Colors.BLACK};
`;

const InputGroup = styled.div`
  height: 30%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
`;

const Label = styled.div`
  padding: 10px;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Bottom = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
`;

const Empty = styled.div`
  width: 50%;
  cursor: pointer;
`;

export default RegistrationForm;
