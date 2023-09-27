import firebase from './firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCfzyPwjO-z75Ez2C9ncQ0PYSBnlesEL40",
    authDomain: "dersoli-disneyplus-clone.firebaseapp.com",
    projectId: "dersoli-disneyplus-clone",
    storageBucket: "dersoli-disneyplus-clone.appspot.com",
    messagingSenderId: "721448162984",
    appId: "1:721448162984:web:907bc7ec0a5fb976e7149d",
    measurementId: "G-E85Y23S7XE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider =  new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;