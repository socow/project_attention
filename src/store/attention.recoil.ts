import { atom, selector } from "recoil";
import { CommentType, Type } from "src/model/attention";

export const attentionState = atom<Type[]>({
  key: "attentionState",
  default: [],
});

export const todaySelector = selector({
  key: "todaySelector",
  get: ({ get }) => {
    const data = get(attentionState);

    return data[0];
  },
});

export const attentionAllState = atom<Type[]>({
  key: "attentionAllState",
  default: [],
});

export const allDataSelector = selector({
  key: "DataSelector",
  get: ({ get }) => {
    const check = get(attentionAllState);
    return check;
  },
});

export const listState = atom<CommentType[]>({
  key: "listState",
  default: [],
});

export const ListSelector = selector({
  key: "ListSelector",
  get: ({ get }) => {
    const data = get(listState);
    return data;
  },
});
