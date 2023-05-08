console.log('______COSAS NUEVAS_____________')
const dataUrl = 'https://data.cityofnewyork.us/resource/bqiq-cu78.json'
const graphBar = document.querySelector('#graph')


const parseData = (crimes) => {
	let typeFelony = 0
	let typeViolation = 0
	let typeMisdemeanor = 0
	let typeOther = 0

	crimes.forEach(crime => {
		if (crime.law_code_category_description == 'FELONY') typeFelony++

		else if (crime.law_code_category_description == 'VIOLATION') typeViolation++
		else if (crime.law_code_category_description == 'MISDEMEANOR') typeMisdemeanor++
		else typeOther++

		//console.log(crime.law_code_category_description)
	})

	console.log('Felony:' + typeFelony)
	console.log('Violation:' + typeViolation)
	console.log('Misdemeanor:' + typeMisdemeanor)
	console.log('Other:' + typeOther)

	graph.style.setProperty('--type--felony', typeFelony)
	graph.style.setProperty('--type--violation', typeViolation)
	graph.style.setProperty('--type--misdemeanor', typeMisdemeanor)
	graph.style.setProperty('--type--other', typeOther)


	//console.log(data)
}

fetch(dataUrl + '?$limit=3000&complaint_year_number=2022&bias_motive_description=ANTI-ASIAN')
	.then(response => response.json())
	.then(data => {
		parseData(data)
	})


