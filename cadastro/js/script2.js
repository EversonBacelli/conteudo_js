
const pessoa = JSON.parse(sessionStorage.pessoa)

let spans = document.querySelectorAll('span')

spans[0].textContent = pessoa.nome
spans[1].textContent = pessoa.email
spans[2].textContent = pessoa.endereco
spans[3].textContent = pessoa.estado
spans[4].textContent = pessoa.sexo

const img = document.querySelector('.impressora')

img.addEventListener('click', ()=>{
    img.style.display = 'none'
    window.print()
    img.style.display = 'block'
})
