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
    const [isLoading, setIsLoding] = useState(true);
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // -----------------------Google sign In -------------------------
    const signInUsingGoogle = () => {
        setIsLoding(true);
      return signInWithPopup(auth, googleProvider)
    .finally(() => setIsLoding(false));
    }
// -----------------------getting use name, email and password --------
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    
    // -----------------------handling login -------------------------

    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
         window.location.reload();
        }) 
     }
    
    const handleLogin = (event) => {
            event.preventDefault();
            userLogin(email, password);
        }

    

    // -----------------------sign in new user -------------------------
    const handleRegistration = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setName();
                setUser(user);
            })
    }

    // -----------------------log out ----------------------------------
        const logOut = () => {
            setIsLoding(true);
            signOut(auth)
            .then(() => { } )
                .finally(() => setIsLoding(false));
            }

    useEffect( () => {
      onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoding(false);
        });
    }, [])


    return {
        user,
        isLoading,
        signInUsingGoogle,
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        handleRegistration,
        userLogin,
        logOut,
        handleLogin
    }
}

export default useFirebase;