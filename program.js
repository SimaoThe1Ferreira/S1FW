let commands_list
let number_typed_commands
let pointer0
let unset
let white
let large
let monospace
let black
let none
let one_hundred
let eigth_pixels
let table0
let text_box0
let row0
let cell0
let cell1
let cell2
let cell3
commands_list = new Array(32)
number_typed_commands = 0
pointer0 = 0
unset = "unset"
white = "white"
large = "large"
monospace = "monospace"
black = "black"
none = "none"
one_hundred = "100%"
eigth_pixels = "8px"
table0 = document.createElement("table")
document.body.addEventListener("keydown", focus)
document.body.style.color = white
document.body.style.fontSize = large
document.body.style.fontFamily = monospace
document.body.style.background = black
document.body.style.margin = unset
create_standart_row()
document.body.appendChild(table0)
function clear() {
	document.body.innerHTML = ""
	table0 = document.createElement("table")
	document.body.appendChild(table0)
}
function focus() {
	text_box0.focus()
}
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
        text_box0.name = "text_box0"
        text_box0.title = "text_box0"
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
			let counter0
			let parameters
			let counter1
			let counter2
			let more_than_3_args
			let msg_comand_not_found
			let row1
			let cell4
                        counter0 = number_typed_commands
                        parameters = new Array(3)
                        counter1 = 0
                        counter2 = 0
                        more_than_3_args = false
                        msg_comand_not_found = "Command not found"
                        row1 = table0.insertRow(-1)
                        cell4 = row1.insertCell(-1)
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
				} else {
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
						if (counter1 === 0) {
							cell4.innerHTML = 'Try:<br>-> "ls" to show the downloadable files<br>-> "download" followed by the file name to download it<br>-> "clear" to clear the screen'
						} else {
							cell4.innerHTML = msg_comand_not_found
						}
						break
					case "ls":
						if (counter1 === 0) {
							cell4.innerHTML = "POS.zip PTE.zip"
						} else {
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
						if (counter1 === 1 && exists0 === true) {
							let link
                                                        link = document.createElement('a')
							link.href = parameters[1]
							link.download = parameters[1]
							link.click()
							link.remove()
						} else {
							cell4.innerHTML = msg_comand_not_found
						}
						break
					case "clear":
						if(counter1 === 0) {
							clear()
						} else {
							cell4.innerHTML = msg_comand_not_found
						}
						break
					case "save":
                                                console.log(parameters[1])
						if(parameters[1] !== undefined &&  parameters[2] === undefined && parameters[1] !== "") {
							let form0
                                                        let submit_button0
                                                        form0 = document.createElement("form")
                                                        submit_button0 = document.createElement
                                                        ("input")
                                                        submit_button0.type = "submit"
							form0.method = "post"
                                                        form0.appendChild(submit_button0)
							document.body.appendChild(form0)
                                                        submit_button0.name = "submit_button0"
							submit_button0.click()
						} else {
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
                                event.preventDefault()
                                text_box0.setSelectionRange(text_box0.value.length, text_box0.value.length)
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
		default:
			commands_list[0] = text_box0.value
			if(event.key !== "Backspace") {
				commands_list[0] += event.key
			} else {
				commands_list[0] = commands_list[0].substring(0, commands_list[0].length - 1)
			}
			pointer0 = 0
	}
}