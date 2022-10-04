import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBUJi1WxbB-dTmrciE6JQV1MA9jeu2Zg5s",
    authDomain: "netflix-clone-8bb18.firebaseapp.com",
    projectId: "netflix-clone-8bb18",
    storageBucket: "netflix-clone-8bb18.appspot.com",
    messagingSenderId: "699545996515",
    appId: "1:699545996515:web:002d87e19e8b69f60509d6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;