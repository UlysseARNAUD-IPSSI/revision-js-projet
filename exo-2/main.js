
function convert(params = {}) {

    const defaultParams = {
        from: {
            type: 'Celsius',
            value: 10.00
        },
        to: {
            type: 'Fahrenheit'
        }
    }

    params = {...defaultParams, ...params}

    const {from,to} = params

    const table = [
        ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine'],
        ['x', 'x * (9/5) + 32', 'x + 273.15', 'x * (9/5) + 491.67'], // From Celsius
        ['(x - 32) * (5/9)', 'x', '(x + 459.67) * (5/9)', 'x + 459.67'], // From Fahrenheit
        ['x - 273.15', 'x * (9/5) - 459.67', 'x', 'x * (9/5)'], // From Kelvin
        ['x * (5/9) - 273.15', 'x - 459.67', 'x * (5/9)', 'x'] // From Rankine
    ]

    // On récupère la formule à utilisée, et on remplace la variable par notre valeur
    const expression = ('' + table[1 + table[0].indexOf(from.type)][table[0].indexOf(to.type)]).replace(new RegExp('x', 'g'), from.value)

    return +eval(expression).toFixed(2) || undefined
}