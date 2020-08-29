

// smooth scrolling to menu anchors
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

//burger menu animation
const btn = document.querySelector(".burger-menu"); addEventListener('click', (e) => {
    let burgerList = document.querySelector(".burgerlist");
    btn.classList.contains("active") ? burgerList.classList.remove("active") : burgerList.classList.add("active");
    btn.classList.contains("active") ? btn.classList.remove("active") : btn.classList.add("active");
})