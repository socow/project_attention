import { useNavigate } from "react-router";
import { Reservation } from "src/apis/Reservation";
import useInput from "src/hooks/useInput";
import styled from "styled-components";

type Props = {
  startDate: Date;
};

export default function ReservationFrom({ startDate }: Props) {
  const { value, onChange } = useInput();
  const navigate = useNavigate();
  const SelectedDate = startDate.toLocaleDateString("ko-kr");

  const post = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await Reservation.post(value, startDate);
    navigate("/");
  };

  return (
    <PostStory onSubmit={post}>
      <h1>당신의 이야기를 예약해주세요</h1>
      <h2>
        선택한 날짜: <span>{SelectedDate}</span>
      </h2>

      <textarea placeholder="당신의 이야기를 적어주세요." onChange={onChange} />
      <button type="submit">글 작성하기</button>
    </PostStory>
  );
}
const PostStory = styled.form`
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  margin: 5px;
  h1 {
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 18px;
    }
  }
  h2 {
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 18px;
    }
    span {
      @media ${({ theme }) => theme.device.mobile} {
        font-size: 18px;
      }
      padding: 5px;
      color: rgb(225, 68, 79);
      border: 2px solid #ffcccc;
      border-radius: 5px;
    }
  }
  textarea {
    @media ${({ theme }) => theme.device.mobile} {
      height: 100px;
    }
    height: 200px;
    width: 345px;
    border: 3px solid #ffcccc;
    font-size: 22px;
    padding: 5px;
    margin: 4px 9px;
  }
  button {
    @media ${({ theme }) => theme.device.mobile} {
      height: 40px;
      width: 95%;
    }
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
