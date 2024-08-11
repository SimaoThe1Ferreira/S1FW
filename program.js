let table0 = document.createElement("table")
let length0 = Math.floor(window.innerHeight / 19)
let length1 = Math.floor(window.innerWidth / 9)
let rows = new Array(length0)
let cells = new Array(length0)
let counter0 = 0
let unset = "unset"
let white = "white"
let large = "large"
let monospace = "monospace"
let black = "black"
let none = "none"
let one_hundred = "100%"
let cursor_row = 0
let cursor_column = 19
let writing_limit_right = 19
let writing_limit_left = 19
table0.style.border = none
table0.style.width = one_hundred
table0.style.borderCollapse = "collapse"
document.body.style.color = white
document.body.style.fontSize = large
document.body.style.fontFamily = monospace
document.body.style.background = black
document.body.style.margin = unset
do {
	rows[counter0] = document.createElement("tr")
	rows[counter0].style.height = "19px"
	table0.appendChild(rows[counter0])
	counter0++
} while(counter0 < length0)
counter0 = 0
do {
	cells[counter0] = []
	let counter1 = 0
	do {
		cells[counter0][counter1] = document.createElement("td")
		cells[counter0][counter1].style.outline = none
		cells[counter0][counter1].addEventListener("keydown", enter_command)
		cells[counter0][counter1].style.margin = unset
		cells[counter0][counter1].style.padding = unset
		cells[counter0][counter1].style.border = none
		cells[counter0][counter1].style.width = "9px"
		rows[counter0].appendChild(cells[counter0][counter1])
		counter1++
	} while (counter1 < length1)
	counter0++
} while(counter0 < length0)
document.body.appendChild(table0)
table0.addEventListener("click", table0_click)
create_standard_row(0)
function create_standard_row(row_position) {
	print_msg("SimaoThe1Ferreira", "green", row_position, 0)
	print_msg(":$", white, row_position, 17)
	cells[cursor_row][cursor_column].focus()
}
function print_msg(msg, color, row, column) {
	let counter3 = 0
	do {
		cells[row][counter3 + column].innerHTML = msg[counter3]
		cells[row][counter3 + column].style.color = color
		counter3++
	} while(counter3 < msg.length)
}
function table0_click() {
	cells[cursor_row][cursor_column].focus()
}
function enter_command() {
	switch(event.key) {
		case 'Enter':
			break
		case 'ArrowUp':
			break
		case 'ArrowDown':
			break
		case 'ArrowLeft':
			if (cursor_column !== 0 && cursor_column !== writing_limit_left) {
				cursor_column--
				cells[cursor_row][cursor_column].contentEditable = true
				cells[cursor_row][cursor_column].focus()
			} else {
				if(cursor_row !== 0 && cursor_column !== writing_limit_left) {
					cursor_column = length1 - 1
					cursor_row--
					cells[cursor_row][cursor_column].contentEditable = true
					cells[cursor_row][cursor_column].focus()
				}
			}
			break
		case 'ArrowRight':
			if (cursor_column !== length1 - 1 && cursor_column !== writing_limit_right) {
				cursor_column++
				cells[cursor_row][cursor_column].contentEditable = true
				cells[cursor_row][cursor_column].focus()
			} else {
				if(cursor_row !== length0 && cursor_column !== writing_limit_right) {
					cursor_column = 0
					cursor_row++
				cells[cursor_row][cursor_column].contentEditable = true
					cells[cursor_row][cursor_column].focus()
				}
			}
			break
		case 'Delete':
			break
		case 'Backspace':
			break
	}
	if(event.key.length < 2) {
		if (cursor_column !== length1 - 1) {
			cells[cursor_row][cursor_column].contentEditable = false
			cursor_column++
			cells[cursor_row][cursor_column].contentEditable = true
			cells[cursor_row][cursor_column].focus()
		} else {
			if(cursor_row !== length0) {
				cells[cursor_row][cursor_column].contentEditable = false
				cursor_column = 0
				cursor_row++
				cells[cursor_row][cursor_column].contentEditable = true
				cells[cursor_row][cursor_column].focus()
			}
		}
	}
}