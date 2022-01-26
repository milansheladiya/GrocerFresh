import {app} from './config';
import { getFirestore } from "firebase/firestore";
import {collection,doc,addDoc,setDoc,Timestamp,query, where } from "firebase/firestore";

const db = getFirestore();

// ================================================== new data insertion =================================

export const insertHandler = async (arr,obj) => {
    try {
        
        if(arr.length === 1)
        {
            const docRef = await addDoc(collection(db, arr[0]), obj);
        }
        else if(arr.length === 2)
        {
            const docRef = await addDoc(collection(db, arr[0],arr[1]), obj);
        }
        else if(arr.length === 3)
        {
            const docRef = await addDoc(collection(db, arr[0],arr[1],arr[2]), obj);
        }
        else if(arr.length === 4)
        {
            const docRef = await addDoc(collection(db, arr[0],arr[1],arr[2],arr[3]), obj);
        }
      //console.log("Document written with ID: ", docRef);
      return true;
    } catch (e) {
      console.error("Error adding document: ", e);
      return false;
    }
  };


  //========================================== add in existing documents ====================

  export const insertWithSetDocHandler = async (arr,obj) => {
    try {
        
        if(arr.length === 1)
        {
            const docRef = await setDoc(doc(db, arr[0]), obj,{ merge: true });
        }
        else if(arr.length === 2)
        {
            const docRef = await setDoc(doc(db, arr[0],arr[1]), obj,{ merge: true });
        }
        else if(arr.length === 3)
        {
            const docRef = await setDoc(doc(db, arr[0],arr[1],arr[2]), obj,{ merge: true });
        }
        else if(arr.length === 4)
        {
            const docRef = await setDoc(doc(db, arr[0],arr[1],arr[2],arr[3]), obj,{ merge: true });
        }
      //console.log("Document written with ID: ", docRef);
      return true;
    } catch (e) {
      console.error("Error adding document: ", e);
      return false;
    }
  };


