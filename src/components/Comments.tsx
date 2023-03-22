import { useCallback, useState } from "react";
import styled from "styled-components";
import { comment } from "src/apis/Comment";

export default function Comments() {
  const [content, setContent] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const post = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await comment.post(content);
    alert("댓글 등록이 완료되었습니다");
    window.location.reload();
  };

  return (
    <>
      <CommentWrappar onSubmit={post}>
        <textarea placeholder="댓글남기기" onChange={onChange} />
        <CommentButton>등록하기</CommentButton>
      </CommentWrappar>
    </>
  );
}
const CommentWrappar = styled.form`
  display: flex;

  textarea {
    height: 43px;
    width: 612px;
  }
`;
const CommentButton = styled.button`
  position: relative;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 49px;
  cursor: pointer;
`;
