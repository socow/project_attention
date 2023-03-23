import { firestore } from "src/firebase";
import { Type } from "src/model/attention";

const db = firestore.collection("reservation");

export const Reservation = {
  async get(setData: React.Dispatch<React.SetStateAction<Type[]>>) {
    try {
      let allDate = [] as Type[];
      const list = await db
        .where("date", "==", new Date().toLocaleDateString("ko-kr"))
        .get();
      list.docs.map((doc) => (allDate = [...allDate, { ...doc.data() }]));
      setData(allDate);
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
