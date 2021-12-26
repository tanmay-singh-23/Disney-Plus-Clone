import firebase from "firebase";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// import * as firebase from "firebase/app";
// import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDr9baboW0CoE1ifm7wEbScHXiTw3a-l7o",
	authDomain: "disney-plus-clone-436f1.firebaseapp.com",
	projectId: "disney-plus-clone-436f1",
	storageBucket: "disney-plus-clone-436f1.appspot.com",
	messagingSenderId: "225941999581",
	appId: "1:225941999581:web:2ce84aae31c47b405bf034",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
