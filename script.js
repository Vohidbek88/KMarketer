window.addEventListener('DOMContentLoaded', () => {
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

       allLi.forEach(item => {
              item.addEventListener('click', () => {
                     toggleMenu()
              })
       })

       window.addEventListener('scroll', () => {
              if (window.scrollY > 40) {
                     nav.classList.add('scrolled');
              } else {
                     nav.classList.remove('scrolled');
              }
       })
})