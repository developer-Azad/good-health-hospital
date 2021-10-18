import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user) {
                console.log('state changed', user);
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;