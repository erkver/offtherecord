import _ from 'lodash';
import printMe from './print.js';
import "./test.scss";

const component = () => {
  const mainDiv = document.createElement('div');
  mainDiv.className = "main-div";
  const element = document.createElement('div');
  element.className = "inner-div";
  const btnDiv = document.createElement("div");
  btnDiv.className = "btn-div";
  const description = document.createElement('h2');
  description.className = "description";
  const signUpBtn = document.createElement('button');
  signUpBtn.className = "auth-btn"
  const loginBtn = document.createElement('button');
  loginBtn.className = "auth-btn"

  element.innerHTML = _.join(['Off the Record'], ' ');

  description.innerHTML = "A place for music discussion, discovery, and more..."
  signUpBtn.innerHTML = 'Sign Up!';
  signUpBtn.onclick = printMe;  // onclick event is bind to the original printMe function
  loginBtn.innerHTML = "Login";

  mainDiv.appendChild(element);
  element.appendChild(description);
  element.appendChild(btnDiv);
  btnDiv.appendChild(signUpBtn);
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