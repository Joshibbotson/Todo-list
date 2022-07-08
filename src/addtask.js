import {dom} from './dom'
import {activeArr} from './index'

export let addTask = {
    title: dom.titleInput,
    }

export function Task (title) {
    this.title = title
}

export function addTasktoArr() {

    
    const task = new Task(addTask.title.value)
    activeArr.push(task)
    localStorage.setItem('Tasks', JSON.stringify(activeArr))
    console.log(activeArr)

    // let i = //i should be whatever task is returned which correlates an index to modify
    const todos = JSON.parse(localStorage.getItem('Tasks'))[0].title;
    console.log(todos)

    createDOMTask()
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

