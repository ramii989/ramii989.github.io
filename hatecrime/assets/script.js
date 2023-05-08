const dataUrl = 'https://data.cityofnewyork.us/resource/bqiq-cu78.json'

fetch(dataUrl + '?$limit=2500')
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})