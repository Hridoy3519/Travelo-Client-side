import initializeFirebaseAuthentication from "../Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
initializeFirebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = () => {
    setError("");
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Observer
  useEffect(() => {
    setError("");
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }

      setIsLoading(false);
    });
  }, []);

  const logOut = () => {
    setError("");
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    error,
    signInWithGoogle,
    logOut,
    setError,
    setIsLoading
  };
};

export default useFirebase;
