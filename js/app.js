const btnRules = document.querySelector('.btn-rules')
const btnEasy = document.querySelector('.btn-easy')
const btnMedium = document.querySelector('.btn-medium')
const btnHard = document.querySelector('.btn-hard')
const rules = document.querySelector('.rules')
const difficulty = document.querySelector('.difficulty')
const gameBoard = document.querySelector('.gameboard')
const minefield = document.querySelector('.minefield')
const timer = document.querySelector('.timer')
let time;
let mines;
const createMinefield = mines => {
	for (let i = 0; i < mines; i++) {
		const newCell = document.createElement('button')
		minefield.appendChild(newCell)
		newCell.classList.add('cell')
	
	}
	difficulty.classList.remove('active')
	gameBoard.classList.add('active')
}

const timeCount = time => {
	setInterval(() => {
		const minutes = Math.floor(time / 60)
		const seconds = time % 60
		if (seconds < 10) {
			timer.textContent = `${minutes}:0${seconds}`
		} else if (seconds == 0) {
			timer.textContent = `${minutes}:00`
		} else {
			timer.textContent = `${minutes}:${seconds}`
		}

		time--
	}, 1000)
}

const activeSwitch = () => {
	rules.classList.remove('active')
	difficulty.classList.add('active')
}

btnRules.addEventListener('click', activeSwitch)
btnEasy.addEventListener('click', () => {
	createMinefield(64);
    timeCount(600);
	minefield.classList.add('easy');
})
btnMedium.addEventListener('click', () => {
	createMinefield(144);
    timeCount(1200);
	minefield.classList.add('medium');
})
btnHard.addEventListener('click', () => {
	createMinefield(320);
    timeCount(1800);
	minefield.classList.add('hard');
})

// @TODO: napisz funckje ktora bedzie losowo rozmieszczac miny i ustawiac je jako textContent