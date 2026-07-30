let div_one = document.getElementById('green');
let div_two = document.getElementById('red');
let div_three = document.getElementById('result');

function get_green_circle_info_by_click () {
    div_one.style.backgroundColor = 'green';
    div_two.style.backgroundColor = 'gray';
    div_three.innerHTML = '<input type="text" value="Можно идти" readonly>'
    console.log('Зелёный')
}

function get_red_circle_info_by_click () {
    div_two.style.backgroundColor = 'red';
    div_one.style.backgroundColor = 'gray';
    div_three.innerHTML = '<input type="text" value="Нельзя идти" readonly>';
    console.log('Красный')
}

div_one.addEventListener('click', get_green_circle_info_by_click)
div_two.addEventListener('click', get_red_circle_info_by_click)
