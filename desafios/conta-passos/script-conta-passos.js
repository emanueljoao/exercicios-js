var contar = document.querySelector('button')
contar.addEventListener('click', verificar)

var inicio = document.querySelector('input#inicio')
var fim = document.querySelector('input#fim')
var passo = document.querySelector('input#passo')
var mensagem = document.querySelector('p')

function verificar(reload) {
    reload.preventDefault()
    console.log(inicio.value, fim.value, passo.value)

    if (inicio.value === '' || fim.value === '' || passo.value === '') {

        window.alert('[ERRO] Alguma informação não foi selecionada')

    } else {

        let inicio_n = Number(inicio.value)
        let fim_n = Number(fim.value)
        let passo_n = Number(passo.value)

        mensagem.innerHTML = '<p>Contando...</p>'
        for (let resultado = inicio_n; resultado <= fim_n; resultado += passo_n) {

            mensagem.innerHTML += `${resultado} 👉`

        }
        mensagem.innerHTML += `🏁`

    }
}

// if (Number(inicio.value) < 0 || Number(fim.value) <= 1 || Number(passo.value) <= 0) {

//     window.alert('INICIO - Sempre maior ou igual a 0 \n FIM - Sempre maior que 1 \n PASSO - Sempre maior que 0')
// } 