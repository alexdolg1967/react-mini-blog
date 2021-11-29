import * as 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDyvK-Ek5yy5CFT7mK7bDwKATdLXW4tjpk",
  authDomain: "react-my-mini-blog-906e6.firebaseapp.com",
  projectId: "react-my-mini-blog-906e6",
  storageBucket: "react-my-mini-blog-906e6.appspot.com",
  messagingSenderId: "53663959834",
  appId: "1:53663959834:web:13e5e56b3d70a0cb7f7aa3",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;