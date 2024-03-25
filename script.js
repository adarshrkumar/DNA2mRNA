var dna = document.querySelector('.dna')
var mrna = document.querySelector('.mrna')
var trna = document.querySelector('.trna')

var mrnaRep = {
    A: 'U', 
    T: 'A', 
    G: 'C', 
    C: 'G', 
}

var trnaRep = {
    A: 'U', 
    U: 'A', 
    G: 'C', 
    C: 'G', 
}

function go() {
    var value = input.value.split('')
    var mrnaVal = []
    var trnaVal = []
    
    
    value.forEach(function(v) {
        if (v === '/') mrnaVal.push('/')
        else mrnaVal.push(mrnaRep[v])
    })

    mrnaVal.forEach(function(v) {
        if (v === '/') trnaVal.push('/')
        else trnaVal.push(trnaRep[v])
    })

    mrnaVal = mrnaVal.join('')
    mrna.value = mrnaVal

    trnaVal = trnaVal.join('')
    trna.value = trnaVal
}