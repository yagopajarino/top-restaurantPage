export default function menu() {
    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    h1.textContent = "Menu"
    h1.classList = "title"

    let pizzaHeader = document.createElement("h2")
    pizzaHeader.textContent = "Burgers"
    let pizzaLista = document.createElement("div")
    pizzaLista.classList.toggle("tilesContainer")
    let pizzas = ["BigMac", "Baconator", "Kevin Bacon", "Cheeseburger", "Veggie"]
    pizzas.forEach(pizza => {
        let el = document.createElement("div")
        el.textContent = pizza
        el.classList.toggle("tile")
        let text = document.createElement("span")
        text.textContent = "Product Picture"
        text.classList.toggle("prodPicture")
        el.appendChild(text)
        pizzaLista.appendChild(el)
        
    });

    let bebidasHeader = document.createElement("h2")
    bebidasHeader.textContent = "Bebidas"
    let bebidasLista = document.createElement("div")
    let bebidas = ["Agua", "Cerveza", "Soda"]
    bebidas.forEach(bebida => {
        let li = document.createElement("div")
        li.textContent = bebida
        bebidasLista.appendChild(li)
    });


    div.appendChild(h1)
    div.appendChild(pizzaHeader)
    div.appendChild(pizzaLista)
    div.classList.toggle("tab")
    return div
}