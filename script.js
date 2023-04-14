const divTable = document.querySelector('.table');

for (i = 0; i <= 100; i++) {
    console.log(i);
    divTable.innerHTML = divTable.innerHTML + `<div class="square">${i}</div>`
}