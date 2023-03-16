import styled from "styled-components";
import Main from "../components/Main";

export default function MainPage() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  width: 1000px;
  height: 500px;
  margin: auto;
  padding: 30px;
  justify-content: center;
`;
