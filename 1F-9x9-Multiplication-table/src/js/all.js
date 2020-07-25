/* eslint-disable no-plusplus */
const wrapEl = document.querySelector('.wrap');

for (let i = 2; i <= 9; i++) {
  const multCard = document.createElement('div');
  multCard.setAttribute('class', 'card card-bg');
  wrapEl.appendChild(multCard);
  const multUl = document.createElement('ul');
  let str = `<li class="main-number">${i}</li>`;

  for (let k = 1; k <= 9; k++) {
    str += `<li>${i} x ${k} = ${i * k}</li>`;
  }
  multUl.innerHTML = str;
  multCard.appendChild(multUl);
}
