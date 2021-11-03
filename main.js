// DOM Document Object Model = document

//Abre e fecha menu no evento click: ... e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//Esconde menu clickando em um dos items
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//Scrollar a página gera uma sombra no header-menu
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
      header.classList.add('scroll')
    } else {
      header.classList.remove('scroll')
    }
  })
}

//Botão voltar para o topo
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  })
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})

/*
  Script da biblioteca Swiper
   Rolamento vertical de cards
*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  //mousewheel: true,
  keyboard: true
})

/*
  Scrollreveal
   Rolamento suave da página
*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, .testimonial
  #contact .text, #contact .links
  footer .brand, footer .social`,
  { interval: 100 }
)
