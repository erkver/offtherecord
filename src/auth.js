import firebaseui from "firebaseui";
import firebase from "./firebase";

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      console.log(authResult, redirectUrl);
      if (authResult.additionalUserInfo.isNewUser === true) {
        return true;
      } else {
        window.location.assign(
          "http://localhost:5000/dashboard"
          );
        }
      }
    },
    signInFlow: "popup",
    signInSuccessUrl: "http://localhost:5000/dashboard",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID    
    ]
};
  
export default function login() {
  console.log("starting login...");
  ui.start("#firebaseui-auth-container", uiConfig)
};
  

