import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBDLBrh0OjF9nm-okAg9jX7Y7ZiDnTD1dY",
  authDomain: "netflix-d5831.firebaseapp.com",
  projectId: "netflix-d5831",
  storageBucket: "netflix-d5831.appspot.com",
  messagingSenderId: "339103673629",
  appId: "1:339103673629:web:a76ca0eb20506b9365c5f4"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
