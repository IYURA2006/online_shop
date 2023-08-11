
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCcDM_alDOT0JRf3JHKbLE_FJGN6Kd9r5Q",
  authDomain: "onlineshop-70874.firebaseapp.com",
  projectId: "onlineshop-70874",
  storageBucket: "onlineshop-70874.appspot.com",
  messagingSenderId: "120100551623",
  appId: "1:120100551623:web:3228d7e92c03a514c4b7e2",
  measurementId: "G-VJ0LL59ZV6"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;