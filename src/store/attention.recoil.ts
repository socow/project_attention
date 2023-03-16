import { atom, selector } from "recoil";

export const attentionState = atom({
  key: "attentionState",
  default: [] as any,
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
