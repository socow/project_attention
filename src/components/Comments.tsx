import styled from "styled-components";
import { comment } from "src/apis/Comment";
import useInput from "src/hooks/useInput";

export default function Comments() {
  const { value, onChange } = useInput();

  const post = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await comment.post(value);
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
    @media ${({ theme }) => theme.device.tabletL} {
      width: 560px;
    }
    @media ${({ theme }) => theme.device.tablet} {
      width: 405px;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 178px;
      height: 24px;
    }
    width: 810px;
    height: 41px;
  }
`;
const CommentButton = styled.button`
  @media ${({ theme }) => theme.device.mobile} {
    height: 30px;
    font-size: 10px;
  }
  position: relative;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 49px;
  cursor: pointer;
`;
