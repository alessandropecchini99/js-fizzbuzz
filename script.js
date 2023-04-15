// 1. Creare 100 quadrati numerati
// 2. ogni multiplo di 3 scrivere 'Fizz' e multipli di 5 'Buzz'
// 3. per i numeri multipli di 3 e 5 scrivere 'FizzBuzz'

const divTable = document.querySelector('.table');

for (i = 1; i <= 100; i++) {

    if (i % 15 == 0) {
        divTable.innerHTML = divTable.innerHTML + `<div class="square_15">Fizz <br> Buzz</div>`;
    } else if (i % 5 == 0) {
        divTable.innerHTML = divTable.innerHTML + `<div class="square_5">Buzz</div>`
    } else if (i % 3 == 0) {
        divTable.innerHTML = divTable.innerHTML + `<div class="square_3">Fizz</div>`;
    } else {
        divTable.innerHTML = divTable.innerHTML + `<div class="square">${i}</div>`;
    }
}