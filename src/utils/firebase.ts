import {firebaseConfig} from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, orderBy, query, onSnapshot,where,setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, onAuthStateChanged} from "firebase/auth";
import { Post } from "../types/post";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app); 






export const AddPostDB = async (post: Omit<Post, "id">) => {
  try {
    const where = collection(db, "posts");
    await addDoc(where, post);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};
const GetPostsDB = async () => {
  const querySnapshot = await getDocs(collection(db, "post"));
  const transformed: Array<Post> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<Post, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

const GetPostsListener = (cb: (docs: Post[]) => void) => {
    const q = query(collection(db, "posts"), orderBy("createdAt")); 
    onSnapshot(q, (collection) => {
      const docs: Post[] = collection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[];
      cb(docs);
    });
  };


  

export default{
    AddPostDB,
    GetPostsDB,
    GetPostsListener,
    onAuthStateChanged,
}