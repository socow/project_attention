import { atom, selector } from "recoil";
import { CommentType, Type } from "src/model/attention";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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
  effects_UNSTABLE: [persistAtom],
});

export const allDataSelector = selector({
  key: "allDataSelector",
  get: ({ get }) => {
    const check = get(attentionAllState);
    return check;
  },
});
export const checkSelector = selector({
  key: "checkSelector",
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
