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
// Function to render your items
const renderItems = (collection) => {
    // The `ul` where the items will be inserted
    const collectionList = document.getElementById('collection')


    // Loop through each item in the collection array
    collection.forEach(item => {
        const listItem = document.createElement('li') // Make the `li`


        // You can make each element inside of that…
        const itemTitle = document.createElement('h2') // Make an `h2`
        itemTitle.innerHTML = item.county // Put the JSON title inside
        listItem.appendChild(itemTitle) // And add it to the `li`!



        // This can get annoying, so we can use “template literals” instead
        const itemDetails =
            `
				<p>Report created on ${item.record_create_date}</p>
				<p><em>${item.bias_motive_description}</em></p>
                <p>Offense: ${item.offense_description}</p>
				
			`
        listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

        // You can build logic from your data, too


        collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
    })
}



// Fetch gets your JSON file…
fetch(dataUrl + '?$limit=20&county=NEW YORK')
    .then(response => response.json())
    .then(collection => {
        // And passes the data to the function, above!
        renderItems(collection.reverse()) // In reverse order
    })