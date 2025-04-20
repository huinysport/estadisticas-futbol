
document.getElementById('searchButton').addEventListener('click', function() {
    let query = document.getElementById('searchInput').value;
    if (query) {
        fetchMatchStats(query);
    }
});

function fetchMatchStats(query) {
    const apiKey = 'fdb6b60c8cad45df1afb6c25a6fbbdaf';
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?team=${query}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Asumimos que la API devuelve un partido que coincide con la búsqueda
        const match = data.response[0]; // Cambia esto si se necesita más lógica de filtrado

        // Actualiza la interfaz con los datos del partido
        document.getElementById('matchTitle').innerText = match.teams.home.name + " vs " + match.teams.away.name;
        document.getElementById('localGoals').innerText = match.goals.home;
        document.getElementById('visitorGoals').innerText = match.goals.away;
        document.getElementById('localShots').innerText = match.statistics[0].shots.on.target;
        document.getElementById('visitorShots').innerText = match.statistics[1].shots.on.target;
        document.getElementById('localPossession').innerText = match.statistics[0].possession;
        document.getElementById('visitorPossession').innerText = match.statistics[1].possession;
    })
    .catch(error => console.log('Error fetching data:', error));
}
