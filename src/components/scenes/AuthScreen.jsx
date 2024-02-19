import React from "react";
import styled from "styled-components";
import { Colors } from "../../Res/colors";
import Loginform from "./Forms/Loginform";

const AuthScreen = () => {
  return (
    <>
      <Wrapper>
        <Divider>
          <LeftWrapper>
            <CenteredText>E-Voters Application</CenteredText>
          </LeftWrapper>
          <RightWrapper>
            <Loginform />
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
  width: 35%;
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
  width: 75%;
  height: 100%;
`;
export default AuthScreen;
