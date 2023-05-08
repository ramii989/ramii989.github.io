const dataUrl = "https://data.cityofnewyork.us/resource/bqiq-cu78.json"

fetch(dataUrl + '?$limit=30&county=NEW YORK')
    .then(response => response.json())
    .then(collection => {

        renderItems(collection)
    })



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




        const itemDetails =
            `
				<p>Report created on ${item.record_create_date}</p>
				<p><em>${item.bias_motive_description}</em></p>
                <p>Offense: ${item.offense_description}</p>
				
			`
        listItem.insertAdjacentHTML('beforeend', itemDetails)




        collectionList.appendChild(listItem)
    })
}


