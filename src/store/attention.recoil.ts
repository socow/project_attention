import { atom, selector } from "recoil";
import { Type } from "src/model/attention";

export const attentionState = atom<Type[]>({
  key: "attentionState",
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

export const checkSelector = selector({
  key: "checkSelector",
  get: ({ get }) => {
    const check = get(attentionState);
    return check;
  },
});
