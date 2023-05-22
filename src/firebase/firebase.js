// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth"
// //import { auth } from "firebase/auth"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD3Z7NP3ic9ZSjFGuC2Ge29kKhX63C8ABU",
//   authDomain: "fir-project1-b5355.firebaseapp.com",
//   projectId: "fir-project1-b5355",
//   storageBucket: "fir-project1-b5355.appspot.com",
//   messagingSenderId: "828804867546",
//   appId: "1:828804867546:web:a02fb3ac8fc7eed7680ce3",
//   measurementId: "G-8QRT1QLPEX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);

//  const auth=getAuth();
//  export default auth;



 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3Z7NP3ic9ZSjFGuC2Ge29kKhX63C8ABU",
  authDomain: "fir-project1-b5355.firebaseapp.com",
  projectId: "fir-project1-b5355",
  storageBucket: "fir-project1-b5355.appspot.com",
  messagingSenderId: "828804867546",
  appId: "1:828804867546:web:a02fb3ac8fc7eed7680ce3",
  measurementId: "G-8QRT1QLPEX"
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export default firebaseAuth;