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
