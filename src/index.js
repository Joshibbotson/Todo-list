import { dom } from "./dom"

let active = false

const hamburgerBtn = document.querySelector(".hamburger-btn").addEventListener('click', () =>{
    active = !active
    if (active === true){
        dom.nav.classList.remove('inactive-nav')
    }
    else if (active === false){
        dom.nav.classList.add('inactive-nav')
    }
    
})
