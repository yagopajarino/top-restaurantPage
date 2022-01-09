import fb from "./facebook.png"
import ig from "./instagram.png"
import wp from "./whatsapp.png"
import tw from "./twitter.png"

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
    let icons = {"facebook":fb, "instagram":ig, "whatsapp":wp, "twitter":tw}
    redes.forEach(red => {
        let a = document.createElement("a")
        a.href = `https://${red}.com/`
        let icon = document.createElement("img")
        icon.src = icons[red]
        icon.classList.toggle("iconImg")
        a.appendChild(icon)
        social.appendChild(a)
    });

    let ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://www.openstreetmap.org/export/embed.html?bbox=-58.386111259460456%2C-34.606879346697006%2C-58.37709903717041%2C-34.60061824106917&amp;layer=mapnik&amp;marker=-34.60374885289059%2C-58.38160514831543")
    ifrm.width = "425"
    ifrm.height="350"
    ifrm.frameborder="0" 
    ifrm.scrolling="no" 
    ifrm.marginheight="0" 
    ifrm.marginwidth="0"

    div.appendChild(ifrm)
    div.appendChild(subt)
    div.appendChild(horarios)
    div.appendChild(title)
    div.appendChild(social)
    div.classList.toggle("tab")
    return div
}