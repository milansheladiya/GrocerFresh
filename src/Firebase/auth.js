import React, { useState, useEffect } from "react";
import { app } from "./config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { readAllWithId } from "../Firebase/read";

const auth = getAuth();

export let isAdminVar = false;

// ######################################################  Signup Function  ######################################################
export const signUpHandler = async (email, password, name) => {
  console.log(email, "  === ", password);
  let res = false;
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      let user = userCredential.user;
      //console.log(user.email,"^^^^^^^^");

      // setting up user name in authentication module
      /* if (name) {
        await updateProfile(auth, {
          displayName: name,
        });
      } */
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
export const signInHandler = async (email, password) => {
  let res = false;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Login With : ", user.email);
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
  await auth.onAuthStateChanged((user) => {
    if (user) {
      //console.log("done");
      res = true;
    } else {
      console.log("Not Done");
    }
  });

  return res;
};

// Get uid of logged in user
export const getUserIdHandler = async () => {
  let uid = null;
  await auth.onAuthStateChanged((user) => {
    if (user) {
      //console.log("done");
      uid = user.uid;
    } else {
      console.log("user not logged in!");
    }
  });

  return uid;
};

// ######################################################  To do sign out  ######################################################

export const signOutHandler = async () => {
  signOut(auth)
    .then(() => {
      console.log("Sign out completed!");
    })
    .catch((error) => console.log(error.message));
};

const isAdminOperator = async () => {
  const res = await readAllWithId(["customers", await getUserIdHandler()]);
  // console.log(res.data().isAdmin, "-------- inside fu- -------n");
  isAdminVar = res.data().isAdmin;
};

export const isAdminUser = async () => {
  console.log(getAuth().currentUser.uid);
  const res = await readAllWithId(["customers", getAuth().currentUser.uid]);
  // console.log(res.data().isAdmin, "-------- inside fu- -------n");
  return res.data().isAdmin;
};
