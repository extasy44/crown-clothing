import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBdSWm72v4ly2ppO_G0F2JK9mA8qXHAJE4",
    authDomain: "crown-db-f1642.firebaseapp.com",
    databaseURL: "https://crown-db-f1642.firebaseio.com",
    projectId: "crown-db-f1642",
    storageBucket: "crown-db-f1642.appspot.com",
    messagingSenderId: "480265775401",
    appId: "1:480265775401:web:584e1e8dc3f396c9236f38",
    measurementId: "G-D8BWZ5N63X"
};

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
       const { displayName, email } = userAuth;
       const createdAt = new Date();
       
       try{
           await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData,
           });
       }catch(error) {
            console.log('error creating user', error.message);
       }
    }

    return userRef;
}  

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;