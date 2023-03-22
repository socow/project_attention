import { firestore } from "src/firebase";
import { randomId } from "src/hooks/randomId";
import { CommentType } from "src/model/attention";
const db = firestore.collection("comments");

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
      let allDate = [] as CommentType[];
      db.get().then((docs) => {
        docs.forEach((doc) => {
          allDate = [...allDate, { ...doc.data() }];
          setList(allDate);
        });
      });
    } catch (error) {
      console.error(error);
    }
  },
};
