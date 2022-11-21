window.onload = () => {
    // On va chercher tous les éléments
    const elts = document.querySelectorAll(".accordion-content");
    elts.forEach(ele => {
        ele.addEventListener ("click", () => {
            ele.classList.toggle('active').removeClass('active')
        })
    })
    // On récupère l'élément actif
}

