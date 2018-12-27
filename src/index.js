import _ from 'lodash';
import printMe from './print.js';
import "./test.scss";

const component = () => {
  const mainDiv = document.createElement('div');
  mainDiv.className = "main-div";
  const element = document.createElement('div');
  element.className = "inner-div";
  const btn = document.createElement('button');
  btn.className = "auth-btn"

  element.innerHTML = _.join(['Off the Record'], ' ');

  btn.innerHTML = 'Sign Up!';
  btn.onclick = printMe;  // onclick event is bind to the original printMe function

  element.appendChild(btn);

  return element;
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