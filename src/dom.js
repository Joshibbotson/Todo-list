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
}

navBtnArr.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(dom.inboxBtn)
        dom.inboxBtn.classList.remove("nav-btn-active")
        dom.todayBtn.classList.remove("nav-btn-active")
        dom.thisWeekBtn.classList.remove("nav-btn-active")
        e.target.classList.add("nav-btn-active")
    })
    
});



