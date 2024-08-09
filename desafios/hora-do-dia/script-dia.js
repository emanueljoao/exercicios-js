window.addEventListener('load', carregou)

function carregou() {
    var data = new Date()
    var hora = data.getHours() 
    var mensagem = window.document.querySelector('div#texto')
    var img = window.document.querySelector('img.imagem')
    mensagem.innerHTML = `Agora são ${hora} horas`
    if (hora < 12) {
        mensagem.innerHTML += '<p>BOM DIA!</p>'
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        mensagem.innerHTML += '<p>BOA TARDE!</p>'
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        mensagem.innerHTML += '<p>BOA NOITE!</p>'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
    }
}
