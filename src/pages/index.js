import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { auth } from "@/firebase/firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import {auth} from "../firebase/firebase"
const provider = new GoogleAuthProvider();


//const auth = getAuth();

const login=()=>{


signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.s
    const user = result.user;

    console.log(credential)
    console.log("user",user);
    console.log("token",token)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}









const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      <button onClick={login}>Google login </button>
    </div>
          </>
  )
}
