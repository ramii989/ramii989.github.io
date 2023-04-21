const dataUrl = "https://data.cityofnewyork.us/resource/bqiq-cu78.json"



fetch(dataUrl + '?$limit=1971&county=NEW YORK')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    }

    )

fetch(dataUrl + '?$limit=1971&complaint_year_number=2020')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    }

    )
