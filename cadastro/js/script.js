
let btn = document.querySelector('img')

btn.addEventListener('click', pegarDados)



function pegarDados(){
    let form = document.querySelector('form')

    let pessoa = {
        nome: form.nome.value,
        email: form.email.value,
        endereco: form.endereco.value,
        sexo: form.sexo.value,
        estado: form.estado.value
    }
    
    sessionStorage.pessoa = JSON.stringify(pessoa)
    location.href = 'http://127.0.0.1:5500/confirmarCadastro.html'
}