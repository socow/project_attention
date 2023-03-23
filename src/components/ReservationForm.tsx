import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { Reservation } from "src/apis/Reservation";
import styled from "styled-components";

type Props = {
  startDate: Date;
};

export default function ReservationFrom({ startDate }: Props) {
  const navigate = useNavigate();
  const SelectedDate = startDate.toLocaleDateString("ko-kr");
  const [story, setStory] = useState<string>("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStory(e.target.value);
  }, []);

  const post = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await Reservation.post(story, startDate);
    navigate("/");
  };

  return (
    <>
      <PostStory onSubmit={post}>
        <h1>당신의 이야기를 예약해주세요</h1>
        <h2>
          선택한 날짜: <span>{SelectedDate}</span>
        </h2>

        <textarea
          placeholder="당신의 이야기를 적어주세요."
          onChange={onChange}
        />
        <button type="submit">글 작성하기</button>
      </PostStory>
    </>
  );
}
const PostStory = styled.form`
  h1 {
    top: 30px;
  }
  h2 {
    span {
      padding: 5px;
      color: rgb(225, 68, 79);
      border: 2px solid #ffcccc;
      border-radius: 5px;
    }
  }
  textarea {
    height: 200px;
    width: 345px;
    border: 3px solid #ffcccc;
    font-size: 22px;
    padding: 5px;
    margin: 4px 9px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-weight: 700;
    background-color: #ffff;
    border: 1px solid rgb(210, 208, 208);
    color: black;
    cursor: pointer;
  }
`;
