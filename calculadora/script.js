let display = document.querySelector('.text h5')
let numbers = document.querySelectorAll('[class*=number]')
let operators = document.querySelectorAll('[class*=op]')
equal = document.querySelector('.equal').addEventListener('click', calcular)
document.querySelector('.del').addEventListener('click', clearDisplay)
let newNumber = true
let op = ''
let beforeValue = ''
let afterValue = ''
let divisor = ''
let disp = ''

numbers.forEach((keyNumber) => {
    keyNumber.addEventListener('click',clickNumber)
})

operators.forEach((keyoperator) => {
    keyoperator.addEventListener('click',clickOperator)
})


function clickNumber(e) {
    if (newNumber) {
        display.innerHTML += e.target.innerHTML
    } else {
        display.innerHTML = e.target.innerHTML
    }
}

function clickOperator(w) {
    beforeValue = parseFloat(display.innerHTML)
    display.innerHTML += w.target.innerHTML
    op = w.target.innerHTML
    if (op !== undefined) {
        
    }
}

function calcular() {
    disp = display.innerHTML
    divisor =  disp.indexOf(op)
    afterValue =  parseFloat(disp.slice(divisor + 1, disp.length))
    result()
}

function result () {
    if (op === '+') {
        display.innerHTML = (beforeValue + afterValue)
    }
    if (op === '-') {
        display.innerHTML = (beforeValue - afterValue)
    }
    if (op === 'x') {
        display.innerHTML = (beforeValue * afterValue)
    }
    if (op === '÷') {
        display.innerHTML = (beforeValue / afterValue)
    }
}

function clearDisplay() {
    display.innerHTML = ''
}

