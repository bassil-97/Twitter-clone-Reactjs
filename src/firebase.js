import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBg2QaBOHP4zKkQXx3vRQXUZ9B5ahMMAfY",
    authDomain: "twitter-clone-6a8a9.firebaseapp.com",
    projectId: "twitter-clone-6a8a9",
    storageBucket: "twitter-clone-6a8a9.appspot.com",
    messagingSenderId: "375743355642",
    appId: "1:375743355642:web:787f719ab06b0623e8c743",
    measurementId: "G-90MY7Z320Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;