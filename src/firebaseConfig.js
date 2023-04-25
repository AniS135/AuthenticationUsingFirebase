import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB608jFE_-vgpbHj7EWKI1Mm6lARtNbtjw",
  authDomain: "authchallenge-3ce7c.firebaseapp.com",
  projectId: "authchallenge-3ce7c",
  storageBucket: "authchallenge-3ce7c.appspot.com",
  messagingSenderId: "56005884030",
  appId: "1:56005884030:web:c190abea9968aa2ab6c02f"
};

export default firebase.initializeApp(firebaseConfig);
