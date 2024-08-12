var botao = document.querySelector('button.botao')
botao.addEventListener('click', clicar)

var numero = document.querySelector('input#tabuada')
var tabuada = document.querySelector('select#select-tabuada') 

function clicar(reload) {

    reload.preventDefault()
    console.log(typeof numero)
    if (numero.value == '') {
        
        alert ('[ERRO] Não foi Digitado nenhum Numero ou Numero inválido')

    } else {
        
        var n = Number(numero.value)
        var cont = 1

        tabuada.innerHTML = ''
        for (cont; cont <= 10 ; cont++) {
            var item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}`
            tabuada.appendChild(item)
        }
    }
}