import firebase from 'firebase/app'
import 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyAk0dokX6Vt6h2VAvIK1OEApYWSOVqYon4",
//     authDomain: "storeapp-1.firebaseapp.com",
//     databaseURL: "https://storeapp-1.firebaseio.com",
//     projectId: "storeapp-1",
//     storageBucket: "storeapp-1.appspot.com",
//     messagingSenderId: "393873032196",
//     appId: "1:393873032196:web:03b37f9af4df76af92e151",
//     measurementId: "G-1CH3QSZ71V"
// };

const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAk0dokX6Vt6h2VAvIK1OEApYWSOVqYon4",
    authDomain: "storeapp-1.firebaseapp.com",
    databaseURL: "https://storeapp-1.firebaseio.com",
    projectId: "storeapp-1",
    storageBucket: "storeapp-1.appspot.com",
    messagingSenderId: 393873032196,
    appId: "1:393873032196:web:03b37f9af4df76af92e151",
    measurementId: "G-1CH3QSZ71V"
})

export default FirebaseApp