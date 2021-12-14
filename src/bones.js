import pizzaLogo from "./pizzaLogo.png"

export default function  page_load(){
    let contenedor = document.querySelector("#content")
    let h1 = document.createElement("h1")
    h1.textContent = "Welcome to Pizzarda"
    h1.className = "mainTitle"
    let p = document.createElement("p")
    p.className = "subtitle"
    p.textContent = "Baking since 2021"

    let tabs = document.createElement("div")
    tabs.className = "buttonsDiv"
    let home = document.createElement("button")
    home.textContent = "Home"
    home.classList.toggle("tabButton")
    let contact = document.createElement("button")
    contact.textContent = "Contact"
    contact.classList.toggle("tabButton")
    let menu = document.createElement("button")
    menu.textContent = "Menu"
    menu.classList.toggle("tabButton")

    tabs.appendChild(home)
    tabs.appendChild(menu)
    tabs.appendChild(contact)

    let footer = document.createElement("p")
    footer.id = "footer"
    footer.textContent = "2021 yagopajarino"
    let a = document.createElement("a")
    a.href = "https://github.com/yagopajarino"
    a.target ="_blank"
    let i = document.createElement("i")
    i.className = "fab fa-github"

    a.appendChild(i)
    footer.append(a)

    contenedor.appendChild(h1)
    contenedor.appendChild(p)
    contenedor.appendChild(tabs)
    contenedor.appendChild(footer)
}

