import styled from "styled-components";
import MainList from "../components/MainList";

export default function MainPage() {
  return (
    <Container>
      <MainList />
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1000px;
  height: 100%;
  margin: auto;
  padding: 30px;
`;
