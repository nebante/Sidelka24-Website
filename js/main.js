const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeMode: false,
    allowTouchMove: false,
    grabCursor: false,
    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 12,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    }
});

const phoneInput = document.getElementById('phone-input');
if (phoneInput) {
    IMask(phoneInput, {
        mask: '+{7} (000) 000-00-00'
    });
}