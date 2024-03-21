const formSuccess = document.querySelector('.modal__form-success');
const formInput = document.querySelector('.modal__from-requried');
const formInputName = document.querySelector('.modal__from-normal')
const formButton = document.querySelector('.modal__form-button');
const form = document.querySelector('.modal__form');
const formError = document.querySelector('.modal__form-error');
const headerBurgerBtn = document.querySelector('.header__burger');
const headerBurgerBtnClose = document.querySelector('.header__menu-close');
const headerMobileMenu = document.querySelector('.header__menu');
const phones = document.querySelectorAll('[data-phone="utm"]');

const calcScroll = () => {
    let div = document.createElement('div');
    div.style.width = '500px';
    div.style.height = '500px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
}
const blockBody = () => {
    const body = document.body;
    body.style.overflowY = 'hidden';
    body.style.touchAction = 'none';
    const bodyScroll = calcScroll();
    body.style.paddingRight = `${bodyScroll}px`;
}
const unBlockBody = () => {
    const body = document.body;
    body.style.overflowY = 'auto';
    body.style.touchAction = 'auto';
    body.style.paddingRight = `0`;
}
const checkMarkquiz = (utmNumber) => {
    if (utmNumber) {
        if (+utmNumber === 1) {
            return true;
        }
        return false;
    }
    return false;
}
const checkPhonesUtm = () => {
    const params = new URLSearchParams(document.location.search);
    const utmCampaign = params.get('utm_campaign');
    if (!checkMarkquiz(utmCampaign ? utmCampaign[0] : null)) {
        phones.forEach(phone => {
            phone.style.display = 'none';
        })
    }
}
// checkPhonesUtm();
const modalLinks = document.querySelectorAll('[toggle]');
modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const params = new URLSearchParams(document.location.search);
        const utmCampaign = params.get('utm_campaign');
        if (checkMarkquiz(utmCampaign ? utmCampaign[0] : null)) {
            Marquiz.showModal('63fbcce4038eb3004d35ec68')
        } else {
            const blockId = link.getAttribute('toggle');
            document.querySelector(blockId).classList.toggle('active');
            if (document.querySelector(blockId).classList.contains('active')) {
                blockBody();
            } else {
                unBlockBody();
                if (formSuccess.classList.contains('active')) {
                    formSuccess.classList.remove('active');
                }
                if (formError.classList.contains('active')) {
                    formError.classList.remove('active');
                }
                formInput.style.display = 'block';
                formInputName.style.display = 'block';
                formInput.style.border = '1px solid #c9c9c9';
                formButton.style.display = 'flex';
            }
        }
    })
})

const scrollLinks = document.querySelectorAll('[scroll]');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const blockId = link.getAttribute('href');
        if (headerMobileMenu.classList.contains('active')) {
            headerMobileMenu.classList.remove('active');
        }
        document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
})

formInput.addEventListener('focus', () => {
    if (formError.classList.contains('active')) {
        formError.classList.remove('active');
        formInput.style.border = '1px solid #c9c9c9';
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formBody = {};
    for (const pair of formData.entries()) {
        formBody[pair[0]] = pair[1]
    }
    if (formInput.value !== '') {
        console.log('Отправлено')
        form.reset();
        yaCounter96630363.reachGoal('order');
        formSuccess.classList.add('active');
        formInput.style.display = 'none';
        formInputName.style.display = 'none';
        formButton.style.display = 'none';
    } else {
        formInput.style.border = '1px solid #f28362';
        formError.classList.add('active');
    }
})

headerBurgerBtn.addEventListener('click', () => {
    headerBurgerBtn.classList.toggle('active')
    headerMobileMenu.classList.toggle('active');
})

const phoneInputs = document.querySelectorAll('[data-input="masked"]');
const im = new Inputmask({
    mask: '(+7|8) (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: 'tel'
})
phoneInputs.forEach(input => {
    im.mask(input);
})

var swiper = new Swiper(".example__swiper", {
    slidesPerView: 2.1,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.example__pagination',
        clickable: true,
        bulletClass: 'example__bullet',
        bulletActiveClass: 'example__bullet_active'
      },
    navigation: {
        nextEl: '.example__button.next',
        prevEl: '.example__button.prev',
    },
    breakpoints: {
        
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        640: {
            slidesPerView: 1.9,
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 2.1,
        }
      }
});
Fancybox.bind("[data-fancybox]", {});