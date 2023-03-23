import { useCallback, useEffect, useMemo } from "react";
import { Reservation } from "../apis/Reservation";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  attentionState,
  allDataSelector,
  todaySelector,
  attentionAllState,
} from "src/store/attention.recoil";
import { Type } from "src/model/attention";

export default function useMainFetch() {
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

  return {
    todayDate,
    allStory,
  };
}
