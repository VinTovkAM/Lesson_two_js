let circle_one = document.getElementById('green');
let circle_two = document.getElementById('red');
let output_result = document.getElementById('result');

function allow_pass () {
    circle_one.style.backgroundColor = 'green';
    circle_two.style.backgroundColor = 'gray';
    output_result.innerHTML = '<input type="text" value="Можно идти" readonly>'
    console.log('Зелёный')
}

function denied_pass () {
    circle_one.style.backgroundColor = 'gray';
    circle_two.style.backgroundColor = 'red';
    output_result.innerHTML = '<input type="text" value="Нельзя идти" readonly>';
    console.log('Красный')
}

function default_value () {
    circle_two.style.backgroundColor = 'gray';
    circle_one.style.backgroundColor = 'gray';
    output_result.innerHTML = '<input type="text" readonly>';
}

circle_one.addEventListener('click', () => {
    if (circle_one.style.backgroundColor === 'green') {
        default_value();
    } else {
        allow_pass();
    }
});

circle_two.addEventListener('click', () => {
    if (circle_two.style.backgroundColor === 'red') {
        default_value();
    } else {
        denied_pass();
    }
});