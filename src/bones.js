import pizzaLogo from "./pizzaLogo.png"

export default function  page_load(){
    let contenedor = document.querySelector("#content")
    let h1 = document.createElement("h1")
    h1.textContent = "Welcome to Pizzarda"
    let p = document.createElement("p")
    p.textContent = "Baking since 2021"

    let tabs = document.createElement("div")
    let home = document.createElement("span")
    home.textContent = "Home"
    let contact = document.createElement("span")
    contact.textContent = "Contact"
    let menu = document.createElement("span")
    menu.textContent = "Menu"

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

