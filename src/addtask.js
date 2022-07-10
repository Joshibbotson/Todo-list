import {dom} from './dom'
import {inboxArrActive, todayArrActive, thisWeekArrActive, inboxArr, todayArr, thisWeekArr} from './index'
import { compareAsc, format } from 'date-fns'

export let addTask = {
    title: dom.titleInput,
    date: dom.dateInput
    }

export function Task (title, date) {
    this.title = title
    this.date = date.value
}




export function addTasktoArr() {
    if (inboxArrActive === true &&
        todayArrActive === false &&
        thisWeekArrActive === false) {

            const task = new Task(addTask.title.value, addTask.date)
            inboxArr.push(task)
            localStorage.setItem('inboxTasks', JSON.stringify(inboxArr))
            console.log(inboxArr)

            let i = inboxArr.length - 1
            const todos = (JSON.parse(localStorage.getItem('inboxTasks'))[i].title);
            console.log(todos)

            createDOMTask(inboxArr) 
    }
    if (inboxArrActive === false &&
        todayArrActive === true &&
        thisWeekArrActive === false) {

            const task = new Task(addTask.title.value, addTask.date)
            todayArr.push(task)
            localStorage.setItem('todayTasks', JSON.stringify(todayArr))
            console.log(todayArr)

            let i = todayArr.length - 1
            const todos = JSON.parse(localStorage.getItem('todayTasks'))[i].title;
            console.log(todos)
            console.log(dom.dateInput.value)

            createDOMTask(todayArr)
    }
    else if (inboxArrActive === false &&
            todayArrActive === false &&
            thisWeekArrActive === true){
        
            const task = new Task(addTask.title.value, addTask.date.value)
            thisWeekArr.push(task)
            localStorage.setItem('thisWeekTasks', JSON.stringify(thisWeekArr))
            console.log(thisWeekArr)

            let i = thisWeekArr.length - 1
            const todos = JSON.parse(localStorage.getItem('thisWeekTasks'))[i].title;

            console.log(todos)
            createDOMTask(thisWeekArr)
    }
    
}




export function createDOMTask(array) {
    let i = array.length - 1
    const main = document.getElementById('main')
    const div = document.createElement('div')
    const btn = document.createElement('button')
    const p = document.createElement('p')
    p.innerHTML = array[i].title

    div.appendChild(p)

    main.appendChild(div)

}

