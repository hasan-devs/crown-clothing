import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7hh38BQVqzaNtTdn7SM9c2fQtyOB8rZs",
  authDomain: "crownclothingdb-753ae.firebaseapp.com",
  projectId: "crownclothingdb-753ae",
  storageBucket: "crownclothingdb-753ae.appspot.com",
  messagingSenderId: "688093376707",
  appId: "1:688093376707:web:050ad65779ecf45fae3276",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

export const signInUserWithEmailAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const signOutUser = async () => await signOut(auth);

export const onAuthUserStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  user,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", user.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating a user : " + error.message);
    }
  }

  return userDocRef;
};

export const addCollectionAndDocument = async (collectionkey, objectsToAdd) => {
  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    doc(db,collectionRef,)
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Done Batch Committing");
};

export const getCategoriesAndDocuments = async () => {
  const querySnapshot = await getDocs(query(collection(db, "categories")));
  const categoryMap = querySnapshot.docs.reduce((acc, snapshot) => {
    const { title, items } = snapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
