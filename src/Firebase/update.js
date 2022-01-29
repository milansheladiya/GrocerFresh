import {app} from './config';
import { getFirestore } from "firebase/firestore";
import {doc, updateDoc } from "firebase/firestore";

const db = getFirestore();

export const UpdateDocuments = async (arr,fieldName) => {

    //fieldName = { name: "new name", }

    console.log(arr[0],fieldName);
    if(arr.length === 2){
        const docRef =  doc(db, arr[0],arr[1]);
        await updateDoc(docRef, fieldName);
    }
    else if(arr.length === 3){
        const docRef =  doc(db, arr[0],arr[1],arr[2]);
        await updateDoc(docRef, fieldName);
        
    }
    else if(arr.length === 4){
        const docRef =  doc(db, arr[0],arr[1],arr[2],arr[3]);
        await updateDoc(docRef, fieldName);
    }
};
