const items = document.getElementById('items')
const allLi = document.querySelectorAll('#items li')
const see = document.querySelector('.overlay')
const icons = document.querySelector('.icons')
const nav = document.querySelector('nav')

function toggleMenu() {
       items.classList.toggle('show')
       see.classList.toggle('see')
       icons.classList.toggle('add-item')
}

document.addEventListener('DOMContentLoaded', () => {
  
       allLi.forEach(item => {
              item.addEventListener('click', () => {
                     nav.classList.add('scroll');
                     toggleMenu()
              })
       })

       window.addEventListener('scroll', () => {
              if (window.scrollY > 40) {
                     nav.classList.add('scrolled');
                     nav.classList.add('scroll');
              } else {
                     nav.classList.remove('scrolled');
                     nav.classList.remove('scroll');
              }
       })

       gsap.registerPlugin(ScrollTrigger);

       gsap.from("#clients", {
         scrollTrigger: {
           trigger: "#clients",
           start: "top 80%", // qachon boshlansin
           toggleActions: "play none none none"
         },
         y: 200,
         opacity: 0,
         duration: 1
       });

            gsap.from("#choose-us", {
              scrollTrigger: {
                trigger: "#choose-us",
                start: "top 80%", // qachon boshlansin
                toggleActions: "play none none none"
              },
              y: 200,
              opacity: 0,
              duration: 1
            });
            gsap.from("#service", {
              scrollTrigger: {
                trigger: "#service",
                start: "top 80%", // qachon boshlansin
                toggleActions: "play none none none"
              },
              y: 200,
              opacity: 0,
              duration: 1
            });
            gsap.from("#team", {
              scrollTrigger: {
                trigger: "#team",
                start: "top 80%", // qachon boshlansin
                toggleActions: "play none none none"
              },
              y: 200,
              opacity: 0,
              duration: 1
            });
            gsap.from("#contact", {
              scrollTrigger: {
                trigger: "#contact",
                start: "top 80%", // qachon boshlansin
                toggleActions: "play none none none"
              },
              y: 200,
              opacity: 0,
              duration: 1
            });
})