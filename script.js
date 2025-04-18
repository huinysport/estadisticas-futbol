// Reemplaza con la URL de tu API y tu clave
const API_URL = 'https://v3.football.api-sports.io/fixtures'; 
const API_KEY = 'TU_API_KEY'; 

document.getElementById('loadData').addEventListener('click', async () => {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'v3.football.api-sports.io'
            }
        });

        if (!response.ok) {
            throw new Error('Error al obtener datos de la API');
        }

        const data = await response.json();

        // Renderiza los datos en la página
        const statsDiv = document.getElementById('stats');
        statsDiv.innerHTML = '';
        data.response.forEach(match => {
            statsDiv.innerHTML += `
                <p><strong>${match.teams.home.name}</strong> vs <strong>${match.teams.away.name}</strong></p>
                <p>Fecha: ${new Date(match.fixture.date).toLocaleDateString()}</p>
                <p>Resultado: ${match.goals.home} - ${match.goals.away}</p>
                <hr>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('stats').innerHTML = 'No se pudieron cargar las estadísticas.';
    }
});

 
