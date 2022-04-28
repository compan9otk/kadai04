import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDm7uAiAzMBE5thEh0FxMHbLqYe42_74AA",
    authDomain: "twitter-clone-713fe.firebaseapp.com",
    projectId: "twitter-clone-713fe",
    storageBucket: "twitter-clone-713fe.appspot.com",
    messagingSenderId: "772032420562",
    appId: "1:772032420562:web:a7bd1af5d540a851be6b0b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;