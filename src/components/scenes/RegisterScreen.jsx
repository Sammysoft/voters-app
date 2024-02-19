import React from "react";
import styled from "styled-components";
import RegistrationForm from "./Forms/Registerforms";
import { Colors } from "../../Res/colors";

const RegisterScreen = () => {
  return (
    <>
      <Wrapper>
        <Divider>
          <LeftWrapper>
            <CenteredText>E-Voters Application Sign Up</CenteredText>
          </LeftWrapper>
          <RightWrapper>
            <RegistrationForm />
          </RightWrapper>
        </Divider>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;
const LeftWrapper = styled.div`
  background-color: ${Colors.Primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
`;
const CenteredText = styled.div`
  width: 90%;
  color: ${Colors.WHITE};
  font-weight: 900;
  font-size: 4rem;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
`;

export default RegisterScreen;
