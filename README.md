# 개인프로젝트 '주목' 저장소 입니다

DEMO : [DEMO](https://ephemeral-raindrop-5be87b.netlify.app/)

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/105201721/227206674-1431710e-d1c6-4bf0-9f02-6b83fc43dc72.gif)

# Media quary를 사용하여 반응형 레이아웃으로 구현하였습니다.

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/105201721/227491049-cba370ab-25d7-4239-a0cd-aaae62de7fe8.gif)

# 프로젝트 설치 및 실행 방법

```
$ npm install
$ npm start
```

# 사용 기술

React

TypeScript

Recoil

Styled-component

firebase

라이브러리 : datePicker

# 오늘의 고민과 이야기 예약 시스템 설명

날짜별로 하루에 한명의 예약이 가능하고 예약상황은 실시간으로 반영됩니다.

날짜를 고른 후, 이야기하고 싶은 내용을 입력하면 예약됩니다.

예약한 날짜가 되면 예약한 이야기가 단독으로 주목받습니다.

# 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜Comment.ts
 ┃ ┗ 📜Reservation.ts
 ┣ 📂assets
 ┃ ┣ 📜images.d.ts
 ┃ ┗ 📜logo.png
 ┣ 📂components
 ┃ ┣ 📜Calendar.tsx
 ┃ ┣ 📜CommentList.tsx
 ┃ ┣ 📜Comments.tsx
 ┃ ┣ 📜MainList.tsx
 ┃ ┣ 📜Nav.tsx
 ┃ ┗ 📜ReservationForm.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useCommentFetch.ts
 ┃ ┣ 📜useInput.ts
 ┃ ┗ 📜useMainFetch.ts
 ┣ 📂model
 ┃ ┗ 📜attention.ts
 ┣ 📂pages
 ┃ ┣ 📜MainPage.tsx
 ┃ ┗ 📜NewPostPage.tsx
 ┣ 📂store
 ┃ ┗ 📜attention.recoil.ts
 ┣ 📜App.tsx
 ┣ 📜firebase.ts
 ┗ 📜index.tsx
```

커스텀 훅을 사용하여 코드, 로직의 간결해지고 가독성이 좋아도록하였으며 필요없는 반복을 줄이고 재사용성을 높였습니다.

추후 수정사항이 있을 시 커스텀 훅에서만 수정하면 되기 때문에 유지보수에 용이하도록하였습니다.

```ts
export default function useInput() {
  const [value, setValue] = useState<string>("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange };
}
```

useCallback과 useMemo를 사용하여 최적화하였습니다.

```ts
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
```

recoil로 전역적으로 상태를 관리하였습니다.

```ts
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
```

firbase에 쿼리문을 사용하여 날짜에 맞는 예약데이터 가져왔습니다.

```ts
export const Reservation = {
  async get(
    setData: React.Dispatch<React.SetStateAction<Type[]>>,
    setAllData: React.Dispatch<React.SetStateAction<Type[]>>
  ) {
    try {
      let todayDate = [] as Type[];
      let allDate = [] as Type[];

      const allList = await db.get();

      allList.docs.map((doc) => (allDate = [...allDate, { ...doc.data() }]));
      setAllData(allDate);

      const list = await db
        .where("date", "==", new Date().toLocaleDateString("ko-kr"))
        .get();
      list.docs.map((doc) => (todayDate = [...todayDate, { ...doc.data() }]));

      setData(todayDate);
    } catch (error) {
      console.error(error);
    }
  },
  async post(story: string, isDate: Date) {
    try {
      const date = isDate.toLocaleDateString("ko-kr");
      await db.add({
        story,
        date,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
```

예약하고 싶은 날짜에 예약이 차있는지 필터를 통해 확인하는함수입니다.

오늘의 날짜랑 같은 데이터를 필터하고 데이터 길이가 1개보다 크거나 같으면 마감되었다고 표시해줍니다.

```ts
const reservationCheck = (date: Date) => {
  setStartDate(date);
  setIsDateSelected(true);
  const res = check.filter((check: any) =>
    check.date.includes(date.toLocaleDateString("ko-kr"))
  );
  if (res.length >= 1) {
    closeResevation();
  } else {
    openResevation();
  }
};
```

댓글을 입력할때 랜덤으로 아이디를 생성하는 함수를 만들어 익명성을 보장하였습니다.

firbase에 쿼리문을 사용하여 오늘날짜에 맞는 댓글만 받아오고 댓글이 최신순으로 정렬하도록 하였습니다.

```ts
const randomId = (length = 8) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
};

export const comment = {
  async post(content: string) {
    try {
      await db.add({
        content: content,
        date: new Date().toLocaleDateString("ko-kr"),
        time: new Date().toLocaleTimeString("ko-kr"),
        id: randomId(),
      });
    } catch (error) {
      console.error(error);
    }
  },
  async get(setList: React.Dispatch<React.SetStateAction<CommentType[]>>) {
    try {
      let commentDate = [] as CommentType[];
      const comments = await db
        .where("date", "==", new Date().toLocaleDateString("ko-kr"))
        .orderBy("time", "desc")
        .get();
      comments.docs.map(
        (doc) => (commentDate = [...commentDate, { ...doc.data() }])
      );
      setList(commentDate);
    } catch (error) {
      console.error(error);
    }
  },
};
```

이슈: 새로고침하였을때 저장되있던 데이터가 사라져 예약이 차있음에도 예약을 하는 버그를 발견 하였습니다.

그래서 상태관리 유지를 하기위해 Recoil-persist 적용하여 해결하였습니다.

```ts
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const attentionAllState = atom<Type[]>({
  key: "attentionAllState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
```
