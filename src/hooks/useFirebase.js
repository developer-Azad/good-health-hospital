import { getAuth, signInWithPopup, GoogleAuthProvider, 
    signOut, onAuthStateChanged, signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, setIsLogin } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIslogin] = useState(false);
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

    const toggleLogin = e => {
        setIslogin(e.target.checked);
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
            const user = result.user;
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        })
    }
    
    const newUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setError('');
        })
        .catch(error => {
            setError(error.message);
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
        isLogin,
        signInUsingGoogle,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        processLogin,
        logOut,
        toggleLogin,
        error
    }

}

export default useFirebase;