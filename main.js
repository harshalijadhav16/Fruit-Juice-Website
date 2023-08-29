/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const  navClose = document.getElementById("nav-close")

/*=====Menu Show====*/
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on nav__link we remove show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener("click",linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height,
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

/*=============== GSAP ANIMATION ===============*/
gsap.from('#home-1',1.2,{opacity: 0, y:200, delay: .1})
gsap.from('#home-3',1.2,{opacity: 0, y:200, delay: .5})
gsap.from('.home__data',1.2,{opacity: 0, y:-60, delay: 1})
gsap.from('#home-2',1.2,{opacity: 0, x:-80, delay: 1.1})
gsap.from('.home-img-1',1.2,{opacity: 0, x:80, delay: 1.2})








