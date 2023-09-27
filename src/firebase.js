import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCfzyPwjO-z75Ez2C9ncQ0PYSBnlesEL40",
    authDomain: "dersoli-disneyplus-clone.firebaseapp.com",
    projectId: "dersoli-disneyplus-clone",
    storageBucket: "dersoli-disneyplus-clone.appspot.com",
    messagingSenderId: "721448162984",
    appId: "1:721448162984:web:907bc7ec0a5fb976e7149d",
    measurementId: "G-E85Y23S7XE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)