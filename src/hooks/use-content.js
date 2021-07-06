import { useEffect, useState, useContext } from "react";
import { firebase, FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentData) => ({
          ...contentData.data(),
          docId: contentData.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }, []);

  return { [target]: content}
}