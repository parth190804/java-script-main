document.getElementById('searchButton').addEventListener('click', function () {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const results = data.filter(place => 
                place.category.includes(searchQuery)
            );
            
            // Display the results (replace this with your actual HTML display logic)
            console.log(results);
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('searchBar').value = '';
    // Clear results display (add code here to clear any displayed results)
});
