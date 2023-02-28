import styled from "styled-components";
import Main from "../components/Main";

export default function MainPage() {
  return (
    <Maincontainer>
      <Main />
    </Maincontainer>
  );
}

const Maincontainer = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  padding: 30px;
  justify-content: center;
`;
