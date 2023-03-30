// Function to render your items
const renderItems = (collection) => {
    // The `ul` where the items will be inserted
    const collectionList = document.getElementById('collection')


    // Loop through each item in the collection array
    collection.forEach(item => {
        const listItem = document.createElement('li') // Make the `li`


        // You can make each element inside of that…
        const itemTitle = document.createElement('h2') // Make an `h2`
        itemTitle.innerHTML = item.grade // Put the JSON title inside
        listItem.appendChild(itemTitle) // And add it to the `li`!

        const itemImage = document.createElement('img') // And an image
        itemImage.src = item.posterImage // Set the `src` attribute from the JSON
        listItem.appendChild(itemImage) // And add that too


        // This can get annoying, so we can use “template literals” instead
        const itemDetails =
            `  <h2>${item.area}</h2>
				<p>Infiltration of ${item.infiltration}</p>
				<p>Occupations are <em>${item.job}</em></p>
				<p>Availability of mortgage funds are ${item.funds}</p>
					<p>${item.description}</p>
				
			`
        listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

        // You can build logic from your data, too
        if (item.section == 'A') { // If this is `false`
            listItem.classList.add('section-a') // Add this class to the whole `li`
        }

        if (item.section == 'B') { // If this is `false`
            listItem.classList.add('section-b') // Add this class to the whole `li`
        }

        collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
    })
}



// Fetch gets your JSON file…
fetch('assets/collection.json')
    .then(response => response.json())
    .then(collection => {
        // And passes the data to the function, above!
        renderItems(collection)
    })