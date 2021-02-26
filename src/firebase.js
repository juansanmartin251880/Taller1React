import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAgHTruLtc3WNzHETDxWnp9IYLDzjY710Y",
    authDomain: "taller1react.firebaseapp.com",
    projectId: "taller1react",
    storageBucket: "taller1react.appspot.com",
    messagingSenderId: "706492505332",
    appId: "1:706492505332:web:8d5f3d957faad9178d92a1"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);