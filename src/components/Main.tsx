import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { getRequset } from "../apis/api";
import { useRecoilState, useSetRecoilState } from "recoil";
import { attentionState } from "src/store/attention.recoil";

export default function Main() {
  const [data] = useRecoilState(attentionState);
  const setData = useSetRecoilState(attentionState);

  const getData = useCallback(() => getRequset(setData), [setData]);

  useEffect(() => {
    getData();
  }, [getData]);

  // const updata = () => {
  //   const date = new Date().toLocaleDateString("ko-kr");
  //   firestore.collection("reservation").add({
  //     name: "취업",
  //     story: "취업하고 싶어요",
  //     date: date,
  //   });
  // };

  return (
    <>
      <MainWappar>
        <h1>오늘의 고민과 이야기에 주목합니다. </h1>
        <h2>
          오늘의 주목:<span> "{data?.story}"</span>{" "}
        </h2>
      </MainWappar>
    </>
  );
}

const MainWappar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0/16%);
  span {
    color: #02d73b;
  }
`;
