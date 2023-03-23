import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { allDataSelector } from "src/store/attention.recoil";
import { useRecoilValue } from "recoil";
import ReservationFrom from "./ReservationForm";

export default function Calendar() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isDateSelected, setIsDateSelected] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<boolean>(true);
  const check = useRecoilValue(allDataSelector);

  const openResevation = useCallback(() => {
    setIsCheck(true);
  }, [setIsCheck]);

  const closeResevation = useCallback(() => {
    setIsCheck(false);
  }, [setIsCheck]);

  const reservationCheck = (date: Date) => {
    setStartDate(date);
    setIsDateSelected(true);
    const newDate = date.toLocaleDateString("ko-kr");
    const res = check.filter((check: any) => check.date.includes(newDate));
    if (res.length >= 1) {
      closeResevation();
    } else {
      openResevation();
    }
  };

  return (
    <>
      <CalendarSection>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => {
            reservationCheck(date);
          }}
          inline
          locale={ko}
          minDate={new Date()}
        />
      </CalendarSection>
      {isDateSelected && (
        <PostWrappar>
          {isCheck ? (
            <ReservationFrom startDate={startDate} />
          ) : (
            <h1>해당 날짜는 예약이 마감되었습니다.</h1>
          )}
        </PostWrappar>
      )}
    </>
  );
}
const PostWrappar = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const CalendarSection = styled.section`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .react-datepicker {
    height: 400px;
    border: 0px;
    font-size: 18px;
    background-color: #ffff;
  }

  .react-datepicker__navigation-icon::before {
    border-color: black;
  }

  .react-datepicker__navigation {
    top: 11px;
  }

  .react-datepicker__navigation--previous {
    left: 70px;
  }

  .react-datepicker__navigation--next {
    right: 70px;
  }

  .react-datepicker__header {
    border: 0px;
    background-color: #ffff;
  }

  .react-datepicker__current-month {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 25px;
    font-weight: 500;
  }
  .react-datepicker__day-names {
    margin-bottom: -20px;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    margin: 13px;
    color: green;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--selected:hover,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--in-range,
  .react-datepicker__day--in-selecting-range {
    color: #ffff;
    background-color: #46e346;
  }

  .react-datepicker__day--disabled {
    color: gray;
  }
`;
