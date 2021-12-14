import page_load from "./bones.js"
import home from "./home.js"
import './style.css';

page_load()

function insertarAntesDelFooter(nodo){
    let footer = document.querySelector("#footer")
    let contenedor = document.querySelector("#content")
    let tab = document.querySelector(".tab")
    tab.remove()
    contenedor.insertBefore(nodo,footer)
}