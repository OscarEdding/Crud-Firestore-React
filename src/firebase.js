// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBuYBYJXGKiBtbfETVsRSEBSWQgDpXrwlQ",
	authDomain: "crud-react-aab8c.firebaseapp.com",
	projectId: "crud-react-aab8c",
	storageBucket: "crud-react-aab8c.appspot.com",
	messagingSenderId: "654763208848",
	appId: "1:654763208848:web:422aeacbe6ac34a022e815",
}

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig)