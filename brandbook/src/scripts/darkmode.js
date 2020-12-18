const page = document.querySelector('html');
const themeButton = document.querySelector('.theme-button');

if (themeButton) {
  themeButton.textContent = '🌘';
  themeButton.addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();

    page.classList.toggle('winvestor-dark-theme');

    if (page.classList.contains('winvestor-dark-theme')) {
      themeButton.textContent = '🌔';
    } else {
      themeButton.textContent = '🌘';
    }
  });
}
