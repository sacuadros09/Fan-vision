import {firebaseConfig} from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, orderBy, query, onSnapshot,where,setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, onAuthStateChanged} from "firebase/auth";
import { Post } from "../types/post";
import { User } from "../types/users";
import { appState } from "../store";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app); 

const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return false;
  }
};
const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}; 






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

  const AddUserDB = async (user: User) =>{
    try {
    const where = collection(db, "users")
      await addDoc(where,{...user, createdAt: new Date()});
      return true
    } catch (e) {
      console.error("Error adding document: ", e);
      return false
    }
  }
  


  

export default{
    registerUser,
    loginUser,
    AddPostDB,
    GetPostsDB,
    GetPostsListener,
    AddUserDB,
    onAuthStateChanged,
}