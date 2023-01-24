import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthenticaiton from "../Firebase/firebase.init";

// initialize firebase
initializeAuthenticaiton();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //   register user
  const registerUser = (email, password) => {
    setIsLoading(true);
    // i am just returning the promise here to do some extrea things on sign up page
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  login with email and password
  const loginWithEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // save user details for after register
  const saveUser = (email, displayName, mobile, location, imgUrl) => { // nidNo,
    const user = { email, displayName, mobile, location,  imgUrl };//nidNo,
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(`Here's the error  from firebase ${err}`);
      });
  };

  //   logout user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        alert("Logout successfull");
      })
      .finally(() => setIsLoading(false));
  };

  // update user name while user sign up
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {});
  };

  // setting an observer to hanlde user state
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    // this clean up function is for better performance a little bit
    return () => unsubscribe;
  }, []);

  return {
    user,
    setUser,
    registerUser,
    updateName,
    isLoading,
    setIsLoading,
    loginWithEmail,
    logOut,
    saveUser,
  };
};
export default useFirebase;
