import { firestore } from "src/firebase";
import { Type } from "src/model/attention";

export const getRequset = async (
  setData: React.Dispatch<React.SetStateAction<Type>>
) => {
  const db = firestore.collection("reservation");
  let allDate = [] as any;

  await db.get().then((docs) => {
    docs.forEach((doc) => {
      allDate = [...allDate, { ...doc.data() }];
      setData(allDate);
    });
  });
};

// export const checkRequset = async (
//   isDate: Date,
//   setIsCheck: React.Dispatch<React.SetStateAction<boolean>>,
//   setIsDateSelected: React.Dispatch<React.SetStateAction<boolean>>
// ) => {
//   const check = firestore.collection("reservation");
//   await check.get().then((doc) => {
//     doc.forEach((doc) => {
//       if (doc.data().date === isDate.toLocaleDateString("ko-kr")) {
//         console.log(isDate.toLocaleDateString("ko-kr"), "왜 이날짜가 나와");
//         setIsCheck(true);
//       } else {
//         setIsDateSelected(true);
//       }
//     });
//   });
// };

export const postRequset = async (story: string, isDate: Date) => {
  const date = isDate.toLocaleDateString("ko-kr");
  firestore.collection("reservation").add({
    story: story,
    date: date,
  });
};
