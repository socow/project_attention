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
      let commentDate = [] as CommentType[];
      const comments = await db
        .where("date", "==", new Date().toLocaleDateString("ko-kr"))
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
