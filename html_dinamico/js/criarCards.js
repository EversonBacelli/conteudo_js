import {personagens} from '../bd.js'

// incluindo a lista na sessão
sessionStorage.personagens = JSON.stringify(personagens)

let pai = document.querySelector('.container')


function criarCards(){
    let textoDasTags = ['div', 'div', 'div', 'img', 'label', 'label', 'label']

    for (let index = 0; index < personagens.length; index++) {
       let listaTags = criarTags(textoDasTags)
       listaTags = editarTags(personagens[index], listaTags)
       listaTags = addEstilo(listaTags)
       organizarTags(listaTags)
    }
}


function criarTags(textoDasTags){
    let listaTags = []
    textoDasTags.forEach(texto => {
        let novaTag = document.createElement(texto)
        listaTags.push(novaTag)
    });

    return listaTags
}

function editarTags(produto, listaTags){
    let div_produto = listaTags[0]
    let img = listaTags[3]
    let label1 = listaTags[4]
    let label2 = listaTags[5]
    let label3 = listaTags[6]

    div_produto.value = produto.codigo
     img.src = "./img/imagem.webp"
    label1.textContent = produto.nome
    label2.textContent = produto.descricao
    label3.textContent = "R$ "+ produto.codigo 
    return listaTags
}

function addEstilo(tags){
    tags[0].classList.add('produto')
    tags[1].classList.add('dados_produto')
    return tags
}

function organizarTags(listaTags){
    listaTags[0].appendChild(listaTags[1])
    listaTags[0].appendChild(listaTags[2])
    listaTags[1].appendChild(listaTags[3])
    listaTags[2].appendChild(listaTags[4])
    listaTags[2].appendChild(listaTags[5])
    listaTags[0].appendChild(listaTags[6])

    pai.appendChild(listaTags[0])
}

export {criarTags, editarTags, organizarTags, addEstilo, criarCards}