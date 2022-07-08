import {dom} from './dom'
import {activeArr} from './index'

export let addTask = {
    title: dom.titleInput,
    }

export function Task (title) {
    this.title = title
}

export function addTasktoArr() {
    activeArr.push(new Task(addTask.title.value))
    console.log(activeArr)
}

