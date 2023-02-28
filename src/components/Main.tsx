import styled from "styled-components";

export default function Main() {
  const date = new Date().toLocaleDateString("ko-kr");
  return (
    <>
      <MainWappar>
        <h1>{date} 오늘의 이야기</h1>
      </MainWappar>
    </>
  );
}

const MainWappar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0/16%);
`;
