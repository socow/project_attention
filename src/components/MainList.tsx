import { useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Reservation } from "../apis/Reservation";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  attentionState,
  allDataSelector,
  todaySelector,
  attentionAllState,
} from "src/store/attention.recoil";
import { Type } from "src/model/attention";
import CommentList from "./CommentList";
import Comments from "./Comments";

export default function MainList() {
  const setData = useSetRecoilState<Type[]>(attentionState);
  const setAllData = useSetRecoilState<Type[]>(attentionAllState);
  const today = useRecoilValue(todaySelector);
  const all = useRecoilValue(allDataSelector);

  const getData = useCallback(
    () => Reservation.get(setData, setAllData),
    [setData, setAllData]
  );

  const todayDate = useMemo(() => today, [today]);

  const allStory = useMemo(() => all, [all]);

  useEffect(() => {
    getData();
  }, [getData]);

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
          <span>오늘은 이야기가 없습니다</span>
        )}
        <Comments />
        <CommentList />
      </Wrappar>
    </>
  );
}

export const Wrappar = styled.div`
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
  h1 {
    padding-bottom: 5px;
    border-bottom: 3px solid #ffcccc;
  }
  h2 {
    display: flex;

    align-items: center;
    span {
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
  display: flex;
  justify-content: center;
  width: 800px;
  line-height: 40px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ffcccc;
`;
