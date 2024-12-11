import {initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const varConfig = initializeApp({
    apiKey: "AIzaSyADOu9lLDqF_SVnVHjqurytA8zipM1tQjU",
    authDomain: "prueba-de-firebase-14733.firebaseapp.com",
    projectId: "prueba-de-firebase-14733",
    storageBucket: "prueba-de-firebase-14733.appspot.com",
    messagingSenderId: "954273866953",
    appId: "1:954273866953:web:5ebadb9ac877cbc88cd918"
})
const auth = getAuth(varConfig);
const db = getFirestore(varConfig);

//Detect auth state
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log('logged in!')
    } else{
        console.log('No user')
    }
})
