const myArray = [1, 2, 3]

for (let index = 0; index < myArray.length; index++) {
	const element = myArray[index]
	console.log(element)
	console.log(element, 1, 2)
}

function diff(start, end) {
	start = start.split(':')
	end = end.split(':')
	var startDate = new Date(0, 0, 0, start[0], start[1], 0)
	var endDate = new Date(0, 0, 0, end[0], end[1], 0)
	var diff = endDate.getTime() - startDate.getTime()
	var hours = Math.floor(diff / 1000 / 60 / 60)
	diff -= hours * 1000 * 60 * 60
	var minutes = Math.floor(diff / 1000 / 60)

	// If using time pickers with 24 hours format, add the below line get exact hours
	if (hours < 0)
		hours = hours + 24

	return (hours <= 9 ? '0' : '') + hours + ':' + (minutes <= 9 ? '0' : '') + minutes
}

console.log(diff('01-10-2021', '02-10-2021'))