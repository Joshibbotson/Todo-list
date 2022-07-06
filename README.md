# Todo-list
Todo list created using html, css, vanilla javascript, utilising Nodejs and webpack


Pseudocode

Should make the entire thing from a phone first prospective. Possibly use Scss or sass.

hamburger menu should drop down and show 
-inbox
-Today
-This week

Projects
-(any projects) (this should be DOM elements created via js)
- Add project +

Depending on what file is currently clicked on, should determine what array is going to be used

therefore a factory function that takes an input array based on the currently selected project?

<!-- code specific -->
<!-- Determing array to be stored inside -->
- 'Add task' button, when clicked on, should utilise a factory function which takes the title and currentArr and spits out a task that can be edited.

- use this logic to determine which array to store inside

when user clicks on inbox or a project
let currentArr = []
currentArr = (whatever user clicked on)
- which would be inbox OR (insert project name here)


<!-- Ensuring array items are swapped into different arrays and removed from their current array based on user choice/ date of due time -->