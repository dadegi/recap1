const visual = document.querySelector('#visual');
const number = document.querySelector('#number');
const extract = document.querySelector('#extract');
const start = document.querySelector('#start');
const cron = document.querySelector('#cron');
const board = document.querySelector('#board');
const numbers = [];

document.addEventListener('DOMContentLoaded', createBoard());

function createBoard() {
	for (let i = 0; i < 9; i++) {
		// Genero le nove righe
		const newRow = document.createElement('div');
		newRow.classList.add('row');
		// Genero la colonna vuota all'inizio della riga
		const emptyCol1 = document.createElement('div');
		emptyCol1.classList.add('col-1');
		newRow.appendChild(emptyCol1);
		// Genero le colonne con i numeri della riga
		for (let j = 1; j < 11; j++) {
			const newCol = document.createElement('div');
			newCol.classList.add(
				'col-1',
				'bg-secondary',
				'text-light',
				'fw-bold',
				'm-1',
				'p-2',
				'text-center',
			);
			newCol.textContent = j + i * 10;
			newRow.appendChild(newCol);
		}
		// Genero la colonna vuota alla fine della riga
		const emptyCol2 = document.createElement('div');
		emptyCol2.classList.add('col-1');
		newRow.appendChild(emptyCol2);
		// Inserisco la nuova riga nel tabellone
		board.appendChild(newRow);
	}
}

extract.addEventListener('click', putNumber);

function putNumber() {
	// Genero il numero casuale tra 1 e 90
	let newNumber = Math.floor(Math.random() * 90) + 1;
	if (numbers.includes(newNumber)) {
		// Se il numero è già estratto, genero di nuovo
		putNumber();
	} else {
		// Inserisco il numero nell'array e lo segno sul tabellone
		numbers.push(newNumber);
		render(newNumber);
	}
}

function render(num) {
	// Riabilito il button Ricomincia
	start.removeAttribute('disabled');
	// Stampo gli elementi statici nell'HTML
	visual.textContent = 'Ultimo estratto';
	number.textContent = num;
	cron.textContent = numbers.join(', ');
	// Coloro la casella che contiene il numero estratto
	// Creo l'array delle caselle
	const colList = document.querySelectorAll('#board .col-1');
	// Ciclo l'array verificando il textContent
	colList.forEach((col) => {
		if (col.textContent == num) {
			col.classList.remove('bg-secondary');
			col.classList.add('bg-primary');
		}
	});
}

start.addEventListener('click', reset);

function reset() {
	// Avviso l'utente che si azzera tutto
	if (!confirm('Sei sicuro? Il gioco ricomincerà da zero')) return;
	// Se si clicca su Ok:
	// Svuoto l'array
	numbers.splice(0);
	// Cancello l'HTML statico
	visual.innerHTML = '&nbsp';
	number.innerHTML = '&nbsp';
	cron.innerHTML = '&nbsp';
	// Ripristino la grafica del tabellone
	const colList = document.querySelectorAll('#board .col-1');
	colList.forEach((col) => {
		if (col.classList.contains('bg-primary')) {
			col.classList.remove('bg-primary');
			col.classList.add('bg-secondary');
		}
	});
	// Disabilito il button ricomincia
	start.setAttribute('disabled', 'true');
}
