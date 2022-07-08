let goal = Math.floor(Math.random() * 100) + 1
let guess = 0
let minNum = 0
let maxNum = 100

const displayRange = document.querySelector('#displayRange')
const numberBtns = document.querySelectorAll('.num-btn')
const inputGuess = document.querySelector('#inputGuess')
const delBtn = document.querySelector('#del')
const checkBtn = document.querySelector('#check')
const resetBtn = document.querySelector('#reset')
numberBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        InsertNumber(event, inputGuess, 'value')
        SetEmptyString(inputGuess, 'placeholder')
    })
})
delBtn.addEventListener('click', () => {
    SetEmptyString(inputGuess, 'value')
    SetEmptyString(inputGuess, 'placeholder')
})
checkBtn.addEventListener('click', () => {
    CheckValid()
})
resetBtn.addEventListener('click', ResetGame)

// 
document.querySelector('#goal').innerText = `${goal}`
//

function InsertNumber(event, insert, insertProp) {
    insert[insertProp] += Number(event.target.innerText)
}
function SetEmptyString(insert, prop) {
    insert[prop] = ''
}
function DisplayText(dispalyObj, prop, text) {
    dispalyObj[prop] = text
}
function CheckValid() {
    guess = Number(inputGuess.value)
    if (guess) {
        if (guess > minNum && guess < maxNum) {
            SetEmptyString(inputGuess, 'placehoder')
            NumberGuess()
        }
        else {
            DisplayText(displayRange, 'innerText', `${minNum} ~ ${maxNum}`)
            SetEmptyString(inputGuess, 'value')
            DisplayText(inputGuess, 'placeholder', "out of range")
        }
    }
    else {
        DisplayText(displayRange, 'innerText', `${minNum} ~ ${maxNum}`)
        SetEmptyString(inputGuess, 'value')
        DisplayText(inputGuess, 'placeholder', "invalid input")
    }

}
function NumberGuess() {
    if (guess !== goal) {
        (guess < goal) ? minNum = guess : maxNum = guess
        DisplayText(displayRange, 'innerText', `${minNum} ~ ${maxNum}`)
        SetEmptyString(inputGuess, 'value')
        return
    }
    else {
        displayRange.innerText = `${goal}, you win`
        checkBtn.setAttribute('disabled', true)
        delBtn.setAttribute('disabled', true)
        inputGuess.setAttribute('disabled', true)
        numberBtns.forEach(btn => btn.setAttribute('disabled', true))
    }
}

function ResetGame() {
    checkBtn.removeAttribute('disabled')
    delBtn.removeAttribute('disabled')
    inputGuess.removeAttribute('disabled')
    numberBtns.forEach(btn => btn.removeAttribute('disabled'))
    
    goal = Math.floor(Math.random() * 100) + 1
    minNum = 0
    maxNum = 100

    DisplayText(displayRange, 'InnerText', `${minNum} ~ ${maxNum}`)
    SetEmptyString(inputGuess, 'InnerText')
    SetEmptyString(inputGuess, 'placeholder')
    SetEmptyString(inputGuess, 'value')
}