import { Container } from "./MainPage";
import Calendar from "src/components/Calendar";
import styled from "styled-components";
export default function NewPostPage() {
  return (
    <Container>
      <PostWappar>
        <Calendar />
      </PostWappar>
    </Container>
  );
}
const PostWappar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px;
`;
