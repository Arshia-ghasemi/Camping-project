//Mobile Menu

const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.menu-mobile');
openMenu.addEventListener('click', () => {
    menu.classList.add('active');
    openMenu.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
    setTimeout(() => openMenu.style.display = 'block', 300);
});

//Like Button

const likeBtn = document.querySelectorAll('.Heartbtn');

likeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('liked');
        const img = btn.querySelector('.svg');
        img.src = btn.classList.contains('liked') ? "images/heartOn.svg" : "images/heart.svg";
    });
});