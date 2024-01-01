import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLbvzqJ_0xBO-fH-u9AGpcCCnJ7XdgjNg",
  authDomain: "transcribe-e9079.firebaseapp.com",
  projectId: "transcribe-e9079",
  storageBucket: "transcribe-e9079.appspot.com",
  messagingSenderId: "619002931701",
  appId: "1:619002931701:web:8272ada413b885f93398bc",
  measurementId: "G-03T5V514YE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
