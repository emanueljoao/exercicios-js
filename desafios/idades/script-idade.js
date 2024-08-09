let verificar = document.querySelector('input.botao')
verificar.addEventListener('click', clicar)

function clicar() {
    let ano = document.querySelector('input#ano')
    nascimento = Number(2024 - ano.value)
    let genero = document.querySelector('input[name="genero"]:checked')
    let sexo = genero.value
    let resposta = document.querySelector('p.paragrafo-resultado')
    let imagem = document.querySelector('div.imagem')
    console.log(typeof sexo)

    switch (sexo) {
        case "Masculino":

            if (nascimento <= 12) {

                resposta.innerHTML = `Detectamos que você é um criança de ${nascimento} anos de idade.`
                imagem.src = 'imagens/homem-crianca.jpg'

            } else if (nascimento >= 13 && nascimento <= 30) {

                resposta.innerHTML = `Detectamos que você é um homem de ${nascimento} anos de idade.`
                imagem.src = 'imagens/homem-jovem.jpg'

            } else {

                resposta.innerHTML = `Detectamos que você é um homem de ${nascimento} anos de idade.`
                imagem.src = 'imagens/homem-idoso.jpg'

            }

            break;

        case "Feminino":   

            if (nascimento <= 12) {

                resposta.innerHTML = `Detectamos que você é uma criança de ${nascimento} anos de idade.`
                imagem.src = 'imagens/mulher-crianca.jpg'

            } else if (nascimento >= 13 && nascimento <= 30) {

                resposta.innerHTML = `Detectamos que você é uma mulher de ${nascimento} anos de idade.`
                imagem.src = 'imagens/mulher-jovem.jpg'

            } else {

                resposta.innerHTML = `Detectamos que você é uma mulher de ${nascimento} anos de idade.`
                imagem.src = 'imagens/mulher-idoso.jpg'

            }

            break;

        default:

            imagem.innerHTML += `[ERRO] Não conseguimos identificar seu Sexo ou Ano de Nascimento `
            break;
    }

}