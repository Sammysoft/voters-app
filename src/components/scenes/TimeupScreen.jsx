import React from "react";
import styled from "styled-components";

const TimeupScreen = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <Text>Time is Up!</Text>
          <TextSmall>
            The scheduled time for this voting exercise is complete, you cannot
            make any more votes.
          </TextSmall>
        </Main>
      </Wrapper>
    </>
  );
};

export default TimeupScreen

const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`;

const Main = styled.div`
  width: 60%;
  height: 40%;
`;

const Text = styled.div`
  font-weight: 800;
  text-align: center;
  font-size: 2rem;
`;

const TextSmall = styled.div`
  font-weight: 200;
  text-align: center;
  font-size: 1rem;
`;
