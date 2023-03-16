import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { getRequset } from "../apis/api";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { attentionState, todaySelector } from "src/store/attention.recoil";

export default function Main() {
  const setData = useSetRecoilState(attentionState);
  const today = useRecoilValue(todaySelector);
  const getData = useCallback(() => getRequset(setData), [setData]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Wappar>
        <h1>당신에게 주목 합니다. </h1>
        <h2>오늘의 주목</h2>
        <span> "{today?.story}"</span>
      </Wappar>
    </>
  );
}

export const Wappar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px;
  span {
  }
`;
