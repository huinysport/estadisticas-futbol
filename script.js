console.log('El archivo script.js está funcionando correctamente');
document.getElementById('loadData').addEventListener('click', () => {
    alert('¡El botón funciona correctamente!');
});
});
    const API_URL = 'https://v3.football.api-sports.io/fixtures';
    const API_KEY = 'fdb6b60c8cad45df1afb6c25a6fbbdaf';

    try {
        const response = await fetch(API_URL, {
            headers: {
                'X-Auth-Token': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.status}`);
        }

        const data = await response.json();
        const statsDiv = document.getElementById('stats');
        statsDiv.innerHTML = '';

        data.response.forEach(match => {
            statsDiv.innerHTML += `
                <p><strong>${match.teams.home.name}</strong> vs <strong>${match.teams.away.name}</strong></p>
                <p>📅 Fecha: ${new Date(match.fixture.date).toLocaleDateString()}</p>
                <p>⚽ Resultado: ${match.goals.home} - ${match.goals.away}</p>
                <hr>
            `;
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
        document.getElementById('stats').innerText = 'No se pudieron cargar los datos.';
    }
});

