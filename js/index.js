const menu = document.querySelector('[data-menu]');
const menuBtns = document.querySelectorAll('[data-btn]');

function handleClick() {
  menu.classList.toggle('open');
}

menuBtns.forEach((btn) => {
  btn.addEventListener('click', handleClick);
});
