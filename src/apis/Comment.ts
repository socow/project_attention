import { firestore } from "src/firebase";
import { CommentType } from "src/model/attention";

const db = firestore.collection("comments");

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
