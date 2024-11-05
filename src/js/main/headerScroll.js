const header = document.querySelector('.header');
const mediaQuery = window.matchMedia('(max-width: 1023.89px)');

function handleScroll() {
    if (window.scrollY > 110) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
}

function checkScreenWidth() {
    if (mediaQuery.matches) {
        window.addEventListener('scroll', handleScroll);
    } else {
        window.removeEventListener('scroll', handleScroll);
        header.classList.remove('shrink'); 
    }
}

checkScreenWidth();
mediaQuery.addEventListener('change', checkScreenWidth);