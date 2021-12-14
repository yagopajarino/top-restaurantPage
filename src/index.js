import page_load from "./bones.js"
import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"
import './style.css';

page_load()
insertarAntesDelFooter(home())
function insertarAntesDelFooter(nodo){
    let footer = document.querySelector("#footer")
    let contenedor = document.querySelector("#content")
    let tab = document.querySelector(".tab")
    if (tab != undefined){
        tab.remove()
    }
    contenedor.insertBefore(nodo,footer)
}

let buttons = document.querySelectorAll(".tabButton")
buttons.forEach(button => {
    button.addEventListener("click", function(){
        let f = button.textContent
        if (f == "Home"){
            insertarAntesDelFooter(home())   
        }
        else if (f == "Menu"){
            insertarAntesDelFooter(menu())
        }
        else {
            insertarAntesDelFooter(contact())
        }
    })
});