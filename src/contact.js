export default function contact() {
    let div = document.createElement("div")
    let subt = document.createElement("h1")
    subt.textContent = "Opening hours"
    subt.className = "title"

    let subtitle = document.createElement("h2")
    subtitle.textContent = "Días y horarios"
    subtitle.className = "title"

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

    let title = document.createElement("h1")
    title.textContent = "Get in Touch"
    title.classList = "title"

    let social = document.createElement("div")
    social.classList = "icons"
    let redes = ["facebook", "instagram", "whatsapp", "twitter"]
    redes.forEach(red => {
        let a = document.createElement("a")
        a.href = `https://${red}.com/`
        a.textContent = red
        social.appendChild(a)
    });

    div.appendChild(subt)
    div.appendChild(horarios)
    div.appendChild(title)
    div.appendChild(social)
    div.classList.toggle("tab")
    return div
}