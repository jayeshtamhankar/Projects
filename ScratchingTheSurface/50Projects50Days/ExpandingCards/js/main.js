const cardToggel = document.querySelectorAll(".card")

cardToggel.forEach((card, index) => {

    if(index=== 0 && !card.classList.contains("active")) {
        card.classList.add("active")
    }

    card.addEventListener("click", () => {
        
        cardToggel.forEach(removActive => {
            removActive.classList.remove("active")
        })

        card.classList.add("active")
    })
})