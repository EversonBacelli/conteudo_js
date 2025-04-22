
let btn = document.querySelector('img')

btn.addEventListener('click', pegarDados)



function pegarDados(){
    let form = document.querySelector('form')


    console.log(form.nome.value)
    console.log(form.email.value)
    console.log(form.endereco.value)
    console.log(form.estado.value)
    console.log(form.sexo.value)
}