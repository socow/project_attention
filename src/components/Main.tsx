import { useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import { attentionRequest } from "../apis/api";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  attentionState,
  allDataSelector,
  todaySelector,
} from "src/store/attention.recoil";
import { Type } from "src/model/attention";

export default function Main() {
  const setData = useSetRecoilState<Type[]>(attentionState);
  const today = useRecoilValue(todaySelector);
  const check = useRecoilValue(allDataSelector);

  const getData = useCallback(() => attentionRequest.get(setData), [setData]);

  const todayDate = useMemo(() => today, [today]);

  const allStory = useMemo(() => check, [check]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Wappar>
        <h2>
          총 누적 주목:<span>{allStory.length}</span>
        </h2>
        <h1>당신의 이야기에 주목합니다. </h1>
        {todayDate ? (
          <p> "{todayDate?.story}"</p>
        ) : (
          <span>오늘은 이야기가 없습니다</span>
        )}
      </Wappar>
    </>
  );
}

export const Wappar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px;
  p {
    line-height: 40px;
  }
  h2 {
    span {
      color: rgb(225, 68, 79);
    }
  }
  span {
    font-size: 30px;
  }
`;
