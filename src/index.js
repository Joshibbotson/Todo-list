import { dom } from "./dom"
import { addTask, Task, addTasktoArr} from './addtask'

let activeArr = inboxArr
const inboxArr = []

let active = true
const hamburgerBtn = document.querySelector(".hamburger-btn").addEventListener('click', () =>{
    active = !active
    if (active === true){
        dom.nav.classList.remove('inactive-nav')
    }
    else if (active === false){
        dom.nav.classList.add('inactive-nav')
    }
    
})

dom.addTaskBtn.addEventListener('click', addTasktoArr(activeArr))

