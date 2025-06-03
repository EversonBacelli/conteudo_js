
let url = "http://localhost:3000/produtos";


async function buscarProdutos() {
    let produtos = await fetch(url);
    produtos = await produtos.json();
    return produtos;
}


let lista = await buscarProdutos();      

function renderizarProdutos(lista) {
    let listaProdutos = document.getElementById("produtos");
    
    let produtos = lista.produtos
    console.log(lista);
    produtos.forEach(produto => {
        let item = document.createElement("li");
        item.textContent = produto.nome;
        listaProdutos.appendChild(item);
    });
}

renderizarProdutos(lista);
