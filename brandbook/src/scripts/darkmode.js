let page = document.querySelector('.wds');
let themeButton = document.querySelector('.theme-button');

themeButton.textContent = 'Ночь';

themeButton.onclick = function() {
  page.classList.toggle('dark');

  if (page.classList.contains('dark')) {
    themeButton.textContent = 'День';
  } else {
    themeButton.textContent = 'Ночь';
  }
};
