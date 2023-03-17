import { firestore } from "src/firebase";
import { Type } from "src/model/attention";

const db = firestore.collection("reservation");

export const attentionRequest = {
  async get(setData: React.Dispatch<React.SetStateAction<Type[]>>) {
    try {
      let allDate = [] as Type[];
      await db.get().then((docs) => {
        docs.forEach((doc) => {
          allDate = [...allDate, { ...doc.data() }];
          setData(allDate);
        });
      });
    } catch (error) {
      console.error(error);
    }
  },
  async post(story: string, isDate: Date) {
    try {
      const date = isDate.toLocaleDateString("ko-kr");
      db.add({
        story: story,
        date: date,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
