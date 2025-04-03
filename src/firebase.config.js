import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCi4MxGJXkwgUX_c5t6saEBCnfEEGRpdmE",
  authDomain: "otp-project-6c050.firebaseapp.com",
  projectId: "otp-project-6c050",
  storageBucket: "otp-project-6c050.appspot.com",
  messagingSenderId: "558020553694",
  appId: "1:558020553694:web:e1db7ea2199a1891710b4f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.settings.appVerificationDisabledForTesting = false; // Real OTPs
auth.languageCode = "en";

export { auth };