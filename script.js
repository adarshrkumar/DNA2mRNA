var input = document.querySelector('.input')

function go() {
    var value = input.value.split('')
    var newValue = []
    
    var replacements = {
        A: 'U', 
        T: 'A', 
        G: 'C', 
        C: 'G', 
    }
    
    value.forEach(function(v) {
        if (v === '/') newValue.push('/')
        else newValue.push(replacements[v])
    })

    newValue = newValue.join('')
    input.value = newValue
}