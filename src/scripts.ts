// Navigation menu

const menuItems = ['Home', 'Events', 'About', 'Blog', 'Contact'];
const menuList = document.querySelector<HTMLUListElement>('.menu__list');
const mobileMenuList = document.querySelector<HTMLUListElement>('.mobile-menu__list');

menuItems.forEach((el) => {
    menuList.innerHTML += `<li class="menu__item"><a class="menu__link" href="#">${el}</a></li>`;
    mobileMenuList.innerHTML += `<li class="mobile-menu__item"><a class="mobile-menu__link" href="#">${el}</a></li>`;
});

// Mobile menu

const mobileMenuButton = document.querySelector<HTMLButtonElement>('.mobile-menu__btn');
const mobileMenu = document.querySelector<HTMLUListElement>('.mobile-menu__list');

const activeMenu = () => {
    mobileMenuButton.classList.toggle('active');
};

mobileMenuButton.addEventListener('click', activeMenu);

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Toast

const toast = document.querySelector<HTMLDivElement>('.toast');
const toastButton = document.querySelector<HTMLButtonElement>('.js-toast-button');
const toastClose = document.querySelector<HTMLButtonElement>('.toast__button');

toastButton.addEventListener('click', () => {
    toast.classList.add('active');
});

toastClose.addEventListener('click', () => {
    toast.classList.remove('active');
});

// Slider

const slides = document.querySelectorAll<HTMLDivElement>('.tour-slider__slide');
const prevBtn = document.querySelector<HTMLButtonElement>('.js-slider-prev');
const nextBtn = document.querySelector<HTMLButtonElement>('.js-slider-next');

let index = 0;
let slide = document.querySelector<HTMLDivElement>('.tour-slider__slide');

const activeSlide = (n: any) => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index += 1;
        activeSlide(index);
    }
};

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index -= 1;
        activeSlide(index);
    }
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Slider mobile

const slidesMobile = document.querySelectorAll<HTMLDivElement>('.tour-slider__wrapper');
const prevBtnMobile = document.querySelector<HTMLButtonElement>('.js-mobile-prev');
const nextBtnMobile = document.querySelector<HTMLButtonElement>('.js-mobile-next');

const activeSlideMobile = (n: any) => {
    for (slide of slidesMobile) {
        slide.classList.remove('active');
    }
    slidesMobile[n].classList.add('active');
};

const nextSlideMobile = () => {
    if (index === slidesMobile.length - 1) {
        index = 0;
        activeSlideMobile(index);
    } else {
        index += 1;
        activeSlideMobile(index);
    }
};

const prevSlideMobile = () => {
    if (index === 0) {
        index = slidesMobile.length - 1;
        activeSlideMobile(index);
    } else {
        index -= 1;
        activeSlideMobile(index);
    }
};

nextBtnMobile.addEventListener('click', nextSlideMobile);
prevBtnMobile.addEventListener('click', prevSlideMobile);

// Footer background

const footerEl = document.querySelector<HTMLDivElement>('.footer');
const inputEl = document.querySelector<HTMLInputElement>('.subscribe__input');
const colors = ['#F0C53E', '#EE5060', '#AF6C2C', '#2C2D32', '#fae041'];

let colorIndex = 0;

inputEl.addEventListener('keypress', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    footerEl.style.backgroundColor = `${colors[colorIndex]}`;
});

// Input in html

const subscribeButton = document.querySelector<HTMLButtonElement>('.subscribe__btn');
const subscribeList = document.querySelector<HTMLUListElement>('.subscribe__list');

subscribeButton.addEventListener('click', () => {
    subscribeList.innerHTML += `<li class="subscribers">${inputEl.value}</li>`;
});

// Input validate

const errorEl = document.querySelector<HTMLSpanElement>('.sub-error');

subscribeButton.disabled = true;

inputEl.addEventListener('input', () => {
    if (inputEl.value.length <= 2) {
        subscribeButton.disabled = true;
        errorEl.innerHTML = 'Min 3 symbols';
    } else if (inputEl.value.length >= 21) {
        subscribeButton.disabled = true;
        errorEl.innerHTML = 'Max 20 symbols';
    } else {
        subscribeButton.disabled = false;
        errorEl.innerHTML = '';
    }
});

inputEl.addEventListener('input', () => {
    if (inputEl.value.endsWith('.lv') && inputEl.value.includes('@')) {
        subscribeButton.disabled = false;
    } else {
        subscribeButton.disabled = true;
        errorEl.innerHTML = 'Enter email correctly';
    }
});
