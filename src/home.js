export default function home(){
    let div = document.createElement("div")
    let p = document.createElement("p")
    p.textContent = "Hola que tal"

    div.appendChild(p)
    div.classList.toggle("tab")
    return div
}
