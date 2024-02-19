/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../../Res/colors";
import icon from "../../Res/images/eth-icon.png";
import axios from "axios";
import { ETH_API, SERV_API } from "../../strings";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const DashboardScreen = () => {
  const [candidates, setCandidates] = useState([]);
  const [time, setTime] = useState(0);
  const [user, setUser] = useState({});
  const [candidateIndex, setCandidateIndex] = useState();
  const [vote, setVote] = useState(Boolean)

  let token = localStorage.getItem("eth-vote-token");
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${SERV_API}/get`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setUser(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${ETH_API}/candidates`)
      .then((res) => {
        setCandidates(res.data.candidates);
        console.log(res.data);
      })
      .catch((error) => toast.error(error.response.data.message));
  }, [vote]);

  useEffect(() => {
    const getTime = async () => {
      try {
        const res = await axios.get(`${ETH_API}/remainingTime`);
        setTime(res.data.remainingTime);
        console.log(res.data.remainingTime);
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred");
      }
    };
    getTime();
    const intervalId = setInterval(getTime, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const casteVote = async () => {
    let payload = Number(candidateIndex) - 1;
    axios
      .put(`${SERV_API}/vote`, payload, {
        headers: {
          Authorization: localStorage.getItem("eth-vote-token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        axios
          .post(`${ETH_API}/vote`, { candidateIndex: payload })
          .then((res) => {
            console.log(res.data);
            setVote(!vote);
            toast.success("Vote Casted!");
          })
          .catch((error) => {
            console.log(error);
            toast.error("Please enter a valid vote index");
          });
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const logout = () => {
    localStorage.removeItem("eth-vote-token");
    navigate("/auth");
  };

  return (
    <>
      <Wrapper>
        <Toaster position="top-right" reverseOrder={false} />
        <LeftWrapper>
          <LeftBarItem>
            <Icon src={icon} alt="icon" />
            <AppNameText>EthVoteApp</AppNameText>
          </LeftBarItem>
          <LeftBarItem
            onClick={() => {
              logout();
            }}
          >
            Logout
          </LeftBarItem>
        </LeftWrapper>
        <RightWrapper>
          <HeadNav>
            <HeadText>Hello, {user.name}</HeadText>
            <TimerWrapper>
              <PreTime>Time Left -</PreTime> <Time>{formatTime(time)}</Time>
            </TimerWrapper>
          </HeadNav>
          <BodyWrapper>
            <Header>Vote your Candidates</Header>

            <VoteBar>
              <SearchBar
                placeholder="Enter Voters Index"
                name={"index"}
                value={candidateIndex}
                onChange={(e) => setCandidateIndex(e.target.value)}
              />
              <VoteButton
                onClick={() => {
                  casteVote();
                }}
              >
                Vote
              </VoteButton>
            </VoteBar>
            <TableWrapper>
              <Table>
                <TableRow>
                  <TableHead>Index</TableHead>
                  <TableHead>Candidate Name</TableHead>
                  <TableHead>Candidate Votes</TableHead>
                  <TableHead>Vote Counts</TableHead>
                </TableRow>
                {candidates?.map((item, id) => (
                  <TableRow key={id}>
                    <TableData>{id + 1}</TableData>
                    <TableData>{item[0]}</TableData>
                    <TableData>{item[1]}</TableData>
                    <TableData>{item[2]}</TableData>
                  </TableRow>
                ))}
              </Table>
            </TableWrapper>
          </BodyWrapper>
        </RightWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const LeftWrapper = styled.div`
  width: 10vw;
  background-color: ${Colors.Primary};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const RightWrapper = styled.div`
  height: 100vh;
  width: 90%;
`;

const HeadNav = styled.div`
  width: 100%;
  height: 6vh;
  background-color: ${Colors.GREY};
  box-shadow: 0px 8px 16px #d3e0e0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const HeadText = styled.div`
  font-weight: 400;
  font-size: 2rem;
  opacity: 0.7;
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 20px;
`;
const Header = styled.div`
  //   width: 90vw;
  height: 10vh;
  font-weight: 300;
  font-size: 1.5rem;
  padding-left: 40px;
`;
const TableWrapper = styled.div`
  width: 100%;
  height: 70vh;
`;

const LeftBarItem = styled.div`
  color: ${Colors.WHITE};
  width: 100%;
  padding: 20px;
  text-align: left;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 10vh;
  cursor: pointer;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  height: 80%;
`;

const TableRow = styled.tr`
  text-align: center;
`;

const TableHead = styled.td`
  font-weight: 800;
  font-size: 20px;
`;

const TableData = styled.td`
  font-size: 14px;
`;

const VoteBar = styled.div`
  width: 30%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 5vw;
`;

const SearchBar = styled.input`
  width: 60%;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  font-family: Kanit;
  font-size: 1rem;
  &:active {
    border: 1px solid grey;
  }
  &:focus {
    border: 1px solid grey;
  }
`;

const VoteButton = styled.div`
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  background-color: ${Colors.Primary};
  width: 10%;
`;

const TimerWrapper = styled.div`
  color: ${Colors.BLACK};
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justfy-content: space-around;
  width: 15%;
`;
const Time = styled.div`
  color: ${Colors.Primary};
  width: 50%;
`;

const PreTime = styled.div`
  font-size: 1rem;
  width: 40%;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
const AppNameText = styled.div`
  font-size: 1rem;
`;

export default DashboardScreen;
