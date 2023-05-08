console.log('______COSAS NUEVAS_____________')
const dataUrl = 'https://data.cityofnewyork.us/resource/bqiq-cu78.json'

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


	//console.log(data)
}

fetch(dataUrl + '?$limit=3000&complaint_year_number=2020&bias_motive_description=ANTI-ASIAN')
	.then(response => response.json())
	.then(data => {
		parseData(data)
	})


