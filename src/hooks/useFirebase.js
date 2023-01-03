
import initializeFirebase from '../Pages/Home/Firebase/firebase.init';
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { CountertopsOutlined } from '@mui/icons-material';


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();


  // registration form created 


  const userRegisterForm = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name);

        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }

  //    sign in using email or password 

  const userLoginForm = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {

        const user = result.user;
        setUser(user);
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  }


  useEffect(() => {
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [])


  // logout method i created 

  const userLogOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // setUser('');
    }).catch((error) => {

    })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setAdmin(data)
      })
  }, [user?.email])


  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }
    const url = `http://localhost:5000/users`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }

  return {
    user,
    userRegisterForm,
    userLoginForm,
    userLogOut,
    isLoading,
    authError,
    admin
  }
}
export default useFirebase;






