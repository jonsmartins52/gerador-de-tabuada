(function() {
    const numInput = document.querySelector('.num')
    const btnEnviar = document.querySelector('.send')
    const tableElement = document.querySelector('.table')

    function createHeader(...args) {
        const header = document.createElement('tr')
        const [exp, res] = args
        const h = document.createElement('th')
        const h2 = document.createElement('th')
        h.innerText = exp
        h2.innerText = res
        header.appendChild(h)
        header.appendChild(h2)
        return header
    }

    const createRow = () => {
        const row = document.createElement('tr')
        return row
    }

    const createData = () => {
        const data = document.createElement('td')
        return data
    }

    function generateTable(num) {
        const table = document.createElement('table')
        let row = createRow()
        const header = createHeader('Expressão', 'Resultado')
              
        row.appendChild(header)
       
        table.appendChild(row)
        console.log(table)
        return table
        
    }

    btnEnviar.addEventListener('click', (e) => {
        e.preventDefault()
        generateTable()
        const table = generateTable()
        tableElement.appendChild(table)
    })
})();