const iconMenu = document.querySelector('.icon-menu')
if(iconMenu) {
  const menuBody = document.querySelector('.menu__body')
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('lock')
    iconMenu.classList.toggle('active')
    menuBody.classList.toggle('active')
  })
}


const swiper = new Swiper('.testimonials__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,  // Number of slides to display at once
  spaceBetween: 50,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // Define breakpoints for responsive design
    320: {
      slidesPerView: 1,  // Adjust the number of slides for smaller screens
    },
    768: {
      slidesPerView: 2,  // Adjust the number of slides for smaller screens
    },
    1024: {
      slidesPerView: 3,  // Adjust the number of slides for medium-sized screens
    },
  },
});

const courses = new Swiper('.courses__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,  // Number of slides to display at once
  spaceBetween: 50,
  // Navigation arrows
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    // Define breakpoints for responsive design
    320: {
      slidesPerView: 1,  // Adjust the number of slides for smaller screens
    },
    425: {
      slidesPerView: 2,  // Adjust the number of slides for smaller screens
    },
    768: {
      slidesPerView: 2,  // Adjust the number of slides for smaller screens
    },
    1024: {
      slidesPerView: 3,  // Adjust the number of slides for medium-sized screens
    },
  },
});