import styled from "styled-components";
import useFetch from "src/hooks/useMainFetch";

export default function MainList() {
  const { todayDate, allStory } = useFetch();

  return (
    <>
      <Wrappar>
        <h2>
          총 누적 주목: <span>{allStory.length}</span>
        </h2>
        <h1>오직 당신의 이야기에 주목합니다. </h1>

        {todayDate ? (
          <Story> "{todayDate?.story}"</Story>
        ) : (
          <Story>오늘은 이야기가 없습니다</Story>
        )}
      </Wrappar>
    </>
  );
}

export const Wrappar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h2 {
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 15px;
    }
  }
  h1 {
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 15px;
    }
    padding-bottom: 5px;
    border-bottom: 3px solid #ffcccc;
  }
  h2 {
    display: flex;
    align-items: center;
    span {
      @media ${({ theme }) => theme.device.mobile} {
        font-size: 15px;
        padding: 5px;
      }
      border-radius: 45%;
      border: 2px solid #ffcccc;
      color: rgb(225, 68, 79);
      padding: 11px;
    }
  }
  span {
    font-size: 30px;
  }
`;
const Story = styled.p`
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
  }
  display: flex;
  justify-content: center;
  width: 80%;
  line-height: 40px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ffcccc;
`;
