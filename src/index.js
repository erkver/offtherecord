import _ from 'lodash';
import printMe from './print.js';
import login from './auth.js';
import firebaseui from "firebaseui";
import firebase from "./firebase.js";
import "./index.scss";

const component = () => {
  const mainDiv = document.createElement('div');
  mainDiv.className = "main-div";
  const element = document.createElement('div');
  element.className = "inner-div";
  const btnDiv = document.createElement("div");
  btnDiv.className = "btn-div";
  const description = document.createElement('h2');
  description.className = "description";
  const loginBtn = document.createElement('button');
  loginBtn.className = "auth-btn"
  const loginDiv = document.createElement("div");
  loginDiv.id = "firebaseui-auth-container";

  element.innerHTML = _.join(['Off the Record'], ' ');
  description.innerHTML = "A place for music discussion, discovery, and more..."
  loginBtn.innerHTML = "Signup/Login";
  loginBtn.onclick = login;

  mainDiv.appendChild(element);
  element.appendChild(description);
  element.appendChild(btnDiv);
  element.appendChild(loginDiv);
  btnDiv.appendChild(loginBtn);

  return mainDiv;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}