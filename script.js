"use strict"

const imagens = [
    "./img/luffy.jpg",
    "./img/chopper.png",
    "./img/franky.png",
    "./img/nami.jpg",
    "./img/Nico.jpg",
    "./img/sanji.jpg",
    "./img/usopp.jpg",
    "./img/zoro.jpg"
]

const pegarId = (url) => {
    const posBarra = url.lastIndexOf("/") + 1
    const posPonto = url.lastIndexOf(".")
    return url.substring(posBarra, posPonto)
}

const carregarGaleria = (imgs) => imgs.forEach(criarItem)

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container");
    const novoLink = document.createElement("a")
    novoLink.href = `#${pegarId(urlImagem)}`
    novoLink.classList.add("galeria-items")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="" srcset="">`
    container.appendChild(novoLink)
    //     container.innerHTML += `
    //     <a href="#franky" class="galeria-items">
    //                 <img src="${urlImagem}" alt="" srcset="">
    //     </a>
    //     `
}

const criarSlide = (urlImagem, indice , array) => {
    const container = document.querySelector(".slide-container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("slide")
    novaDiv.id = pegarId(urlImagem)

    const indiceAnterior = indice<=0 ? array.length -1 : indice -1
    const idAnterior = pegarId(array[indiceAnterior])

    const indiceProximo = indice >=array.length -1 ? 0 : indice + 1
    const idProximo = pegarId(array[indiceProximo])

    novaDiv.innerHTML = `
    <div class="imagem-container">
        <a href="#" class="close"> &#128473;</a>
        <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
        <img src="${urlImagem}" alt="" srcset="">
        <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
        </div>
`
    container.appendChild(novaDiv)

}



const carregarSlide = (ims) => ims.forEach(criarSlide)

carregarGaleria(imagens)
carregarSlide(imagens)

{
    /* <div class="slide" id="luffy">
                <div class="imagem-container">
                    <a href="#" class="close"> &#128473;</a>
                    <a href="#franky" class="navegacao anterior">&#171;</a>
                    <img src="img/luffy.jpg" alt="" srcset="">
                    <a href="#zoro" class="navegacao proximo">&#187;</a>
                </div>
            </div> */
}