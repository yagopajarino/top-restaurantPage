import burga from "./burgaPict.jpeg"

export default function home(){
    let div = document.createElement("div")

    let title = document.createElement("h1")
    title.className = "title"
    title.textContent = "Burga Buenos Aires"
    let p = document.createElement("p")
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis ex eu elit consectetur vestibulum."
    let img = document.createElement("img")
    img.src = burga

    div.appendChild(title)
    div.appendChild(p)
    div.appendChild(img)
    div.classList.toggle("tab")
    return div
}
