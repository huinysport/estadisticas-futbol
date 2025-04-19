<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Partidos de Fútbol</title>
</head>
<body>
    <h1>Partidos de Fútbol</h1>
    <button id="loadData">Cargar Datos</button>
    <div id="stats"></div>

    <script>
        // Reemplaza con tu clave API
        const API_URL = 'https://v3.football.api-sports.io/fixtures';
        const API_KEY = 'fdb6b60c8cad45df1afb6c25a6fbbdaf';

        document.getElementById('loadData').addEventListener('click', async () => {
            try {
                const response = await fetch(API_URL, {
                    headers: {
                        'x-rapidapi-key': API_KEY,
                        'x-rapidapi-host': 'v3.football.api-sports.io'
                    }
                });
                const data = await response.json();

                // Muestra los datos de los partidos
                const statsDiv = document.getElementById('stats');
                statsDiv.innerHTML = '';
                data.response.forEach(match => {
                    statsDiv.innerHTML += `
                        <p>${match.teams.home.name} vs ${match.teams.away.name}</p>
                        <p>Fecha: ${match.fixture.date}</p>
                        <p>Resultado: ${match.goals.home} - ${match.goals.away}</p>
                        <hr>
                    `;
                });
            } catch (error) {
                console.error('Error al obtener datos:', error);
                document.getElementById('stats').innerText = 'No se pudieron cargar los datos.';
            }
        });
    </script>
</body>
</html>
```
