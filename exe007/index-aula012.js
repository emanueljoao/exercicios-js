var a = new Date()
var dia_da_semana = a.getDay()

console.log(`${dia_da_semana}`)

switch (dia_da_semana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira') 
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sabádo')
        break
    default:
        console.log('[ERRO] Dia da Semana Inválido')
        break

}