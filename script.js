const goal = Math.floor(Math.random() * 100) + 1;
let guess = 0;
const display = document.querySelector('#display');
const numberBtns = document.querySelectorAll('.num-btn');
const inputGuess = document.querySelector('#inputGuess');
const delBtn = document.querySelector('#del');
const checkBtn = document.querySelector('#check');

numberBtns.forEach(btn => {
    btn.addEventListener('click', InsertNumber);
});
delBtn.addEventListener('click', DeleteAnswer);
checkBtn.addEventListener('click', CheckValid);


let minNum = 0;
let maxNum = 100;
// 
document.querySelector('#goal').innerText = `${goal}`;
//


function InsertNumber() {
    inputGuess.value += `${this.innerText}`;
};

function DeleteAnswer() {
    inputGuess.value = '';
};

function NumberGuess(guess) {
    if (guess !== goal) {
        if (guess < goal) {
            minNum = guess;
        } else {
            maxNum = guess;
        }
        display.innerText = `${minNum} ~ ${maxNum}`;
        inputGuess.value = "";
        return;
    }
    else {
        display.innerText = `${goal}, you win`;
    }
};

function CheckValid() {
    guess = Number(inputGuess.value);
    if(guess) {
        if (guess > minNum && guess < maxNum) {
            NumberGuess(guess);
        }
        else {
            display.innerText = `${minNum} ~ ${maxNum} out of range`;
            inputGuess.value = "";
        }
    }
    else {
        display.innerText = `${minNum} ~ ${maxNum} invalid input`;
    }
    
}