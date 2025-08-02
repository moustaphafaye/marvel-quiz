
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyBVXtGU5TFv-_szfTCBKJWpvurKWHyU_lk",
    authDomain: "marvel-quiz-update-f0399.firebaseapp.com",
    projectId: "marvel-quiz-update-f0399",
    storageBucket: "marvel-quiz-update-f0399.firebasestorage.app",
    messagingSenderId: "274126533223",
    appId: "1:274126533223:web:d7e61a8856565174941ac2"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const firestore = getFirestore();
export const firestore = getFirestore(app);

export const user = uid => doc(firestore, `users/${uid}`);

// export const user = uid => doc(firestore, `users/${uid}`);


// firebaseConfig.js
// import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// // import { getFirestore, doc } from 'firebase/firestore'; // décommentez si vous utilisez Firestore

// const config = {

//     apiKey: "AIzaSyBVXtGU5TFv-_szfTCBKJWpvurKWHyU_lk",

//   authDomain: "marvel-quiz-update-f0399.firebaseapp.com",

//   projectId: "marvel-quiz-update-f0399",

//   storageBucket: "marvel-quiz-update-f0399.firebasestorage.app",

//   messagingSenderId: "274126533223",

//   appId: "1:274126533223:web:d7e61a8856565174941ac2"

// };

// const app = initializeApp(config);
// const auth = getAuth(app);
// // const db = getFirestore(app); // décommentez si vous utilisez Firestore

// class Firebase {
//     constructor() {
//         this.auth = auth;
//         // this.db = db;
//     }

//     signupUser = (email, password) =>
//         createUserWithEmailAndPassword(this.auth, email, password);

//     loginUser = (email, password) =>
//         signInWithEmailAndPassword(this.auth, email, password);

//     signoutUser = () =>
//         signOut(this.auth);

//     // passwordReset = email => sendPasswordResetEmail(this.auth, email);
    
//     // user = uid => doc(this.db, `users/${uid}`);
// }

// export default Firebase;
