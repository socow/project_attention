import { useRecoilValue, useSetRecoilState } from "recoil";
import { CommentType } from "src/model/attention";
import { listState } from "src/store/attention.recoil";
import styled from "styled-components";
import { comment } from "src/apis/Comment";
import { useCallback, useEffect } from "react";

export default function CommentList() {
  const setList = useSetRecoilState<CommentType[]>(listState);
  const list = useRecoilValue(listState);

  const getList = useCallback(() => comment.get(setList), [setList]);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <ListWrappar>
      {list?.map((list) => (
        <div key={list.id}>
          <h3>
            {list.id}
            <span>({list.date})</span>
          </h3>

          <p>{list.content}</p>
        </div>
      ))}
    </ListWrappar>
  );
}
const ListWrappar = styled.div`
  display: flex;
  flex-direction: column;
  width: 645px;
  margin: 10px;
  padding: 10px;
  border: 2px solid #ffcccc;
  border-radius: 5px;
  div {
    border-bottom: 1px solid #ffcccc;
    margin-bottom: 20px;

    h3 {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 16px;
      span {
        margin-left: 5px;
        font-size: 12px;
        color: #939393;
      }
    }
    p {
      font-family: "Malgun Gothic", "맑은 고딕", helvetica,
        "Apple SD Gothic Neo", sans-serif;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
