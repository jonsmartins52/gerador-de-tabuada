// Elementos do html: input, formulario, container da tabuada
const inputEl = document.querySelector('input')
const form = document.querySelector('.form')
const tableElement = document.querySelector('.table-elements')

// Conjunto de elementos usados para criar a tabuada
const numeros = [
    { num: 1, res: 0 },
    { num: 2, res: 0 },
    { num: 3, res: 0 },
    { num: 4, res: 0 },
    { num: 5, res: 0 },
    { num: 6, res: 0 },
    { num: 7, res: 0 },
    { num: 8, res: 0 },
    { num: 9, res: 0 },
    { num: 10, res: 0 },
]

// Gera uma tabuada com o valor passado pelo usuário
const tab = (valor) => {
    const tab = numeros.map(numero => {
        const newtab = { num: numero.num, res: numero.num * valor }
        return newtab
    })

    return tab
}

// Insere os valores da tabuada no html
const insertElementsIntoContainer = (tabuada) => {
    tableElement.innerHTML = tabuada.map(({ num, res }) => {
        return `<li class="table-elements-li">${inputEl.value} x ${num} = ${res}</li>`       
    }).join('')
}


const handleTable = event => {
    event.preventDefault()
    const numero = Number(inputEl.value)    
    const tabuada = tab(numero)    
    insertElementsIntoContainer(tabuada)
}
// Evento de submit do formulário
form.addEventListener('submit', handleTable)
