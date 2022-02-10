import {
  onAuthStateChanged,
  signInWithCredential,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "./auth";
import * as Facebook from "expo-facebook";


export const facebookLogin = async () => {
     //console.log(await Facebook.logOutAsync());
     console.log(Facebook);
    try {
      await Facebook.initializeAsync({
        appId: "251995310415377",
      });
      const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (result.type === "success") {
          console.log("Result :", result);
        onFacebookSignIn(result);
      } else {
        //CANCELc
        console.log(result);
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };

const onFacebookSignIn = (response) => {
    // User is signed-in Facebook.
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isFacebookLoginUserEqual(response, firebaseUser)) {
        // Build Firebase credential with the Facebook auth token.
        const credential = FacebookAuthProvider.credential(response.token);

        // Sign in with the credential from the Facebook user.
        signInWithCredential(auth, credential)
          .then((result) => {
            const uid = result.user.uid;
            if (result._tokenResponse.isNewUser) {
              const data = {
                id: uid,
                email: result.user.email,
                fullName: result.user.displayName,
                profile_picture: result.user.photoURL,
                created_at: Date.now(),
              };
              console.log("data : ",data);
                
            } else {
              const newFields = { last_logged_in: Date.now() };
                // already logged in
            }
          })
          
      } else {
        console.log(
          "User already signed-in Firebase.",
        );
      }
    });
  };


const isFacebookLoginUserEqual = (facebookUser, firebaseUser) => {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData;
      for (let i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId === GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === facebookUser.userId
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
