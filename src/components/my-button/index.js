import './index.css';

const GLOBAL_VAR = 'global var';

export const myButton = (text = 'My Button') => {
  const newButton = document.createElement('button');
  newButton.classList.add('my-button');
  newButton.innerHTML = text;
  newButton.onclick = () => {
    alert(GLOBAL_VAR + ' from button module');
  }

  return newButton;
}
