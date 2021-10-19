import { getAuth, signInWithPopup, GoogleAuthProvider, 
    signOut, onAuthStateChanged, signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIslogin] = useState(false);
    const [isLoading, setIsLoding] = useState(true);
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoding(true);
      return signInWithPopup(auth, googleProvider)
    .finally(() => setIsLoding(false));
    }

    const toggleLogin = e => {
        setIslogin(e.target.checked);
      }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password)

        if(password.length < 6){
            setError('password should be 6 caracter');
            return;
        }

        isLogin ? processLogin(email, password) : newUserRegister(email, password);
    }
    
    const processLogin = (email, password) => {
       signInWithEmailAndPassword(auth, email, password)
       .then(result => {
        setUser(result.user);
              console.log(result.user);
       })
        
    }
    
    const newUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
              console.log(result.user);
            // const user = result.user;
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }

    // const updateUser = () => {
    //     updateProfile(auth.currentUser, {
    //     displayName: name
    //     })
    //     .then(result => { 

    //     })
    //     .catch((error) => {
    //         setError(error.message);
    //     })
    //     }

    useEffect( () => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoding(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoding(true);
        signOut(auth)
        .then(() => { } )
            .finally(() => setIsLoding(false));
        }

    return {
        user,
        isLogin,
        isLoading,
        signInUsingGoogle,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        processLogin,
        // updateUser,
        logOut,
        toggleLogin,
        error
    }

}

export default useFirebase;