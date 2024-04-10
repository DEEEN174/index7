let num2; 
let popp = 5;
let startG = document.getElementById('start');
let userInput = document.getElementById('userInput');
let submitG = document.getElementById('submit');
startG.addEventListener('click', start);
submitG.addEventListener('click',  submitGuess);

 
function start() {
    startG.style.display = 'none';
    userInput.style.display = 'block';
    submitG.style.display = 'block';
    num1 = Math.floor(Math.random() * 10 + 1); 
}

function end() {
    popp = 5;
    startG.style.display = 'block';
    userInput.style.display = 'none';
    submitG.style.display = 'none';
}

function  submitGuess() {
    let num2 = parseInt(userInput.value);

    if (isNaN(num2) || num2 < 1 || num2 > 10) {
        alert('Пожалуйста, введите число от 1 до 10.');
    }
    if (num2 === num1) {
        alert(`Вы угадали! Загаданное число: ${num1}`);
        end();
    } else if (num2 !== num1) {
        popp--;
        alert(`Вы не угадали!Количество оставшихся попыток: ${popp}`);
    } 

    if (popp === 0) {
        alert('Вы проиграли! Попробуйте снова!');
        end();
    }
}
