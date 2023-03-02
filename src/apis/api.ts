import { firestore } from "src/firebase";
import { Type } from "src/model/attention";

export const getRequset = async (
  setData: React.Dispatch<React.SetStateAction<Type>>
) => {
  const date = new Date().toLocaleDateString("ko-kr");
  const db = firestore.collection("reservation");
  await db.get().then((docs) => {
    docs.forEach((doc) => {
      if (doc.data().date === date) {
        setData(doc.data());
      } else if (doc.data().date !== date) {
        alert("데이터가 없습니다");
      }
    });
  });
};
