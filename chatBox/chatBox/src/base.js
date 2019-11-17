import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDrqMpD3n9Pb3Sitk3b5kthOBJx4UxKN9U",
    authDomain: "chatbox-2019-e0ab0.firebaseapp.com",
    databaseURL: "https://chatbox-2019-e0ab0.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;

