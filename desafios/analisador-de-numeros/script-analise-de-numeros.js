var add = document.querySelector('button#adicionar')
add.addEventListener('click', adicionar)

// BOTÃO ADICIONAR

let numbers = []
var select = document.querySelector('select#numeros-guardados')
var numero = document.querySelector('input#number')

function adicionar(reload) {
    reload.preventDefault()
    
    if (numero.value == '') {
        
        alert('[ERRO] Digite algum valor para analisar-mos')
        
    } else if (numero.value > 100 || numero.value < 1) {
        
        alert('Numero maior que 100 ou menor que 1.')
        
    } else if (numbers.indexOf(numero.value) != -1) {
        
        alert('Numero já foi adicionado')
        
    } else {
        
        numbers.push(numero.value)
        var item = document.createElement('option')
        select.appendChild(item)
        item.innerHTML = `Valor ${numero.value} adicionado`
        
    }
    
    console.log(select, select.value)
    
}

// BOTÃO FINALIZAR

var final = document.querySelector('button#finalizar')
final.addEventListener('click', finalizar)

function finalizar() {
    var resultado = document.querySelector('div.resultado')
    
    if (numbers == '') {
        
        alert ('Adicione algum valor antes de finalizar-mos')
        
    } else {

        var soma = 0
        resultado.innerHTML = ''
        // QUANTOS NUMEROS TEM NO VETOR NUMBERS
        resultado.innerHTML += `<p>Ao todo, temos ${numbers.length} numeros cadastrados</p>`
        // MAIOR VALOR ADICIONADO
        resultado.innerHTML += `<p>O maior valor informado é de ${Math.max(...numbers)}</p>`
        // MENOR VALOR ADICIONADO
        resultado.innerHTML += `<p>O menor valor informado é de ${Math.min(...numbers)}</p>` 
        
        // SOMA DO NUMEROS DO VETOR
        for (let i = 0; i < numbers.length; i++) {
            
            soma += Number(numbers[i])
            
        }
        resultado.innerHTML += `<p>A soma de todos os numeros adicionados é de ${soma}</p>`

        // MÉDIA DENTRE TODOS OS NUMEROS DO VETOR
        resultado.innerHTML += `<p>A média dos valores digitados é de ${soma/numbers.length}</p>`
    
    }

}