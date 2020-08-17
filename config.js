import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDzLN6PBo2mMVL-3Ux08G-i16-Mfow5wUs",
  authDomain: "empowerment-d4586.firebaseapp.com",
  databaseURL: "https://empowerment-d4586.firebaseio.com",
  projectId: "empowerment-d4586",
  storageBucket: "empowerment-d4586.appspot.com",
  messagingSenderId: "192674135124",
  appId: "1:192674135124:web:61f01d9f38ae5d54cfc1c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
