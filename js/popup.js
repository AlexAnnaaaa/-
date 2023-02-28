let Button = document.querySelector('.button');
let PopUp = document.querySelector('.popup');

console.log(Button);
console.log(PopUp);

Button.addEventListener('click', showPopUP)

function showPopUP(evt) {
  console.log(evt);
  evt.preventDefault();
  PopUp.classList.toggle('show-popup')
};