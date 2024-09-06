function typeWrite(event){
    const texto = event.innerText.split("")
    console.log(texto)
    event.innerText = ""
   texto.forEach(function(letra, i){
        setTimeout(function(){
        event.innerText += letra
    }, 80 * i)
    }) 

    
}
const titulo = document.querySelector(".efeito-maquina")
console.log(titulo)
typeWrite(titulo)

const accordionList = document.querySelectorAll(".js-accordion dt")

accordionList[0].classList.add("ativo")
accordionList[0].nextElementSibling.classList.add("ativo")


function activeAccordion(){
    this.classList.toggle("ativo")
    this.nextElementSibling.classList.toggle("ativo")
}

accordionList.forEach((event) =>{
    event.addEventListener("click", activeAccordion)
})



const linksInternos = document.querySelectorAll(`.js-menu a[href^="#"]`)
console.log(linksInternos)
function scrollToSection(event){
    
    

    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView({
        behavior:"smooth",
        block:"start"
    })


    //forma alternativa
    
    // const top = section.offsetTop
    // window.scrollTo({
    //     top:top,
    //     behavior:"smooth"
    // })

}
linksInternos.forEach((link) =>{
    link.addEventListener("click",scrollToSection)
})

const sections = document.querySelectorAll(".js-scroll")
const windowMetade = window.innerHeight * 0.9
console.log(sections)

function animaScroll(){
    sections.forEach((section) =>{
        const sectionTop = section.getBoundingClientRect().top - windowMetade
        if(sectionTop < 0){

            section.classList.add("ativo")
        }else{
            section.classList.remove("ativo")

        }
    })
}
window.addEventListener("scroll", animaScroll)
animaScroll()

