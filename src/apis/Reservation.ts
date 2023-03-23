import { firestore } from "src/firebase";
import { Type } from "src/model/attention";

const db = firestore.collection("reservation");

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
        story: story,
        date: date,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
