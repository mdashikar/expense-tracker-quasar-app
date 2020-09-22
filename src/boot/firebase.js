import * as firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from '../../firebase.conf'

export default ({ Vue }) => {
    // Initialize Firebase from settings
    firebase.initializeApp(firebaseConfig)

    Vue.prototype.$firebase = firebase
}