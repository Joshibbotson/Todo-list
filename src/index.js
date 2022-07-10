import { dom, highlightActiveBtn } from "./dom"
import { addTask, Task, addTasktoArr} from './addtask'

export const inboxArr = []
export const todayArr = []
export const thisWeekArr = []
export let inboxArrActive = true
export let todayArrActive = false
export let thisWeekArrActive = false


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

const navBtnArr = [dom.inboxBtn, dom.todayBtn, dom.thisWeekBtn]

for (let i = 0; i < navBtnArr.length; i++) {
    navBtnArr[i].setAttribute('id', 'navBtn'+i)
    console.log(i)
}

navBtnArr.forEach(btn => {
    btn.addEventListener('click', (e) => {
        dom.inboxBtn.classList.remove("nav-btn-active")
        dom.todayBtn.classList.remove("nav-btn-active")
        dom.thisWeekBtn.classList.remove("nav-btn-active")
        e.target.classList.add("nav-btn-active")

        switch (e.target.id) {
            case "navBtn0":
                console.log("inbox active")
                return inboxArrActive = true,
                todayArrActive = false,
                thisWeekArrActive = false

            case "navBtn1":
                console.log("today actie")
                return inboxArrActive = false,
                todayArrActive = true,
                thisWeekArrActive = false
            
            case "navBtn2":
                console.log("this week active")
                return inboxArrActive = false,
                todayArrActive = false,
                thisWeekArrActive = true
        }
    })
});

dom.addTaskBtn.addEventListener('click', addTasktoArr)

