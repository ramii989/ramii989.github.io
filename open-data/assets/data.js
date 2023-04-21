
const dataUrl = "https://data.cityofnewyork.us/resource/bqiq-cu78.json"

const parseData(

)

fetch(dataUrl + '?$limit=1971&bias_motive_description=ANTI-TRANSGENDER')
    .then(response => response.json())
    .then(data => {
        parseData(data)
    }

    )