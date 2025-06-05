import {criarCards} from './criarCards.js'

// criar os cards
criarCards()

let divs_produto = document.querySelectorAll('.produto')


divs_produto.forEach(div =>{
    div.onclick = selecionarProduto
})


function selecionarProduto(e){
    // origem do evento
    let target = e.currentTarget
    
    let codigo = parseInt( target.value) - 1
    sessionStorage.codigo = codigo

    location.href = 'http://127.0.0.1:5500/descricao.html'
}
