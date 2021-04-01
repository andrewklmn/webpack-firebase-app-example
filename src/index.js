'use strict';

import {User} from './components/user';
import {myButton} from './components/my-button';

import './index.css';
import picTrully from './img/pic_trulli.jpg';

const user = new User('Andrew', 'male', 28);

console.log(user.toString());

function component() {
  const element = document.createElement('div');
  const myIcon = new Image();
  myIcon.src = picTrully;
  element.appendChild(myIcon);

  return element;
}
document.body.appendChild(component());
document.body.appendChild(myButton());
