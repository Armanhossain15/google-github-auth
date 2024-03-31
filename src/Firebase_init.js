// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCz8spo0QlbPQSPMDAR9XfD37P4VpeV50",
  authDomain: "text2-project.firebaseapp.com",
  projectId: "text2-project",
  storageBucket: "text2-project.appspot.com",
  messagingSenderId: "172406317490",
  appId: "1:172406317490:web:a89624f6c2178528f484ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;