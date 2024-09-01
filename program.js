let text_box0 = document.createElement("input")
let commands_list = new Array(32)
let number_typed_commands = 0
let pointer0 = 0
document.body.appendChild(text_box0)
text_box0.addEventListener("keydown", text_box0_keydown)
text_box0.focus()
let white = "white"
let large = "large"
let monospace = "monospace"
let black = "black"
let unset = "unset"
let none = "none"
let one_hundred = "100%"
document.body.style.color = white
document.body.style.fontSize = large
document.body.style.fontFamily = monospace
document.body.style.background = black
document.body.style.margin = unset
text_box0.style.color = white
text_box0.style.fontSize = large
text_box0.style.fontFamily = monospace
text_box0.style.background = black
text_box0.style.outline = none
text_box0.style.margin = unset
text_box0.style.padding = unset
text_box0.style.border = "1px solid white"
text_box0.style.width = one_hundred
function text_box0_keydown() {
	switch (event.key) {
		case "Enter":
			if (text_box0.value !== "") {
				let counter0 = number_typed_commands
				let parameters = new Array(3)
				let counter1 = 0
				let counter2 = 0
				let more_than_3_args = false
				pointer0 = 0
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
							let paragrapth0 = document.createElement("p")
							paragrapth0.innerHTML = "Type \"clear\" to clear most website elements"
							document.body.appendChild(paragrapth0)
							break
						case "clear":
							document.body.innerHTML = ""
							document.body.appendChild(text_box0)
							break
					}
				}
				text_box0.focus()
				text_box0.value = ""
			}
			break
		case "ArrowUp":
			if (pointer0 !== number_typed_commands) {
                                do {
                                        pointer0++
                                } while(commands_list[pointer0] === commands_list[pointer0 + 1])
                                text_box0.value = commands_list[pointer0]
                                event.preventDefault()
                                text_box0.setSelectionRange(text_box0.value.length, text_box0.value.length)
                        }
			break
		case "ArrowDown":
			if (pointer0 !== 0) {
                                do {
                                        pointer0--
                                } while(commands_list[pointer0] === commands_list[pointer0 - 1])
                                text_box0.value = commands_list[pointer0]
                        }
			break
	}
}
