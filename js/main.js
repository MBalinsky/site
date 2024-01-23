// cookies 

const COOKIE_NAME = 'visit';
const cookieAlert = document.querySelector('.cookies-modal');
const cookieBtn = document.querySelector('.cookies-modal__btn');
const cookieCross = document.querySelector('.cookies-modal__cross');

if (!Cookies.get(COOKIE_NAME)) {
  setTimeout(() => {
    cookieAlert.classList.add('cookies-modal--active');
  }, 1000);

  cookieBtn.addEventListener("click", () => {
    cookieAlert.classList.remove('cookies-modal--active');
    Cookies.set(COOKIE_NAME, true, {
      expires: 5,
    })
  })
}

if (cookieCross) {
  cookieCross.addEventListener('click', () => {
    cookieAlert.classList.remove('cookies-modal--active');
  })
}


// кнопка для добавления тз или брифа
let inputs = document.querySelectorAll('.input__file');

if (inputs) {
  Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
      labelVal = label.querySelector('.input__file-button-text').innerText;

    input.addEventListener('change', function (e) {
      let countFiles = '';
      if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

      if (countFiles)
        label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
      else
        label.querySelector('.input__file-button-text').innerText = labelVal;
    });
  });
}

// feedback__checkbox

const checkboxFeedback = document.querySelector(".checkbox");

if (checkboxFeedback) {
  checkboxFeedback.addEventListener("click", () => {
    checkboxFeedback.classList.toggle('checkbox--active');
  })
}

// Swiper
const isSwiper = document.querySelector('.mySwiper');

if (isSwiper) {
  var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    longSwipes: false,
    spaceBetween: 50,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
}

// main accordeon
const accoerdeonCrosses = document.querySelectorAll('.services .accordeon-cross');
const mainTabItem = document.querySelector('.services__accordeon-item');
let mainTabItems = document.querySelectorAll('.services__accordeon-item');
let mainContentTabs = document.querySelectorAll('.services__accordeon-content-wrapper');
let mainTabCrosses = document.querySelectorAll('.services__accordeon-cross');

if (mainTabItem) {
  mainTabItems.forEach(el => {
    el.addEventListener("click", activateTab);
  })

  function activateTab() {
    accoerdeonCrosses.forEach(el => {
      el.classList.remove('accordeon-cross--active');
    })
    this.querySelector('.services .accordeon-cross').classList.add('accordeon-cross--active');
    let mainTabName = this.getAttribute('data-servicesTab');
    activateTabContent(mainTabName);
  }

  function activateTabContent(mainTabName) {
    mainContentTabs.forEach(el => {
      if (el.classList.contains(mainTabName)) {
        el.classList.add('services__accordeon-content--active');
      }
      else {
        el.classList.remove('services__accordeon-content--active');
      }
    })
  }
}

function scrollToMain() {
  mainTabItems.forEach(el => {
    el.addEventListener("click", () => {
      if (window.innerWidth <= 1240) {
        el.parentNode.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        })
      } else {
        return
      }
    })
  })
}

scrollToMain()



// portfolio works

let potfolioButtonTabs = document.querySelectorAll('.portfolio__work-tab');
let potfolioProjectsTabs = document.querySelectorAll('.portfolio__work-projects');

if (potfolioButtonTabs) {
  potfolioButtonTabs.forEach(el => {
    el.addEventListener("click", activatePortfolioTab);
  })

  function activatePortfolioTab() {
    potfolioButtonTabs.forEach(el => {
      el.classList.remove('portfolio__work-tab--active');
    })
    this.classList.add('portfolio__work-tab--active');
    let mainTabPortfolio = this.getAttribute('data-portfolioTabs');
    activateTabContents(mainTabPortfolio);
  }

  function activateTabContents(mainTabPortfolio) {
    potfolioProjectsTabs.forEach(el => {
      if (el.classList.contains(mainTabPortfolio)) {
        el.classList.add('portfolio__work-projects--active');
      }
      else {
        el.classList.remove('portfolio__work-projects--active');
      }
    })
  }
}

const lastPortfolioButtonItem = potfolioButtonTabs[potfolioButtonTabs.length - 1];

function scrollToWorks() {
  potfolioButtonTabs.forEach(el => {
    el.addEventListener("click", () => {
      if (window.innerWidth < 1230) {
        lastPortfolioButtonItem.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      } else {
        return
      }
    })
  })
}
scrollToWorks()

// tabs vacancies

let vacanciesButtonTabs = document.querySelectorAll('.whoisneeded__tabs-item');
let vacanciesContentTabs = document.querySelectorAll('.whoisneeded__vacancies-items');

if (vacanciesButtonTabs) {
  vacanciesButtonTabs.forEach(el => {
    el.addEventListener("click", activatePortfolioTab);
  })

  function activatePortfolioTab() {
    vacanciesButtonTabs.forEach(el => {
      el.classList.remove('whoisneeded__tabs-item--active');
    })
    this.classList.add('whoisneeded__tabs-item--active');
    let mainTabPortfolio = this.getAttribute('data-whoisneeded-tabs');
    activateTabContents(mainTabPortfolio);
  }

  function activateTabContents(mainTabPortfolio) {
    vacanciesContentTabs.forEach(el => {
      if (el.classList.contains(mainTabPortfolio)) {
        el.classList.add('whoisneeded__vacancies-items--active');
      }
      else {
        el.classList.remove('whoisneeded__vacancies-items--active');
      }
    })
  }
}

// burger

const iconBurger = document.querySelector('.header__burger');
const burger = document.querySelector('.burger');
const burgerPopup = document.querySelector('.burger-popup');
const burgerCross = document.querySelector('.burger__cross');
const burgerLinks = document.querySelectorAll('.burger__items-link');
const body = document.body;

if (iconBurger) {

  iconBurger.addEventListener('click', () => {
    burger.classList.add('burger--active');
    burgerPopup.classList.add('burger-popup--active');
    body.style.overflow = "hidden";
  });

  burgerCross.addEventListener("click", () => {
    burger.classList.remove('burger--active');
    burgerPopup.classList.remove('burger-popup--active');
    body.style.overflow = "auto";
  });

  burgerLinks.forEach(el => {
    el.addEventListener('click', () => {
      burger.classList.remove('burger--active');
      burgerPopup.classList.remove('burger-popup--active');
      body.style.overflow = "auto";
    })
  })

  window.addEventListener("click", function (e) {
    if (e.target.classList.contains('burger-popup')) {
      burger.classList.remove('burger--active');
      burgerPopup.classList.remove('burger-popup--active');
      body.style.overflow = "auto";
    }
  })
}

// header blur при скролле 

const header = document.querySelector('.header');

window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    header.classList.add('header--active');
    document.querySelector('.header__burger-container').classList.add('header__burger-container--active');
  } else {
    header.classList.remove('header--active');
    document.querySelector('.header__burger-container').classList.remove('header__burger-container--active');
  }
});



// work in WOW
const accoerdeonCross = document.querySelector('.our-idea .accordeon-cross');
const wowWorkAccordeon = document.querySelector('.our-idea__accordeon-content');
// const wowWorkContent = document.querySelector('.our-idea__accordeon-text');

if(wowWorkAccordeon){
  wowWorkAccordeon.addEventListener('click', () => {
    let wowWorkAccordeonContent = wowWorkAccordeon.nextElementSibling;
  
    if(wowWorkAccordeonContent.style.maxHeight){
      wowWorkAccordeonContent.style.maxHeight = null;
      accoerdeonCross.classList.remove('accordeon-cross--active');
    } else {
      wowWorkAccordeonContent.style.maxHeight = wowWorkAccordeonContent.scrollHeight + 'px';
      accoerdeonCross.classList.add('accordeon-cross--active');
    }
  })
}

// faq accordeon 

const faqCross = document.querySelectorAll('.faq .accordeon-cross');
const faqAccordeon = document.querySelectorAll('.faq__accordeon-title-container');

if(faqAccordeon){
  faqAccordeon.forEach(el => {
    el.addEventListener('click', () => {
      let faqContent = el.nextElementSibling;
    
      if(faqContent.style.maxHeight){
        document.querySelectorAll('.faq__accordeon-text').forEach((el) => {
          el.style.maxHeight = null;
          el.style.margin = "0";
        })
        faqCross.forEach((el) => el.classList.remove('accordeon-cross--active'));
      } else {
        document.querySelectorAll('.faq__accordeon-text').forEach((el) => {
          el.style.maxHeight = null;
          el.style.margin = "0";
        })
        faqCross.forEach((el) => el.classList.remove('accordeon-cross--active'))
        faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
        faqContent.style.margin = "0 35px 20px 35px";
        el.querySelector('.faq .accordeon-cross').classList.add('accordeon-cross--active');
      }
  })
  })
}