var contar = document.querySelector('button')
contar.addEventListener('click', verificar)

function verificar(reload) {
    reload.preventDefault()
    var inicio = document.querySelector('input#inicio')
    var começo = Number(inicio.value)
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var mensagem = document.querySelector('p')
    if (inicio === null || fim === null || passo === null) {
        
        alert = '[ERRO] Alguma informação não foi selecionada'
        
    } else if (Number(passo) > 0) {
        
        alert = 'Selecione um Numero maior que 0'
        mensagem.innerHTML = 'Impossivel Contar'
        
    } else {
        
        mensagem.innerHTML = '<p>Contando</p>'
        console.log(começo)
        for (começo; começo < Number(fim); começo + Number(passo)) {
            
            mensagem.innerHTML += `${começo}`

        }
    }

}