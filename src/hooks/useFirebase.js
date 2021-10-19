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

    const signInUsingGoogle = () => {
        setIsLoding(true);
      return signInWithPopup(auth, googleProvider)
    .finally(() => setIsLoding(false));
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
    
    // const updateUser = () => {
    //     updateProfile(auth.currentUser, {
    //     displayName: name
    //     })
    //     .then(result => { 

    //     })
    //     }
    
    // const createUser = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result => {
    //         setUser(result.user);
    //           console.log(result.user);
    //         updateUser();
    //     })
    // }

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

    // const handleRegistration = e => {
    //         e.preventDefault();
    //         console.log(email, password)
    
    //         createUser(email, password);
    //     }
    
    // sign in new user ------------------------------------------------------------------------------------
    const handleRegistration = (e) => {
        e.preventDefault();

        // error handling ---------------------------------------------

        // if (password.length < 6) {
        //     setError("Password should be at least 6 characters");
        //     return;
        // }

        // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setError('password must contain two uppercase');
        //     return;
        // }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // setError('');
                // verifyEmail();
                setName();
                setUser(user);
            })
    }

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