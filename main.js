let myBytton= document.querySelector('button');
let myHeading= document.queryselector('h1');

myButton.onclick = function() {
  setUserName();
}


function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = MyName + 'Page/Files';
  }
}
