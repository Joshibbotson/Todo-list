import { inboxArrActive, todayArrActive, thisWeekArrActive } from "./index"

export let dom = {
    nav : document.getElementById('nav'),
    inboxBtn : document.getElementById('inbox'),
    todayBtn : document.getElementById('today'),
    thisWeekBtn : document.getElementById('thisWeek'),
    addTaskBtn : document.getElementById('addTaskBtn'),
    titleInput : document.getElementById('titleInput'),
}

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
                console.log("0!")
                return inboxArrActive = true,
                todayArrActive = false,
                thisWeekArrActive = false

            break
            case "navBtn1":
                console.log("1!")
                return inboxArrActive = false,
                todayArrActive = true,
                thisWeekArrActive = false
            
            break
            case "navBtn2":
                console.log("2!")
                return inboxArrActive = false,
                todayArrActive = false,
                thisWeekArrActive = true
        }
    })
});



