var carregar = window.document.querySelector('body')
carregar.addEventListener('load', carregar)

function carregar(){
    var hora = new Date()
    var hora_real = hora.getHours() 
    var mensagem = window.document.querySelector('div.div-texto')
    if (hora_real < 12) {

        
    } else if (hora_real >= 12 && hora_real <= 18) {

    } else {

    }

}