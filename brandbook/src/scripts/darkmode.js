const page = document.querySelector('html');
const themeButton = document.querySelector('.theme-button');

if (themeButton) {
  themeButton.textContent = 'Ночь';
  themeButton.addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();

    page.classList.toggle('dark-theme');

    if (page.classList.contains('dark-theme')) {
      themeButton.textContent = 'День';
    } else {
      themeButton.textContent = 'Ночь';
    }
  });
}
