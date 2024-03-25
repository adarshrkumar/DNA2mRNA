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
        newValue.push(replacements[v])
    })
}