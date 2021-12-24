const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const close = document.querySelector('.navbar_links');
const body = document.querySelectorAll('body')


function toggleMenu () {  
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });        
    close.addEventListener('click',(e)=>{
      navbar.classList.remove('show-nav');
    })
  }
  toggleMenu();