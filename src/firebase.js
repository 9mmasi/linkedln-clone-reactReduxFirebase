import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPeAYsqL903fQkZmIPGrWlP_djnX7_A3U",
  authDomain: "linkedin-clone-51d94.firebaseapp.com",
  projectId: "linkedin-clone-51d94",
  storageBucket: "linkedin-clone-51d94.appspot.com",
  messagingSenderId: "1002282032537",
  appId: "1:1002282032537:web:b485ffd858e62e495f4708"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth}