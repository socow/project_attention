import Calendar from "src/components/Calendar";
import styled from "styled-components";
export default function NewPostPage() {
  return (
    <Container>
      <PostWrappar>
        <Calendar />
      </PostWrappar>
    </Container>
  );
}
const Container = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    width: 84%;
    padding: 0px;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: 100%;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 75%;
  height: 100%;
  margin: auto;
  padding: 30px;
`;
const PostWrappar = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 0px;
    box-shadow: none;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
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
