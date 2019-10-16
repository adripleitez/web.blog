var idActual;

function displayContent(idElemento) {
	var day1 = document.getElementById('1');
	var day2 = document.getElementById('2');
	var day3 = document.getElementById('3');
	var day4 = document.getElementById('4');
	var day5 = document.getElementById('5');

	switch (idElemento) {
		case '1':
			idActual.classList.toggle('hide-desktop');
			day1.classList.toggle('hide-desktop');
            idActual = day1;
            break;
		case '2':
			idActual.classList.toggle('hide-desktop');
			day2.classList.toggle('hide-desktop');
			idActual = day2;
			break;
		case '3':
			idActual.classList.toggle('hide-desktop');
			day3.classList.toggle('hide-desktop');
			idActual = day3;
			break;
		case '4':
			idActual.classList.toggle('hide-desktop');
			day4.classList.toggle('hide-desktop');
			idActual = day4;
			break;
		case '5':
			idActual.classList.toggle('hide-desktop');
			day5.classList.toggle('hide-desktop');
			idActual = day5;
            break;
        default:
            idActual = day1;
            break;
	}
}

window.onload = function() {
    idActual = document.getElementById('1');

	document.getElementById('d1').addEventListener('click', () => displayContent('1'));
	document.getElementById('d2').addEventListener('click', () => displayContent('2'));
	document.getElementById('d3').addEventListener('click', () => displayContent('3'));
	document.getElementById('d4').addEventListener('click', () => displayContent('4'));
	document.getElementById('d5').addEventListener('click', () => displayContent('5'));
};
