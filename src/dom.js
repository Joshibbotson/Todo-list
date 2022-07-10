import { inboxArrActive, todayArrActive, thisWeekArrActive } from "./index"
import { compareAsc, format } from 'date-fns'

export let dom = {
    nav : document.getElementById('nav'),
    inboxBtn : document.getElementById('inbox'),
    todayBtn : document.getElementById('today'),
    thisWeekBtn : document.getElementById('thisWeek'),
    addTaskBtn : document.getElementById('addTaskBtn'),
    titleInput : document.getElementById('titleInput'),
    dateInput : document.getElementById('dateInput')
}





