import styled from "styled-components";
import useCommentFetch from "src/hooks/useCommentFetch";

export default function CommentList() {
  const { list } = useCommentFetch();

  return (
    <ListWrappar>
      {list?.map((list) => (
        <div key={list.id}>
          <h3>
            {list.id}
            <span>
              ({list.date}
              {list?.time})
            </span>
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
