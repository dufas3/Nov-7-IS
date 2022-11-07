for(let i=0; i<=16;i++){
    const div = document.createElement("div")
    div.classList = "loopedDivs"
    document.querySelector(`.container`).appendChild(div)
    div.style.height = "200px"
    div.style.width = "200px"
    div.style.display = "inline-block";
    const container = document.querySelector(`.container`)
    container.style.width = "800px"
}
// random sveiko skaiciaus grzinimas
const random = (number)=>{
    return Math.floor(Math.random()*number)
}
//3 punkto realizacija
document.querySelector(`.container`).addEventListener(`click`,(event) => {
    event.target.style.backgroundColor = `rgb(`+random(255)+`,`+random(255)+`,`+random(255)+`)`;
    //rgb(200,12,145)
})