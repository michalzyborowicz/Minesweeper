const btnRules = document.querySelector('.btn-rules')
const btnEasy = document.querySelector('.btn-easy')
const btnMedium = document.querySelector('.btn-medium')
const btnHard = document.querySelector('.btn-hard')
const rules = document.querySelector('.rules')
const difficulty = document.querySelector('.difficulty')
const gameBoard = document.querySelector('.gameboard')
const minefield = document.querySelector('.minefield')
const timer = document.querySelector('.timer')
let cells
let time
let mines
const createMinefield = (cells, b) => {
	const index = []
	for (let i = 0; i < cells; i++) {
		const newCell = document.createElement('button')
		minefield.appendChild(newCell)
		newCell.classList.add('cell')
		newCell.setAttribute('id', i)
	}
	for (let j = 0; j < b; j++) {
		const randomMines = Math.floor(Math.random() * cells)
		index.forEach(el => {
			if (el === randomMines) {
				index.push(randomMines)
				let mine = document.querySelector(`[id="${randomMines}"]`)
				console.log(mine)
				mine.textContent = '💣'
			}
		})

		difficulty.classList.remove('active')
		gameBoard.classList.add('active')
	}
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
btnEasy.addEventListener('click', e => {
	e.preventDefault()
	createMinefield(64, 10)
	timeCount(600)
	minefield.classList.add('easy')
})
btnMedium.addEventListener('click', e => {
	e.preventDefault()
	createMinefield(144, 40)
	timeCount(1200)
	minefield.classList.add('medium')
})
btnHard.addEventListener('click', e => {
	e.preventDefault()
	createMinefield(320, 99)
	timeCount(1800)
	minefield.classList.add('hard')
})

//@TODO: ok, fajne miny sie wyswietlaja ale musi sie ich wyswietlac ilosc podana w w argumencie funckji a na razie wyswietla sie ich losowa liczba bo jesli id miny sie powtarza to wyglada to jakby byla jednej miny brakowalo.
