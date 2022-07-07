import dom from './dom'


export const addTask = {
    title: dom.titleInput.value,
    }

export function Task (title) {
    this.title = title
}

export function addTasktoArr(currentArr) {
    currentArr.push(new Task(addTask.title.value))
    console.log(currentArr)
}

