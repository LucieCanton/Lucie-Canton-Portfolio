var button = document.getElementById("menu-bottom")
var menu = document.getElementById("menu")
var body = document.body
var closebutton = document.getElementById("menu-close")

function toggle() {
    console.log('bla ')
    menu.classList.toggle('open')
    body.classList.toggle('locked')
}

button.addEventListener("click", toggle)
closebutton.addEventListener("click", toggle)