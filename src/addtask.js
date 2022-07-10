import {dom} from './dom'
import {inboxArrActive, todayArrActive, thisWeekArrActive, inboxArr, todayArr, thisWeekArr} from './index'

export let addTask = {
    title: dom.titleInput,
    }

export function Task (title) {
    this.title = title
}




export function addTasktoArr() {
    if (inboxArrActive === true &&
        todayArrActive === false &&
        thisWeekArrActive === false) {

            console.log("inbox")
            const task = new Task(addTask.title.value)
            inboxArr.push(task)
            localStorage.setItem('inboxTasks', JSON.stringify(inboxArr))
            console.log(inboxArr)

            // let i = //i should be whatever task is returned which correlates an index to modify
            const todos = JSON.parse(localStorage.getItem('inboxTasks'))[0].title;
            console.log(todos)

            createDOMTask() 
    }
    if (inboxArrActive === false &&
        todayArrActive === true &&
        thisWeekArrActive === false) {

            console.log("today")
            const task = new Task(addTask.title.value)
            todayArr.push(task)
            localStorage.setItem('todayTasks', JSON.stringify(todayArr))
            console.log(todayArr)

            // let i = //i should be whatever task is returned which correlates an index to modify
            const todos = JSON.parse(localStorage.getItem('todayTasks'))[0].title;
            console.log(todos)

            createDOMTask()
    }
    else if (inboxArrActive === false &&
        todayArrActive === false &&
        thisWeekArrActive === true){
        console.log("week")
        
            const task = new Task(addTask.title.value)
            thisWeekArr.push(task)
            localStorage.setItem('thisWeekTasks', JSON.stringify(thisWeekArr))
            console.log(thisWeekArr)

            // let i = //i should be whatever task is returned which correlates an index to modify
            const todos = JSON.parse(localStorage.getItem('thisWeekTasks'))[0].title;
            console.log(todos)

            createDOMTask()
    }
    
}

export function createDOMTask() {
    // let localStorageTask = JSON.parse(localStorage.getItem('Task'))[0].title

    const main = document.getElementById('main')
    const div = document.createElement('div')
    const btn = document.createElement('button')
    const p = document.createElement('p')

    p.innerHTML = "localStorageTask"

    div.appendChild(p)

    main.appendChild(div)

}

