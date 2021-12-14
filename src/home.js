export default function home(){
    let div = document.createElement("div")
    let title = document.createElement("h1")
    title.textContent = "Best pizza in Buenos Aires"
    let subtitle = document.createElement("h2")
    subtitle.textContent = "Días y horarios"

    let horarios = document.createElement("table")
    let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    days.forEach(day => {
        let tr = document.createElement("tr")
        let dia = document.createElement("td")
        dia.textContent = day
        let horario = document.createElement("td")
        horario.textContent = "10:00 am - 11:00 pm"
        if (["saturday", "sunday"].includes(day)){
            horario.textContent = "06:00 pm - 12:00 pm"
        }
        tr.appendChild(dia)
        tr.appendChild(horario)
        horarios.appendChild(tr)
    });
    

    div.appendChild(title)
    div.appendChild(subtitle)
    div.appendChild(horarios)
    div.classList.toggle("tab")
    return div
}
