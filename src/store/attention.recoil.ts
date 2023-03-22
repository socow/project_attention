import { atom, selector } from "recoil";
import { CommentType, Type } from "src/model/attention";

export const attentionState = atom<Type[]>({
  key: "attentionState",
  default: [],
});

export const listState = atom<CommentType[]>({
  key: "listState",
  default: [],
});

export const todaySelector = selector({
  key: "todaySelector",
  get: ({ get }) => {
    const data = get(attentionState);
    const todayData = data.filter(
      (info: any) => info.date === new Date().toLocaleDateString("ko-kr")
    );
    return todayData[0];
  },
});

export const ListSelector = selector({
  key: "ListSelector",
  get: ({ get }) => {
    const data = get(listState);
    return data;
  },
});

export const allDataSelector = selector({
  key: "allDataSelector",
  get: ({ get }) => {
    const check = get(attentionState);
    return check;
  },
});
