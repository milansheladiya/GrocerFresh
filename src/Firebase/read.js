import { getFirestore } from "firebase/firestore";
import { collection,doc,getDocs,getDoc,get,Timestamp,query, where,collectionGroup } from "firebase/firestore";

const db = getFirestore();

export const readAllHandler = async (arr) => {
    ["grocery","fruits","fruids"]

    if(arr.length === 1){
        const querySnapshot = await getDocs(collection(db, arr[0]));
        // querySnapshot.forEach((doc) => {
        //   console.log(doc.id, " => ", doc.data());
        // });
        return querySnapshot;

    
    }
    else if(arr.length === 2){
        const querySnapshot = await getDocs(collection(db, arr[0], arr[1]));
        return querySnapshot;
    }
    else if(arr.length === 3){
        const querySnapshot = await getDocs(collection(db, arr[0], arr[1],arr[2]));
        return querySnapshot;
    }
};


export const readAllWithId = async (arr) => {

    let docRef;
    let docSnap;

    if(arr.length < 2)
    {
        console.log("need collection and id");
        return "min 2 argument needed! (collection , DocId)";
    }
    else if(arr.length === 2){
        docRef = doc(db, arr[0], arr[1]);
    }
    else if(arr.length === 3){
        docRef = doc(db, arr[0], arr[1],arr[2]);
    }
    else if(arr.length === 4){
        docRef = doc(db, arr[0], arr[1],arr[2],arr[3]);
    }
    

    docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        return docSnap;
    } else {
        // console.log("No such document!");
        return "No such document!";
    }
};



export const ReadByQuelryHandler = async (query) => {

    //const query = query(citiesRef, where("state", "==", "CO"), where("name", "==", "Denver"));
    //const query = query(collection(db, "users"), where("capital", "==", true));
  const querySnapshot = await getDocs(query);
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//   });
  return querySnapshot;
      
};