import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, orderBy, query, onSnapshot} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, onAuthStateChanged} from "firebase/auth";

import { Post } from "../types/post";
import { firebaseConfig } from "./firebaseconfig";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



const db = getFirestore(app);

const AddPostDB = async (post: Post) =>{
    try {
    const where = collection(db, "posts")
      await addDoc(where,{...post, createdAt: new Date()});
      return true
    } catch (e) {
      console.error("Error adding document: ", e);
      return false
    }
}

const GetPostsDB = async(): Promise<Post[]> =>{
    const resp: Post[] = [];

    const q=query(collection(db,"posts"), orderBy("createdAt"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      resp.push({
        ...doc.data()
      }as Post)
    });
    return resp
}

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