import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../Res/colors";
import InputField from "../generals/InputField";
import Button from "../generals/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { SERV_API } from "../../../strings";

const Loginform = () => {
  const [votersID, setVotersID] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    const payload = { name, votersID };
    axios
      .post(`${SERV_API}/auth`, payload)
      .then((res) => {
        localStorage.setItem("eth-vote-token", res.data.message);
        navigate("/vote");
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  return (
    <>
      <Wrapper>
        <Toaster position="top-right" reverseOrder={false} />
        <Header>Hello, please login with your credentials to vote!</Header>
        <InputGroup>
          <Label>Full Name</Label>
          <InputField
            width={"90%"}
            placeholder={"Enter your Full Name"}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </InputGroup>
        <InputGroup>
          <Label>Voter's ID</Label>
          <InputField
            width={"90%"}
            placeholder={"Enter your Voter's ID"}
            onChange={(e) => setVotersID(e.target.value)}
            value={votersID}
          />
        </InputGroup>
        <Bottom>
          <Empty>Any difficulty?</Empty>
          <Button
            text={"Log in"}
            width={"20%"}
            color={Colors.Primary}
            onClick={() => handleLogin()}
          />
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

export default Loginform;
