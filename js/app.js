document.addEventListener("DOMContentLoaded", function (event) {
  
  const barmenu = document.querySelector(".header__list__image"), 
    nav = document.querySelector(".nav");

  barmenu.addEventListener("click", function(event) { /*по клику срабатывает функция с event-информация о клике*/
    event.preventDefault(); /* чтобы стандартные/случайные значения/нажатия не срабатывали*/
    if (barmenu.classList.contains("header__list__image--active")) { /* classList - массив с классами, который содержится в объекте*/
      barmenu.classList.remove("header__list__image--active");
      nav.classList.remove("nav--active");
    }
    else {
      barmenu.classList.add("header__list__image--active");
      nav.classList.add("nav--active");
    }
  });
  
  const menuLinks = document.querySelectorAll(".footer__grid__column__subtitle");
  menuLinks.forEach((element) => {
      element.addEventListener("click", function (event) {
          event.preventDefault();
          const sectionID = this.getAttribute("href");
          document
              .querySelector(sectionID)
              .scrollIntoView({ block: "start", behavior: "smooth" });
      });
  });

  const rowSwiper = new Swiper('.reviews__slider', {
    navigation: {
      nextEl: '.reviews__arrows__next',
      prevEl: '.reviews__arrows__prev',
    },
    // Default parameters
    spaceBetween: 20,
    loop: true,
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 450px
      500: {
        slidesPerView: 2,
      },
      // when window width is >= 850px
      900: {
        slidesPerView: 3,
      }
    }
  })
});