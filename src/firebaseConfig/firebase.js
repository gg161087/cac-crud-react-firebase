import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHfjVG_TY6xriN3EbDi0-vzBJQw7fS_lg",
  authDomain: "cac23643.firebaseapp.com",
  projectId: "cac23643",
  storageBucket: "cac23643.appspot.com",
  messagingSenderId: "102375084311",
  appId: "1:102375084311:web:2d88ee00792301d4206752"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);