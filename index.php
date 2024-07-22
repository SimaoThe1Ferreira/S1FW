<!DOCTYPE html>
<html>
<head>
<title>SimaoThe1Ferreira</title>
</head>
<body>
<script>
let commands_list = new Array(32)
let number_typed_commands = 0
let pointer0 = 0
let unset = "unset"
let white = "white"
let large = "large"
let monospace = "monospace"
let black = "black"
let none = "none"
let one_hundred = "100%"
let eigth_pixels = "8px"
let table0 = document.createElement("table")
let text_box0
let row0
let cell0
let cell1
let cell2
let cell3
commands_list[0] = ""
document.body.style.color = white
document.body.style.fontSize = large
document.body.style.fontFamily = monospace
document.body.style.background = black
document.body.style.margin = unset
create_standart_row()
document.body.appendChild(table0)
function create_standart_row() {
        text_box0 = document.createElement("input")
        row0 = table0.insertRow(-1)
        cell0 = row0.insertCell(-1)
        cell1 = row0.insertCell(-1)
        cell2 = row0.insertCell(-1)
        cell3 = row0.insertCell(-1)
        table0.style.border = none
        table0.style.width = one_hundred
        table0.style.borderCollapse = "collapse"
        cell0.style.padding = unset
        cell0.style.color = "green"
        cell0.style.width = "128px"
        cell0.innerHTML = "SimaoThe1Ferreira"
        cell1.style.padding = unset
        cell1.style.width = eigth_pixels
        cell1.innerHTML = ":"
        cell2.style.padding = unset
        cell2.style.width = eigth_pixels
        cell2.innerHTML = "$"
        cell3.appendChild(text_box0)
        cell3.style.width = one_hundred
        text_box0.addEventListener("keydown", enter_command)
        text_box0.autofocus = true
        text_box0.style.outline = none
        text_box0.style.color = white
        text_box0.style.fontSize = large
        text_box0.style.fontFamily = monospace
        text_box0.style.background = black
        text_box0.style.margin = unset
        text_box0.style.padding = unset
        text_box0.style.border = none
        text_box0.style.display = "flex"
        text_box0.style.width = one_hundred
        text_box0.style.caretColor = white
}
function enter_command() {
	switch (event.keyCode) {
		case 13: // enter key
			let counter0 = number_typed_commands
			let parameters = new Array(3)
			let counter1 = 0
			let counter2 = 0
			let more_than_3_args = false
			let msg_comand_not_found = "Command not found"
			let row1 = table0.insertRow(-1)
			let cell4 = row1.insertCell(-1)
			pointer0 = 0
                        cell3.innerHTML = text_box0.value
			cell4.colSpan = "5"
			do {
				if (counter1 < 3) {
					if (text_box0.value[counter0] === ' ') {
						parameters[counter1] = text_box0.value.substring(counter2, counter0)
						counter1++
						counter2 = counter0
						counter2++
					}
					counter0++
				}
				else {
					more_than_3_args = true
					break
				}
			} while (counter0 < text_box0.value.length)
			parameters[counter1] = text_box0.value.substring(counter2, counter0)
			if (!more_than_3_args) {
				if (number_typed_commands < 31) {
					number_typed_commands++
				}
				commands_list[0] = text_box0.value
				do {
					commands_list[counter0 + 1] = commands_list[counter0]
					counter0--
				} while (counter0 !== -1)
				commands_list[0] = ""
				switch (parameters[0]) {
					case "help":
						if (parameters[1] === undefined) {
							cell4.innerHTML = 'Try:<br>-> "ls" to show the downloadable files<br>-> "download" followed by the file name to download it'
						}
						else {
							cell4.innerHTML = msg_comand_not_found
						}
						break
					case "ls":
						if (parameters[1] === undefined) {
							cell4.innerHTML = "POS.zip PTE.zip"
						}
						else {
							cell4.innerHTML = msg_comand_not_found
						}
						break
					case "download":
						let exists0 = true
						switch (parameters[1]) {
							case "POS.zip":
								break
							case "PTE.zip":
								break
							default:
								exists0 = false
						}
						if (parameters[2] === undefined && exists0 === true) {
							let link = document.createElement('a');
							link.href = parameters[1]
							link.download = parameters[1]
							link.click()
							link.remove()
						}
						else {
							cell4.innerHTML = msg_comand_not_found
						}
						break
					default:
						cell4.innerHTML = msg_comand_not_found
				}
                                create_standart_row()
                                text_box0.focus()
			}
			else {
				cell4.innerHTML = msg_comand_not_found
			}
			break
		case 38: // up arrow key
			if (pointer0 !== number_typed_commands) {
                                do {
				        pointer0++
                                } while(commands_list[pointer0] === commands_list[pointer0 + 1])
				text_box0.value = commands_list[pointer0]
			}
			break
		case 40: // down arrow key
			if (pointer0 !== 0) {
                                do {
				        pointer0--
                                } while(commands_list[pointer0] === commands_list[pointer0 - 1])
				text_box0.value = commands_list[pointer0]
			}
			break
	}
}
</script>
</body>
</html>
