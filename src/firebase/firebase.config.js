// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDx-tCT38ML6UWDrLJZggeMmf10SHc-XwU",
    authDomain: "my-kitchen-a41d6.firebaseapp.com",
    projectId: "my-kitchen-a41d6",
    storageBucket: "my-kitchen-a41d6.appspot.com",
    messagingSenderId: "206179223114",
    appId: "1:206179223114:web:7fd95f631fdbdb328c08b3",
    measurementId: "G-BWSPWR3SE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;