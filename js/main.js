// gsap

// animate main sections
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

if(document.querySelector('.components-animation')){
  tl.fromTo('.components-animation', {
    x: -100,
    opacity: 0,
    visibility: "hidden",
  }, {
    x: 0,
    opacity: 1,
    duration: 1,
    visibility: "visible",
  }, 0.2
  )
}

if(document.querySelector('.img-animation')){
  tl.fromTo('.img-animation', {
    x: 100,
    opacity: 0,
    visibility: "hidden",
  }, {
    x: 0,
    opacity: 1,
    duration: 1,
    visibility: "visible",
  }, 0.2
  )
}


if(document.querySelector('.employees-main__decor')){
  tl.fromTo('.employees-main__decor', {
    scale: 0,
    opacity: 0,
  },{
    scale: 1,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
  }, 0.2)
}

if(document.querySelector('.single-project__bg')){
  tl.fromTo('.single-project__bg', {
    scale: 0,
    opacity: 0,
  },{
    scale: 1,
    opacity: 1,
    duration: 1,
  }, 0.2)
}

// animate other's section
// gsap.to('.about-company__text', {
//   scrollTrigger: {
//     trigger: '.wow',
//     markers: true,
//     start: 'bottom center',
//   }, 
//   yPercent: 80,
//   scale: 0.5,
//   xPercent: -80,
//   opacity: 0,
// })
 
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

const mainTabItem = document.querySelector('.services__accordeon-item');
let mainTabItems = document.querySelectorAll('.services__accordeon-item');
let mainContentTabs = document.querySelectorAll('.services__accordeon-content-wrapper');
let mainTabCrosses = document.querySelectorAll('.services__accordeon-cross');

if (mainTabItem) {
  mainTabItems.forEach(el => {
    el.addEventListener("click", activateTab);
  })

  function activateTab() {
    mainTabCrosses.forEach(el => {
      el.classList.remove('services__accordeon-cross--active');
    })
    this.querySelector('.services__accordeon-cross').classList.add('services__accordeon-cross--active');
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

function scrollToMain(){
    mainTabItems.forEach(el => {
      el.addEventListener("click", () => {
        if(window.innerWidth <= 1240){
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

function scrollToWorks(){
  potfolioButtonTabs.forEach(el => {
    el.addEventListener("click", () => {
      if(window.innerWidth < 1230){
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

window.addEventListener("click", function(e){
  if(e.target.classList.contains('burger-popup')){
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




