export default function menu() {
    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    h1.textContent = "Menu"

    let pizzaHeader = document.createElement("h2")
    pizzaHeader.textContent = "Pizzas"
    let pizzaLista = document.createElement("ul")
    let pizzas = ["Muzza", "Napolitana", "Crudo & Rúcula", "Jamón & Morrones", "Fugazzeta"]
    pizzas.forEach(pizza => {
        let li = document.createElement("li")
        li.textContent = pizza
        pizzaLista.appendChild(li)
    });

    let bebidasHeader = document.createElement("h2")
    bebidasHeader.textContent = "Pizzas"
    let bebidasLista = document.createElement("ul")
    let bebidas = ["Agua", "Cerveza, "]


    div.appendChild(h1)
    div.appendChild(pizzaHeader)
    div.appendChild(pizzaLista)
    return div
}