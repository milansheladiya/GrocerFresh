import { getFirestore } from "firebase/firestore";
import { doc, deleteDoc,updateDoc,deleteField } from "firebase/firestore";

const db = getFirestore();

export const deleteDocument = async (arr) => {

    if(arr.length === 2){
        const querySnapshot = await deleteDoc(doc(db, arr[0],arr[1]));
        return querySnapshot;
    }
    else if(arr.length === 3){
        const querySnapshot = await deleteDoc(doc(db, arr[0],arr[1],arr[2]));
        return querySnapshot;
    }
    else if(arr.length === 4){
        const querySnapshot = await deleteDoc(doc(db, arr[0],arr[1],arr[2],arr[3]));
        return querySnapshot;
    }
};

//Delete fields : https://firebase.google.com/docs/firestore/manage-data/delete-data#fields

export const deleteFields = async (arr,fieldName) => {
    console.log(arr[0], "===> ", arr[1]," ====> ",fieldName);

    if(arr.length === 2){
        const docRef =  doc(db, arr[0],arr[1]);
        const res = await updateDoc(docRef, {
            [fieldName]: deleteField()
        });
        return res;
    }
    else if(arr.length === 3){
        const docRef =  doc(db, arr[0],arr[1],arr[2]);
        const res = await updateDoc(docRef, {
            [fieldName]: deleteField()
        });
        return res;
    }
    else if(arr.length === 4){
        const docRef =  doc(db, arr[0],arr[1],arr[2],arr[3]);
        const res = await updateDoc(docRef, {
            [fieldName]: deleteField()
        });
        return res;
    }
};
