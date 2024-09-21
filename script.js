const burgerBtn = document.querySelector('.burger-btn-burger-mn');
const navLinks = document.querySelector('.nav-links-burger-mn');

burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open-burger-mn'); // Переключаем класс для отображения меню
});

const menuBack = document.querySelector('.menu')
burgerBtn.addEventListener('click', () => {
    menuBack.classList.toggle('open-burger-mn'); // Переключаем класс для отображения меню
});
