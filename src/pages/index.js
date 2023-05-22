import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


import { auth } from "./firebase"
import { signInWithPopup,GoogleAuthProvider,getRedirectResult,signInWithRedirect } from 'firebase/auth'
// import { useAuthState } from "react-firebase-hook/auth"
// import { useEffect } from 'react'





//initialization for facebook login through firebase

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
// const provider = new FacebookAuthProvider();



// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration




export default function Home() {

//   const firebaseConfig = {

//     apiKey: "AIzaSyD3Z7NP3ic9ZSjFGuC2Ge29kKhX63C8ABU",
// authDomain: "fir-project1-b5355.firebaseapp.com",
// projectId: "fir-project1-b5355",
// storageBucket: "fir-project1-b5355.appspot.com",
// messagingSenderId: "828804867546",
// appId: "1:828804867546:web:a02fb3ac8fc7eed7680ce3",
// measurementId: "G-8QRT1QLPEX"


// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get a list of cities from your database



// //initialization ends here




// //remaining facebook login code

// const auth = getAuth();
// const signin=()=>{


// signInWithPopup(auth, provider)
// .then((result) => {
//   // The signed-in user info.
//   const user = result.user;
//   console.log(user);
//   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//   const credential = FacebookAuthProvider.credentialFromResult(result);
//   const accessToken = credential.accessToken;
//   console.log("credential",credential);
//   console.log("accessToken",accessToken);
//   console.log("user",user)

//   // IdP data available using getAdditionalUserInfo(result)
//   // ...
// })
// .catch((error) => {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // The email of the user's account used.
//   const email = error.customData.email;
//   // The AuthCredential type that was used.
//   const credential = FacebookAuthProvider.credentialFromError(error);

//   // ...
// });

// //remaining facebook login code ends here

// }













  
  const googleAuth= new GoogleAuthProvider();

  const login=async()=>{
    
      const result= signInWithPopup(auth,googleAuth);
      //const redirectResult=getRedirectResult(auth)

      console.log("result",await result)
     // console.log("redirectResult",await redirectResult)

  }



  return (
    <>
      <h1>Hello World</h1>
      <button onClick={login}>Google login</button>
      {/* <button onClick={signin}>Facebook Login</button> */}
          </>
  )
}
