import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut   } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInUsignGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        setUser(result.user);
    });
  };

  const logOut = () =>{
    signOut(auth)
    .then(() => {
        setUser({})
    })
}

  // observe whether user auth state changed or not
  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          // User is signed out
          // ...
        }
      });
      return unsubscribe;
},[])
  return{
      user, 
      signInUsignGoogle, 
      logOut
  }
};

export default useFirebase;
