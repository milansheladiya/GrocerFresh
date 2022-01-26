import React, { useState,useEffect } from "react";
import {app} from './config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {readAllWithId} from "../Firebase/read";

const auth = getAuth();

export let isAdminVar = false;

// ######################################################  Signup Function  ######################################################
export const signUpHandler =  async (email,password) => {
    console.log(email,"  === " , password);
    let res = false;
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    user = userCredential.user;
      //console.log(user.email,"^^^^^^^^");
        res = true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
    return res;
};


// ###################################################### Login Functions  ######################################################
export const signInHandler = async(email,password) => {
    let res = false;
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login With : " , user.email);
        //-----set user is admin or not 
         isAdminOperator();
        res = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
      return res;
  };


// ######################################################  If already Logged in  ######################################################
export const isSignedInHandler = async () => {
    let res = false;
    await auth.onAuthStateChanged(user => {
        if(user) {
            //console.log("done");
            res = true;
        }
        else{
            console.log("Not Done");
        }
    })

    return res;
};

// Get uid of logged in user
export const getUserIdHandler = async () => {
    let uid = null;
    await auth.onAuthStateChanged(user => {
        if(user) {
            //console.log("done");
            uid = user.uid;
        }
        else{
            console.log("user not logged in!");
        }
    })

    return uid;
};


// ######################################################  To do sign out  ######################################################

export const signOutHandler = async () => {
    await auth.signOut().then(() => {
        console.log("Sign out completed!");
    }).catch(error => console.log(error.message))
}

const isAdminOperator = async () => {
    const res = await readAllWithId(["customers",await getUserIdHandler()]);
    // console.log(res.data().isAdmin, "-------- inside fu- -------n");
    isAdminVar = res.data().isAdmin;
  };


  