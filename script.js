const button = document.querySelector ("#btn-calculate");
button.addEventListener ("click", calculateAmount);

const buttonTip = document.querySelector (".btn-add-tip");
buttonTip.addEventListener ("click", showTip);

function calculateAmount (e) {
    e.preventDefault ();
    const bill = document.querySelector ("#bill").value;
    const people = document.querySelector ("#people").value;
    const tip = document.querySelector ("#tip").value;

    if (bill === "" || people === "") {
        Swal.fire({
            icon: 'error',
            title: 'Хмм...',
            text: 'Кажется, есть незаполненные поля',
        })
    }

    if (people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Хмм...',
            text: 'Нужен хотя бы 1 пассажир',
        })
    }

    // Сколько заплатит 1 человек:
    let amountPerPerson = bill/people;

    // Сколько чаевых заплатит 1 человек:
    let tipPerPerson = (bill*tip)/people;

    // Общая сумма счета и чаевых для 1 человека:
    let totalSum = amountPerPerson + tipPerPerson;


    // Показываем результаты расчета в приложении:
    document.querySelector (".billDividedToShow").textContent = amountPerPerson;
    document.querySelector (".tipDividedToShow").textContent = tipPerPerson;
    document.querySelector (".totalDividedToShow").textContent = totalSum;

    // Добавляем копейки:
    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);
}

function showTip (e) {
    e.preventDefault ();
    tip.style.display = "block";
}