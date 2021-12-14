export default function contact() {
    let div = document.createElement("div")
    let title = document.createElement("h1")
    title.textContent = "Get in Touch"

    let social = document.createElement("div")
    social.classList = "icons"
    let redes = ["facebook", "instagram", "whatsapp", "twitter"]
    redes.forEach(red => {
        let a = document.createElement("a")
        a.href = `https://${red}.com/`
        a.textContent = red
        social.appendChild(a)
    });

    div.appendChild(title)
    div.appendChild(social)
    div.classList.toggle("tab")
    return div
}