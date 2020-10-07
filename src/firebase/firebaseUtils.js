import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBeRC4YBEKlqkwxecV6ShgFVeEfZoRR_Ro',
  authDomain: 'crown-db-c07af.firebaseapp.com',
  databaseURL: 'https://crown-db-c07af.firebaseio.com',
  projectId: 'crown-db-c07af',
  storageBucket: 'crown-db-c07af.appspot.com',
  messagingSenderId: '802361110010',
  appId: '1:802361110010:web:dfb7ff869e648cc4d88843',
  measurementId: 'G-6PRTTDME6R',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
